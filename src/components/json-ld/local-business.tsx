import { BUSINESS_EMAIL, BUSINESS_PHONE } from '@/lib/site'

// PLACEHOLDER, not sourced from Q40 — Robin asked (2026-08-25) for a generic
// schedule here so builds aren't blocked sitewide while hours are pending.
// Replace with Jamie's real Mon–Sun hours the moment Q40 is answered — see
// BLOCKERS.md. Do not treat this as a real fact anywhere else on the site.
const GENERIC_OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '09:00',
    closes: '16:00',
  },
]

/**
 * Sitewide LocalBusiness structured data. Rendered once, in the root layout.
 *
 * address: sourced from live Acuity service descriptions (Jamie's own text,
 * repeated across many appointment types) — not the questionnaire, which
 * never asked for it. See BUSINESS_ADDRESS in src/lib/site.ts.
 *
 * telephone/email: found on the old live site (browsonpointkelowna.com),
 * which lists both directly — not in the questionnaire, but not contradicted
 * by it either. See BUSINESS_PHONE/BUSINESS_EMAIL in src/lib/site.ts.
 */
export function LocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Brows on Point',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3344 Sundance Drive',
      addressLocality: 'West Kelowna',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    areaServed: 'West Kelowna, BC',
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Debit Card', 'Credit Card', 'E-transfer'],
    openingHoursSpecification: GENERIC_OPENING_HOURS,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
