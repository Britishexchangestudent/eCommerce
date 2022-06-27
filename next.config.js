const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
};

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/canceled",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
