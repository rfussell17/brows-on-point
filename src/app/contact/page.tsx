import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import {
  ACUITY_URL,
  BOOKING_CTA,
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    'Contact Brows on Point in West Kelowna to book an appointment or ask a question about my lash, brow, permanent makeup, and teeth whitening services.',
}

export default function ContactPage() {
  return (
    <div>
      <div className="bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl text-light sm:text-5xl">
              Contact Brows on Point
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Serving West Kelowna. The fastest way to reach me is to book
              directly online. For anything else, see below.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-primary-950 px-6 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-light">Hours</h2>
              <div className="mt-2 text-base leading-7 text-gray-100">
                <p>Monday–Saturday: 9am–9pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-light">
                Parking & Directions
              </h2>
              <div className="mt-2 text-base leading-7 text-gray-100">
                <p>Street parking is available nearby.</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-light">Address</h2>
              <p className="mt-2 text-base leading-7 text-gray-100">
                {BUSINESS_ADDRESS}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-light">Phone</h2>
              <p className="mt-2 text-base leading-7 text-gray-100">
                {BUSINESS_PHONE}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-light">Email</h2>
              <p className="mt-2 text-base leading-7 text-gray-100">
                {BUSINESS_EMAIL}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-light">
                Payment Methods
              </h2>
              <p className="mt-2 text-base leading-7 text-gray-100">
                Cash, debit, credit, and e-transfer.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <Link
              href={ACUITY_URL}
              className="inline-flex rounded-md bg-light px-4 py-2.5 text-base font-semibold text-primary shadow-sm hover:bg-primary-50"
            >
              Book an Appointment
            </Link>
          </div>
        </Container>
      </div>

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
