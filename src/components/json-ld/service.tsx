import { SITE_URL } from '@/lib/site'

export function ServiceJsonLd({
  name,
  description,
  slug,
  price,
}: {
  name: string
  description: string
  slug: string
  price?: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}/${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Brows on Point',
    },
    areaServed: 'West Kelowna, BC',
    ...(price && { offers: { '@type': 'Offer', price, priceCurrency: 'CAD' } }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
