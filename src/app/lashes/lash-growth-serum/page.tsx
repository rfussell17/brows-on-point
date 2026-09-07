import { lashGrowthSerumServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ProductJsonLd } from '@/components/json-ld/product'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Growth Serum in West Kelowna',
  description:
    'Keratin lash growth serum and tinted mascara from Brows on Point in West Kelowna. Support fuller-looking natural lashes between appointments.',
  openGraph: ogMeta(
    '/og/lash-growth-serum-og_brows-on-point.jpg',
    'Lash Growth Serum',
  ),
}

export default function LashGrowthSerumPage() {
  return (
    <>
      <ProductJsonLd
        name={lashGrowthSerumServiceData.title}
        description={lashGrowthSerumServiceData.description}
        slug={lashGrowthSerumServiceData.slug}
        price={
          typeof lashGrowthSerumServiceData.price === 'string'
            ? lashGrowthSerumServiceData.price
            : undefined
        }
      />
      <ServicePage data={lashGrowthSerumServiceData} />
    </>
  )
}
