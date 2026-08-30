import { lashAndBrowTintingServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyelash Tinting in West Kelowna',
  description:
    'Eyelash and brow tinting in West Kelowna. Darker lashes and brows without daily mascara. Book your lash and brow tint with Brows on Point today.',
}

export default function LashAndBrowTintingPage() {
  return <ServicePage data={lashAndBrowTintingServiceData} />
}
