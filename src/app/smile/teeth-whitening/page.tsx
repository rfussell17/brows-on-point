import { teethWhiteningServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teeth Whitening Near Me in West Kelowna',
  description:
    'Looking for teeth whitening near you? Brows on Point in West Kelowna offers professional in-studio whitening. Book your appointment online today.',
}

export default function TeethWhiteningPage() {
  return <ServicePage data={teethWhiteningServiceData} />
}
