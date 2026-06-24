'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
} from '@headlessui/react'

import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Link } from './link'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  {
    href: 'https://app.acuityscheduling.com/schedule.php?owner=15235407',
    label: 'Reserve Appointment',
  },
]

function DesktopNav() {
  return (
    <nav className="relative hidden text-white lg:flex">
      {links.map(({ href, label }) => {
        if (label === 'Why Us?') {
          return (
            <div key={label} className="relative flex">
              <Popover className="relative">
                <PopoverButton className="flex items-center px-4 py-6 font-medium text-primary data-[hover]:bg-black/[2.5%]">
                  {label}
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500" />
                </PopoverButton>
              </Popover>
            </div>
          )
        }
        return (
          <div key={href} className="relative flex">
            <Link
              href={href}
              className="flex items-center px-4 py-3 text-base font-medium text-white data-[hover]:bg-black/[2.5%]"
            >
              {label}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }) => (
          <div key={href} className="transition-opacity duration-200">
            <Link
              href={href}
              className="px-6 text-base font-medium text-gray-950"
            >
              {label}
            </Link>
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
    <Disclosure as="header">
      <div className="relative flex justify-around bg-primary">
        <div className="relative flex gap-6 py-3">
          <Link href="/" title="Home">
            <Image src="/logo_white.png" alt="Logo" width={100} height={50} />
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
