import { rfSkinTighteningData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin Tightening in Kelowna',
  description:
    'RF skin tightening at Brows on Point in West Kelowna: a non-invasive treatment that firms and lifts facial skin and boosts collagen. Book today.',
  openGraph: ogMeta(
    '/og/skin-tightening-og_brows-on-point.jpg',
    'Skin Tightening Treatment',
    '/skin-tightening',
  ),
}

export default function SkinTighteningPage() {
  return <ServicePage data={rfSkinTighteningData} />
}
