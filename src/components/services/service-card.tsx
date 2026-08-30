import { Link } from '@/components/link'
import { ImagePlaceholder } from './image-placeholder'

export interface ServiceCardItem {
  title: string
  description: string
  href: string
}

/**
 * Card used for both the /services hub-of-hubs grid and each category hub's
 * spoke grid — one shared card so the whole site's service listings read as
 * one visual system. Image is a placeholder until real photos exist; see
 * <ImagePlaceholder/>.
 */
export function ServiceCard({ title, description, href }: ServiceCardItem) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-primary-800 ring-1 ring-secondary-700 transition-colors hover:bg-primary-700 hover:ring-secondary-500"
    >
      <ImagePlaceholder className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-light">{title}</h3>
        <p className="mt-2 text-base leading-6 text-light/70">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-secondary-300">
          Explore
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
