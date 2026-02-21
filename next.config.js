/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    workerThreads: false,
    cpus: 1,
  },

  optimizeFonts: false,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
