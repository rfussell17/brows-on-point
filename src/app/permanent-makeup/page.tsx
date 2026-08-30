import FAQSection from '@/components/faq-section'
import HubPage from '@/components/services/hub-page'
import { ACUITY_URL } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permanent Eyebrows in West Kelowna',
  description:
    'Permanent eyebrows in West Kelowna. Brows on Point offers microblading, powder brows, permanent eyeliner, and saline PMU removal. Book a consult today.',
}

const faqs = [
  {
    question: 'How much do permanent eyebrows cost?',
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
]

export default function PermanentMakeupPage() {
  return (
    <>
      <HubPage
        title="Permanent Eyebrows in West Kelowna"
        intro={
          <>
            Permanent makeup at Brows on Point covers semi-permanent eyebrows,
            permanent eyeliner, and saline removal for PMU or small tattoos you
            no longer want. Every technique below is its own service with its
            own process and pricing. Browse the options, or book a free
            consultation if you&apos;re not sure which is right for you.
          </>
        }
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
            image: '/services/microblade.jpg',
          },
          {
            title: 'Powder Brows',
            description:
              'A soft, filled-in powder finish that holds its shape day to day.',
            href: '/permanent-makeup/powder-brows',
            image: '/services/powder_brow.jpg',
          },
          {
            title: 'Permanent Eyeliner',
            description:
              'Subtle lash line enhancement or a defined liner look that doesn’t smudge.',
            href: '/permanent-makeup/permanent-eyeliner',
            image: '/services/permanent_eyeliner.jpg',
          },
          {
            title: 'Saline Tattoo & PMU Removal',
            description:
              'A gentler, saline-based alternative to laser removal for PMU or small tattoos.',
            href: '/permanent-makeup/saline-tattoo-removal',
            image: '/services/permanent_eyeliner.jpg',
          },
        ]}
      />
      <FAQSection faqs={faqs} />
    </>
  )
}
