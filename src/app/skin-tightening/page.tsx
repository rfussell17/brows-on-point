import { rfSkinTighteningData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin Tightening in Kelowna',
  description:
    'RF skin tightening in Kelowna at Brows on Point in West Kelowna. A non-invasive treatment that firms skin and boosts collagen. Book your appointment today.',
  openGraph: ogMeta(
    '/og/skin-tightening-og_brows-on-point.jpg',
    'Skin Tightening Treatment',
  ),
}

export default function SkinTighteningPage() {
  return <ServicePage data={rfSkinTighteningData} />
}
