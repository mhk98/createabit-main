/** @type {import('next').NextConfig} */
const path = require("path");

// const nextConfig = {
//   reactStrictMode: false,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "css")],
//   },
//   trailingSlash: true,
//   devIndicators: {
//     buildActivity: false,
//   },
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
// };

module.exports = {
  images: {
    domains: ["localhost", "createabit-backend.onrender.com"],
  },
};

// module.exports = nextConfig;
