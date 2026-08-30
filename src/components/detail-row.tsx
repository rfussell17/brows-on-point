import Link from 'next/link'

const services = [
  {
    name: 'Lashes',
    description:
      'Achieve a flawless, lifted lash look with my lash lift and tint services, or a fast lash and brow tint. Perfect for clients looking to boost their natural lashes without extensions.',
    href: '/lashes',
  },
  {
    name: 'Brows',
    description:
      'Get perfectly shaped and tinted brows, or go semi-permanent with microblading and powder brows. Whether it’s a subtle enhancement or a bold statement, I ensure your brows look natural and polished.',
    href: '/brows',
  },
  {
    name: 'Permanent Makeup',
    description:
      'Enhance your features with permanent makeup, including microblading, powder brows, permanent eyeliner, and more. Achieve a natural, subtle look that saves you time every day.',
    href: '/permanent-makeup',
  },
  {
    name: 'Smile',
    description:
      'Brighten your smile with professional teeth whitening, or add a bit of sparkle with genuine Swarovski tooth gems.',
    href: '/smile',
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
    <div className={`${bgClass} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl text-light sm:text-6xl">
            Feel Wonderful Inside and Out
          </h2>
          <p className="mt-6 text-base leading-8 text-gray-100">
            I offer a variety of beauty and self-care services at Brows on
            Point to help you look and feel your best. From enhancing your
            lashes and brows to expert permanent makeup techniques, there’s
            something for everyone. Here’s a closer look at some of my popular
            services:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="rounded-xl bg-primary-800 px-2 py-2 text-center text-base font-semibold leading-7 text-light ring-1 ring-secondary-700">
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-100">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-4">
                    <Link
                      href={service.href}
                      className="text-base leading-6 text-light"
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
