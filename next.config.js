/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/mbti',
  assetPrefix: '/mbti/',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;