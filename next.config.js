/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn-bearplex.s3.us-west-2.amazonaws.com',
      'via.placeholder.com', // Add this line for via.placeholder.com
    ],
  },
}

module.exports = nextConfig;
