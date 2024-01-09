/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: 'mongodb://0.0.0.0:27017/buyitnow',
    API_URL: 'http://localhost:3000',
  },
  images: {
    domains: ['res.cloudinary.com', 'fakestoreapi.com', 'mdbcdn.b-cdn.net'],
  },
};

module.exports = nextConfig;
