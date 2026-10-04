import {
  browTintWaxShapeData,
  lashAndBrowTintingServiceData,
  // lashGrowthSerumServiceData, // hidden for now
  lashServiceData,
  microbladingServiceData,
  permanentEyelinerServiceData,
  powderBrowsServiceData,
  rfSkinTighteningData,
  salineRemovalServiceData,
  sensitiveTeethWhiteningServiceData,
  teethWhiteningServiceData,
  toothGemsServiceData,
  type ServiceData,
} from '@/components/services/service-data'
import { parsePrice } from '@/lib/schema'
import { BUSINESS_EMAIL, BUSINESS_PHONE, SITE_URL } from '@/lib/site'

// Q40 — Monday–Saturday 9am–9pm, closed Sunday.
const OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '21:00',
  },
]

/**
 * Street-level coordinates for 3344 Sundance Drive, West Kelowna, BC —
 * looked up via OpenStreetMap/Nominatim, which doesn't have an exact
 * civic-number match for this residential address, only the street. That's
 * normal for schema.org's `geo` (it doesn't need rooftop precision) and is
 * more appropriate anyway for a home-based studio than a precise pin.
 */
const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 49.8493236,
  longitude: -119.6071829,
}

const SAME_AS = ['https://www.facebook.com/Browsonpointkelowna']

/**
 * Every bookable service, for the sitewide OfferCatalog — built from the
 * same service-data.tsx objects each service page already renders, so prices
 * shown here can never drift from what's on the page. Multi-tier services
 * (e.g. Lash Lift's Keratin/BOMB/Korean options) use their lowest listed
 * price, matching the "From $X" framing already used on those pages.
 */
const ALL_SERVICES: ServiceData[] = [
  lashServiceData,
  // lashGrowthSerumServiceData, // hidden for now
  lashAndBrowTintingServiceData,
  microbladingServiceData,
  browTintWaxShapeData,
  powderBrowsServiceData,
  salineRemovalServiceData,
  permanentEyelinerServiceData,
  toothGemsServiceData,
  teethWhiteningServiceData,
  sensitiveTeethWhiteningServiceData,
  rfSkinTighteningData,
]

function cheapestPrice(data: ServiceData): number | null {
  if (data.serviceOptions) {
    const values = data.serviceOptions
      .map((o) => (typeof o.price === 'string' ? parsePrice(o.price) : null))
      .filter((v): v is number => v !== null)
    return values.length > 0 ? Math.min(...values) : null
  }
  return typeof data.price === 'string' ? parsePrice(data.price) : null
}

const OFFER_CATALOG = {
  '@type': 'OfferCatalog',
  name: 'Services',
  itemListElement: ALL_SERVICES.map((service) => {
    const price = cheapestPrice(service)
    return {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        url: `${SITE_URL}/${service.slug}`,
      },
      ...(price !== null && { price, priceCurrency: 'CAD' }),
    }
  }),
}

/**
 * Sitewide LocalBusiness structured data. Rendered once, in the root layout.
 *
 * address: sourced from live Acuity service descriptions (Jamie's own text,
 * repeated across many appointment types), not the questionnaire. See
 * BUSINESS_ADDRESS in src/lib/site.ts.
 *
 * telephone/email: found on the old live site (browsonpointkelowna.com),
 * which lists both directly — not in the questionnaire, but not contradicted
 * by it either. See BUSINESS_PHONE/BUSINESS_EMAIL in src/lib/site.ts.
 */
export function LocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['BeautySalon', 'HealthAndBeautyBusiness'],
    name: 'Brows on Point',
    url: SITE_URL,
    image: `${SITE_URL}/about/about-jamie-working-03.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3344 Sundance Drive',
      addressLocality: 'West Kelowna',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    geo: GEO,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    areaServed: 'West Kelowna, BC',
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Debit Card', 'Credit Card', 'E-transfer'],
    openingHoursSpecification: OPENING_HOURS,
    sameAs: SAME_AS,
    hasOfferCatalog: OFFER_CATALOG,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
