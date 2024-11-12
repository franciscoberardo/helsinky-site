/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/helsinky-site',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
