'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export interface GalleryGroup {
  title: string
  href: string
  images: string[]
}

/** Service photos grouped by service; tapping one opens it full size. */
export default function GalleryGrid({ groups }: { groups: GalleryGroup[] }) {
  const [open, setOpen] = useState<{ src: string; title: string } | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) dialog.current?.showModal()
    else dialog.current?.close()
  }, [open])

  return (
    <>
      <div className="flex flex-col gap-20">
        {groups.map((group) => (
          <section key={group.href} aria-labelledby={`g-${group.href}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h2 id={`g-${group.href}`} className="text-heading text-light">
                {group.title}
              </h2>
              <Link
                href={group.href}
                className="text-body font-semibold text-secondary-300 hover:text-light"
              >
                View {group.title} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.images.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setOpen({ src, title: group.title })}
                  className="relative aspect-square w-full overflow-hidden rounded-xl ring-1 ring-secondary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
                  aria-label={`Enlarge ${group.title} photo`}
                >
                  <Image
                    fill
                    src={src}
                    alt={group.title}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-300 hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        className="m-auto max-h-[90vh] w-[min(90vw,56rem)] rounded-2xl bg-primary-950 p-0 backdrop:bg-black/80"
      >
        {open && (
          <div className="relative">
            <Image
              src={open.src}
              alt={open.title}
              width={1600}
              height={1600}
              className="h-auto max-h-[90vh] w-full object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-light hover:bg-black/80"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}
