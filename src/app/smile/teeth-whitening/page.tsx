import { teethWhiteningServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teeth Whitening Near Me in West Kelowna',
  description:
    'Professional in-studio teeth whitening in West Kelowna at Brows on Point, with Basic, Ultra, and 24k gold sessions. Book your appointment online today.',
  openGraph: ogMeta(
    '/og/teeth-whitening-og_brows-on-point.jpg',
    'Teeth Whitening',
  ),
}

export default function TeethWhiteningPage() {
  return <ServicePage data={teethWhiteningServiceData} />
}
