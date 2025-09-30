/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com", // DummyJSON product images
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // fallback if API uses cdn
      },
      // If using Fake Store API too:
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;
