import HubPage from '@/components/services/hub-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrows Near Me in West Kelowna',
  description:
    'Searching for eyebrows near me in West Kelowna? Brows on Point offers eyebrow tinting, waxing, shaping, microblading, and powder brows. Book online today.',
}

export default function BrowsHubPage() {
  return (
    <HubPage
      title="Eyebrows Near Me in West Kelowna"
      intro={
        <>
          If you&apos;ve been searching for eyebrows near you in West Kelowna,
          Brows on Point is a brow bar covering the full range: from a same-day
          eyebrow tint or wax to semi-permanent microblading and powder brows.
          Browse the brow services below, or book straight in if you already
          know what you&apos;re after.
        </>
      }
      spokes={[
        {
          title: 'Eyebrow Tint & Shape',
          description:
            'Semi-permanent tint and precise hot-wax shaping together, $25.',
          href: '/brows/brow-tint-and-shape',
          image: '/services/powder_brow.jpg',
        },
        {
          title: 'Microblading',
          description:
            'Natural, hair-stroke semi-permanent brows for sparse or over-tweezed eyebrows.',
          href: '/permanent-makeup/microblading',
          image: '/services/microblade.jpg',
        },
        {
          title: 'Powder Brows',
          description:
            'A soft, filled-in powder finish that holds its shape day to day.',
          href: '/permanent-makeup/powder-brows',
          image: '/services/powder_brow.jpg',
        },
      ]}
    />
  )
}
