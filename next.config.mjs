/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE,
        pathname: '/projectsimages/**',
      },
    ],
  },
};

export default nextConfig;
