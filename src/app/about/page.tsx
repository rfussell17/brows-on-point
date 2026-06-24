import type { Metadata } from 'next'

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

// Type definitions for our data structures
type StatItem = {
  label: string
  value: string
}

type ValueItem = {
  name: string
  description: string
}

type TeamMember = {
  name: string
  role: string
  imageUrl: string
  location: string
}

// Our content data
const stats: StatItem[] = [
  { label: 'Serving West Kelowna', value: '8 Years' },
  { label: 'Certified', value: '9x' },
  { label: 'Happy Clients', value: '1200+' },
]

const values: ValueItem[] = [
  {
    name: 'Bomb Lift and Tint',
    description:
      'Exclusive biotin-infused lash lift treatment for dramatically lifted, stronger lashes that last 6-8 weeks. The most dramatic lift available.',
  },
  {
    name: 'Keratin Lash Lift and Tint',
    description:
      'Professional keratin lash enhancement that lifts, curls, and adds 25% more volume to natural lashes. Results last 8-12 weeks.',
  },
  {
    name: 'Powder Brows',
    description:
      'Long-lasting eyebrow enhancement creating a soft, filled-in look that lasts 2-3 years. Perfect for defining and perfecting brow shape.',
  },
  {
    name: 'Microblading',
    description:
      'Natural-looking eyebrow enhancement creating realistic hair strokes for fuller brows. Ideal for sparse or over-tweezed brows, lasting 9-12 months.',
  },
  {
    name: 'Permanent Eyeliner',
    description:
      'Subtle lash line enhancement for fuller-looking lashes and defined eyes. Enjoy smudge-free definition for 2-3 years.',
  },
  {
    name: 'Permanent Makeup Removal',
    description:
      'Safe, natural saline removal for unwanted permanent makeup and small tattoos. Gentle alternative to laser removal.',
  },
  {
    name: 'Teeth Whitening',
    description:
      'Professional teeth whitening using LED technology. Achieve 2-10 shades whiter teeth in one 60-minute session, lasting 6 months.',
  },
  {
    name: 'Swarovski Tooth Gems',
    description:
      'Sparkling Swarovski crystal gems for your smile, professionally applied to last 6-24 months. Custom designs available.',
  },
  {
    name: 'Lip Plumping Kit',
    description:
      'Day and night lip enhancement system for fuller, healthier lips. Includes plumping day treatment and nourishing night repair.',
  },
]

const team: TeamMember[] = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    location: 'Toronto, Canada',
  },
  // Add more team members as needed
]

const benefits: string[] = [
  'Permanent Makeup',
  'Advanced Microblade',
  'Teeth whitening',
  'Tooth gem technician',
  'Lash lift and tint',
  'Brow patterns',
  'Fluffy brow',
  'Blood born pathogens',
  'Permanent makeup removal',
]

// The main component
export default function AboutPage() {
  return (
    <div className="bg-gray-100">
      <main className="relative isolate">
        {/* Background gradient */}

        {/* Hero section */}
        <div className="bg-primary px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h1 className="text-5xl text-white sm:text-7xl">
              About Brows on Point
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">
              Welcome to Brows on Point, where beauty meets affordability and
              expertise. Since 2016, we've been helping clients discover their
              most confident selves through personalized aesthetic services.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-36 max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="m-auto grid max-w-4xl grid-cols-1 gap-8 text-base/7 text-gray-600 lg:grid-cols-1">
              <div>
                <p>
                  <strong>
                    {' '}
                    My journey began with a simple vision: to make premium
                    aesthetic treatments accessible to everyone.
                  </strong>{' '}
                  <br></br>
                  As a mother of two young children and an entrepreneur who
                  built this business from the ground up, I understand the
                  transformative power of self-care and its ability to make you
                  feel extraordinary both inside and out.
                </p>
                <p className="mt-8">
                  My approach to permanent makeup artistry emphasizes
                  natural-looking results that enhance <em>your</em> unique
                  features. Whether it's creating soft, feathered brows through
                  microblading or designing subtle permanent eyeliner,{' '}
                  <strong>
                    every treatment is tailored to complement your natural
                    beauty while ensuring lasting results.
                  </strong>
                </p>
              </div>
            </div>
            {/*

            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col-reverse gap-y-3 pl-6">
                  <dt className="text-base/7 text-gray-700">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl> */}
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            alt=""
            src="/jamie_brows_on_point.png"
            width={1000}
            height={1000}
            className="m-auto aspect-[9/4] max-w-5xl object-cover md:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto px-6 pt-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl text-primary sm:text-5xl">
              Popular Services
            </h2>
            <p className="mt-6 text-lg/8 text-gray-700">
              Transform your look with our signature beauty enhancements, each
              designed to accentuate your natural features. From dramatic lash
              lifts to long-lasting brow solutions, we offer premium aesthetic
              services at accessible prices.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 rounded-xl bg-primary-light p-6 text-base/7 text-gray-900 ring-2 ring-primary sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-primary">
                  {value.name}:
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 pb-32 pt-10">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <Image
                alt="Jamie - Brows on Point"
                width={500}
                height={500}
                src="/jamie_brows_on_point_thumb.png"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl text-primary sm:text-5xl">
                  Certifications
                </h2>
                <p className="mt-6 text-lg text-gray-700">
                  Your beauty is in expert hands. With comprehensive training in
                  advanced aesthetic techniques, we ensure safe, professional,
                  and beautiful results for every client.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-primary sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-7 w-5 flex-none"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
