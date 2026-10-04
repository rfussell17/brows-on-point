import { findTestimonials } from '@/lib/testimonials'

interface TestimonialQuotesProps {
  /** Author names from src/lib/testimonials.ts, in display order . */
  names: string[]
  heading?: string
  /** Alternates against whatever section precedes this one, so two identically-coloured dark sections never land back to back. */
  bgVariant?: 'primary' | 'primary-950'
}

/**
 * Service-page testimonials: one or more real client quotes picked from the
 * shared testimonial list, so the wording lives in one place.
 */
const TestimonialQuotes: React.FC<TestimonialQuotesProps> = ({
  names,
  heading = 'What Clients Say',
  bgVariant = 'primary',
}) => {
  const quotes = findTestimonials(names)
  if (quotes.length === 0) return null

  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'
  const columns =
    quotes.length === 1
      ? 'max-w-2xl'
      : quotes.length === 2 || quotes.length === 4
        ? 'max-w-4xl sm:grid-cols-2'
        : 'max-w-7xl sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className={`${bgClass} px-6 py-24 sm:py-32 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-heading text-light">{heading}</h2>
        <div className={`mx-auto mt-12 grid gap-8 ${columns}`}>
          {quotes.map((q) => (
            <figure
              key={q.author.name}
              className="rounded-2xl bg-primary-800 p-8 text-body ring-1 ring-secondary-700"
            >
              <blockquote className="text-light/90">
                <p className="whitespace-pre-line">{`“${q.body}”`}</p>
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-fancy text-lead text-light">
                  {q.author.name}
                </div>
                {q.source && (
                  <div className="text-small text-light/60">
                    {q.source} review
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialQuotes
