/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'brows-clone.local/graphql' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'app.netlify.com' },
      { hostname: '0.gravatar.com' },
      { hostname: '1.gravatar.com' },
      { hostname: '2.gravatar.com' },
      { hostname: 'secure.gravatar.com' },
      { hostname: 'nextjs-wordpress.local' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'plus.unsplash.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'brows-clone.local' },
      { hostname: 'img.youtube.com' },
      { hostname: 'lh7-us.googleusercontent.com' },
      { hostname: 'tailwindui.com' },
    ],
  },
}

export default nextConfig
