import Image from 'next/image'
import Link from 'next/link'

export default function LashLiftHome() {
  return (
    <div className="overflow-hidden bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl text-primary sm:text-6xl">
                What is a Lash Lift?
              </h2>
              <p className="text-md mt-6 text-dark">
                A lash lift is a low-maintenance treatment that curls and lifts
                your natural lashes from base to tip, giving them a fuller
                appearance. It&apos;s essentially a &ldquo;perm&rdquo; for your lashes and can
                last
                <strong> 6-12 weeks</strong> depending on the type of lift.
              </p>

              <p className="text-md mt-6 text-dark">
                We offer two options: our exlusive{' '}
                <strong className="font-fancy font-bold"> BOMB </strong>Lift for
                a dramatic effect or the <strong>Keratin Lift</strong> for a
                natural look. Both provide long-lasting results. Post-care
                products are available to nourish and enhance lash health.
              </p>
              <div className="mt-8">
                <Link
                  href="https://app.acuityscheduling.com/schedule.php?owner=15235407"
                  className="inline-flex rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Reserve Appointment
                </Link>

                <Link
                  href="/lash-lift"
                  className="text-md px-3.5 font-semibold text-dark"
                >
                  Explore Lash Lifts <span aria-hidden="true">→</span>
                </Link>
              </div>
              <figure className="mt-16 border-l border-tertiary-dark pl-8 text-gray-600">
                <blockquote className="text-base leading-7">
                  <p>
                    “Recently had my Keratin Lash Lift and Tint done by Jamie
                    and I am in love! This is definitely a service I will
                    continue receiving. She walked me through the process and
                    explained everything she&apos;s doing as she&apos;s doing it, which
                    made me feel very comfortable. Her studio was very clean,
                    organized and welcoming.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Kyla S.</span>{' '}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <Image
            src="/services/bomb_lift_and_tint.jpg"
            alt="Product screenshot"
            className="rounded-xl"
            width={800}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}
