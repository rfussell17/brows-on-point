import { Link } from '@/components/link'
import HubPage from '@/components/services/hub-page'
import { ACUITY_URL, ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permanent Makeup in Kelowna',
  description:
    'Permanent makeup in Kelowna: microblading from $275, powder brows from $300, permanent eyeliner and saline removal at Brows on Point. Book a consult today.',
  openGraph: ogMeta(
    '/og/permanent-makeup-og_brows-on-point.jpg',
    'Permanent Eyebrows',
  ),
}

const faqs = [
  {
    question: 'How much do permanent eyebrows cost in Kelowna?',
    answer:
      'It depends on the technique. Microblading starts at $275, powder brows start at $300, both including your first touch-up appointment window. See each service page for full pricing.',
  },
  {
    question: 'Is permanent makeup the same as an eyebrow tattoo?',
    answer:
      "People use both terms for the same thing. Technically it's micropigmentation: pigment implanted with a fine tool, not standard tattoo ink, which is why it fades gradually over 1-2 years rather than staying permanent.",
  },
  {
    question: 'What permanent makeup services do you offer?',
    answer:
      'Microblading, powder brows, permanent eyeliner and lash line enhancement, and saline removal for existing permanent makeup or small tattoos.',
  },
  {
    question: "What's the difference between microblading and powder brows?",
    answer:
      'Microblading draws individual hair-like strokes for a natural, textured look. Powder brows use a shading technique for a softer, more filled-in look, similar to brow makeup. Ask me at your consultation which suits your skin and the look you want.',
  },
]

export default function PermanentMakeupPage() {
  return (
    <HubPage
      title="Permanent Makeup in Kelowna"
      path="/permanent-makeup"
      intro={
        <>
          Permanent makeup at Brows on Point in West Kelowna covers permanent
          eyebrows, permanent eyeliner, and saline removal for PMU or small
          tattoos you no longer want, for clients across Kelowna. Every
          technique below is its own service with its own process and pricing.
          Browse the options, or book a free consultation if you&apos;re not
          sure which is right for you.
        </>
      }
      sections={[
        {
          heading: 'Permanent Eyebrows in Kelowna',
          content: (
            <p>
              Permanent eyebrows come in two techniques here:{' '}
              <Link
                href="/permanent-makeup/microblading"
                className="font-semibold underline"
              >
                microblading
              </Link>
              , which draws natural hair-like strokes, and{' '}
              <Link
                href="/permanent-makeup/powder-brows"
                className="font-semibold underline"
              >
                powder brows
              </Link>
              , a soft, filled-in finish. Both are cosmetic tattoo techniques
              that typically last 1-2 years, and both start with a brow mapping
              consultation so you approve the shape before any pigment is
              applied.
            </p>
          ),
        },
        {
          heading: 'How Much Does Permanent Makeup Cost in Kelowna?',
          content: (
            <>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Microblading: $275. Touch-up $100, so your first year is $375.
                </li>
                <li>
                  Powder brows: $300. Touch-up $125, so your first year is $425.
                </li>
                <li>
                  Permanent eyeliner: upper lash line $199, lower liner $120,
                  top and bottom $319.
                </li>
                <li>Saline tattoo and PMU removal: $125.</li>
              </ul>
              <p>
                Each service page has the full breakdown, including touch-up
                pricing and what is included.
              </p>
            </>
          ),
        },
      ]}
      secondaryCta={{
        text: 'Book Free Consultation',
        href: ACUITY_URL,
      }}
      spokes={[
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
        {
          title: 'Permanent Eyeliner',
          description:
            'Subtle lash line enhancement or a defined liner look that doesn’t smudge.',
          href: '/permanent-makeup/permanent-eyeliner',
          image:
            '/services/permanent-makeup/permanent-makeup-eyeliner-closeup-01.jpg',
        },
        {
          title: 'Saline Tattoo & PMU Removal',
          description:
            'A gentler, saline-based alternative to laser removal for PMU or small tattoos.',
          href: '/permanent-makeup/saline-tattoo-removal',
          image:
            '/services/permanent-makeup/permanent-makeup-removal-saline-before-after-01.jpg',
        },
      ]}
      faqs={faqs}
    />
  )
}
