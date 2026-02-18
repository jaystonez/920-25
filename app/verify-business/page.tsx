"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Shield,
  Loader2,
  Info
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  scanCompetitor,
  normalizeUrl,
  type ScanReceipt,
  type ScanFinding,
  type Severity,
} from "@/lib/srrp-scanner"

const SEVERITY_STYLES: Record<Severity, { bg: string; border: string; badge: string; label: string }> = {
  critical: { bg: 'bg-red-50', border: 'border-red-300', badge: 'bg-red-600', label: 'Critical' },
  high: { bg: 'bg-orange-50', border: 'border-orange-300', badge: 'bg-orange-600', label: 'High' },
  medium: { bg: 'bg-blue-50', border: 'border-blue-300', badge: 'bg-blue-600', label: 'Medium' },
  low: { bg: 'bg-green-50', border: 'border-green-300', badge: 'bg-green-600', label: 'Low' },
}

function TrustScoreBadge({ delta }: { delta: number }) {
  const score = Math.max(0, Math.min(100, 100 + delta))
  const color =
    score >= 70 ? 'text-green-600' :
    score >= 40 ? 'text-yellow-600' : 'text-red-600'
  const label =
    score >= 70 ? 'Low Risk' :
    score >= 40 ? 'Moderate Risk' : 'High Risk'
  const icon =
    score >= 70 ? <CheckCircle2 className="w-8 h-8 text-green-600" /> :
    score >= 40 ? <AlertTriangle className="w-8 h-8 text-yellow-600" /> :
    <XCircle className="w-8 h-8 text-red-600" />

  return (
    <div className="flex items-center gap-4 p-6 rounded-xl bg-white border shadow-sm">
      {icon}
      <div>
        <div className={`text-3xl font-bold ${color}`}>{score}/100</div>
        <div className={`text-sm font-medium ${color}`}>{label}</div>
      </div>
    </div>
  )
}

function FindingCard({ finding }: { finding: ScanFinding }) {
  const style = SEVERITY_STYLES[finding.severity]
  return (
    <div className={`p-4 rounded-lg border ${style.bg} ${style.border}`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="font-semibold text-sm text-foreground">{finding.rule}</div>
        <Badge className={`${style.badge} text-white text-xs`}>{style.label}</Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{finding.description}</p>
      {(finding.evidence || finding.location) && (
        <div className="text-xs text-muted-foreground/80 space-y-0.5">
          {finding.location && <div><span className="font-medium">Location:</span> {finding.location}</div>}
          {finding.evidence && <div><span className="font-medium">Evidence:</span> {finding.evidence}</div>}
        </div>
      )}
    </div>
  )
}

export default function VerifyBusinessPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [receipt, setReceipt] = useState<ScanReceipt | null>(null)
  const [mode, setMode] = useState<'DRY' | 'LOCAL' | 'SOCKET'>('LOCAL')

  const handleScan = async () => {
    const normalized = normalizeUrl(url)
    if (!normalized) return

    setLoading(true)
    setReceipt(null)

    try {
      const result = await scanCompetitor(url, mode)
      setReceipt(result)
    } catch (err) {
      setReceipt({
        url: normalized,
        ts: Date.now(),
        mode,
        findings: [{
          rule: 'error.unexpected',
          severity: 'medium',
          description: `Scan error: ${err instanceof Error ? err.message : 'Unknown error'}`,
          location: 'scanner',
        }],
        summary: { total: 1, critical: 0, high: 0, trust_delta: -10 },
      })
    } finally {
      setLoading(false)
    }
  }

  const highFindings = receipt?.findings.filter(f => f.severity === 'critical' || f.severity === 'high') || []
  const otherFindings = receipt?.findings.filter(f => f.severity !== 'critical' && f.severity !== 'high') || []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Free Public Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Verify Any Home Services Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Protect yourself from fraud. Our SRRP scanner checks for common manipulation
                tactics used by fake contractors and lead-gen operations.
              </p>

              {/* Scan Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-left">Enter Business Website</CardTitle>
                  <CardDescription className="text-left">
                    We&apos;ll scan for red flags including hidden content, review spam,
                    schema manipulation, and lead-gen template signals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example-contractor.com"
                      className="flex-1"
                      onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                    />
                    <div className="flex gap-2">
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value as typeof mode)}
                        className="px-3 py-2 rounded-md border text-sm bg-white"
                      >
                        <option value="LOCAL">Live Scan</option>
                        <option value="DRY">Dry Run</option>
                        <option value="SOCKET" disabled>Mesh (coming)</option>
                      </select>
                      <Button
                        onClick={handleScan}
                        disabled={loading || !url.trim()}
                        className="bg-primary hover:bg-primary/90"
                      >
                        {loading ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Scanning...</>
                        ) : (
                          <><Search className="w-4 h-4 mr-2" /> Scan</>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results */}
        {receipt && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">

                {/* Summary Row */}
                <div className="grid md:grid-cols-3 gap-6">
                  <TrustScoreBadge delta={receipt.summary.trust_delta} />
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{receipt.summary.total}</div>
                      <div className="text-sm text-muted-foreground">Findings</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {receipt.summary.high} high &bull; {receipt.summary.critical} critical
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-sm font-medium mb-1 text-muted-foreground">Scanned URL</div>
                      <div className="text-sm font-mono truncate">{receipt.url}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Mode: {receipt.mode} &bull; {new Date(receipt.ts).toLocaleTimeString()}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* High / Critical Findings */}
                {highFindings.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      High-Priority Findings
                    </h3>
                    <div className="space-y-3">
                      {highFindings.map((f, i) => (
                        <FindingCard key={i} finding={f} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Findings */}
                {otherFindings.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      All Findings
                    </h3>
                    <div className="space-y-3">
                      {otherFindings.map((f, i) => (
                        <FindingCard key={i} finding={f} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Raw Receipt */}
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                    View raw scan receipt (JSON)
                  </summary>
                  <pre className="mt-3 text-xs bg-slate-50 p-4 rounded-lg overflow-x-auto max-h-64 border">
                    {JSON.stringify(receipt, null, 2)}
                  </pre>
                </details>

                {/* Disclaimer */}
                <Alert>
                  <Shield className="w-4 h-4" />
                  <AlertDescription>
                    <strong>Important:</strong> This scanner detects <em>potential</em> red flags using
                    automated heuristics. Always verify findings manually before drawing conclusions.
                    No automated tool is a substitute for human judgment.
                    <br />
                    <Link href="/verify-contractor" className="text-primary underline mt-1 inline-block">
                      Learn how to verify contractors manually &rarr;
                    </Link>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        {!receipt && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">What We Check</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Hidden Content</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Detects display:none and visibility:hidden blocks with substantial
                      text — a common SEO cloaking tactic.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Review Spam</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Analyzes keyword density for review/rating terms and identifies
                      canned phrases common to template sites.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Schema Manipulation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Checks JSON-LD structured data for fake founding dates,
                      excessive sameAs links, and malformed markup.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Iframe Cloaking</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Flags suspicious iframe sources like about:blank, javascript:,
                      and data: URIs used to hide content from crawlers.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Template Detection</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Identifies lead-gen template signals — repeated generic phrases
                      that indicate a mass-produced contractor site.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Image Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Checks for generic stock-style alt text patterns that suggest
                      template imagery rather than real work photos.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
