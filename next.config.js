/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
