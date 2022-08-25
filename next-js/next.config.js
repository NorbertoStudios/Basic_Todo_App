/** @type {import('next').NextConfig} */

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const commonConfig = {};

const nextConfig = {
  // assetPrefix: "/Basic_Todo_App/",
  // basePath: "/Basic_Todo_App",
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   //   domains: [
  //   //     "localhost/Basic_Todo_App",
  //   //     "https://norbertostudios.github.io/Basic_Todo_App",
  //   //   ],
  //   loader: "imgix",
  //   // path: "https://norbertostudios.github.i/Basic_Todo_App"
  //   path: "https://basic-todo.norbertostudios.com",
  // },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
};

// Dev Local Host
const developmentConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://localhost",
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

// Production Firebase
const productionConfig = {
  env: {
    ENV: "production",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://basic-todo.norbertostudios.com",
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
