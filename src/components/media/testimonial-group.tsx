interface Testimonial {
  body: string
  author: {
    name: string
    imageUrl: string
  }
}

const testimonials: Testimonial[] = [
  {
    body: "Recently had my keratin lash lift and tint done by Jamie and I am in love! This is definitely a service I will continue receiving. She walked me through the process and explained everything she's doing as she's doing it, which made me feel very comfortable. Her studio was very clean, organized and welcoming. And the little take-home after-treatment bag was cute! I can't wait to try the lip plump treatment! I will recommend this service, and if I decide to get permanent makeup down the road I will be booking through Jamie at Brows on Point",
    author: {
      name: 'Kyla S',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Jamie is always very friendly, professional and detail oriented. She does a great job and makes sure you are happy with the results before you leave. I love going to her for eyelashes and eyebrows!',
    author: {
      name: 'Julia H',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Since starting with powder brows (after having microblading somewhere else) I can only give praise to Jamie for being an expert on the technique! My only regret is not having found Jamie earlier...with my skin type this should have been the way to go from the start. Very pleased with the results and encourage anyone to discuss with her what you are looking for. She will guide you on what makes the most sense depending on your skin type/facial features, etc. You will be on very good hands.',
    author: {
      name: 'Y. Tobar',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },

  {
    body: 'Truly a 5 star experience! Jamie is fantastic and her pricing is super reasonable! Love that she offers evening appts too!',
    author: {
      name: "Alias 'Northern Girl'",
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'I really wanted my brows micro bladed but was a little nervous about any pain I might have. Jamie was very reassuring and thoroughly explained the process and what to expect. I was so happy with the results and the shape of my brows. The Lash Lift was amazing as well and I loved getting up in the morning knowing I could leave the house and I was ready for the day. I have since had the brow touch up and look forward to another Keratin Lash Lift just before a trip I am taking!',
    author: {
      name: 'C. Pilz',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "I had my teeth whitened by Jamie and I'm extremely satisfied with the results. She is very professional and knowledgable and I would definitely recommend this service.",
    author: {
      name: 'Trennan O',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Can’t say enough about the services I have received from Jamie at Brows on Point and tonight was no exception! She offers attention to detail from the consultation to working with your requests, right through to the after care instruction and take home kit. She made me feel at ease, stopping along the way to ensure I was going to be pleased with the outcome and I am! A very professional, caring artist!',
    author: {
      name: 'Ally F',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "Jamie is lovely and informative and very professional. I highly recommend Jamie's services at Brows on Point! I had my eye liner done and it looks great! 5 stars from me!",
    author: {
      name: 'Jenny K',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Jamie takes pride in her work and is an absolute perfectionist. If you are thinking of getting any services done by Jamie, think no more! This is the place to go!! She’s done my Keratin Lash Lift & Tint many times and I would not let anyone else touch my lashes - Jamie is AMAZING and I wish I could give more than a 5 star review!',
    author: {
      name: 'Karina B',
      imageUrl: '/testimonials/karina.png',
    },
  },
  {
    body: 'Just got my keratin lash lift & tint from Jaimie for the 3rd time, she is AMAZING! I have also got teeth gems thru her, and i’m looking forward to getting microblading this fall! Thanks girl, HAPPY!',
    author: {
      name: 'Stephanie K',
      imageUrl: '/testimonials/stephanie.png',
    },
  },
  {
    body: 'Jamie is my go-to for teeth whitening. She’s so sweet and it’s always a fun, relaxing visit. I love how white she can get my teeth! 5 stars all the way!',
    author: {
      name: 'Rain P',
      imageUrl: '/testimonials/rain.png',
    },
  },
  {
    body: 'Jamie does amazing work, and is absolutely wonderful. She is definitely a perfectionist who takes great pride in all of her services. Her studio is very welcoming, clean and comfortable. She has very reasonable prices, and the great quality. I would totally recommend her to anyone!',
    author: {
      name: 'Carly M',
      imageUrl: '/testimonials/carly.png',
    },
  },
  // Add more testimonials here...
]

const TestimonialGroup: React.FC = () => {
  return (
    <div className="bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-6xl leading-8 text-primary">Testimonials</h2>
          <p className="text-md mt-6 leading-8 text-gray-600">
            I&apos;ve had the privilege of taking care of hundreds of clients in the
            Okanagan since 2016.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.name}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-100 p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    {/* <Image
                      alt={testimonial.author.name}
                      src={testimonial.author.imageUrl}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    /> */}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialGroup
