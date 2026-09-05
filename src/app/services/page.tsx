import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import TestimonialMakeup from '@/components/media/testimonial-makeup'
import { ImagePlaceholder } from '@/components/services/image-placeholder'
import {
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
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
    title: 'Smile Services',
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

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-primary py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl text-light sm:text-7xl">My Services</h1>
            <p className="mt-8 text-lg leading-8 text-gray-100">
              Welcome to Brows on Point, where beauty meets affordability and
              expertise. Since 2016, I&apos;ve been helping clients discover
              their most confident selves through personalized aesthetic
              services.
            </p>
          </div>
        </Container>
      </div>

      {/* Category rows */}
      <div className="bg-primary-950 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32">
        <Container>
          <div className="flex flex-col gap-20">
            {categories.map((category) => (
              <div
                key={category.href}
                className="grid grid-cols-1 items-center gap-x-12 gap-y-8 lg:grid-cols-2"
              >
                <div>
                  <h2 className="text-5xl text-light">
                    {category.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-100">
                    {category.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {category.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-base text-gray-100"
                      >
                        <CheckIcon
                          className="h-4 w-4 flex-none text-secondary-300"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.href}
                    className="mt-6 inline-flex rounded-md bg-primary px-4 py-2.5 text-base font-semibold text-light shadow-sm hover:opacity-90"
                  >
                    Explore {category.title}
                  </Link>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <ImagePlaceholder className="aspect-square rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <TestimonialMakeup bgVariant="primary" />

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
