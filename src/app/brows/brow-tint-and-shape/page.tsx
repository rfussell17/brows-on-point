import { browTintWaxShapeData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrow Tint & Shape in West Kelowna',
  description:
    'Eyebrow tint and shape in West Kelowna, $25. Tinting and hot-wax shaping together in one appointment with Brows on Point. Book online today.',
}

export default function BrowTintAndShapePage() {
  return <ServicePage data={browTintWaxShapeData} />
}
