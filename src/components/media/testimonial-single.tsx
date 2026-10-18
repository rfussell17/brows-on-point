import { findTestimonials } from '@/lib/testimonials'
import Image from 'next/image'

/** Real client portraits in public/testimonials, by author name. */
const PORTRAITS: Record<string, string> = {
  'Karina B': '/testimonials/testimonials-karina-portrait-01.png',
  'Carly M': '/testimonials/testimonials-carly-portrait-01.png',
  'Rain P': '/testimonials/testimonials-rain-portrait-01.png',
  'Stephanie K': '/testimonials/testimonials-stephanie-portrait-01.png',
}

interface TestimonialSingleProps {
  /** Author name from src/lib/testimonials.ts. */
  name: string
  /** Alternates against whatever section precedes this one, so two identically-coloured dark sections never land back to back. */
  bgVariant?: 'primary' | 'primary-950'
}

/** One large client quote, in the same layout as the home page's single testimonial. */
const TestimonialSingle: React.FC<TestimonialSingleProps> = ({
  name,
  bgVariant = 'primary',
}) => {
  const [quote] = findTestimonials([name])
  if (!quote) return null
  const portrait = PORTRAITS[quote.author.name]
  const bgClass = bgVariant === 'primary-950' ? 'bg-primary-950' : 'bg-primary'
  const sectionRingClass =
    bgVariant === 'primary-950' ? 'ring-1 ring-inset ring-secondary-700' : ''

  return (
    <section
      className={`relative isolate overflow-hidden ${bgClass} ${sectionRingClass} px-6 lg:px-8`}
    >
      <div className="relative mx-auto max-w-2xl py-28 sm:py-36 lg:max-w-4xl">
        <div
          className={`lg:-mr-26 absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] ${bgClass} shadow-xl shadow-primary-600/10 ring-1 ring-secondary sm:mr-20 md:mr-0 lg:right-full lg:origin-center`}
        />
        <figure
          className={`grid grid-cols-1 items-center gap-x-10 gap-y-8 ${portrait ? 'lg:grid-cols-[18rem_1fr]' : ''}`}
        >
          {portrait && (
            <Image
              alt={quote.author.name}
              src={portrait}
              width={576}
              height={576}
              className="w-16 rounded-xl bg-gray-100 lg:row-span-2 lg:w-72"
              sizes="(min-width: 1024px) 288px, 64px"
            />
          )}
          <blockquote className="text-lead text-light">
            <p className="whitespace-pre-line">{`“${quote.body}”`}</p>
          </blockquote>
          <figcaption className="text-body">
            <div className="font-fancy text-quote text-light">
              {quote.author.name}
            </div>
            {quote.source && (
              <div className="text-small text-light/60">
                {quote.source} review
              </div>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default TestimonialSingle
