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

const values = [
  {
    name: 'Lash Lift and Tint',
    description:
      'Keratin, BOMB, or Korean lash lift and tint: lifted, darker lashes with no extensions, lasting 6-12 weeks depending on which you choose.',
  },
  {
    name: 'Powder Brows',
    description:
      'Semi-permanent eyebrow enhancement creating a soft, filled-in look. Perfect for defining and perfecting brow shape.',
  },
  {
    name: 'Microblading',
    description:
      'Natural-looking eyebrow enhancement creating realistic hair strokes for fuller brows. Ideal for sparse or over-tweezed brows, lasting 1-2 years.',
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
      'Professional teeth whitening using LED technology, lasting up to 6 months.',
  },
  {
    name: 'Swarovski Tooth Gems',
    description:
      'Genuine Swarovski crystal gems for your smile, professionally applied to last 6-24 months. Custom designs available.',
  },
]

export default function AboutPage() {
  return (
    <div>
      <main>
        {/* Hero */}
        <div className="bg-primary px-6 pb-12 sm:pb-16 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-20">
            <h1 className="text-5xl text-light sm:text-7xl">
              About Brows on Point
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">
              Welcome to Brows on Point, where beauty meets affordability and
              expertise. Since 2016, I&apos;ve been helping clients discover
              their most confident selves through personalized aesthetic
              services.
            </p>
          </div>
        </div>

        {/* Story + stats */}
        <div className="bg-primary-light py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-4xl text-primary sm:text-5xl">My Story</h2>
                <div className="mt-6 space-y-6 text-base leading-7 text-gray-600">
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
              <div className="flex flex-col gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-light p-6 shadow-sm ring-1 ring-primary-100"
                  >
                    <dd className="text-4xl font-semibold text-primary">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-sm text-gray-600">{stat.label}</dt>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            alt="Jamie at Brows on Point"
            src="/jamie_brows_on_point.png"
            width={1000}
            height={1000}
            className="m-auto aspect-[9/4] max-w-5xl object-cover md:rounded-3xl"
          />
        </div>

        {/* Popular services */}
        <div className="bg-light px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl text-primary sm:text-5xl">
              Popular Services
            </h2>
            <p className="mt-6 text-lg/8 text-gray-700">
              My signature beauty enhancements are designed to accentuate your
              natural features. From dramatic lash lifts to long-lasting brow
              solutions, I offer premium aesthetic services at accessible
              prices.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 rounded-xl bg-primary-50 p-6 text-base/7 text-gray-900 ring-1 ring-primary-100 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
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

        {/* Certifications */}
        <div className="bg-primary-light py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-12 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-20">
              <Image
                alt="Jamie, Brows on Point"
                width={500}
                height={500}
                src="/jamie_brows_on_point_thumb.png"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl text-primary sm:text-5xl">
                  Certifications
                </h2>
                <div className="mt-6 text-base leading-7 text-gray-600">
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Microblading Training Program</li>
                    <li>Advanced Microblading Training Program</li>
                    <li>Permanent Makeup Technician Training</li>
                    <li>Hypertonic Saline Tattoo & Permanent Makeup Removal</li>
                    <li>Lash Lift and Tint Training Program</li>
                    <li>Fluffy Brow Latex Workshop</li>
                    <li>Classic Brow Pattern Workshop</li>
                    <li>Korean Lash Lift Technician Course</li>
                    <li>Radio Frequency (RF) Facial Training</li>
                    <li>Skin Anatomy Workshop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
