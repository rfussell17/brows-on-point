'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from '@headlessui/react'

import { serviceLinks } from '@/lib/service-links'
import { ACUITY_URL, CONTACT_FORM_URL } from '@/lib/site'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import {
  Bars2Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Link } from './link'

/**
 * Wraps Link with useClose() so selecting a link inside a Popover or
 * Disclosure panel closes it. Without this the panel stays open after
 * navigating, since the navbar lives in the root layout and never
 * unmounts between route changes. Safe to use outside a Popover/Disclosure
 * too — useClose() falls back to a no-op with no ancestor panel.
 */
function NavLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  const close = useClose()
  return (
    <Link href={href} className={className} onClick={() => close()}>
      {children}
    </Link>
  )
}

const links = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: CONTACT_FORM_URL, label: 'Contact' },
  { href: ACUITY_URL, label: 'Book an Appointment' },
]

const servicesButtonClass =
  'flex items-center px-4 py-3 text-body font-medium text-light data-[hover]:bg-black/[2.5%]'

function DesktopNav() {
  // The Services dropdown is a client-only Popover, so its button does nothing
  // until the page hydrates. Until then, render a plain link to /services with
  // identical styling so an early click still works, then swap in the Popover.
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  return (
    <nav className="relative hidden text-light lg:flex">
      <div className="relative flex">
        {!hydrated ? (
          <Link href="/services" className={servicesButtonClass}>
            Services
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          </Link>
        ) : (
          <Popover className="relative">
            <PopoverButton className={servicesButtonClass}>
              Services
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom start"
              className="z-50 mt-2 w-72 rounded-xl bg-primary-800 p-2 shadow-lg ring-1 ring-secondary-700 transition duration-150 ease-out data-[closed]:translate-y-1 data-[closed]:opacity-0"
            >
              {serviceLinks.map((service) => (
                <NavLink
                  key={service.href}
                  href={service.href}
                  className="block rounded-lg px-3 py-2 text-body font-normal text-light hover:bg-primary-700"
                >
                  {service.label}
                </NavLink>
              ))}
              <NavLink
                href="/services"
                className="mt-1 block rounded-lg border-t border-secondary-700 px-3 pt-3 text-body font-semibold text-secondary-300 hover:bg-primary-700"
              >
                All Services
              </NavLink>
            </PopoverPanel>
          </Popover>
        )}
      </div>
      <div className="relative flex">
        <Link
          href="/about"
          className="flex items-center px-4 py-3 text-body font-medium text-light data-[hover]:bg-black/[2.5%]"
        >
          About
        </Link>
      </div>
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-body font-medium text-light data-[hover]:bg-black/[2.5%]"
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-11 items-center justify-center rounded-full text-light transition-colors data-[hover]:bg-light/10 lg:hidden"
      aria-label="Toggle main menu"
    >
      {({ open }) =>
        open ? (
          <XMarkIcon className="size-6" />
        ) : (
          <Bars2Icon className="size-6" />
        )
      }
    </DisclosureButton>
  )
}

function MobileNav() {
  const pageLinks = [
    { href: '/about', label: 'About' },
    ...links.filter((link) => link.href !== ACUITY_URL),
  ]
  return (
    <DisclosurePanel className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-light/10 bg-primary-950 lg:hidden">
      <div className="flex flex-col gap-8 px-6 py-6">
        <div className="flex flex-col divide-y divide-light/10">
          {pageLinks.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              className="py-3 text-lead font-medium text-light"
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div>
          <div className="text-small font-semibold uppercase tracking-wider text-light/60">
            Services
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
            {serviceLinks.map((service) => (
              <NavLink
                key={service.href}
                href={service.href}
                className="text-body text-light/90"
              >
                {service.label}
              </NavLink>
            ))}
            <NavLink
              href="/services"
              className="text-body font-semibold text-secondary-300"
            >
              All Services →
            </NavLink>
          </div>
        </div>
        <NavLink
          href={ACUITY_URL}
          className="block rounded-full bg-light py-3 text-center text-body font-semibold text-primary shadow-sm"
        >
          Book an Appointment
        </NavLink>
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const logo = (
    <Link href="/" title="Home">
      <Image
        src="/brand/brand-favicon-mark-01.png"
        alt="Brows on Point"
        width={38}
        height={38}
      />
    </Link>
  )

  return (
    <Disclosure as="header" className="sticky top-0 z-50">
      {/* Desktop: logo, then the full menu. */}
      <div className="relative hidden justify-around bg-primary lg:flex">
        <div className="relative flex gap-6 py-3">
          {logo}
          {banner && (
            <div className="relative flex items-center p-3">{banner}</div>
          )}
        </div>
        <DesktopNav />
      </div>

      {/* Phones: menu and contact left, logo centred, booking right, so
          contacting and booking both stay one tap away in the sticky bar. */}
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-light/10 bg-primary px-3 lg:hidden">
        <div className="flex items-center gap-1 justify-self-start">
          <MobileNavButton />
          <Link
            href={CONTACT_FORM_URL}
            aria-label="Contact Me"
            className="flex size-11 shrink-0 items-center justify-center rounded-full text-light transition-colors hover:bg-light/10"
          >
            <EnvelopeIcon className="size-6" aria-hidden="true" />
          </Link>
        </div>
        {logo}
        <Link
          href={ACUITY_URL}
          className="inline-flex h-10 shrink-0 items-center justify-self-end whitespace-nowrap rounded-full bg-light px-4 text-small font-semibold tracking-wide text-primary shadow-sm transition-colors hover:bg-primary-50"
        >
          Book Now
        </Link>
      </div>
      <MobileNav />
    </Disclosure>
  )
}
