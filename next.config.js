/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tailwindui.com","flowbite.s3.amazonaws.com","s3.us-west-2.amazonaws.com","images.unsplash.com"]
  }
}

module.exports = nextConfig
