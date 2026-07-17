import FAQSection from '@/components/faq-section'
import TestimonialTwo from '@/components/media/testimonial-two'
import { allServices } from '@/components/services/service-data'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  description:
    'Explore all beauty services at Brows on Point — lash lifts, brow enhancements, permanent makeup, and teeth whitening in West Kelowna.',
  robots: {
    index: false,
    follow: false,
  },
}

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We specialize in permanent makeup, lash lifts, brow enhancements, and teeth whitening + gems. Each service is performed with the highest safety standards and customized to your unique features and preferences.',
  },
  {
    question: 'Is it safe?',
    answer:
      'Yes, all our procedures follow strict Public Health Guidelines. We use only single-use sterile needles and supplies, maintain rigorous sanitation protocols, and use dermatologist-tested products.',
  },
  {
    question: "What's the age requirement?",
    answer:
      'All clients must be 18 years or older and present valid ID at their appointment.',
  },
  {
    question: 'Do the procedures hurt?',
    answer:
      'While individual pain tolerance varies, we use medical-grade topical anesthetics before and during procedures to ensure your comfort.',
  },
  {
    question: 'What about aftercare?',
    answer:
      'Proper aftercare is crucial for optimal results. We provide detailed instructions for each service and include all necessary aftercare products with your treatment.',
  },
]

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-primary-dark px-6 pb-12 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-20">
          <h1 className="text-5xl text-white sm:text-7xl">Our Services</h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">
            Welcome to Brows on Point, where beauty meets affordability and
            expertise. Since 2016, we&apos;ve been helping clients discover
            their most confident selves through personalized aesthetic services.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <div className="bg-gradient-dusk py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {allServices.map((service) => (
              <Link
                href={`/${service.slug}`}
                key={service.slug}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-md">
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={service.thumbnail || '/api/placeholder/600/224'}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-primary group-hover:text-primary-mid">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-primary-light pt-4 text-sm text-dark">
                      <span>
                        <strong>Duration:</strong> {service.duration}
                      </span>
                      <span className="font-semibold text-primary">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <TestimonialTwo />

      <FAQSection faqs={faqs} />
    </div>
  )
}

export default ServicesPage
