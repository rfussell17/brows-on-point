import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ServiceHomeProps {
  title: string
  introText: string | ReactNode
  descriptionText: string | ReactNode
  imageSrc: string | StaticImageData
  imageAlt: string
  duration: string
  results: string
  price: string
  testimonial?: {
    quote: string
    author: string
  }
  bookingUrl?: string
  learnMoreUrl?: string
}

export default function ServiceHome({
  title,
  introText,
  descriptionText,
  imageSrc,
  imageAlt,
  duration,
  results,
  price,
  testimonial,
  bookingUrl = 'https://app.acuityscheduling.com/schedule.php?owner=15235407',
  learnMoreUrl = '/services',
}: ServiceHomeProps) {
  return (
    <div className="overflow-hidden bg-primary-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mb-8 mt-2 text-3xl text-primary sm:text-5xl">
                {title}
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {introText}
              </p>

              <p className="mt-6 text-base leading-7 text-gray-600">
                {descriptionText}
              </p>

              {/* Service Details Grid */}
              <div className="mb-16 mt-8 grid grid-cols-3 gap-2 rounded-lg bg-gray-50 p-6 ring-1 ring-gray-200">
                <div>
                  <h3 className="font-semibold text-gray-900">Duration</h3>
                  <p className="text-gray-700">{duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Results</h3>
                  <p className="text-gray-700">{results}</p>
                </div>
                <div className="">
                  <h3 className="font-semibold text-gray-900">Price</h3>
                  <p className="text-gray-700">{price}</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href={bookingUrl}
                  className="inline-flex rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Reserve Appointment
                </Link>

                <Link
                  href="/services"
                  className="px-3.5 text-sm font-semibold text-primary"
                >
                  All Services <span aria-hidden="true">→</span>
                </Link>
              </div>

              {testimonial && (
                <figure className="mt-16 border-l border-secondary pl-8 text-gray-600">
                  <blockquote className="text-base leading-7">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">
                        {testimonial.author}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="rounded-xl"
            width={800}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}
