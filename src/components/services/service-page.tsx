import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { blogPosts } from '@/lib/blog-posts'
import {
  ACUITY_URL,
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
import React from 'react'
import { Footer } from '../footer'
import { BreadcrumbJsonLd } from '../json-ld/breadcrumb'
import { ServiceJsonLd } from '../json-ld/service'
import GoogleReviewsBanner from '../media/google-reviews-banner'
import TestimonialSingle from '../media/testimonial-single'
import type { ServiceData } from './service-data'
import ServiceDetail, { getServiceDetailBgVariant } from './service-detail'
import ServiceHeader from './service-header'

interface ServicePageProps {
  data: ServiceData
}

type BgVariant = 'primary' | 'primary-950'
const opposite = (variant: BgVariant): BgVariant =>
  variant === 'primary' ? 'primary-950' : 'primary'

const ServicePage: React.FC<ServicePageProps> = ({ data }) => {
  // Every section from here down alternates against whatever landed right
  // before it, so no two identically-coloured sections ever touch.
  let lastVariant = getServiceDetailBgVariant(data)
  const testimonialBgVariant = opposite(lastVariant)
  if (data.testimonialName) lastVariant = testimonialBgVariant
  // The "Learn more" link only appears once its blog post is published.
  const hasPost = Boolean(data.blogSlug && blogPosts[data.blogSlug])
  const learnMoreBgVariant = opposite(lastVariant)
  if (hasPost) lastVariant = learnMoreBgVariant
  const reviewsBgVariant = opposite(lastVariant)

  return (
    <div>
      <ServiceJsonLd data={data} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: data.title, path: `/${data.slug}` },
        ]}
      />
      <ServiceHeader
        title={data.title}
        eyebrow={data.category}
        descriptionText={data.about}
        duration={data.hideStats ? undefined : data.duration}
        results={data.hideStats ? undefined : data.results}
        price={data.hideStats ? undefined : data.price}
        image={data.thumbnail ?? data.galleryImages?.[0]}
        bookingUrl={ACUITY_URL}
        learnMoreUrl="/services"
        learnMoreLabel="All Services"
        bookingLabel={data.bookingLabel}
      />

      <ServiceDetail data={data} />

      {data.testimonialName && (
        <TestimonialSingle
          name={data.testimonialName}
          bgVariant={testimonialBgVariant}
        />
      )}

      {hasPost && (
        <div
          className={`${learnMoreBgVariant === 'primary-950' ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700' : 'bg-primary'} py-20 sm:py-24`}
        >
          <Container>
            <div className="flex justify-center">
              <Link
                href={`/blog/${data.blogSlug}`}
                className="inline-flex rounded-md bg-light px-5 py-3 text-body font-semibold text-primary shadow-sm hover:bg-primary-50"
              >
                Learn more about {data.title}{' '}
                <span aria-hidden="true">&nbsp;→</span>
              </Link>
            </div>
          </Container>
        </div>
      )}

      <GoogleReviewsBanner
        rating={GOOGLE_RATING}
        reviewCount={GOOGLE_REVIEW_COUNT}
        reviewsUrl={GOOGLE_REVIEWS_URL}
        bgVariant={reviewsBgVariant}
        cta={BOOKING_CTA}
      />

      <Footer />
    </div>
  )
}

export default ServicePage
