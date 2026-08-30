import { lashGrowthSerumServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Growth Serum in West Kelowna',
  description:
    'Keratin lash growth serum and tinted mascara from Brows on Point in West Kelowna. Support fuller-looking natural lashes between appointments.',
}

export default function LashGrowthSerumPage() {
  return <ServicePage data={lashGrowthSerumServiceData} />
}
