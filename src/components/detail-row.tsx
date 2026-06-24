import Link from 'next/link'

const services = [
  {
    name: 'Lash Lifts',
    description:
      'Achieve a flawless, lifted lash look with our professional lash lift services. Perfect for clients looking to boost their natural lashes without the need for extensions or mascara.',
    href: '/lash-lift',
  },
  {
    name: 'Brow Services',
    description:
      'Get perfectly shaped and tinted brows with our brow services. Whether it’s a subtle enhancement or a bold statement, we ensure your brows look natural and polished.',
    href: '/brow-services',
  },
  {
    name: 'Permanent Makeup',
    description:
      'Enhance your features with permanent makeup, including lash enhancements, eyeliner, and more. Achieve a natural, subtle look that saves you time and effort every day.',
    href: '/permanent-makeup',
  },
]

const DetailRow: React.FC = () => {
  return (
    <div className="bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="xs:text-4xl text-6xl text-primary">
            Feel Wonderful Inside and Out
          </h2>
          <p className="text-md mt-6 leading-8 text-dark">
            We offer a variety of beauty and self-care services at Brows on
            Point to help you look and feel your best. From enhancing your
            lashes and brows to expert permanent makeup techniques, there’s
            something for everyone. Here’s a closer look at some of our popular
            services:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="rounded-xl bg-primary-light px-2 py-2 text-center text-base font-semibold leading-7 text-dark">
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-dark">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-4">
                    <Link
                      href={service.href}
                      className="text-sm leading-6 text-dark"
                    >
                      <strong>View {service.name}</strong>
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default DetailRow
