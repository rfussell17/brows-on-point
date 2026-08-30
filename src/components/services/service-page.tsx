import { ACUITY_URL } from '@/lib/site'
import React from 'react'
import FAQSection from '../faq-section'
import { Footer } from '../footer'
import { ServiceJsonLd } from '../json-ld/service'
import type { ServiceData } from './service-data'
import ServiceDetail, { getServiceDetailBgVariant } from './service-detail'
import ServiceHeader from './service-header'

interface ServicePageProps {
  data: ServiceData
  TestimonialComponent?: React.ComponentType
  testimonialProps?: Record<string, any>
}

type BgVariant = 'primary' | 'primary-950'
const opposite = (variant: BgVariant): BgVariant =>
  variant === 'primary' ? 'primary-950' : 'primary'

const ServicePage: React.FC<ServicePageProps> = ({ data }) => {
  // Every section from here down alternates against whatever landed right
  // before it, so no two identically-coloured sections ever touch — walk the
  // chain in render order and flip the tone at each step.
  const detailBgVariant = getServiceDetailBgVariant(data)
  let lastVariant = detailBgVariant

  const testimonialBgVariant = opposite(lastVariant)
  if (data.testimonial) lastVariant = testimonialBgVariant

  const faqBgVariant = opposite(lastVariant)
  lastVariant = faqBgVariant

  const footerCtaVariant = opposite(lastVariant)

  return (
    <div>
      <ServiceJsonLd
        name={data.title}
        description={data.description}
        slug={data.slug}
      />
      <ServiceHeader
        title={data.title}
        eyebrow={data.hubLink?.text.replace(/^All /, '')}
        descriptionText={data.about}
        duration={data.duration}
        results={data.results}
        price={data.price}
        galleryCaption={data.galleryCaption}
        bookingUrl={ACUITY_URL}
        learnMoreUrl={data.hubLink?.href ?? '/services'}
        learnMoreLabel={data.hubLink?.text ?? 'All Services'}
      />

      <ServiceDetail data={data} />

      {/* Render testimonial if it exists in the service data */}
      {data.testimonial && (
        <data.testimonial.component
          {...(data.testimonial.props || {})}
          bgVariant={testimonialBgVariant}
        />
      )}

      <FAQSection faqs={data.faqs} bgVariant={faqBgVariant} />

      <Footer ctaBgVariant={footerCtaVariant} />
    </div>
  )
}

export default ServicePage
