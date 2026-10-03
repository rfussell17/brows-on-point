import { microbladingServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microblading in Kelowna',
  description:
    'Microblading in Kelowna from $275 at Brows on Point in West Kelowna. Natural hair-stroke brows for sparse or over-tweezed eyebrows. Book your appointment.',
  openGraph: ogMeta('/og/microblading-og_brows-on-point.jpg', 'Microblading'),
}

export default function MicrobladingPage() {
  return <ServicePage data={microbladingServiceData} />
}
