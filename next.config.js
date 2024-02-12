/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {	
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'i.scdn.co',
      }
    ],
},
}