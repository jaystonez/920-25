// SRRP Trust Scanner Engine
// Rule-based detection framework for SEO manipulation tactics
// Billy "Operator Prime" — Mad Hatter Chimney Sweep

export type Severity = 'low' | 'medium' | 'high' | 'critical';

export type ScanFinding = {
  rule: string;
  severity: Severity;
  description: string;
  evidence?: string;
  location?: string;
  score?: number; // 0–100 (weight of THIS finding)
};

export type ScanReceipt = {
  url: string;
  ts: number;
  findings: ScanFinding[];
  summary: {
    total: number;
    critical: number;
    high: number;
    trust_delta: number; // rough -100 to +100
  };
  mode: 'DRY' | 'LOCAL' | 'SOCKET';
};

// ── Utilities ──

export function normalizeUrl(input: string): string {
  const s = input.trim();
  if (!s) return '';
  if (!/^https?:\/\//i.test(s)) return `https://${s}`;
  return s;
}

export async function fetchWithTimeout(url: string, ms = 8000): Promise<Response> {
  // AbortSignal.timeout is not universal (Safari <16.4, older embedded);
  // manual AbortController fallback.
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { redirect: 'follow', signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

export async function simpleFetchHtml(
  url: string
): Promise<{ html: string; via: 'direct' | 'proxy' } | null> {
  // Direct first (works if target allows CORS)
  try {
    const direct = await fetchWithTimeout(url, 8000);
    if (direct.ok) return { html: await direct.text(), via: 'direct' };
  } catch {
    // fall through to proxy
  }

  // Proxy fallback (dev only — production uses LOCAL bridge)
  try {
    const proxy = 'https://corsproxy.io/?' + encodeURIComponent(url);
    const res = await fetchWithTimeout(proxy, 9000);
    if (!res.ok) return null;
    return { html: await res.text(), via: 'proxy' };
  } catch {
    return null;
  }
}

// ── Rule Engine ──

type RuleCtx = { url: string; html: string };

type Rule = {
  id: string;
  run: (ctx: RuleCtx) => ScanFinding[];
};

function countMatches(re: RegExp, s: string): number {
  const m = s.match(re);
  return m ? m.length : 0;
}

const RULES: Rule[] = [
  {
    id: 'iframe.cloaking_uri',
    run: ({ html }) => {
      const re = /<iframe\b[^>]*\bsrc\s*=\s*["']?([^"'\s>]+)["']?/gi;
      const findings: ScanFinding[] = [];
      let m: RegExpExecArray | null;
      while ((m = re.exec(html))) {
        const src = m[1] || '';
        if (/^(about:blank|javascript:|data:)/i.test(src)) {
          findings.push({
            rule: 'iframe.cloaking_uri',
            severity: 'high',
            description: 'Suspicious iframe src (about:blank / javascript: / data:)',
            evidence: src,
            location: 'iframe[src]',
            score: 70,
          });
        }
      }
      return findings;
    },
  },
  {
    id: 'image.stocky_alt_logo',
    run: ({ html }) => {
      const re = /<img\b[^>]*\balt\s*=\s*["']([^"']+)["'][^>]*>/gi;
      const hits: string[] = [];
      let m: RegExpExecArray | null;
      while ((m = re.exec(html))) {
        const alt = (m[1] || '').toLowerCase();
        if (/(logo|company|business|contractor)/i.test(alt)) hits.push(alt);
      }
      if (hits.length >= 3) {
        return [
          {
            rule: 'image.stocky_alt_logo',
            severity: 'medium',
            description:
              'Repeated generic alt text for images (often correlated with template/stock sites)',
            evidence: `alt hits: ${hits.slice(0, 5).join(' | ')}`,
            location: 'img[alt]',
            score: 35,
          },
        ];
      }
      return [];
    },
  },
  {
    id: 'reviews.keyword_density',
    run: ({ html }) => {
      const lower = html.toLowerCase();
      const reviewMentions = countMatches(
        /\b(review|reviews|rating|ratings|stars|testimonials?)\b/gi,
        lower
      );
      const phrases = [
        'google review',
        '5 stars',
        'five stars',
        'highly recommend',
        'best in seattle',
        'amazing service',
      ];
      const phraseHits = phrases.reduce(
        (acc, p) => acc + (lower.includes(p) ? 1 : 0),
        0
      );

      if (reviewMentions > 25 && phraseHits >= 3) {
        return [
          {
            rule: 'reviews.keyword_density',
            severity: 'high',
            description:
              'High review/rating keyword density + multiple canned phrases (possible review spam / template)',
            evidence: `reviewMentions=${reviewMentions}, phraseHits=${phraseHits}`,
            location: 'document',
            score: 65,
          },
        ];
      }

      if (reviewMentions > 18 && phraseHits >= 2) {
        return [
          {
            rule: 'reviews.keyword_density',
            severity: 'medium',
            description:
              'Elevated review/rating keyword density (watch for templated "trust" sections)',
            evidence: `reviewMentions=${reviewMentions}, phraseHits=${phraseHits}`,
            location: 'document',
            score: 40,
          },
        ];
      }
      return [];
    },
  },
  {
    id: 'schema.jsonld_claims',
    run: ({ html }) => {
      const findings: ScanFinding[] = [];
      const re =
        /<script[^>]+type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let m: RegExpExecArray | null;
      while ((m = re.exec(html))) {
        try {
          const data = JSON.parse(m[1]);
          const items = Array.isArray(data) ? data : [data];
          for (const item of items) {
            // Check for fake founding dates
            if (item.foundingDate) {
              const year = parseInt(item.foundingDate, 10);
              if (year && year < 2000) {
                findings.push({
                  rule: 'schema.suspicious_founding',
                  severity: 'medium',
                  description: `Schema claims founding date of ${item.foundingDate} — verify against domain/business records`,
                  evidence: `foundingDate=${item.foundingDate}`,
                  location: 'script[type=application/ld+json]',
                  score: 40,
                });
              }
            }
            // Check for sameAs spam
            if (Array.isArray(item.sameAs) && item.sameAs.length > 8) {
              findings.push({
                rule: 'schema.sameas_spam',
                severity: 'medium',
                description: `Schema lists ${item.sameAs.length} sameAs links (excessive social profile claims)`,
                evidence: `count=${item.sameAs.length}`,
                location: 'script[type=application/ld+json]',
                score: 30,
              });
            }
          }
        } catch {
          // malformed JSON-LD is itself a signal
          findings.push({
            rule: 'schema.malformed_jsonld',
            severity: 'low',
            description: 'Malformed JSON-LD structured data',
            location: 'script[type=application/ld+json]',
            score: 15,
          });
        }
      }
      return findings;
    },
  },
  {
    id: 'hidden.dom_seo',
    run: ({ html }) => {
      const findings: ScanFinding[] = [];
      // display:none with text content
      const hiddenBlocks = countMatches(
        /style\s*=\s*["'][^"']*display\s*:\s*none[^"']*["'][^>]*>[^<]{20,}/gi,
        html
      );
      if (hiddenBlocks >= 2) {
        findings.push({
          rule: 'hidden.dom_seo',
          severity: 'high',
          description: `${hiddenBlocks} hidden DOM blocks with substantial text content (possible cloaking)`,
          evidence: `hiddenBlocks=${hiddenBlocks}`,
          location: 'style="display:none"',
          score: 60,
        });
      }
      // visibility:hidden
      const visHidden = countMatches(
        /style\s*=\s*["'][^"']*visibility\s*:\s*hidden[^"']*["'][^>]*>[^<]{20,}/gi,
        html
      );
      if (visHidden >= 2) {
        findings.push({
          rule: 'hidden.visibility_hidden',
          severity: 'high',
          description: `${visHidden} visibility:hidden blocks with text (possible SEO cloaking)`,
          evidence: `visHidden=${visHidden}`,
          location: 'style="visibility:hidden"',
          score: 55,
        });
      }
      return findings;
    },
  },
  {
    id: 'leadgen.template_signals',
    run: ({ html }) => {
      const lower = html.toLowerCase();
      const signals = [
        'request a free quote',
        'get your free estimate',
        'call now for a free',
        'limited time offer',
        'serving the greater',
        'your trusted local',
        'family owned and operated',
      ];
      const hits = signals.filter((s) => lower.includes(s)).length;
      if (hits >= 4) {
        return [
          {
            rule: 'leadgen.template_signals',
            severity: 'medium',
            description: `${hits}/7 common lead-gen template phrases detected`,
            evidence: `phraseHits=${hits}`,
            location: 'document',
            score: 45,
          },
        ];
      }
      return [];
    },
  },
];

// ── Summary / scoring ──

const SEV_WEIGHT: Record<Severity, number> = {
  low: 4,
  medium: 10,
  high: 18,
  critical: 30,
};

export function summarize(findings: ScanFinding[]) {
  const critical = findings.filter((f) => f.severity === 'critical').length;
  const high = findings.filter((f) => f.severity === 'high').length;
  const raw = findings.reduce(
    (acc, f) => acc + SEV_WEIGHT[f.severity] + Math.round((f.score || 0) / 20),
    0
  );
  const trust_delta = Math.max(-100, -raw);
  return { total: findings.length, critical, high, trust_delta };
}

// ── Main scan function ──

export async function scanCompetitor(
  urlRaw: string,
  mode: 'DRY' | 'LOCAL' | 'SOCKET'
): Promise<ScanReceipt> {
  const url = normalizeUrl(urlRaw);

  if (!url) {
    return {
      url: urlRaw,
      ts: Date.now(),
      mode,
      findings: [
        { rule: 'input.missing', severity: 'low', description: 'No URL provided' },
      ],
      summary: { total: 1, critical: 0, high: 0, trust_delta: 0 },
    };
  }

  if (mode === 'DRY') {
    return {
      url,
      ts: Date.now(),
      mode,
      findings: [
        {
          rule: 'dry-run',
          severity: 'low',
          description: 'DRY mode — simulation only, no network requests made',
        },
      ],
      summary: { total: 1, critical: 0, high: 0, trust_delta: 0 },
    };
  }

  // LOCAL mode — future: bypass proxy via localhost bridge
  // SOCKET mode — future: mesh coordination via Socket.IO
  const fetched = await simpleFetchHtml(url);
  if (!fetched) {
    const findings: ScanFinding[] = [
      {
        rule: 'fetch.fail',
        severity: 'medium',
        description: 'Could not retrieve page (CORS / timeout / block)',
        evidence: 'Try LOCAL bridge for full access',
        location: 'network',
        score: 30,
      },
    ];
    return { url, ts: Date.now(), mode, findings, summary: summarize(findings) };
  }

  const ctx: RuleCtx = { url, html: fetched.html };
  const findings = RULES.flatMap((r) => r.run(ctx));

  const safeFindings = findings.length
    ? findings
    : [
        {
          rule: 'scan.clean',
          severity: 'low' as Severity,
          description: `No obvious heuristics triggered (fetched via ${fetched.via})`,
          evidence: `via=${fetched.via}`,
          location: 'document',
          score: 0,
        },
      ];

  return {
    url,
    ts: Date.now(),
    mode,
    findings: safeFindings,
    summary: summarize(safeFindings),
  };
}
