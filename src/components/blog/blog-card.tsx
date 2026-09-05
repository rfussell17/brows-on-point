import { ImagePlaceholder } from '@/components/services/image-placeholder'
import Image from 'next/image'
import { Link } from '@/components/link'
import { formatPostDate, type BlogPost } from '@/lib/blog-types'

/**
 * Same card shell as <ServiceCard/> (bg-primary-800, ring-secondary-700) so
 * the blog reads as part of the same site, not a bolted-on section.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-primary-800 ring-1 ring-secondary-700 transition-colors hover:bg-primary-700 hover:ring-secondary-500"
    >
      {post.imageUrl ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            fill
            src={post.imageUrl}
            alt={post.title}
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <ImagePlaceholder className="aspect-[4/3] w-full" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-secondary-300">
          <span className="rounded bg-secondary-800 px-2 py-1 font-semibold tracking-wide text-secondary-200 uppercase">
            {post.category}
          </span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-light">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-base leading-6 text-light/70">
          {post.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-secondary-300">
          Read article
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
