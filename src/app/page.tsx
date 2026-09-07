import CallToAction from '@/components/cta'
import DetailRow from '@/components/detail-row'
import FAQSection from '@/components/faq-section'
import { Footer } from '@/components/footer'
import Hero from '@/components/hero'
import LashLiftHome from '@/components/lash-lift-home'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import LogoGrid, { logos } from '@/components/media/logo-grid'
import TestimonialGroup from '@/components/media/testimonial-group'
import TestimonialTwo from '@/components/media/testimonial-two'
import {
  ACUITY_URL,
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  ogMeta,
} from '@/lib/site'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  description:
    "West Kelowna's lash and brow bar for lash lifts, brow tinting, permanent makeup, teeth whitening, and tooth gems. Book your appointment online today.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: ogMeta('/og/brows-on-point-og.jpg', 'Brows on Point'),
}

const generalFAQs = [
  {
    question: 'What services does Brows on Point offer?',
    answer:
      'Lash lifts and tinting, brow tinting, shaping and permanent makeup, teeth whitening and tooth gems, and RF skin tightening — all from one studio in West Kelowna. Each treatment is customized to you.',
  },
  {
    question: 'Is permanent makeup safe at Brows on Point?',
    answer:
      'Yes. Every procedure follows strict public health guidelines, with single-use sterile needles and supplies and thorough sanitation between every client.',
  },
  {
    question: "What's the age requirement?",
    answer:
      'All clients must be 18 years or older and present valid ID at their appointment.',
  },
  {
    question: 'Do lash, brow, and permanent makeup treatments hurt?',
    answer:
      "It depends on the treatment. Needle-based services like permanent makeup use a topical anesthetic for comfort, while lash lifts, tinting, and teeth whitening are generally pain-free.",
  },
  {
    question: 'Does Brows on Point provide aftercare instructions?',
    answer:
      'Yes. Every service comes with clear aftercare instructions, and any products you need are included with your treatment.',
  },
]

type BgVariant = 'primary' | 'primary-950'
const opposite = (variant: BgVariant): BgVariant =>
  variant === 'primary' ? 'primary-950' : 'primary'

export default function Home() {
  // Every section from LogoGrid down alternates against whatever landed
  // right before it, so no two identically-coloured sections ever touch —
  // same pattern used on the service pages. The Hero is white and sits
  // outside that chain, so LogoGrid's tone is just the chain's starting seed.
  const logoGridVariant: BgVariant = 'primary'
  const detailRowVariant = opposite(logoGridVariant)
  const cta1Variant = opposite(detailRowVariant)
  const lashLiftVariant = opposite(cta1Variant)
  const testimonialTwoVariant = opposite(lashLiftVariant)
  const testimonialGroupVariant = opposite(testimonialTwoVariant)
  const cta2Variant = opposite(testimonialGroupVariant)
  const faqVariant = opposite(cta2Variant)
  const reviewsVariant = opposite(faqVariant)

  return (
    <div className="overflow-hidden">
      <Hero bgVariant="light" />
      <main>
        <DetailRow bgVariant={detailRowVariant} />
        <CallToAction
          title="See All Beauty Services"
          primaryButton={{
            text: 'All Services',
            href: '/services',
          }}
          secondaryButton={{
            text: 'Book Now',
            href: ACUITY_URL,
          }}
          bgVariant={cta1Variant}
        />
        <LashLiftHome bgVariant={lashLiftVariant} />
        <TestimonialTwo bgVariant={testimonialTwoVariant} />
      </main>
      <TestimonialGroup bgVariant={testimonialGroupVariant} />

      <LogoGrid
        title="I only use the best products"
        logos={logos}
        bgVariant={logoGridVariant}
      />
      <FAQSection
        faqs={generalFAQs}
        title="Common Questions"
        bgVariant={faqVariant}
      />

      <GoogleReviewsBanner
        rating={GOOGLE_RATING}
        reviewCount={GOOGLE_REVIEW_COUNT}
        reviewsUrl={GOOGLE_REVIEWS_URL}
        bgVariant={reviewsVariant}
        cta={BOOKING_CTA}
      />

      <Footer />
    </div>
  )
}
