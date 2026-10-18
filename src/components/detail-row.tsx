import Link from 'next/link'

const services = [
  {
    name: 'Lashes',
    description: [
      'Achieve a flawless, lifted and lasting lash result with my lash lift and tint services!',
      'By lifting and curling the lashes from the bottom up, giving the lashes a longer appearance without the need of damaging lash curlers or daily mascara!',
      'Perfect for clients looking to boost their natural lashes without damaging extensions.',
    ],
    href: '/services',
  },
  {
    name: 'Brows',
    description: [
      'Get beautifully shaped and tinted brows, or go semi-permanent with microblading and powder brows.',
      'Whether it’s a subtle enhancement or a bold statement, I ensure you will have one less thing to worry about in your morning routine.',
      'Get up and go!',
    ],
    href: '/services',
  },
  {
    name: 'Permanent Makeup',
    description: [
      'Make your daily get-ready routine a little easier! Depending on the service, results can last 1-3 years!',
      'Achieve a natural/soft result, or something bold/defined that saves you time every day.',
    ],
    href: '/services',
  },
  {
    name: 'Smile Services',
    description: [
      'Brighten your smile with teeth whitening, or add a bit of sparkle with genuine Swarovski tooth gems.',
    ],
    href: '/services',
  },
]

interface DetailRowProps {
  bgVariant?: 'primary' | 'primary-950'
}

const DetailRow: React.FC<DetailRowProps> = ({ bgVariant = 'primary' }) => {
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'

  return (
    <div className={`${bgClass} py-28 sm:py-36`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-heading text-light">
            Feel Wonderful Inside and Out
          </h2>
          <p className="mt-6 text-gray-100">
            I offer a variety of beauty and self-care services to help you look
            and feel your best. From enhancing your lashes and brows, to
            permanent makeup services. There’s something for everyone here.
            Here’s a closer look at some of my popular services:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="rounded-xl bg-primary-800 px-2 py-2 text-center text-body font-semibold text-light ring-1 ring-secondary-700">
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-body text-gray-100">
                  <p className="flex-auto">{service.description.join(' ')}</p>
                  <p className="mt-4">
                    <Link href={service.href} className="text-body text-light">
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
