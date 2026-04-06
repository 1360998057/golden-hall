/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // 实验性功能
  experimental: {
    optimizeCss: true,
  },
  // 仅在生产环境启用静态导出
  ...(isProduction && {
    output: 'export',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true, // Cloudflare Pages 静态导出需要
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
