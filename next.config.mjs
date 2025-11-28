/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["randomuser.me"], // ekhane external image domain add koro
  },
  remotePatterns: {
    images: [
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
