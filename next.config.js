/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {	
  images: {
	domains: ['i.scdn.co'],
  },
  experimental: {
    serverActions: true,
  },
}