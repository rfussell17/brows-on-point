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

import { ACUITY_URL } from '@/lib/site'
import {
  Bars2Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
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

const serviceCategories = [
  {
    href: '/brows',
    label: 'Brows',
    description: 'Tint & shape, microblading, powder brows',
  },
  {
    href: '/lashes',
    label: 'Lashes',
    description: 'Lash lift and tint, lash & brow tinting',
  },
  {
    href: '/permanent-makeup',
    label: 'Permanent Makeup',
    description: 'Microblading, powder brows, eyeliner, removal',
  },
  {
    href: '/smile',
    label: 'Smile',
    description: 'Teeth whitening, Swarovski tooth gems',
  },
  {
    href: '/skin-tightening',
    label: 'Skin Tightening',
    description: 'Non-invasive RF for face, neck, and body',
  },
]

const links = [{ href: ACUITY_URL, label: 'Reserve Appointment' }]

function DesktopNav() {
  return (
    <nav className="relative hidden text-light lg:flex">
      <div className="relative flex">
        <Popover className="relative">
          <PopoverButton className="flex items-center px-4 py-3 text-base font-medium text-light data-[hover]:bg-black/[2.5%]">
            Services
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom start"
            className="z-50 mt-2 w-72 rounded-xl bg-light p-2 shadow-lg ring-1 ring-gray-200 transition duration-150 ease-out data-[closed]:translate-y-1 data-[closed]:opacity-0"
          >
            {serviceCategories.map((category) => (
              <NavLink
                key={category.href}
                href={category.href}
                className="block rounded-lg px-3 py-2 hover:bg-secondary-50"
              >
                <div className="text-sm font-semibold text-primary">
                  {category.label}
                </div>
                <div className="text-xs text-gray-500">
                  {category.description}
                </div>
              </NavLink>
            ))}
            <NavLink
              href="/services"
              className="mt-1 block rounded-lg border-t border-gray-100 px-3 pt-3 text-sm font-semibold text-secondary hover:bg-secondary-50"
            >
              All Services
            </NavLink>
          </PopoverPanel>
        </Popover>
      </div>
      <div className="relative flex">
        <Link
          href="/about"
          className="flex items-center px-4 py-3 text-base font-medium text-light data-[hover]:bg-black/[2.5%]"
        >
          About
        </Link>
      </div>
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-light data-[hover]:bg-black/[2.5%]"
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
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
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
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <div className="px-6">
          <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Services
          </div>
          <div className="mt-2 flex flex-col gap-3">
            {serviceCategories.map((category) => (
              <NavLink
                key={category.href}
                href={category.href}
                className="text-base font-medium text-gray-950"
              >
                {category.label}
              </NavLink>
            ))}
            <NavLink
              href="/services"
              className="text-base font-medium text-secondary"
            >
              All Services
            </NavLink>
          </div>
        </div>
        <div className="transition-opacity duration-200">
          <NavLink
            href="/about"
            className="px-6 text-base font-medium text-gray-950"
          >
            About
          </NavLink>
        </div>
        {links.map(({ href, label }) => (
          <div key={href} className="transition-opacity duration-200">
            <NavLink
              href={href}
              className="px-6 text-base font-medium text-gray-950"
            >
              {label}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="sticky top-0 z-50">
      <div className="relative flex justify-around bg-primary">
        <div className="relative flex gap-6 py-3">
          <Link href="/" title="Home">
            <Image
              src="/favicon.png"
              alt="Brows on Point"
              width={38}
              height={38}
            />
          </Link>
          {banner && (
            <div className="relative hidden items-center p-3 lg:flex">
              {banner}
            </div>
          )}
        </div>
        <DesktopNav />
        <MobileNavButton />
      </div>
      <MobileNav />
    </Disclosure>
  )
}
