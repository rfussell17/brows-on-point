import HubPage from '@/components/services/hub-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Services in Kelowna',
  description:
    'Lash lift and tint plus lash and brow tinting in Kelowna. Brows on Point is a lash studio in West Kelowna covering every option. Book online with Jamie today.',
  openGraph: ogMeta('/og/lash-services-og_brows-on-point.jpg', 'Lashes'),
}

const faqs = [
  {
    question: 'What lash services does Brows on Point offer?',
    answer:
      'Lash Lift and Tint for lifted, darker lashes without extensions, and Lash & Brow Tinting for a fast colour boost.',
  },
  {
    question: "What's the difference between a lash lift and a lash tint?",
    answer:
      'A lash tint only darkens your lash colour. A lash lift changes the curl and shape of your lashes. Many clients book both together, but they are separate services.',
  },
]

export default function LashesHubPage() {
  return (
    <HubPage
      title="Lashes"
      path="/lashes"
      intro={
        <>
          Jamie is the lash tech behind every appointment at Brows on Point, a
          lash studio in West Kelowna offering lash lifts and lash and brow
          tinting. She&apos;s completed a Lash Lift and Tint Training Program
          and a Korean Lash Lift Technician Course.
        </>
      }
      spokes={[
        {
          title: 'Lash Lift and Tint',
          description:
            'Keratin, BOMB, or Korean lash lift and tint: lifted, darker lashes with no extensions.',
          href: '/lashes/lash-lift-and-tint',
          image: '/services/lashes/lashes-lift-bomb-before-after-03.jpg',
        },
        {
          title: 'Lash & Brow Tinting',
          description:
            'Semi-permanent tint for lashes, brows, or both: a fast way to skip the daily mascara.',
          href: '/lashes/lash-and-brow-tinting',
        },
        // Lash Growth Serum hidden for now:
        // {
        //   title: 'Lash Growth Serum',
        //   description:
        //     'A keratin lash growth serum and tinted mascara to support your natural lashes at home.',
        //   href: '/lashes/lash-growth-serum',
        // },
      ]}
      faqs={faqs}
    />
  )
}
