import { Container } from '@/components/container'
import FAQSection from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { BreadcrumbJsonLd } from '@/components/json-ld/breadcrumb'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import TestimonialSingle from '@/components/media/testimonial-single'
import { ServiceCard } from '@/components/services/service-card'
import { ALL_SERVICES } from '@/components/services/service-data'
import { generalFAQs } from '@/lib/general-faqs'
import {
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  ogMeta,
} from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Services in Kelowna',
  description:
    'Explore all services at Brows on Point in West Kelowna: lash lifts, brow tinting, permanent makeup, teeth whitening and more for Okanagan clients and beyond. Book online.',
  openGraph: ogMeta('/og/all-services-og_brows-on-point.jpg', 'My Services'),
}

const ServicesPage = () => {
  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />
      <div className="bg-primary py-28 sm:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-display text-light">My Services</h1>
            <p className="mt-8 text-lead text-gray-100">
              Welcome to Brows on Point, where beauty meets affordability and
              expertise. Since 2016, I&apos;ve been helping clients discover
              their most confident selves through personalized aesthetic
              services.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-primary-950 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.cardTitle ?? service.title}
                description={service.cardDescription ?? ''}
                href={`/${service.slug}`}
                image={service.thumbnail ?? service.galleryImages?.[0]}
              />
            ))}
          </div>
        </Container>
      </div>

      <TestimonialSingle name="Ally F" bgVariant="primary" />

      <FAQSection
        faqs={generalFAQs}
        title="Common Questions"
        bgVariant="primary-950"
      />

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

export default ServicesPage
