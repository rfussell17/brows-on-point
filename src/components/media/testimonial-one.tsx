import Image from 'next/image'

interface TestimonialProps {
  /** Alternates against whatever section precedes this one, so two identically-coloured dark sections never land back to back. */
  bgVariant?: 'primary' | 'primary-950'
}

const TestimonialOne: React.FC<TestimonialProps> = ({
  bgVariant = 'primary',
}) => {
  const bgClass = bgVariant === 'primary-950' ? 'bg-primary-950' : 'bg-primary'
  const sectionRingClass =
    bgVariant === 'primary-950' ? 'ring-1 ring-inset ring-secondary-700' : ''

  return (
    <section
      className={`relative isolate overflow-hidden ${bgClass} ${sectionRingClass} px-6 lg:px-8`}
    >
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-7xl">
        {/* Background Elements */}
        <div
          className={`lg:-mr-26 absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] ${bgClass} shadow-xl shadow-primary-600/10 ring-1 ring-secondary sm:mr-20 md:mr-0 lg:right-full lg:origin-center`}
        />

        {/* Testimonial Content */}
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          {/* Testimonial Quote */}
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="leading-8 text-light sm:text-xl">
              <p>
                &ldquo;Jamie takes pride in her work and is an absolute
                perfectionist. If you are thinking of getting any services done
                by Jamie, think no more! This is the place to go!! She&apos;s
                done my Keratin Lash Lift &amp; Tint many times and I would not
                let anyone else touch my lashes - Jamie is AMAZING and I wish I
                could give more than a 5 star review!&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Profile Image */}
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <Image
              alt="Karina"
              src="/testimonials/karina.png"
              width={576}
              height={576}
              className="rounded-xl bg-gray-100"
            />
          </div>

          {/* Figcaption */}
          <figcaption className="text-lg lg:col-start-1 lg:row-start-3">
            <div className="font-fancy text-3xl text-light">Karina B.</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default TestimonialOne
