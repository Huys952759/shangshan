/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'customer-shangshan.oss-cn-shenzhen.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
