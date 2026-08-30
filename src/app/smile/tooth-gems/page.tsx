import { toothGemsServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tooth Gems in West Kelowna',
  description:
    'Swarovski tooth gems in West Kelowna at Brows on Point. Add sparkle to your smile with a professionally applied crystal tooth gem. Book online today.',
}

export default function ToothGemsPage() {
  return <ServicePage data={toothGemsServiceData} />
}
