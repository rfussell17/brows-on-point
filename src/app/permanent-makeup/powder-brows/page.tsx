import { powderBrowsServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Powder Brows in West Kelowna',
  description:
    'Powder brows in West Kelowna at Brows on Point. Soft, filled-in brows that hold their shape. Book your powder brow appointment online today.',
}

export default function PowderBrowsPage() {
  return <ServicePage data={powderBrowsServiceData} />
}
