/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: "/Basic_Todo_App/",
  basePath: "/Basic_Todo_App",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost/Basic_Todo_App",
      "https://norbertostudios.github.io/Basic_Todo_App",
    ],
    loader: "imgix",
    path: "https://norbertostudios.github.io/Basic_Todo_App"
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
