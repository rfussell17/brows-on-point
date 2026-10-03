import { sensitiveTeethWhiteningServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sensitive Teeth Whitening in Kelowna',
  description:
    'Sensitive teeth? Brows on Point in West Kelowna offers 24k gold teeth whitening for Kelowna clients with sensitive smiles, $99. Book your appointment today.',
  openGraph: ogMeta(
    '/og/sensitive-teeth-whitening-og_brows-on-point.jpg',
    '24K Gold Whitening for Sensitive Teeth',
  ),
}

export default function SensitiveTeethWhiteningPage() {
  return <ServicePage data={sensitiveTeethWhiteningServiceData} />
}
