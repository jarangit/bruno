/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['api.airin1.com'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
