import type { ServiceData } from '@/components/services/service-data'
import { SITE_URL } from '@/lib/site'
import { parsePrice } from '@/lib/schema'

/**
 * Builds this service's `offers`: a single Offer for a flat-priced service,
 * or an AggregateOffer spanning the price range for a service with several
 * named options (e.g. Lash Lift's Keratin/BOMB/Korean tiers). Options priced
 * "Ask at your consultation" etc. aren't numeric and are simply excluded
 * rather than guessed at; if that leaves nothing priced, omit offers.
 */
function buildOffers(data: ServiceData) {
  if (data.serviceOptions) {
    const values = data.serviceOptions
      .map((o) => (typeof o.price === 'string' ? parsePrice(o.price) : null))
      .filter((v): v is number => v !== null)
    if (values.length === 0) return undefined
    if (values.length === 1) {
      return { '@type': 'Offer', price: values[0], priceCurrency: 'CAD' }
    }
    return {
      '@type': 'AggregateOffer',
      lowPrice: Math.min(...values),
      highPrice: Math.max(...values),
      offerCount: values.length,
      priceCurrency: 'CAD',
    }
  }

  if (typeof data.price === 'string') {
    const value = parsePrice(data.price)
    if (value !== null) {
      return { '@type': 'Offer', price: value, priceCurrency: 'CAD' }
    }
  }

  return undefined
}

export function ServiceJsonLd({ data }: { data: ServiceData }) {
  const offers = buildOffers(data)

  const json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.description,
    url: `${SITE_URL}/${data.slug}`,
    provider: { '@type': 'LocalBusiness', name: 'Brows on Point' },
    areaServed: 'West Kelowna, BC',
    ...(offers && { offers }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
