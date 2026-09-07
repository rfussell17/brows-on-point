import { SITE_URL } from '@/lib/site'
import { parsePrice } from '@/lib/schema'

/**
 * For the handful of retail items sold in-studio (currently just the lash
 * growth serum) rather than booked appointments — Product + Offer is the
 * more accurate, rich-result-eligible type for something with a shelf
 * price, versus modelling it as a Service like every other page.
 */
export function ProductJsonLd({
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
  const value = price ? parsePrice(price) : null

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: `${SITE_URL}/${slug}`,
    brand: { '@type': 'Brand', name: 'Brows on Point' },
    ...(value !== null && {
      offers: {
        '@type': 'Offer',
        price: value,
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'LocalBusiness', name: 'Brows on Point' },
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
