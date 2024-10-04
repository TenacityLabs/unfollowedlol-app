/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          unoptimized: true,
          hostname: "**",
        },
      ],
    },
  };
  
export default nextConfig;
