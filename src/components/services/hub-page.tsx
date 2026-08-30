import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { ACUITY_URL } from '@/lib/site'
import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
import { ServiceCard } from './service-card'

export interface HubSpoke {
  title: string
  description: string
  href: string
  image: string | StaticImageData
}

interface HubPageProps {
  title: string
  intro: ReactNode
  spokes: HubSpoke[]
  trustBlock?: { heading: string; content: ReactNode }
  secondaryCta?: { text: string; href: string }
}

export default function HubPage({
  title,
  intro,
  spokes,
  trustBlock,
  secondaryCta,
}: HubPageProps) {
  return (
    <div>
      <div className="bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl text-light sm:text-5xl">{title}</h1>
            <div className="mt-6 text-lg leading-8 text-gray-100">{intro}</div>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <Link
                href={ACUITY_URL}
                className="inline-flex rounded-md bg-light px-4 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary-50"
              >
                Book Now
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex rounded-md border border-light px-4 py-2.5 text-sm font-semibold text-light hover:bg-light/10"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-light py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spokes.map((spoke) => (
              <ServiceCard
                key={spoke.href}
                title={spoke.title}
                description={spoke.description}
                href={spoke.href}
              />
            ))}
          </div>
        </Container>
      </div>

      {trustBlock && (
        <div className="bg-primary-light py-16 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                {trustBlock.heading}
              </h2>
              <div className="mt-4 text-base leading-7 text-gray-600">
                {trustBlock.content}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}
