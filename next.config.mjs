/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
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
