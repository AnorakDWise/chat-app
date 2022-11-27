/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent-cdg2-1.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "scontent.xx.fbcdn.net",
    ],
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};
