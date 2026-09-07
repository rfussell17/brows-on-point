import { browTintWaxShapeData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrow Tint & Shape in West Kelowna',
  description:
    'Eyebrow tint and shape in West Kelowna, $25. Tinting and hot-wax shaping together in one appointment with Brows on Point. Book online today.',
  openGraph: ogMeta(
    '/og/eyebrow-tint-and-shape-og_brows-on-point.jpg',
    'Eyebrow Tint & Shape',
  ),
}

export default function BrowTintAndShapePage() {
  return <ServicePage data={browTintWaxShapeData} />
}
