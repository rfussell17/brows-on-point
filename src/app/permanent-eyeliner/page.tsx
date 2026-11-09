import { permanentEyelinerServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permanent Eyeliner in Kelowna',
  description:
    'Permanent eyeliner in Kelowna at Brows on Point: a subtle tattooed upper lash line for $230, or lower liner on its own for $120. Book online today.',
  openGraph: ogMeta(
    '/og/permanent-eyeliner-og_brows-on-point.jpg',
    'Permanent Eyeliner',
    '/permanent-eyeliner',
  ),
}

export default function PermanentEyelinerPage() {
  return <ServicePage data={permanentEyelinerServiceData} />
}
