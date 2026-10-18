import { Link } from '@/components/link'
import HubPage from '@/components/services/hub-page'
import { BUSINESS_ADDRESS, ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eyebrow Services in Kelowna',
  description:
    'Eyebrow services in Kelowna: brow tinting, brow shaping, microblading and powder brows. Brows on Point is a brow bar in West Kelowna. Book online today.',
  openGraph: ogMeta('/og/eyebrows-og_brows-on-point.jpg', 'Eyebrows'),
}

const faqs = [
  {
    question: 'What eyebrow services does Brows on Point offer?',
    answer:
      'Eyebrow Tint & Shape for a same-day refresh, or semi-permanent options like Microblading and Powder Brows if you want something more lasting with lower maintenance. Browse each below to see what fits.',
  },
  {
    question:
      "What's the difference between eyebrow tinting and shaping, and semi-permanent brows like microblading/powder brow?",
    answer:
      'Tint & Shape uses a semi-permanent tint that lasts 3-6 weeks. Microblading and Powder Brows are cosmetic tattoo techniques. Microblading lasts 1-2 years and Powder Brows last 2-3 years.\n\nWhich one suits you depends on your skin texture, how much upkeep you want.',
  },
]

export default function BrowsHubPage() {
  return (
    <HubPage
      testimonials={[
        'Elyse L',
        'Janine D',
        'Delanie C',
        'Danielle C',
        'Y. Tobar',
        'Melissa M',
      ]}
      title="Eyebrow Services in Kelowna"
      path="/brows"
      intro={
        <>
          Brows on Point is a brow bar in West Kelowna serving Kelowna, covering
          the full range of eyebrow services: from a same-day brow tint and
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
                  Brow tinting and shape
                </Link>{' '}
                lasts 3-6 weeks.
              </p>
            </>
          ),
        },
        {
          heading: 'A Brow Bar in West Kelowna',
          content: (
            <>
              <p>
                Brows on Point is at {BUSINESS_ADDRESS}, serving clients within
                the Okanagan, and beyond!
              </p>
            </>
          ),
        },
      ]}
      spokes={[
        {
          title: 'Eyebrow Tinting & Shaping',
          description: 'Semi-permanent tint and shape $25.',
          href: '/brows/brow-tint-and-shape',
          image: '/services/brows/brows-tint-and-shape-closeup-01.jpg',
        },
        {
          title: 'Microblading',
          description:
            "Natural, hair-stroke semi-permanent brows for sparse or over-tweezed eyebrows. If you're looking for a natural fuller looking brow, this is the option for you!",
          href: '/permanent-makeup/microblading',
          image:
            '/services/permanent-makeup/permanent-makeup-microblading-before-after-01.jpg',
        },
        {
          title: 'Powder Brows',
          description:
            'A soft, shaded and airy tattooed brow. Typically you can get an average 2 to 3 years with this low maintenance service.',
          href: '/permanent-makeup/powder-brows',
          image:
            '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-01.jpg',
        },
      ]}
      faqs={faqs}
    />
  )
}
