import { salineRemovalServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrow Tattoo & PMU Removal in West Kelowna',
  description:
    'Saline eyebrow tattoo and PMU removal in West Kelowna. Brows on Point offers a gentle saline alternative to laser removal. Book a consult today.',
}

export default function SalineTattooRemovalPage() {
  return <ServicePage data={salineRemovalServiceData} />
}
