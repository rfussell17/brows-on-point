import HubPage from '@/components/services/hub-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lashes Near Me in West Kelowna',
  description:
    'Keratin lash lifts, lash and brow tinting, and lash growth serum in West Kelowna. Brows on Point is a lash studio covering every option. Book online today.',
}

const faqs = [
  {
    question: 'What lash services do you offer?',
    answer:
      'Lash Lift and Tint for lifted, darker lashes without extensions, Lash & Brow Tinting for a fast colour boost, and a Lash Growth Serum to use between appointments.',
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
      intro={
        <>
          Jamie is the lash tech behind every appointment at Brows on Point,
          a lash studio in West Kelowna offering lash lifts, lash and brow
          tinting, and a lash growth serum to use between visits. She&apos;s
          completed a Lash Lift and Tint Training Program and a Korean Lash
          Lift Technician Course.
        </>
      }
      spokes={[
        {
          title: 'Lash Lift and Tint',
          description:
            'Keratin, BOMB, or Korean lash lift and tint: lifted, darker lashes with no extensions.',
          href: '/lashes/lash-lift-and-tint',
          image: '/services/bomb_lift_and_tint.jpg',
        },
        {
          title: 'Lash & Brow Tinting',
          description:
            'Semi-permanent tint for lashes, brows, or both: a fast way to skip the daily mascara.',
          href: '/lashes/lash-and-brow-tinting',
          image: '/services/lash2.png',
        },
        {
          title: 'Lash Growth Serum',
          description:
            'A keratin lash growth serum and tinted mascara to support your natural lashes at home.',
          href: '/lashes/lash-growth-serum',
          image: '/services/lash2.png',
        },
      ]}
      faqs={faqs}
    />
  )
}
