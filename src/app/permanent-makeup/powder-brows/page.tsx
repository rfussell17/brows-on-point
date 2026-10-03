import { powderBrowsServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Powder Brows in Kelowna',
  description:
    'Powder brows in Kelowna from $300 at Brows on Point in West Kelowna. Soft, filled-in brows that hold their shape. Book your powder brow appointment online.',
  openGraph: ogMeta('/og/powder-brows-og_brows-on-point.jpg', 'Powder Brows'),
}

export default function PowderBrowsPage() {
  return <ServicePage data={powderBrowsServiceData} />
}
