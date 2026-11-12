/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // Cloudflare 打包时生成 standalone，避免 Windows 本地构建符号链接权限问题
  output: process.env.NEXT_OUTPUT === 'standalone' ? 'standalone' : undefined,
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
  experimental: {
    cpus: 2,
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
