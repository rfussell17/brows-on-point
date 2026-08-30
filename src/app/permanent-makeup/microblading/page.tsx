import { microbladingServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microblading in West Kelowna',
  description:
    'Microblading in West Kelowna at Brows on Point. Natural-looking hair-stroke brows for sparse or over-tweezed eyebrows. Book your appointment today.',
}

export default function MicrobladingPage() {
  return <ServicePage data={microbladingServiceData} />
}
