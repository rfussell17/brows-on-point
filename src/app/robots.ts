import { SITE_URL } from '@/lib/site'
import type { MetadataRoute } from 'next'

// LAUNCH GATE: this still disallows everything, matching the noindex meta tag
// in layout.tsx. Flip `disallow` to `[]` only when told the site is going
// live. See BLOCKERS.md.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
