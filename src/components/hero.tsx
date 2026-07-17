'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-dusk relative min-h-[90vh]">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 flex min-h-[80vh] flex-col justify-center lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-16 sm:py-20 lg:px-8 lg:py-0 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-6 text-gray-600">
                  High-Quality Esthetic Treatments in West Kelowna
                </div>
              </div>
              <h1 className="sr-only">Brows on Point</h1>
              <Image
                src="/logo_white_bg.png"
                alt="Brows on Point"
                width={420}
                height={180}
                className="mix-blend-multiply"
                priority
              />
              <p className="mt-6 text-base leading-8 text-gray-600">
                Whether you need precision brow shaping, lash lifts, or teeth
                treatments, Brows on Point ensures a comfortable experience.
                Enhance your natural beauty with treatments tailored to{' '}
                <em>your</em> needs, all in a welcoming and clinical
                environment.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="https://app.acuityscheduling.com/schedule.php?owner=15235407"
                  className="rounded-md bg-tertiary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tertiary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-dark"
                >
                  Book Now
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-dark"
                >
                  All Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
        <Image
          alt=""
          width={1000}
          height={800}
          src="/jamie_fussell_brows_on_point_3.jpg"
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
        />
      </div>
    </div>
  )
}

export default Hero
