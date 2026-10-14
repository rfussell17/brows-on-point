import HubPage from '@/components/services/hub-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Services in Kelowna',
  description:
    'Brows on Point is a lash studio in West Kelowna covering Keratin, Korean and BOMB lash lift and tint.',
  openGraph: ogMeta('/og/lash-services-og_brows-on-point.jpg', 'Lashes'),
}

const faqs = [
  {
    question: 'What lash services does Brows on Point offer?',
    answer:
      'Lash Lift and Tint for lifted lashes without extensions or daily mascara fuss.',
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
          Ditch the damaging lash curler and messy mascara! Lift and curl your
          lashes from the bottom up, giving the appearance of longer, fuller
          lashes.
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
