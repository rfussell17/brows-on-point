import { toothGemsServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tooth Gems in Kelowna',
  description:
    'Swarovski tooth gems from $40 at Brows on Point in West Kelowna. Add sparkle to your smile with a Swarovski tooth gem. Book online today.',
  openGraph: ogMeta(
    '/og/swarovski-tooth-gems-og_brows-on-point.jpg',
    'Swarovski Tooth Gems',
  ),
}

export default function ToothGemsPage() {
  return <ServicePage data={toothGemsServiceData} />
}
