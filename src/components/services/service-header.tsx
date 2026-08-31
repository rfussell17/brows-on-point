import {
  ClockIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Container } from '../container'
import { ImagePlaceholder } from './image-placeholder'

interface ServiceHomeProps {
  title: string
  eyebrow?: string
  descriptionText: string | ReactNode
  duration: string
  results: string | ReactNode
  price: string | ReactNode
  galleryCaption?: string
  testimonial?: {
    quote: string
    author: string
  }
  bookingUrl?: string
  learnMoreUrl?: string
  learnMoreLabel?: string
}

const stats = [
  { key: 'duration', label: 'Duration', icon: ClockIcon },
  { key: 'results', label: 'Results', icon: SparklesIcon },
  { key: 'price', label: 'Price', icon: CurrencyDollarIcon },
] as const

export default function ServiceHome({
  title,
  eyebrow,
  descriptionText,
  duration,
  results,
  price,
  galleryCaption,
  testimonial,
  bookingUrl = 'https://app.acuityscheduling.com/schedule.php?owner=15235407',
  learnMoreUrl = '/services',
  learnMoreLabel = 'All Services',
}: ServiceHomeProps) {
  const values: Record<(typeof stats)[number]['key'], string | ReactNode> = {
    duration,
    results,
    price,
  }

  return (
    <div className="overflow-hidden bg-primary py-24 sm:py-32">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              {eyebrow && (
                <span className="inline-block rounded-full bg-secondary-900 px-3 py-1 text-xs font-semibold tracking-wider text-secondary-200">
                  {eyebrow}
                </span>
              )}
              <h1 className="mb-8 mt-2 text-5xl text-light sm:text-7xl">
                {title}
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-100">
                {descriptionText}
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-2 rounded-2xl bg-light p-6 shadow-sm">
                {stats.map(({ key, label, icon: Icon }) => (
                  <div key={key}>
                    <dt className="flex items-center gap-1.5 text-base font-semibold text-gray-500">
                      <Icon
                        className="h-4 w-4 text-secondary"
                        aria-hidden="true"
                      />
                      {label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-primary">
                      {values[key]}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-x-3.5 gap-y-3">
                <Link
                  href={bookingUrl}
                  className="inline-flex rounded-md bg-light px-3.5 py-2.5 text-base font-semibold text-primary shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
                >
                  Reserve Appointment
                </Link>

                <Link
                  href={learnMoreUrl}
                  className="text-base font-semibold text-light"
                >
                  {learnMoreLabel} <span aria-hidden="true">→</span>
                </Link>
              </div>

              {testimonial && (
                <figure className="mt-16 border-l border-light/30 pl-8 text-gray-100">
                  <blockquote className="text-lg leading-7">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-base">
                    <div>
                      <span className="font-fancy text-light">
                        {testimonial.author}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl bg-light shadow-xl">
              {Array.from({ length: 4 }).map((_, i) => (
                <ImagePlaceholder key={i} className="aspect-square w-full" />
              ))}
            </div>

            {galleryCaption && (
              <p className="mt-3 text-center text-base text-light/50">
                {galleryCaption}
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
