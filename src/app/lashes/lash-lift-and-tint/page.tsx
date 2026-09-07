import { lashServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Lift and Tint in West Kelowna',
  description:
    'Get a keratin lash lift and tint in West Kelowna at Brows on Point. Lifted, darker lashes without extensions or daily curling. Book your appointment today.',
  openGraph: ogMeta(
    '/og/lash-lift-and-tint-og_brows-on-point.jpg',
    'Lash Lift and Tint',
  ),
}

export default function LashLiftAndTintPage() {
  return <ServicePage data={lashServiceData} />
}
