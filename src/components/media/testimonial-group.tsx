import { testimonials } from '@/lib/testimonials'
import { Container } from '../container'

interface TestimonialGroupProps {
  bgVariant?: 'primary' | 'primary-950'
  /** Set false when the page already has its own heading and intro. */
  showHeading?: boolean
}

const TestimonialGroup: React.FC<TestimonialGroupProps> = ({
  bgVariant = 'primary-950',
  showHeading = true,
}) => {
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'

  return (
    <div className={`${bgClass} py-24 sm:py-32`}>
      <Container>
        {showHeading && (
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-heading text-light">Testimonials</h2>
            <p className="mt-6 text-lead text-gray-100">
              I&apos;ve had the privilege of taking care of hundreds of clients
              in the Okanagan since 2016.
            </p>
          </div>
        )}
        <div
          className={`mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none ${showHeading ? 'mt-16 sm:mt-20' : ''}`}
        >
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.author.name}-${index}`}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-primary-800 p-8 text-body ring-1 ring-secondary-700">
                  <blockquote className="text-light/90">
                    <p className="whitespace-pre-line">{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    {/* <Image
                      alt={testimonial.author.name}
                      src={testimonial.author.imageUrl}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full bg-primary-50"
                    /> */}
                    <div>
                      <div className="font-fancy text-lead text-light">
                        {testimonial.author.name}
                      </div>
                      {testimonial.source && (
                        <div className="text-small text-light/60">
                          {testimonial.source} review
                        </div>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TestimonialGroup
