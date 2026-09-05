import { permanentEyelinerServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permanent Eyeliner Near Me in West Kelowna',
  description:
    'Permanent eyeliner in West Kelowna at Brows on Point: subtle lash line enhancement or a fully defined eyeliner tattoo. Book online today.',
}

export default function PermanentEyelinerPage() {
  return <ServicePage data={permanentEyelinerServiceData} />
}
