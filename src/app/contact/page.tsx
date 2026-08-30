import { Blocked } from '@/components/blocked'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import {
  ACUITY_URL,
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
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

      <div className="bg-light px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-primary">Hours</h2>
              <div className="mt-2 text-base leading-7 text-gray-600">
                <Blocked
                  source="Opening hours"
                  needs="Q40 — blank in the questionnaire. The single highest-impact blank overall; blocks this page, the footer, and the LocalBusiness schema."
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">
                Parking & Directions
              </h2>
              <div className="mt-2 text-base leading-7 text-gray-600">
                <Blocked
                  source="Parking & directions"
                  needs="Q49 — blank in the questionnaire. Needs Jamie's guidance on parking and finding the door."
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Address</h2>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {BUSINESS_ADDRESS}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Phone</h2>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {BUSINESS_PHONE}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Email</h2>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {BUSINESS_EMAIL}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">
                Payment Methods
              </h2>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Cash, debit, credit, and e-transfer.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <Link
              href={ACUITY_URL}
              className="inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-light shadow-sm hover:opacity-90"
            >
              Book an Appointment
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
