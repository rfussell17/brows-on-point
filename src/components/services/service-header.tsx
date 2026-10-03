import { ACUITY_URL } from '@/lib/site'
import {
  ClockIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
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
  /** Real photos for the header gallery grid, up to 4. Empty slots fall back to <ImagePlaceholder/>. */
  images?: string[]
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
  images = [],
  testimonial,
  bookingUrl = ACUITY_URL,
  learnMoreUrl = '/services',
  learnMoreLabel = 'All Services',
}: ServiceHomeProps) {
  const values: Record<(typeof stats)[number]['key'], string | ReactNode> = {
    duration,
    results,
    price,
  }

  // Brand logos (white artwork) get a dark tile and are never cropped.
  const isLogo = images[0]?.startsWith('/partners/') ?? false

  return (
    <div className="overflow-hidden bg-primary py-24 sm:py-32">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              {eyebrow && (
                <span className="inline-block rounded-full bg-secondary-900 px-3 py-1 text-small font-semibold tracking-wider text-secondary-200">
                  {eyebrow}
                </span>
              )}
              <h1 className="mb-8 mt-2 text-display text-light">{title}</h1>
              <p className="mt-6 text-body text-gray-100">{descriptionText}</p>

              <dl className="mt-8 grid grid-cols-3 gap-2 rounded-2xl bg-light p-6 shadow-sm">
                {stats.map(({ key, label, icon: Icon }) => (
                  <div key={key}>
                    <dt className="flex items-center gap-1.5 text-small font-semibold text-gray-500">
                      <Icon
                        className="h-4 w-4 text-secondary"
                        aria-hidden="true"
                      />
                      {label}
                    </dt>
                    <dd className="mt-1 text-body font-semibold text-primary">
                      {values[key]}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-x-3.5 gap-y-3">
                <Link
                  href={bookingUrl}
                  className="inline-flex rounded-md bg-light px-3.5 py-2.5 text-body font-semibold text-primary shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
                >
                  Reserve Appointment
                </Link>

                <Link
                  href={learnMoreUrl}
                  className="text-body font-semibold text-light"
                >
                  {learnMoreLabel} <span aria-hidden="true">→</span>
                </Link>
              </div>

              {testimonial && (
                <figure className="mt-16 border-l border-light/30 pl-8 text-gray-100">
                  <blockquote className="text-lead">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-body">
                    <div>
                      <span className="font-fancy text-lead text-light">
                        {testimonial.author}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            {images.length > 0 && images.length < 4 ? (
              // Fewer than four usable photos: show one large image instead of
              // a grid padded out with placeholders.
              <div
                className={`relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl ${isLogo ? 'bg-primary-800 ring-1 ring-secondary-700' : 'bg-light'}`}
              >
                <Image
                  fill
                  priority
                  src={images[0]}
                  alt={title}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={isLogo ? 'object-contain p-12' : 'object-cover'}
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl bg-light shadow-xl">
                {Array.from({ length: 4 }).map((_, i) =>
                  images[i] ? (
                    <div
                      key={i}
                      className="relative aspect-square w-full overflow-hidden"
                    >
                      <Image
                        fill
                        src={images[i]}
                        alt={title}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      key={i}
                      className="aspect-square w-full"
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
