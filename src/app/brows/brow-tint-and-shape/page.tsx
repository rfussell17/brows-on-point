import { browTintWaxShapeData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrow Tinting & Shaping in Kelowna',
  description:
    'Eyebrow tinting and shaping in Kelowna for $25. Brow tint and hot-wax shaping in one appointment at Brows on Point in West Kelowna. Book online today.',
  openGraph: ogMeta(
    '/og/eyebrow-tint-and-shape-og_brows-on-point.jpg',
    'Eyebrow Tinting & Shaping',
  ),
}

export default function BrowTintAndShapePage() {
  return <ServicePage data={browTintWaxShapeData} />
}
