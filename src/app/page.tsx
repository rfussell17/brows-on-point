import CallToAction from '@/components/cta'
import DetailRow from '@/components/detail-row'
import FAQSection from '@/components/faq-section'
import { Footer } from '@/components/footer'
import Hero from '@/components/hero'
import LashLiftHome from '@/components/lash-lift-home'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import LogoGrid, { logos } from '@/components/media/logo-grid'
import TestimonialTwo from '@/components/media/testimonial-two'
import { generalFAQs } from '@/lib/general-faqs'
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
  title: {
    absolute: 'Brows on Point | Brows, Lashes & Permanent Makeup in Kelowna',
  },
  description:
    'Brows on Point is a West Kelowna studio serving the Okanagan and beyond for brow tinting, lash lifts, microblading, powder brow, permanent eyeliner, tooth gems, RF facial tightening, and teeth whitening.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: ogMeta('/og/brows-on-point-og.jpg', 'Brows on Point'),
}

type BgVariant = 'primary' | 'primary-950'
const opposite = (variant: BgVariant): BgVariant =>
  variant === 'primary' ? 'primary-950' : 'primary'

export default function Home() {
  const detailRowVariant: BgVariant = 'primary-950'
  const cta1Variant = opposite(detailRowVariant)
  const lashLiftVariant = opposite(cta1Variant)
  const testimonialTwoVariant = opposite(lashLiftVariant)
  const logoGridVariant = opposite(testimonialTwoVariant)
  const faqVariant = opposite(logoGridVariant)
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
