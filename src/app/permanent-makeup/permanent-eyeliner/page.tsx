import { permanentEyelinerServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permanent Eyeliner Near Me in West Kelowna',
  description:
    'Looking for permanent eyeliner near you? Brows on Point in West Kelowna offers lash line enhancement and permanent eyeliner tattoo. Book online today.',
}

export default function PermanentEyelinerPage() {
  return <ServicePage data={permanentEyelinerServiceData} />
}
