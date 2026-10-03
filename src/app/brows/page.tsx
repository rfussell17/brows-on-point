import { Link } from '@/components/link'
import HubPage from '@/components/services/hub-page'
import { BUSINESS_ADDRESS, ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrow Services in Kelowna',
  description:
    'Eyebrow services in Kelowna: brow tinting, hot-wax shaping, microblading and powder brows. Brows on Point is a brow bar in West Kelowna. Book online today.',
  openGraph: ogMeta('/og/eyebrows-og_brows-on-point.jpg', 'Eyebrows'),
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
      title="Eyebrow Services in Kelowna"
      path="/brows"
      intro={
        <>
          Brows on Point is a brow bar in West Kelowna serving Kelowna, covering
          the full range of eyebrow services: from a same-day eyebrow tint and
          shape to semi-permanent microblading and powder brows. Browse the brow
          services below, or book straight in if you already know what
          you&apos;re after.
        </>
      }
      sections={[
        {
          heading: 'Brow Tinting and Eyebrow Shaping in Kelowna',
          content: (
            <>
              <p>
                <Link
                  href="/brows/brow-tint-and-shape"
                  className="font-semibold underline"
                >
                  Eyebrow tinting and shaping
                </Link>{' '}
                is $25 and combines a semi-permanent tint with precise hot-wax
                shaping, mapped to your face rather than a generic arch. The
                tint typically holds for 3-6 weeks, and most clients rebook
                every 3-4 weeks to keep the shape clean.
              </p>
            </>
          ),
        },
        {
          heading: 'Semi-Permanent Eyebrows in Kelowna',
          content: (
            <>
              <p>
                If you want your shape to last longer,{' '}
                <Link
                  href="/permanent-makeup/microblading"
                  className="font-semibold underline"
                >
                  microblading
                </Link>{' '}
                ($275) draws natural hair-like strokes, and{' '}
                <Link
                  href="/permanent-makeup/powder-brows"
                  className="font-semibold underline"
                >
                  powder brows
                </Link>{' '}
                ($300) give a soft, filled-in finish. Both typically last 1-2
                years.
              </p>
            </>
          ),
        },
        {
          heading: 'A Brow Bar in West Kelowna',
          content: (
            <>
              <p>
                Brows on Point is at {BUSINESS_ADDRESS}, serving clients from
                Kelowna and West Kelowna. Every appointment is with Jamie, so
                you never have to explain your preferences to someone new.
              </p>
            </>
          ),
        },
      ]}
      spokes={[
        {
          title: 'Eyebrow Tinting & Shaping',
          description:
            'Semi-permanent tint and precise hot-wax shaping together, $25.',
          href: '/brows/brow-tint-and-shape',
          image: '/services/brows/brows-tint-and-shape-closeup-01.jpg',
        },
        {
          title: 'Microblading',
          description:
            'Natural, hair-stroke semi-permanent brows for sparse or over-tweezed eyebrows.',
          href: '/permanent-makeup/microblading',
          image:
            '/services/permanent-makeup/permanent-makeup-microblading-before-after-01.jpg',
        },
        {
          title: 'Powder Brows',
          description:
            'A soft, filled-in powder finish that holds its shape day to day.',
          href: '/permanent-makeup/powder-brows',
          image:
            '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-01.jpg',
        },
      ]}
      faqs={faqs}
    />
  )
}
