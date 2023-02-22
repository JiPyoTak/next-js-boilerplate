/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    emotion: true,
  },
  webpack: (config, context) => {
    return config;
  },
};

module.exports = nextConfig;
