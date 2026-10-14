import { ACUITY_URL } from '@/lib/site'
import Image from 'next/image'
import Link from 'next/link'

interface LashLiftHomeProps {
  bgVariant?: 'primary' | 'primary-950'
}

export default function LashLiftHome({
  bgVariant = 'primary',
}: LashLiftHomeProps) {
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'

  return (
    <div className={`${bgClass} overflow-hidden py-28 sm:py-36`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-heading text-light">
                What is a Lash Lift?
              </h2>
              <p className="mt-6 text-body text-gray-100">
                A lash lift is a low-maintenance treatment that lifts and curls
                your natural lashes from bottom up, giving them a fuller and
                longer appearance. It&apos;s essentially a “perm” for your
                lashes, and can last <strong>6-12 weeks</strong> depending on
                the type of lift.
              </p>

              <p className="mt-6 text-body text-gray-100">
                Did you know? Brows on Point is essentially the &ldquo;OG&rdquo;
                for lash lifts in the Okanagan area!
              </p>

              <p className="mt-6 text-body text-gray-100">
                I offer 3 options: my exclusive BOMB Lift for a dramatic effect,
                the Keratin Lift for a natural look, or the Korean Lash Lift for
                a softer, more relaxed curl. All 3 provide long-lasting results.
                Post-care products are available for purchase, to nourish and
                enhance lash health and the longevity of your lash lift
              </p>
              <div className="mt-8">
                <Link
                  href={ACUITY_URL}
                  className="inline-flex rounded-md bg-light px-3.5 py-2.5 text-body font-semibold text-primary shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
                >
                  Book your Appointment
                </Link>

                <Link
                  href="/lash-lift"
                  className="px-3.5 text-body font-semibold text-light"
                >
                  Explore Lash Lifts <span aria-hidden="true">→</span>
                </Link>
              </div>
              <figure className="mt-16 rounded-r-lg border-l border-secondary-700 bg-primary-800 py-6 pl-8 pr-6 text-gray-100">
                <blockquote className="text-body">
                  <p>
                    “Recently had my Keratin Lash Lift and Tint done by Jamie
                    and I am in love! This is definitely a service I will
                    continue receiving. She walked me through the process and
                    explained everything she&apos;s doing as she&apos;s doing
                    it, which made me feel very comfortable. Her studio was very
                    clean, organized and welcoming.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-body">
                  <div>
                    <span className="font-fancy text-lead text-light">
                      Kyla S.
                    </span>{' '}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <Image
            src="/services/lashes/lashes-lift-keratin-before-after-01.jpg"
            alt="Lash lift and tint results"
            className="rounded-xl"
            width={800}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  )
}
