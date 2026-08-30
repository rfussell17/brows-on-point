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
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  description:
    "West Kelowna's lash and brow bar for lash lifts, brow tinting, permanent makeup, teeth whitening, and tooth gems. Book your appointment online today.",
  robots: {
    index: false,
    follow: false,
  },
}

const generalFAQs = [
  {
    question: 'What services do you offer?',
    answer:
      'I specialize in permanent makeup, lash lifts, brow enhancements, and teeth whitening + gems. Each service is performed with the highest safety standards and customized to your unique features and preferences.',
  },
  {
    question: 'Is it safe?',
    answer:
      'Yes, all my procedures follow strict Public Health Guidelines. I use only single-use sterile needles and supplies, maintain rigorous sanitation protocols, and use dermatologist-tested products.',
  },
  {
    question: "What's the age requirement?",
    answer:
      'All clients must be 18 years or older and present valid ID at their appointment.',
  },
  {
    question: 'Do the procedures hurt?',
    answer:
      'While individual pain tolerance varies, I use medical-grade topical anesthetics before and during procedures to ensure your comfort.',
  },
  {
    question: 'What about aftercare?',
    answer:
      'Aftercare makes a real difference to your results. I provide detailed instructions for each service and include all necessary aftercare products with your treatment.',
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
            href: 'https://app.acuityscheduling.com/schedule.php?owner=15235407',
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
