export interface Testimonial {
  body: string
  author: {
    name: string
    imageUrl?: string
  }
  /** Where the review was originally posted, shown under the name. */
  source?: 'Google'
  /** Services the review mentions, for matching it to service pages later. */
  services?: string
}

/** Shown on /testimonials and picked by name for service pages. */
export const testimonials: Testimonial[] = [
  // Google reviews, copied verbatim (names shortened to first name and
  // initial). Re-check against the Google Business Profile every few months.
  {
    body: 'I had such an amazing experience getting my teeth whitened, thank you again Jamie! From the moment I walked in, she made me feel completely comfortable with her warm and friendly personality.\n\nThe results were honestly better than I expected, my teeth look so much brighter!\n\nI’m beyond happy with the outcome and would absolutely recommend her to anyone looking for teeth whitening. I’ll definitely be coming back!',
    author: { name: 'Tina H' },
    source: 'Google',
    services: 'teeth whitening',
  },
  {
    body: 'I met Jamie for the first time getting a lash lift and she was so lovely! She put my mind at ease and it was a great experience. Thank you for making my lashes look amazing 🙏🏼',
    author: { name: 'Mel' },
    source: 'Google',
    services: 'lash lift',
  },
  {
    body: 'Jamie was professional and provided a great experience, I am loving my lash tint and lift; along with my brows shape and tint.',
    author: { name: 'Janine D' },
    source: 'Google',
    services: 'lash lift and tint, brow shape and tint',
  },
  {
    body: 'I had a consultation appointment with Jamie. She gave me all the info I needed and she let me know that I was a good candidate for one procedure but not the other. She is friendly yet professional and I am very confident going forward with the procedure. Thanks Jamie.',
    author: { name: 'Sandi E' },
    source: 'Google',
    services: 'consultation',
  },
  {
    body: 'Jamie was fantastic! Her skills and expertise were obvious. The salon although run out of her home is professional and very clean!\nShe gave me excellent information on maintaining my brows.\nOn top of all this she was so sweet. It was my 1st time but definitely not my last!',
    author: { name: 'Celena M' },
    source: 'Google',
    services: 'brows',
  },
  {
    body: 'Jamie was fantastic! As I am very new to beauty treatments and was quite anxious, she really listened to me and understood what I was hoping for, which she got spot on! I am incredibly happy with the results and will definitely be seeing Jamie again. 10/10 would recommend Jamie.',
    author: { name: 'Nicola G' },
    source: 'Google',
    services: 'general',
  },
  {
    body: 'Jamie recently whitened my teeth and I am SO happy with the results. She had a very professional attitude but was incredibly sweet as well. The work space was kept super organized and clean which is extremely important when working so close to people’s faces/mouth. I can’t wait to experience more of what this business has to offer. Would highly recommend!',
    author: { name: 'Shanise S' },
    source: 'Google',
    services: 'teeth whitening',
  },
  {
    body: 'I had a great experience at brows on point. Jamie is very professional and skilled at what she does. I went in for teeth whitening and a brow shaping and tint. I would say the brow shaping was the best I have ever had. I was very satisfied and will return in the future.',
    author: { name: 'Elyse L' },
    source: 'Google',
    services: 'teeth whitening, brow shape and tint',
  },
  {
    body: "Jamie gave me the best lash lift and tint I've ever had! Her experience and knowledge made me feel instantly comfortable and confident she could handle my long, unruly lashes. So happy, the results are amazing! Thank you, Jamie @Brows on Point!",
    author: { name: 'Kassandra D' },
    source: 'Google',
    services: 'lash lift and tint',
  },
  {
    body: "I had a wonderful and positive experience with Jamie. She took in what I was looking for and made recommendations that were thoughtful and knowledgeable which helped me make my decision to get microblading. The process itself was relatively painless and super chill.\nThe overall experience was really great and I'm excited to get my touch up done to see the final product. My eyebrows are already looking amazing!\nHighly recommend Jamie for eyebrows!",
    author: { name: 'Delanie C' },
    source: 'Google',
    services: 'microblading',
  },
  {
    body: 'Jamie is very professional and detailed. She respected my need for silence as I just got off a nightshift.\nShe thoroughly explained how to keep my lift looking fantastic and how to take care of my tooth gem.\nDefinitely will be back and highly recommend her.',
    author: { name: 'Cheryl T' },
    source: 'Google',
    services: 'lash lift, tooth gem',
  },
  {
    body: 'Brows on point was amazing! Micro blading is definitely something I seek to find the best of the best given how much brows define your face and there’s absolutely no hiding bad brows right! Jamie was amazing and met all my expectations. They look great and she was super thorough with instructions/aftercare etc. definitely highly recommend',
    author: { name: 'Danielle C' },
    source: 'Google',
    services: 'microblading',
  },
  {
    body: 'I have gotten a couple lash lifts and eyebrow microblading done from Jamie! She is very professional but also so sweet and lovely! Great experience every time and I am always happy with the results! She got me to check my eyebrow shape multiple times to make sure I was happy with them and they turned out just like I had envisioned ❤️',
    author: { name: 'Melissa M' },
    source: 'Google',
    services: 'lash lift, microblading',
  },
  {
    body: "My first experience with permanent make up and I am so happy I found Jamie. It's only been one day with my new brows but I'm very happy with the results. Jamie listened to my requests about shape and softness. I look forward to the final look after my next visit!",
    author: { name: 'Janessa K' },
    source: 'Google',
    services: 'permanent makeup brows',
  },
  {
    body: 'Jamie is incredibly professional and knowledgeable! She always does an amazing job on my lashes, and I will be back for other services in the future. Very reasonable prices, and great quality. She is very efficient, and also very personable.',
    author: { name: 'Crystal Z' },
    source: 'Google',
    services: 'lashes',
  },
  {
    body: 'Jamie gave me an eyelash lift and tint and they are amazing! She was very knowledgeable and thorough with after care instructions. The space was very comfortable and calm with lovely conversation. I will definitely be going back!',
    author: { name: 'Kristyn G' },
    source: 'Google',
    services: 'lash lift and tint',
  },
  {
    body: 'Recently had my keratin lash lift and tint done by Jamie and I am in love! This is definitely a service I will continue receiving.',
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
    body: 'Since starting with powder brows (after having microblading somewhere else) I can only give praise to Jamie for being an expert on the technique! My only regret is not having found Jamie earlier...with my skin type this should have been the way to go from the start.',
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
    body: 'Jamie was very reassuring and thoroughly explained the process and what to expect. I was so happy with the results and the shape of my brows. The Lash Lift was amazing as well and I loved getting up in the morning knowing I could leave the house and I was ready for the day. I have since had the brow touch up and look forward to another Keratin Lash Lift!',
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
    body: 'Can’t say enough about the services I have received from Jamie at Brows on Point! She offers attention to detail from the consultation to working with your requests, right through to the after care instruction and take home kit. She made me feel at ease, stopping along the way to ensure I was going to be pleased with the outcome and I am! A very professional, caring artist!',
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
      imageUrl: '/testimonials/testimonials-karina-portrait-01.png',
    },
  },
  {
    body: 'Just got my keratin lash lift & tint from Jaimie for the 3rd time, she is AMAZING! I have also got teeth gems thru her, and i’m looking forward to getting microblading this fall! Thanks girl, HAPPY!',
    author: {
      name: 'Stephanie K',
      imageUrl: '/testimonials/testimonials-stephanie-portrait-01.png',
    },
  },
  {
    body: 'Jamie is my go-to for teeth whitening. She’s so sweet and it’s always a fun, relaxing visit. I love how white she can get my teeth! 5 stars all the way!',
    author: {
      name: 'Rain P',
      imageUrl: '/testimonials/testimonials-rain-portrait-01.png',
    },
  },
  {
    body: 'Jamie does amazing work, and is absolutely wonderful. She is definitely a perfectionist who takes great pride in all of her services. Her studio is very welcoming, clean and comfortable. She has very reasonable prices, and the great quality. I would totally recommend her to anyone!',
    author: {
      name: 'Carly M',
      imageUrl: '/testimonials/testimonials-carly-portrait-01.png',
    },
  },
  // Add more testimonials here...
]

export const findTestimonials = (names: string[]) =>
  names
    .map((name) => testimonials.find((x) => x.author.name === name))
    .filter((x): x is Testimonial => Boolean(x))
