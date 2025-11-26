/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Ini yang penting!
  },
};

module.exports = nextConfig;
