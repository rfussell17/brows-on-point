import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import {
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Jamie & Brows on Point',
  description:
    'Learn about Brows on Point, a West Kelowna beauty studio specializing in lash lifts, brow enhancements, and permanent makeup since 2016.',
  robots: {
    index: false,
    follow: false,
  },
}

const stats = [
  { label: 'Serving West Kelowna', value: '8 Years' },
  { label: 'Certified', value: '9x' },
  { label: 'Happy Clients', value: '1200+' },
]

export default function AboutPage() {
  return (
    <div>
      <main>
        {/* Hero */}
        <div className="bg-primary py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl text-light sm:text-7xl">
                About Brows on Point
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-100">
                Welcome to Brows on Point, where beauty meets affordability and
                expertise. Since 2016, I&apos;ve been helping clients discover
                their most confident selves through personalized aesthetic
                services.
              </p>
            </div>
          </Container>
        </div>

        {/* Story + image */}
        <div className="bg-primary-950 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h2 className="text-5xl text-light">My Story</h2>
                <div className="mt-6 space-y-6 text-base leading-7 text-gray-100">
                  <p>
                    <strong>
                      I started Brows on Point with a simple goal: to make
                      premium aesthetic treatments accessible to everyone.
                    </strong>{' '}
                    As a mother of two young children and an entrepreneur who
                    built this business from the ground up, I know how much good
                    it does to take an hour for yourself and leave feeling like
                    the best version of you.
                  </p>
                  <p>
                    My approach to permanent makeup artistry emphasizes
                    natural-looking results that enhance <em>your</em> unique
                    features. Whether it&apos;s creating soft, feathered brows
                    through microblading or designing subtle permanent eyeliner,{' '}
                    <strong>
                      every treatment is tailored to complement your natural
                      beauty while ensuring lasting results.
                    </strong>
                  </p>
                </div>
              </div>
              <Image
                alt="Jamie at Brows on Point"
                src="/jamie_brows_on_point.png"
                width={1000}
                height={1000}
                className="aspect-square w-full rounded-2xl object-cover shadow-xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-primary-800 p-6 text-center ring-1 ring-secondary-700 transition-colors hover:bg-primary-700 hover:ring-secondary-500"
                >
                  <dd className="text-4xl font-semibold text-light">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-base text-light/70">{stat.label}</dt>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Certifications */}
        <div className="bg-primary py-24 sm:py-32">
          <Container>
            <div className="mx-auto flex max-w-2xl flex-col gap-12 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-20">
              <Image
                alt="Jamie, Brows on Point"
                width={500}
                height={500}
                src="/jamie_brows_on_point_thumb.png"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                sizes="(min-width: 1024px) 384px, 100vw"
              />
              <div className="w-full flex-auto">
                <h2 className="text-5xl text-light">
                  Certifications
                </h2>
                <div className="mt-6 rounded-lg bg-primary-800 p-6 ring-1 ring-secondary-700">
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-base leading-7 text-gray-100 sm:grid-cols-2">
                    <li className="ml-6 list-disc">
                      Microblading Training Program
                    </li>
                    <li className="ml-6 list-disc">
                      Advanced Microblading Training Program
                    </li>
                    <li className="ml-6 list-disc">
                      Permanent Makeup Technician Training
                    </li>
                    <li className="ml-6 list-disc">
                      Hypertonic Saline Tattoo & Permanent Makeup Removal
                    </li>
                    <li className="ml-6 list-disc">
                      Lash Lift and Tint Training Program
                    </li>
                    <li className="ml-6 list-disc">
                      Fluffy Brow Latex Workshop
                    </li>
                    <li className="ml-6 list-disc">
                      Classic Brow Pattern Workshop
                    </li>
                    <li className="ml-6 list-disc">
                      Korean Lash Lift Technician Course
                    </li>
                    <li className="ml-6 list-disc">
                      Radio Frequency (RF) Facial Training
                    </li>
                    <li className="ml-6 list-disc">Skin Anatomy Workshop</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>

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
