/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hotname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
