/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // optional if using remotePatterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
