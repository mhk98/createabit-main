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
    domains: ["localhost"], // Add 'localhost' as an allowed domain
  },
};
// module.exports = nextConfig;
