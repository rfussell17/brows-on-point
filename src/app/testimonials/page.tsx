import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { BreadcrumbJsonLd } from '@/components/json-ld/breadcrumb'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import TestimonialGroup from '@/components/media/testimonial-group'
import {
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  ogMeta,
} from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials in Kelowna',
  description:
    'Read what Brows on Point clients in Kelowna and West Kelowna say about their lash lifts, brows, permanent makeup, teeth whitening and tooth gems.',
  openGraph: ogMeta('/og/brows-on-point-og.jpg', 'Brows on Point Testimonials'),
}

export default function TestimonialsPage() {
  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Testimonials', path: '/testimonials' },
        ]}
      />
      <main>
        <div className="bg-primary py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-display text-light">Testimonials</h1>
              <p className="mt-8 text-lead text-gray-100">
                I&apos;ve had the privilege of taking care of hundreds of
                clients in the Okanagan since 2016. Here is what some of them
                have said.
              </p>
            </div>
          </Container>
        </div>

        <TestimonialGroup bgVariant="primary-950" showHeading={false} />
      </main>

      <GoogleReviewsBanner
        rating={GOOGLE_RATING}
        reviewCount={GOOGLE_REVIEW_COUNT}
        reviewsUrl={GOOGLE_REVIEWS_URL}
        bgVariant="primary"
        cta={BOOKING_CTA}
      />

      <Footer />
    </div>
  )
}
