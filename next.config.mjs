/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    output: 'export',
    // Optional: If your project is not at the root, set basePath
    basePath: 'testNext.github.io', // replace 'repository-name' with your repo name
    images: {
      unoptimized: true, // Disable Next.js Image optimization
    },
  };

export default nextConfig;
