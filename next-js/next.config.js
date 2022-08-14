/** @type {import('next').NextConfig} */

const githubConfig = {
  assetPrefix: "/Basic_Todo_App/",
  basePath: "/Basic_Todo_App",
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  githubConfig,

}


module.exports = nextConfig;