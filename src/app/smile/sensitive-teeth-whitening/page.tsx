import { sensitiveTeethWhiteningServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24K Gold Whitening for Sensitive Teeth in West Kelowna',
  description:
    'Sensitive teeth? Brows on Point in West Kelowna offers a gentler teeth whitening option designed for sensitive smiles. Book your appointment today.',
}

export default function SensitiveTeethWhiteningPage() {
  return <ServicePage data={sensitiveTeethWhiteningServiceData} />
}
