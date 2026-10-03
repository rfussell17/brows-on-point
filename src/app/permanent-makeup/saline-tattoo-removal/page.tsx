import { salineRemovalServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saline Tattoo & PMU Removal in Kelowna',
  description:
    'Saline tattoo and eyebrow PMU removal in Kelowna at Brows on Point, a gentle alternative to laser removal. Sessions from $125. Book your consult today.',
  openGraph: ogMeta(
    '/og/saline-tattoo-and-pmu-removal-og_brows-on-point.jpg',
    'Saline Tattoo & PMU Removal',
  ),
}

export default function SalineTattooRemovalPage() {
  return <ServicePage data={salineRemovalServiceData} />
}
