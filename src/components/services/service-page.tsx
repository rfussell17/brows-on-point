import { ACUITY_URL } from '@/lib/site'
import React from 'react'
import FAQSection from '../faq-section'
import { ServiceJsonLd } from '../json-ld/service'
import { Link } from '../link'
import type { ServiceData } from './service-data'
import ServiceDetail from './service-detail'
import ServiceHeader from './service-header'

interface ServicePageProps {
  data: ServiceData
  TestimonialComponent?: React.ComponentType
  testimonialProps?: Record<string, any>
}

const ServicePage: React.FC<ServicePageProps> = ({ data }) => {
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
        introText={data.description}
        descriptionText={data.about}
        duration={data.duration}
        results={data.results}
        price={data.price}
        galleryCaption={data.galleryCaption}
        bookingUrl={ACUITY_URL}
        learnMoreUrl={data.hubLink?.href ?? '/services'}
        learnMoreLabel={data.hubLink?.text ?? 'All Services'}
        secondaryCta={data.secondaryCta}
      />

      {data.policyNotice}

      <ServiceDetail data={data} className="mt-16" />

      {/* Render testimonial if it exists in the service data */}
      {data.testimonial && (
        <data.testimonial.component {...(data.testimonial.props || {})} />
      )}

      <FAQSection faqs={data.faqs} />

      {data.secondaryCta && (
        <div className="bg-primary-light py-12 text-center">
          <Link
            href={data.secondaryCta.href}
            className="inline-flex rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
          >
            {data.secondaryCta.text}
          </Link>
        </div>
      )}
    </div>
  )
}

export default ServicePage
