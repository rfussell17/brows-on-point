import FAQSection from '@/components/faq-section'
import TestimonialTwo from '@/components/media/testimonial-two'
import { allServices } from '@/components/services/service-data'
import Link from 'next/link'

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
      <div className="bg-primary px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
          <h1 className="text-5xl text-white sm:text-7xl">Our Services</h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">
            Welcome to Brows on Point, where beauty meets affordability and
            expertise. Since 2016, we've been helping clients discover their
            most confident selves through personalized aesthetic services.
          </p>
        </div>
      </div>

      <div className="flex min-h-[calc(80vh-theme(space.40))] items-center justify-center bg-light px-6">
        <div className="grid w-full max-w-4xl grid-cols-1 gap-12 py-16 sm:py-24">
          {allServices.map((service) => (
            <Link
              href={`/${service.slug}`}
              key={service.slug}
              className="group block"
            >
              <div className="flex overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="w-32 flex-shrink-0">
                  <img
                    src={service.thumbnail || '/api/placeholder/128/128'}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow p-6">
                  <h2 className="mb-2 text-2xl font-bold text-primary group-hover:text-primary-mid">
                    {service.title}
                  </h2>
                  <p className="mb-4 text-gray-600">
                    {service.shortDescription}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>
                      <strong>Duration:</strong> {service.duration}
                    </span>
                    <span>{service.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <TestimonialTwo />

      <FAQSection faqs={faqs} />
    </div>
  )
}

export default ServicesPage
