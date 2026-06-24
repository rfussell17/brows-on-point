import type { Metadata } from 'next'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import type {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
} from 'react'
import { Container } from '../../components/container'
import { getWpPosts } from '../lib/wordpress'

export const metadata: Metadata = {
  description: '',
  robots: {
    index: false,
    follow: false,
  },
}

function Header() {
  return (
    <Container className="bg-primary py-28">
      <h1 className="text-6xl text-light">Brows On Point Blog</h1>
    </Container>
  )
}

export default async function BlogPage() {
  const posts = await getWpPosts()
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="space-y-12">
          {posts.map(
            (post: {
              id: Key | null | undefined
              featuredImage: { node: { sourceUrl: string | StaticImport } }
              title:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | Promise<AwaitedReactNode>
                | null
                | undefined
              slug: any
              excerpt: any
            }) => (
              <article
                key={post.id}
                className="flex flex-col gap-8 sm:flex-row sm:items-start"
              >
                <div className="relative w-full sm:w-1/3">
                  {post.featuredImage && (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title as string}
                      className="aspect-video w-full rounded-2xl bg-gray-100 object-cover"
                      width={800}
                      height={600}
                    />
                  )}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="w-full sm:w-2/3">
                  <div className="group relative">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 sm:text-2xl">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p
                      className="mt-4 line-clamp-3 text-base text-gray-600"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
