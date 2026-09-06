import HubPage from '@/components/services/hub-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrows Near Me in West Kelowna',
  description:
    'Eyebrow tinting, waxing, shaping, microblading, and powder brows in West Kelowna. Brows on Point is a brow bar covering the full range. Book online today.',
}

const faqs = [
  {
    question: 'What eyebrow services do you offer?',
    answer:
      'Eyebrow Tint & Shape for a same-day refresh, or semi-permanent options like Microblading and Powder Brows if you want your shape to last longer. Browse each below to see what fits.',
  },
  {
    question:
      "What's the difference between a brow tint & shape and semi-permanent brows?",
    answer:
      'Tint & Shape uses a semi-permanent dye and hot-wax shaping that lasts 3-6 weeks. Microblading and Powder Brows are cosmetic tattoo techniques that last 1-2 years. Which one suits you depends on how much upkeep you want.',
  },
]

export default function BrowsHubPage() {
  return (
    <HubPage
      title="Eyebrows"
      intro={
        <>
          Brows on Point is a brow bar in West Kelowna covering the full
          range: from a same-day eyebrow tint or wax to semi-permanent
          microblading and powder brows. Browse the brow services below, or
          book straight in if you already know what you&apos;re after.
        </>
      }
      spokes={[
        {
          title: 'Eyebrow Tint & Shape',
          description:
            'Semi-permanent tint and precise hot-wax shaping together, $25.',
          href: '/brows/brow-tint-and-shape',
        },
        {
          title: 'Microblading',
          description:
            'Natural, hair-stroke semi-permanent brows for sparse or over-tweezed eyebrows.',
          href: '/permanent-makeup/microblading',
          image: '/services/microblade_brows-on-point.jpg',
        },
        {
          title: 'Powder Brows',
          description:
            'A soft, filled-in powder finish that holds its shape day to day.',
          href: '/permanent-makeup/powder-brows',
          image: '/services/powder-brow_brows-on-point.png',
        },
      ]}
      faqs={faqs}
    />
  )
}
