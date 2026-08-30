import { rfSkinTighteningData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin Tightening Treatment in West Kelowna',
  description:
    'RF skin tightening in West Kelowna at Brows on Point. A non-invasive treatment that firms skin and boosts collagen. Book your appointment online today.',
}

export default function SkinTighteningPage() {
  return <ServicePage data={rfSkinTighteningData} />
}
