# Cloudflare 邮件发送配置指南

本项目使用 **Resend** 邮件服务通过 Cloudflare Pages Functions 发送联系表单邮件。

## 为什么选择 Resend？

- ✅ 免费额度：每月 3,000 封邮件
- ✅ 与 Cloudflare Workers 完美集成
- ✅ 简单易用的 API
- ✅ 良好的邮件送达率
- ✅ 支持 HTML 邮件

## 配置步骤

### 1. 注册 Resend 账号

1. 访问 https://resend.com
2. 点击 "Get Started" 注册
3. 验证邮箱并登录

### 2. 获取 API Key

1. 进入 Dashboard → API Keys
2. 点击 "Create API Key"
3. 输入名称：`Weida Machinery Contact Form`
4. 选择权限：`Sending access`
5. 点击 "Add"
6. **复制 API Key**（只显示一次，务必保存）

### 3. 配置域名（可选但推荐）

1. 在 Resend Dashboard → Domains
2. 添加你的域名：`weidamachine.com`
3. 按照指引添加 DNS 记录到 Cloudflare：
   - MX 记录
   - TXT 记录（SPF、DKIM）
4. 等待验证（通常几分钟）

### 4. 在 Cloudflare Pages 配置环境变量

#### 方式一：通过 Dashboard（推荐）

1. 进入你的 Cloudflare Pages 项目
2. Settings → Environment variables
3. 添加变量：
   - Variable name: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxx`（你的 Resend API Key）
   - Environment: Production 和 Preview
4. 点击 "Save"

#### 方式二：通过 Wrangler CLI

```bash
# 设置生产环境变量
wrangler pages secret put RESEND_API_KEY --project-name=golden-hall

# 输入你的 API Key
```

### 5. 更新发件邮箱地址

编辑 `functions/api/contact.ts` 文件，修改以下字段：

```typescript
from: 'contact@weidamachine.com', // 你的发件邮箱
to: 'sales@weidamachine.com',     // 接收客户咨询的邮箱
```

**注意：**
- 如果域名未验证，只能发送到注册 Resend 时使用的邮箱
- 建议使用 `noreply@yourdomain.com` 或 `contact@yourdomain.com` 作为发件地址

### 6. 测试邮件发送

#### 本地测试

1. 创建 `.dev.vars` 文件：
```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
```

2. 使用 Wrangler 本地运行：
```bash
npm install -g wrangler
wrangler pages dev out --compatibility-flag=nodejs_compat
```

#### 生产环境测试

部署后，填写联系表单并提交，检查邮件是否发送成功。

## 邮件内容说明

联系表单发送的邮件包含：
- 客户姓名
- 邮箱地址
- 电话号码（可选）
- 公司名称（可选）
- 留言内容

邮件格式为精美的 HTML 模板，易于阅读。

## 故障排除

### 1. 邮件发送失败

**检查项：**
- ✅ RESEND_API_KEY 是否正确配置
- ✅ API Key 是否有发送权限
- ✅ 域名是否已验证（如使用自定义域名）
- ✅ 发件邮箱是否与验证域名匹配

### 2. 邮件进入垃圾箱

**解决方案：**
- 配置 SPF、DKIM、DMARC 记录
- 使用已验证的域名发送
- 避免使用过多营销词汇

### 3. 环境变量未生效

**解决方法：**
- 在 Cloudflare Dashboard 重新部署
- 检查环境变量是否应用到 Production 和 Preview

### 4. 本地开发无法发送邮件

**解决方案：**
- 确保创建了 `.dev.vars` 文件
- 使用 `wrangler pages dev` 而不是 `next dev`

## 监控和日志

### Cloudflare Dashboard

1. 进入 Pages 项目
2. Functions → Logs
3. 查看实时请求日志

### Resend Dashboard

1. 进入 Resend Dashboard
2. Emails → Sent
3. 查看所有发送的邮件状态

## 费用说明

### Resend 免费套餐
- 每月 3,000 封邮件
- 每天 100 封邮件
- 1 个域名

### 付费套餐
- 每月 $20 起
- 50,000 封邮件/月
- 无域名限制
- 更高级功能

对于企业网站，免费套餐通常足够使用。

## 安全建议

1. **API Key 安全**
   - 不要在代码中硬编码
   - 使用环境变量
   - 定期轮换 API Key

2. **邮件验证**
   - 验证发件域名
   - 配置 SPF/DKIM/DMARC

3. **限流保护**
   - Cloudflare Pages Functions 自带限流
   - 可添加 IP 限流逻辑

## 高级配置

### 添加 IP 限流

```typescript
// 在 functions/api/contact.ts 开头添加
const ipRequests = new Map<string, number[]>();
const RATE_LIMIT = 5; // 每小时最多 5 次
const WINDOW = 3600000; // 1 小时

export async function onRequestPost(context: any) {
  // 获取客户端 IP
  const ip = context.request.headers.get('CF-Connecting-IP');
  
  // 检查限流
  if (ip) {
    const now = Date.now();
    const requests = ipRequests.get(ip) || [];
    const recent = requests.filter(time => now - time < WINDOW);
    
    if (recent.length >= RATE_LIMIT) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Too many requests'
      }), { status: 429 });
    }
    
    ipRequests.set(ip, [...recent, now]);
  }
  
  // ... 其余代码
}
```

### 发送自动回复邮件

```typescript
// 在发送给管理员邮件后，添加自动回复
await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'noreply@weidamachine.com',
    to: formData.email,
    subject: 'Thank you for contacting us',
    html: `
      <h1>Thank you for your message!</h1>
      <p>Dear ${formData.name},</p>
      <p>We have received your inquiry and will respond within 24 hours.</p>
      <p>Best regards,<br>Weida Machinery Team</p>
    `,
  }),
});
```

## 其他邮件服务

如果你想使用其他邮件服务，可以替换为：

### Mailgun
- 文档：https://documentation.mailgun.com
- API：`https://api.mailgun.net/v3/{domain}/messages`

### SendGrid
- 文档：https://docs.sendgrid.com
- API：`https://api.sendgrid.com/v3/mail/send`

### Postmark
- 文档：https://postmarkapp.com/developer
- API：`https://api.postmarkapp.com/email`

## 支持

- Resend 文档：https://resend.com/docs
- Cloudflare Workers 文档：https://developers.cloudflare.com/workers
- 项目部署文档：`CLOUDFLARE_DEPLOY.md`
