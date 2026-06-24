'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="relative bg-light">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-light lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full bg-primary-light px-3 py-1 text-sm leading-6 text-gray-700">
                  <strong className="text-gray-800">Brows on Point </strong>–
                  Home of the exclusive{' '}
                  <span className="font-fancy text-black">
                    <strong>BOMB</strong>
                  </span>{' '}
                  lift
                </div>
              </div>
              <h1 className="pb-2 text-4xl text-primary sm:text-6xl">
                Affordable Esthetic Treatments in West Kelowna
              </h1>
              <p className="text-md mt-6 leading-8 text-gray-600">
                At Brows on Point, we specialize in providing safe, affordable,
                and high-quality esthetic treatments in Kelowna. Whether you
                need precision <strong>brow shaping, lash lifts, </strong>or{' '}
                <strong>teeth treatments</strong>, our modern, private clinic
                ensures a comfortable experience. We’re dedicated to enhancing
                your natural beauty with treatments tailored to <em>your</em>{' '}
                needs, all in a welcoming and clinical environment.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="https://app.acuityscheduling.com/schedule.php?owner=15235407"
                  className="text-md rounded-md bg-primary px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-primary-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Book Now
                </Link>
                <Link
                  href="/services"
                  className="text-md font-semibold leading-6 text-dark"
                >
                  All Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          alt=""
          width={1000}
          height={800}
          src="/hero_brows_on_point_kelowna.jpg"
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
        />
      </div>
    </div>
  )
}

export default Hero
