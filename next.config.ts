import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['image.tmdb.org'],
    // domains is deprecated so switched to remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        // port: '',
        // pathname: '/account123/**',
        // search: '',
      },
    ],
  },
}

export default nextConfig
