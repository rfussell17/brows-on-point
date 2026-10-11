import HubPage from '@/components/services/hub-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Services in Kelowna',
  description:
    'Lash lift and tint plus lash and brow tinting in Kelowna. Brows on Point is a lash studio in West Kelowna covering every option.',
  openGraph: ogMeta('/og/lash-services-og_brows-on-point.jpg', 'Lashes'),
}

const faqs = [
  {
    question: 'What lash services does Brows on Point offer?',
    answer:
      'Lash Lift and Tint for lifted, darker lashes without extensions, and Lash & Brow Tinting for a fast colour boost. Brows on Point also offers Cluster lashes. A great alternative to lash extensions. Without the damage or commitment (lasts up to 2 weeks). Perfect for holidays or special events.',
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
      testimonials={[
        'Kassandra D',
        'Kristyn G',
        'Karina B',
        'Janine D',
        'Mel',
        'Crystal Z',
      ]}
      title="Lashes"
      path="/lashes"
      intro={
        <>
          Jamie is the lash tech behind every appointment at Brows on Point.
          She provides BOMB lash lift, Keratin lash lift, and Korean lash
          lift.
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
          image: '/services/lashes/lashes-tinting-closeup-01.jpg',
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
