/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resources',
        destination: 'https://www.armada.community/resources',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'https://www.armada.community',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
