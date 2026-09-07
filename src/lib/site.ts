// TODO: replace with the real production domain before launch. Not in the
// questionnaire or repo anywhere — flagged in the Phase 0/1 report.
export const SITE_URL = 'https://www.browsonpoint.com'

export const ACUITY_URL = 'https://app.acuityscheduling.com/schedule/80157a74'

// Sourced directly from live Acuity service descriptions (Jamie's own text,
// repeated across many appointment types), not the questionnaire. No postal
// code appears anywhere in that source, so none is invented here.
export const BUSINESS_ADDRESS = '3344 Sundance Drive, West Kelowna, BC'

// Sourced from the old live site (browsonpointkelowna.com/services), which
// lists both directly. Not in the questionnaire, but not contradicted by it
// either — nothing else claims a different number.
export const BUSINESS_PHONE = '(250) 801-6864'
export const BUSINESS_EMAIL = 'Browsonpointkelowna@gmail.com'

export const GOOGLE_RATING = 4.9
export const GOOGLE_REVIEW_COUNT = 138
export const GOOGLE_REVIEWS_URL = 'https://share.google/I3DmUVnWFhe0tZRgt'

// Shared copy for the "book now" CTA that appears standalone (in the combined
// reviews/CTA/map banner) on every page that isn't the homepage.
export const BOOKING_CTA = {
  title: 'Book your appointment today',
  subtitle:
    "West Kelowna's trusted studio for lash lifts, brow enhancements, and permanent makeup.",
  buttonText: 'Reserve Appointment',
  buttonHref: ACUITY_URL,
}

/**
 * A page's own `openGraph` object replaces the layout's entirely (Next.js
 * doesn't deep-merge it — title/description alone still fall back to the
 * page's top-level metadata, but siteName/type do not), so every page needs
 * to repeat them here rather than just supplying `images`.
 */
export function ogMeta(path: string, alt: string) {
  return {
    type: 'website' as const,
    siteName: 'Brows on Point',
    images: [{ url: path, width: 1200, height: 630, alt }],
  }
}
