/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/mbti' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mbti/' : '',
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;