import { permanentEyelinerServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permanent Eyeliner Near Me in West Kelowna',
  description:
    'Permanent eyeliner in West Kelowna at Brows on Point: subtle lash line enhancement or a fully defined eyeliner tattoo. Book online today.',
  openGraph: ogMeta(
    '/og/permanent-eyeliner-og_brows-on-point.jpg',
    'Permanent Eyeliner',
  ),
}

export default function PermanentEyelinerPage() {
  return <ServicePage data={permanentEyelinerServiceData} />
}
