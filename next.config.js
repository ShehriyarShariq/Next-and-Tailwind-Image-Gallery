/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_PIXABAY_API_KEY: process.env.REACT_APP_PIXABAY_API_KEY,
  },
};

module.exports = nextConfig;
