import { Link } from '@/components/link'
import Image from 'next/image'

export interface ServiceCardItem {
  title: string
  description: string
  href: string
  image?: string
}

/**
 * A service card on the All Services page. Services without a photo yet get a
 * text-only card rather than a placeholder box.
 */
export function ServiceCard({
  title,
  description,
  href,
  image,
}: ServiceCardItem) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-primary-800 ring-1 ring-secondary-700 transition-colors hover:bg-primary-700 hover:ring-secondary-500"
    >
      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            fill
            src={image}
            alt={title}
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lead text-light">{title}</h3>
        <p className="mt-2 whitespace-pre-line text-body text-light/70">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-body font-semibold text-secondary-300">
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
