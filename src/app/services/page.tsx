import { Container } from '@/components/container'
import FAQSection from '@/components/faq-section'
import { Link } from '@/components/link'
import TestimonialTwo from '@/components/media/testimonial-two'
import { ImagePlaceholder } from '@/components/services/image-placeholder'
import { CheckIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Services',
  description:
    'Explore all beauty services at Brows on Point: lash lifts, brow enhancements, permanent makeup, and teeth whitening in West Kelowna.',
  robots: {
    index: false,
    follow: false,
  },
}

const categories = [
  {
    title: 'Brows',
    description:
      'From a quick tint and shape to semi-permanent results, my brow services are built around finding the shape that actually suits your face — not a one-size-fits-all template.',
    href: '/brows',
    highlights: ['Eyebrow Tint & Shape', 'Microblading', 'Powder Brows'],
  },
  {
    title: 'Lashes',
    description:
      "Lifted, darker lashes without extensions, or a fast tint that skips the daily mascara. Every lash appointment is with Jamie, so you're never explaining your preferences to someone new.",
    href: '/lashes',
    highlights: [
      'Lash Lift and Tint',
      'Lash & Brow Tinting',
      'Lash Growth Serum',
    ],
  },
  {
    title: 'Permanent Makeup',
    description:
      'Semi-permanent and permanent enhancements for brows, eyes, and touch-ups — including saline removal if you need to correct or remove existing work.',
    href: '/permanent-makeup',
    highlights: [
      'Microblading',
      'Powder Brows',
      'Permanent Eyeliner',
      'Saline PMU Removal',
    ],
  },
  {
    title: 'Smile',
    description:
      'Brighten your smile with in-studio teeth whitening, or add a bit of sparkle with a genuine Swarovski crystal tooth gem.',
    href: '/smile',
    highlights: [
      'Teeth Whitening',
      'Sensitive-Teeth Whitening',
      'Swarovski Tooth Gems',
    ],
  },
  {
    title: 'Skin Tightening',
    description:
      'Non-invasive radiofrequency skin tightening for the face, neck, and jowls — a single session or a 3-session package, depending on your goals.',
    href: '/skin-tightening',
    highlights: [
      'Radiofrequency treatment',
      'Face, neck & jowl area',
      '3-session package available',
    ],
  },
]

const faqs = [
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

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-primary px-6 pb-12 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-20">
          <h1 className="text-5xl text-light sm:text-7xl">My Services</h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">
            Welcome to Brows on Point, where beauty meets affordability and
            expertise. Since 2016, I&apos;ve been helping clients discover
            their most confident selves through personalized aesthetic services.
          </p>
        </div>
      </div>

      {/* Category rows */}
      <div className="bg-primary-light py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-20">
            {categories.map((category, index) => (
              <div
                key={category.href}
                className="grid grid-cols-1 items-center gap-x-12 gap-y-8 lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="grid grid-cols-2 gap-4">
                    <ImagePlaceholder className="aspect-square rounded-2xl" />
                    <ImagePlaceholder className="aspect-square rounded-2xl" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                    {category.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {category.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {category.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckIcon
                          className="h-4 w-4 flex-none text-secondary"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.href}
                    className="mt-6 inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-light shadow-sm hover:opacity-90"
                  >
                    Explore {category.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <TestimonialTwo />

      <FAQSection faqs={faqs} />
    </div>
  )
}

export default ServicesPage
