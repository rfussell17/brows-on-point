import { lashServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Lift and Tint in West Kelowna',
  description:
    'Get a keratin lash lift and tint in West Kelowna at Brows on Point. Lifted, darker lashes without extensions or daily curling. Book your appointment today.',
}

export default function LashLiftAndTintPage() {
  return <ServicePage data={lashServiceData} />
}
