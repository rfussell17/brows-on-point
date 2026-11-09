import { powderBrowsServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Powder Brows in West Kelowna',
  description:
    'Powder brows from $300 at Brows on Point in West Kelowna: soft, filled-in colour like brow makeup that never comes off. Book your appointment online.',
  openGraph: ogMeta(
    '/og/powder-brows-og_brows-on-point.jpg',
    'Powder Brows',
    '/powder-brows',
  ),
}

export default function PowderBrowsPage() {
  return <ServicePage data={powderBrowsServiceData} />
}
