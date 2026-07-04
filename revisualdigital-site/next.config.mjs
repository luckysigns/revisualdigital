/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/ai-systems", destination: "/smart-systems", permanent: true },
      { source: "/automation", destination: "/smart-systems", permanent: true },
    ];
  },
};

export default nextConfig;
