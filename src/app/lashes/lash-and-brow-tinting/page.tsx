import { lashAndBrowTintingServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyelash Tinting in West Kelowna',
  description:
    'Eyelash and brow tinting in West Kelowna. Darker lashes and brows without daily mascara. Book your lash and brow tint with Brows on Point today.',
  openGraph: ogMeta(
    '/og/lash-and-brow-tinting-og_brows-on-point.jpg',
    'Lash & Brow Tinting',
  ),
}

export default function LashAndBrowTintingPage() {
  return <ServicePage data={lashAndBrowTintingServiceData} />
}
