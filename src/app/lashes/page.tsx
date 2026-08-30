import HubPage from '@/components/services/hub-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lashes Near Me in West Kelowna',
  description:
    'Looking for lashes near you in West Kelowna? Brows on Point offers keratin lash lifts, lash and brow tinting, and lash growth serum. Book online today.',
}

export default function LashesHubPage() {
  return (
    <HubPage
      title="Lashes Near Me in West Kelowna"
      intro={
        <>
          Jamie is the lash tech behind every appointment at Brows on Point, a
          lash studio in West Kelowna offering lash lifts, lash and brow
          tinting, and a lash growth serum to use between visits. She&apos;s
          completed a Lash Lift and Tint Training Program and a Korean Lash Lift
          Technician Course.
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
      trustBlock={{
        heading: 'One Lash Tech, Every Appointment',
        content: (
          <>
            No rotating staff. Every lash appointment at Brows on Point in West
            Kelowna is with Jamie. If you&apos;re not sure whether a lash lift,
            a lash tint, or both is right for you, say so when you book and
            I&apos;ll talk it through at your appointment.
          </>
        ),
      }}
    />
  )
}
