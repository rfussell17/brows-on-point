import {
  browTintWaxShapeData,
  lashAndBrowTintingServiceData,
  lashGrowthSerumServiceData,
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
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  SITE_URL,
} from '@/lib/site'
import { parsePrice } from '@/lib/schema'

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
  lashGrowthSerumServiceData,
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
 * Reviews genuinely displayed on the site (the testimonial components and
 * TestimonialGroup), not the full Google review list — marking up
 * third-party platform content (Google reviews) as this site's own Review
 * schema isn't something we have standing to do, and Google's own
 * guidelines are explicit that review markup must reflect what the page
 * itself actually shows. Deduplicated where the same quote appears in more
 * than one component (e.g. Karina B. appears both standalone and in the
 * group).
 */
const REVIEWS = [
  {
    author: 'Karina B',
    text: "Jamie takes pride in her work and is an absolute perfectionist. If you are thinking of getting any services done by Jamie, think no more! This is the place to go!! She's done my Keratin Lash Lift & Tint many times and I would not let anyone else touch my lashes - Jamie is AMAZING and I wish I could give more than a 5 star review!",
  },
  {
    author: 'Stephanie K',
    text: "Just got my keratin lash lift & tint from Jamie for the 3rd time, she is AMAZING! I have also got teeth gems thru her, and i'm looking forward to getting microblading this fall! Thanks girl, HAPPY!",
  },
  {
    author: 'Carly M',
    text: 'Jamie does amazing work, and is absolutely wonderful. She is definitely a perfectionist who takes great pride in all of her services. Her studio is very welcoming, clean and comfortable. She has very reasonable prices, and the great quality. I would totally recommend her to anyone!',
  },
  {
    author: 'Rain P',
    text: "Jamie is my go-to for teeth whitening. She's so sweet and it's always a fun, relaxing visit. I love how white she can get my teeth! 5 stars all the way!",
  },
  {
    author: 'Kyla S',
    text: 'Recently had my keratin lash lift and tint done by Jamie and I am in love! This is definitely a service I will continue receiving.',
  },
  {
    author: 'Julia H',
    text: 'Jamie is always very friendly, professional and detail oriented. She does a great job and makes sure you are happy with the results before you leave. I love going to her for eyelashes and eyebrows!',
  },
  {
    author: 'Y. Tobar',
    text: 'Since starting with powder brows (after having microblading somewhere else) I can only give praise to Jamie for being an expert on the technique! My only regret is not having found Jamie earlier...with my skin type this should have been the way to go from the start.',
  },
  {
    author: "Alias 'Northern Girl'",
    text: 'Truly a 5 star experience! Jamie is fantastic and her pricing is super reasonable! Love that she offers evening appts too!',
  },
  {
    author: 'C. Pilz',
    text: 'Jamie was very reassuring and thoroughly explained the process and what to expect. I was so happy with the results and the shape of my brows. The Lash Lift was amazing as well and I loved getting up in the morning knowing I could leave the house and I was ready for the day. I have since had the brow touch up and look forward to another Keratin Lash Lift!',
  },
  {
    author: 'Trennan O',
    text: "I had my teeth whitened by Jamie and I'm extremely satisfied with the results. She is very professional and knowledgable and I would definitely recommend this service.",
  },
  {
    author: 'Ally F',
    text: "Can't say enough about the services I have received from Jamie at Brows on Point! She offers attention to detail from the consultation to working with your requests, right through to the after care instruction and take home kit. She made me feel at ease, stopping along the way to ensure I was going to be pleased with the outcome and I am! A very professional, caring artist!",
  },
  {
    author: 'Jenny K',
    text: "Jamie is lovely and informative and very professional. I highly recommend Jamie's services at Brows on Point! I had my eye liner done and it looks great! 5 stars from me!",
  },
].map(({ author, text }) => ({
  '@type': 'Review',
  author: { '@type': 'Person', name: author },
  reviewBody: text,
  reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
}))

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
    image: `${SITE_URL}/jamie_brows_on_point.png`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      reviewCount: GOOGLE_REVIEW_COUNT,
      bestRating: 5,
    },
    review: REVIEWS,
    hasOfferCatalog: OFFER_CATALOG,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
