const TestimonialBrows: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-20 sm:py-28 lg:max-w-4xl">
        {/* Background Elements */}
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.tertiary),white)] opacity-20 lg:left-36" />
        <div className="shadow-primary-600/10 absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-primary shadow-xl ring-1 ring-secondary-dark sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />

        {/* Testimonial Content */}
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          {/* Testimonial Quote */}
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-xl leading-4 text-light sm:text-xl">
              <p>
                “Since starting with powder brows (after having microblading
                somewhere else) I can only give praise to Jamie for being an
                expert on the technique!{' '}
                <strong>
                  My only regret is not having found Jamie earlier...with my
                  skin type this should have been the way to go from the start.
                </strong>{' '}
                Very pleased with the results and encourage anyone to discuss
                with her what you are looking for. She will guide you on what
                makes the most sense depending on your skin type/facial
                features, etc. You will be in <em>very</em> good hands.”
              </p>
            </blockquote>
          </div>

          {/* Profile Image */}

          {/* Figcaption */}
          <figcaption className="text-lg lg:col-start-1 lg:row-start-3">
            <div className="font-fancy text-3xl text-light">Y. Tobar</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default TestimonialBrows
