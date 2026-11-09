import { browTintWaxShapeData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrow Tinting & Shaping in Kelowna',
  description:
    'Eyebrow tinting and shaping in Kelowna for $25 at Brows on Point. A semi-permanent tint darkens your brows while shaping cleans up the line.',
  openGraph: ogMeta(
    '/og/eyebrow-tint-and-shape-og_brows-on-point.jpg',
    'Eyebrow Tinting & Shaping',
    '/brow-tint-and-shape',
  ),
}

export default function BrowTintAndShapePage() {
  return <ServicePage data={browTintWaxShapeData} />
}
