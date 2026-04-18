// Cloudflare Worker 环境类型定义
// 每次修改 wrangler.jsonc 后应运行: npx wrangler types --env-interface CloudflareEnv

interface CloudflareEnv {
  RESEND_API_KEY: string;
}
