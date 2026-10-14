import HubPage from '@/components/services/hub-page'
import { ACUITY_URL, ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permanent Makeup in Kelowna',
  description:
    'Permanent makeup in Kelowna: microblading from $275, powder brows from $300, permanent eyeliner and saline removal at Brows on Point. Book a no-charge consult today.',
  openGraph: ogMeta(
    '/og/permanent-makeup-og_brows-on-point.jpg',
    'Permanent Eyebrows',
  ),
}

const faqs = [
  {
    question: "What's the difference between microblading and powder brows?",
    answer:
      'Microblading creates individual hair-like strokes in the skin for a natural, textured look. Powder brows use a shading technique for a softer, pixelated, or fuller look. Similar to brow makeup.',
  },
]

export default function PermanentMakeupPage() {
  return (
    <HubPage
      testimonials={[
        'Danielle C',
        'Delanie C',
        'Melissa M',
        'Y. Tobar',
        'Jenny K',
        'Janessa K',
      ]}
      title="Permanent Makeup in Kelowna"
      path="/permanent-makeup"
      intro={
        <>
          Brows on Point offers Microblading, Powder Brow, Eyeliner,
          corrections, and saline removal for existing PMU. Browse the options,
          or book a free consultation if you&apos;re not sure which is right for
          you.
        </>
      }
      sections={[
        {
          heading: 'Permanent Eyebrows in Kelowna',
          content: (
            <p>
              Permanent makeup brows come in 2 techniques here. Microblading:
              which creates natural, wispy hair-like strokes in the skin. Powder
              brows: a soft, fuller brow. Similar look of wearing brow powder or
              pomade. Both are cosmetic tattoo techniques that typically last
              1-3 years, and both start with a free consultation.
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
                  Permanent eyeliner: upper lash line $199, lower liner $120
                </li>
                <li>
                  Saline tattoo and PMU removal: $125. Emergency removal: $200
                </li>
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
            "A soft, pixelated brow…or more defined and fuller result…I've got what you're after! With results lasting for 2-3 years.",
          href: '/permanent-makeup/powder-brows',
          image:
            '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-01.jpg',
        },
        {
          title: 'Permanent Eyeliner',
          description:
            'Subtle lash line enhancement tattooed eyeliner. Make those eyes pop!',
          href: '/permanent-makeup/permanent-eyeliner',
          image:
            '/services/permanent-makeup/permanent-makeup-eyeliner-closeup-01.jpg',
        },
        {
          title: 'Saline Tattoo & PMU Removal',
          description:
            'A gentler, saline-based alternative to laser removal for PMU.\n\nI also offer Emergency PMU Removal (for permanent makeup that you want removed asap, that was done less than 72 hours ago) 98-99% success rate of full removal if done within 24 hours.',
          href: '/permanent-makeup/saline-tattoo-removal',
          image:
            '/services/permanent-makeup/permanent-makeup-removal-saline-before-after-01.jpg',
        },
      ]}
      faqs={faqs}
    />
  )
}
