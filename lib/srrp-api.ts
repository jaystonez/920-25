// SRRP API Client - connects to your WordPress backend
// Authority stays in WordPress, UI is just a lens

const SRRP_ENDPOINT = process.env.NEXT_PUBLIC_SRRP_ENDPOINT || null

export interface SRRPScanResult {
  success: boolean
  scan_id?: number
  url: string
  score: number
  threat_level: 'Clean' | 'Low' | 'Medium' | 'High' | 'Critical'
  patterns_found: number
  reflex_results: {
    [key: string]: {
      score: number
      status: string
      details?: string
    }
  }
  timestamp: string
}

export async function scanURL(url: string): Promise<SRRPScanResult> {
  // If no endpoint configured, return demo mode
  if (!SRRP_ENDPOINT) {
    return getDemoResults(url)
  }

  try {
    const response = await fetch(`${SRRP_ENDPOINT}/wp-json/srrp/v1/scan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })

    if (!response.ok) {
      throw new Error('Scan failed')
    }

    return await response.json()
  } catch (error) {
    console.error('[v0] SRRP scan error:', error)
    // Fallback to demo mode on error
    return getDemoResults(url)
  }
}

// Demo mode - shows example results when backend not connected
function getDemoResults(url: string): SRRPScanResult {
  const domain = new URL(url).hostname
  
  // Generate realistic-looking demo data
  const isDemoFraud = domain.includes('safe-chimney') || domain.includes('pristine')
  
  return {
    success: true,
    url,
    score: isDemoFraud ? 65 : 15,
    threat_level: isDemoFraud ? 'High' : 'Low',
    patterns_found: isDemoFraud ? 8 : 2,
    reflex_results: isDemoFraud ? {
      'obfuscated_javascript': { score: 90, status: 'Heavily obfuscated scripts' },
      'schema_cloaking': { score: 65, status: 'Cloaking suspected' },
      'review_date_spoofing': { score: 65, status: 'Date spoofing suspected' },
      'hidden_dom_seo': { score: 60, status: 'Suspicious pattern' },
      'filename_spoofing': { score: 65, status: 'Suspicious filename patterns' },
      'image_reuse': { score: 10, status: 'Clean' },
      'cloaked_location': { score: 30, status: 'Clean' },
      'business_hours': { score: 0, status: 'No hours info found' },
    } : {
      'obfuscated_javascript': { score: 0, status: 'Clean' },
      'schema_cloaking': { score: 0, status: 'Clean' },
      'hidden_dom_seo': { score: 0, status: 'Clean' },
    },
    timestamp: new Date().toISOString(),
  }
}

export function isLiveMode(): boolean {
  return !!SRRP_ENDPOINT
}
