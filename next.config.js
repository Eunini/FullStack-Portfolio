// Example: next.config.js
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      return config;
    },
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
  };
  
  module.exports = nextConfig;
  