/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // 优化构建性能
  swcMinify: true,
  // 实验性功能
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: [
      'localhost',
      'cdn.sanity.io',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // 压缩配置
  compress: true,
  // 静态文件配置
  generateEtags: false,
  // 环境变量处理
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;
