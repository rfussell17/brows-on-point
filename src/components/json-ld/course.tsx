import { SITE_URL } from '@/lib/site'
import { parsePrice } from '@/lib/schema'

interface CourseInput {
  name: string
  description: string
  price: string
}

/** One Course entity per named course — schema.org's Course type describes a single course, so a page offering several (like /training) renders one script tag each. */
export function CourseJsonLd({ courses }: { courses: CourseInput[] }) {
  return (
    <>
      {courses.map((course) => {
        const value = parsePrice(course.price)
        const data = {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: course.name,
          description: course.description,
          provider: {
            '@type': 'LocalBusiness',
            name: 'Brows on Point',
            sameAs: SITE_URL,
          },
          ...(value !== null && {
            offers: { '@type': 'Offer', price: value, priceCurrency: 'CAD' },
          }),
        }
        return (
          <script
            key={course.name}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        )
      })}
    </>
  )
}
