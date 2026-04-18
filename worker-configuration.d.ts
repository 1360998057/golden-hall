// Cloudflare Worker 环境类型定义
// 由 wrangler types --env-interface CloudflareEnv 生成
// 每次修改 wrangler.jsonc 后应重新运行上述命令

interface CloudflareEnv {
  SEND_EMAIL: {
    send(params: {
      from: string | { email: string; name?: string };
      to: string | Array<{ email: string; name?: string }>;
      subject: string;
      content?: Array<{ type: "text/plain" | "text/html"; value: string }>;
      text?: string;
      html?: string;
      reply_to?: string | Array<{ email: string; name?: string }>;
    }): Promise<void>;
  };
}
