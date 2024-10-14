/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@aws-amplify/ui-react', '@aws-amplify/ui-react-core', '@aws-amplify/ui-react-primitive'],
}

module.exports = nextConfig
