import ContactForm from '@/components/contact-form'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { BreadcrumbJsonLd } from '@/components/json-ld/breadcrumb'
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
  ogMeta,
} from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    'Contact Brows on Point in West Kelowna to book an appointment or have any questions about the services I offer.',
  openGraph: ogMeta(
    '/og/contact-og_brows-on-point.jpg',
    'Contact Brows on Point',
  ),
}

export default function ContactPage() {
  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <div className="bg-primary px-6 py-28 sm:py-36 lg:px-8">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-display text-light">Contact Brows on Point</h1>
            <p className="mt-6 text-lead text-gray-100">
              Serving West Kelowna. The fastest way to book with me is to book
              directly online. For anything else, see below.
            </p>
          </div>
        </Container>
      </div>

      <div
        id="contact-form"
        className="scroll-mt-24 bg-primary-950 px-6 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32 lg:px-8"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-heading text-light">Contact Us</h2>
            <p className="mt-6 text-lead text-gray-100">
              I always love to hear from my clients, and potential clients. Feel
              free to get in touch today to learn more about Brows on Point -
              Kelowna, and what we have to offer!
            </p>
          </div>
          <ContactForm />
        </Container>
      </div>

      <div className="bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-lead text-light">Hours</h2>
              <div className="mt-2 text-body text-gray-100">
                <p>Monday–Saturday: 9am–9pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h2 className="text-lead text-light">Parking & Directions</h2>
              <div className="mt-2 text-body text-gray-100">
                <p>Street parking is available nearby.</p>
              </div>
            </div>

            <div>
              <h2 className="text-lead text-light">Address</h2>
              <p className="mt-2 text-body text-gray-100">{BUSINESS_ADDRESS}</p>
            </div>

            <div>
              <h2 className="text-lead text-light">Phone</h2>
              <p className="mt-2 text-body text-gray-100">{BUSINESS_PHONE}</p>
            </div>

            <div>
              <h2 className="text-lead text-light">Email</h2>
              <p className="mt-2 text-body text-gray-100">
                <a href={`mailto:${BUSINESS_EMAIL}`} className="underline">
                  {BUSINESS_EMAIL}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lead text-light">Payment Methods</h2>
              <p className="mt-2 text-body text-gray-100">
                Cash, debit, credit, and e-transfer.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <Link
              href={ACUITY_URL}
              className="inline-flex rounded-md bg-light px-4 py-2.5 text-body font-semibold text-primary shadow-sm hover:bg-primary-50"
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
        bgVariant="primary-950"
        cta={BOOKING_CTA}
      />

      <Footer />
    </div>
  )
}
