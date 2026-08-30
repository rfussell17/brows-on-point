import type { ReactNode } from 'react'
import { Container } from '../container'

export interface InfoBannerSection {
  heading: string
  content: ReactNode
}

interface InfoBannerProps {
  sections: InfoBannerSection[]
  bgVariant?: 'primary' | 'primary-950'
}

/**
 * A full-bleed banner styled like the "Choose Your Service" options module —
 * dark section, dark accent cards — for standalone heading/paragraph content
 * such as the "Brow Mapping: The First Step" explainer on the microblading
 * page. Named so any page needing this pattern styles it the same way.
 */
const InfoBanner: React.FC<InfoBannerProps> = ({
  sections,
  bgVariant = 'primary-950',
}) => {
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'

  return (
    <div className={`relative ${bgClass} py-24 sm:py-32`}>
      <Container>
        <div className="flex flex-col space-y-6">
          {sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-lg bg-primary-800 p-6 ring-1 ring-secondary-700"
            >
              <h3 className="text-lg font-semibold text-light">
                {section.heading}
              </h3>
              <div className="prose prose-sm prose-invert mt-3 max-w-none leading-7 text-light/80">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default InfoBanner
