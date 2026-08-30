import { Container } from '@/components/container'
import { Link } from '@/components/link'

/**
 * Placeholder for a route that exists (so redirects/sitemap/nav have a real
 * destination) but whose real copy is scheduled for a later Phase 2 build-order
 * slot — see BUILD-BRIEF.md §5.4. Not a <Blocked /> case: nothing here is a
 * missing fact, it's just not this page's turn yet.
 */
export function PagePending({ title, note }: { title: string; note?: string }) {
  return (
    <div className="bg-primary-light py-24 sm:py-32">
      <Container>
        <h1 className="text-4xl text-primary sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          {note ??
            "This page's content is scheduled in the Phase 2 build order and hasn't been written yet."}
        </p>
        <div className="mt-8">
          <Link
            href="https://app.acuityscheduling.com/schedule.php?owner=15235407"
            className="inline-flex rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:opacity-90"
          >
            Book Now
          </Link>
        </div>
      </Container>
    </div>
  )
}
