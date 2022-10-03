/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tailwindui.com","flowbite.s3.amazonaws.com"]
  }
}

module.exports = nextConfig
