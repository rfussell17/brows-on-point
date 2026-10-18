import { teethWhiteningServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teeth Whitening in Kelowna',
  description:
    'Professional teeth whitening from $99 at Brows on Point. Basic, Ultra and 24k gold options. Book your whitening today.',
  openGraph: ogMeta(
    '/og/teeth-whitening-og_brows-on-point.jpg',
    'Teeth Whitening',
  ),
}

export default function TeethWhiteningPage() {
  return <ServicePage data={teethWhiteningServiceData} />
}
