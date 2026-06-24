import React from 'react'
import FAQSection from '../faq-section'
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
      <ServiceHeader
        title={data.title}
        introText={data.description}
        descriptionText={data.about}
        imageSrc={data.headerImage}
        imageAlt={`${data.title} service`}
        duration={data.duration}
        results={data.results}
        price={data.price}
        bookingUrl="https://app.acuityscheduling.com/schedule.php?owner=15235407"
        learnMoreUrl={`/${data.slug}`}
      />

      <ServiceDetail data={data} className="mt-16" />

      {/* Render testimonial if it exists in the service data */}
      {data.testimonial && (
        <data.testimonial.component {...(data.testimonial.props || {})} />
      )}

      <FAQSection faqs={data.faqs} />
    </div>
  )
}

export default ServicePage
