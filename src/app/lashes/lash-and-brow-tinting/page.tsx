import { lashAndBrowTintingServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash & Brow Tinting in Kelowna',
  description:
    'Eyelash and brow tinting in Kelowna from $25 at Brows on Point in West Kelowna. Darker lashes and brows without daily mascara. Book your tint online today.',
  openGraph: ogMeta(
    '/og/lash-and-brow-tinting-og_brows-on-point.jpg',
    'Lash & Brow Tinting',
  ),
}

export default function LashAndBrowTintingPage() {
  return <ServicePage data={lashAndBrowTintingServiceData} />
}
