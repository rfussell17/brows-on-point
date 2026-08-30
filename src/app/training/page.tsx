import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { ACUITY_URL } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lash Lift & Teeth Whitening Training',
  description:
    'Train with Brows on Point in West Kelowna. Hands-on lash lift and teeth whitening training courses for aspiring beauty professionals.',
}

const courses = [
  {
    name: 'Lash Lift Training',
    price: '$500',
    description:
      'Hands-on training in lash lift techniques, covering consultation, application, and aftercare.',
  },
  {
    name: 'Teeth Whitening Training',
    price: '$550',
    description:
      'Hands-on training in professional in-office teeth whitening, covering consultation, application, and aftercare.',
  },
]

export default function TrainingPage() {
  return (
    <div>
      <div className="bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl text-light sm:text-5xl">
              Lash Lift & Teeth Whitening Training
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Brows on Point offers hands-on training in two techniques: lash
              lift, and teeth whitening. I don&apos;t offer permanent makeup
              training.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-light px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.name}
                className="rounded-2xl bg-primary-50 p-8 shadow-sm ring-1 ring-primary-100"
              >
                <h2 className="text-xl font-semibold text-primary">
                  {course.name}
                </h2>
                <div className="mt-2 text-2xl font-semibold text-primary">
                  {course.price}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {course.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <h2 className="text-2xl font-semibold text-primary">
              Your Trainer
            </h2>
            <div className="mt-4 text-base leading-7 text-gray-600">
              <ul className="list-disc space-y-2 pl-6">
                <li>Microblading Training Program</li>
                <li>Advanced Microblading Training Program</li>
                <li>Permanent Makeup Technician Training</li>
                <li>Hypertonic Saline Tattoo & Permanent Makeup Removal</li>
                <li>Lash Lift and Tint Training Program</li>
                <li>Fluffy Brow Latex Workshop</li>
                <li>Classic Brow Pattern Workshop</li>
                <li>Korean Lash Lift Technician Course</li>
                <li>Radio Frequency (RF) Facial Training</li>
                <li>Skin Anatomy Workshop</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <Link
              href={ACUITY_URL}
              className="inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-light shadow-sm hover:opacity-90"
            >
              Book a Training Course
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
