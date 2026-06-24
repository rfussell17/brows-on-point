import Image from 'next/image'

const TestimonialOne: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-20 sm:py-28 lg:max-w-4xl">
        {/* Background Elements */}
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.tertiary),white)] opacity-20 lg:left-36" />
        <div className="shadow-primary-600/10 lg:-mr-26 absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-primary shadow-xl ring-1 ring-secondary-dark sm:mr-20 md:mr-0 lg:right-full lg:origin-center" />

        {/* Testimonial Content */}
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          {/* Testimonial Quote */}
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="leading-8 text-light sm:text-xl">
              <p>
                "Jamie takes pride in her work and is an absolute perfectionist.
                If you are thinking of getting any services done by Jamie, think
                no more! This is the place to go!! She’s done my Keratin Lash
                Lift & Tint many times and I would not let anyone else touch my
                lashes - Jamie is AMAZING and I wish I could give more than a 5
                star review!"
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
              className="rounded-xl bg-primary-light"
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
