import { lashServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Lift and Tint in Kelowna',
  description:
    'Keratin, BOMB or Korean lash lift and tint in Kelowna from $70 at Brows on Point in West Kelowna. Lifted, darker lashes, no extensions. Book online today.',
  openGraph: ogMeta(
    '/og/lash-lift-and-tint-og_brows-on-point.jpg',
    'Lash Lift and Tint',
  ),
}

export default function LashLiftAndTintPage() {
  return <ServicePage data={lashServiceData} />
}
