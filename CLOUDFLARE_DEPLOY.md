# Cloudflare Pages 部署指南

## 项目配置

本项目已配置为支持 Cloudflare Pages 部署，包括：
- 静态导出（Next.js `output: 'export'`）
- Cloudflare Pages Functions（用于 API 路由）
- 优化的图片处理

## 部署步骤

### 方式一：通过 Cloudflare Dashboard（推荐）

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com
   - 进入 Pages 页面

2. **连接 Git 仓库**
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 授权并选择你的 GitHub/GitLab 仓库

3. **配置构建设置**
   - **Project name**: golden-hall（或你喜欢的名称）
   - **Production branch**: master
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`

4. **环境变量设置**（可选）
   ```
   NODE_VERSION=20
   ```

5. **点击 "Save and Deploy"**
   - Cloudflare 会自动构建和部署

### 方式二：使用 Wrangler CLI

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   npm run build
   ```

4. **部署到 Cloudflare Pages**
   ```bash
   wrangler pages deploy out
   ```

## 本地测试

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 本地预览静态文件
npx serve out
```

## 功能说明

### 联系表单 API
- 路径: `/api/contact`
- 方法: POST
- 处理文件: `functions/api/contact.ts`
- 使用 Resend 邮件服务发送邮件
- **重要**：需要配置 `RESEND_API_KEY` 环境变量

### 邮件发送配置
详见 [EMAIL_CONFIG.md](./EMAIL_CONFIG.md)

配置步骤：
1. 注册 Resend 账号：https://resend.com
2. 获取 API Key
3. 在 Cloudflare Pages 添加环境变量 `RESEND_API_KEY`
4. 更新发件邮箱地址

### 静态资源
- 图片存储在 `public/images/`
- 使用 Next.js Image 组件自动优化
- 构建后输出到 `out/` 目录

## 自定义域名

1. 在 Cloudflare Pages 项目设置中
2. 选择 "Custom domains"
3. 添加你的域名
4. 配置 DNS 记录

## 注意事项

1. **图片优化**: 已禁用 Next.js 图片优化（`images.unoptimized: true`），因为 Cloudflare Pages 使用静态导出
2. **API 路由**: 所有 API 请求由 `functions/` 目录中的 Cloudflare Pages Functions 处理
3. **构建输出**: 确保构建输出目录设置为 `out`
4. **Node.js 版本**: 需要 Node.js 20 或更高版本

## 故障排除

### 构建失败
- 检查 Node.js 版本是否为 20+
- 确保所有依赖已正确安装
- 查看构建日志中的错误信息

### 页面 404
- 确认 `trailingSlash: true` 配置正确
- 检查所有链接是否以 `/` 结尾

### API 路由不工作
- 确认 `functions/` 目录结构正确
- 检查 Function 文件语法
- 查看 Cloudflare Pages Functions 日志

## 更多资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages)
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Pages Functions 文档](https://developers.cloudflare.com/pages/functions)
