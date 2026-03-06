# 🚀 Vercel 部署指南

## 📋 部署前准备

### 1. 环境要求
- Node.js 版本: >= 20.x
- 包管理器: npm 或 pnpm
- Git 仓库: 确保项目已推送到 GitHub/GitLab/Bitbucket

### 2. 项目检查清单
- [ ] 本地构建测试: `npm run build` 成功
- [ ] 启动测试: `npm start` 正常运行
- [ ] 代码质量: `npm run lint` 无错误
- [ ] 环境变量配置完整

## 🛠️ Vercel 部署步骤

### 方法一: 通过 Vercel CLI

1. **安装 Vercel CLI**
```bash
npm i -g vercel
```

2. **登录 Vercel**
```bash
vercel login
```

3. **部署项目**
```bash
# 在项目根目录执行
vercel

# 首次部署会询问配置信息：
# - Set up and deploy "~/your-project"? [Y/n] → Y
# - Which scope do you want to deploy to? → 选择你的账户
# - Link to existing project? [y/N] → N (首次部署)
# - What's your project's name? → golden-hall
# - In which directory is your code located? → ./
# - Want to override the settings? [y/N] → N
```

4. **生产环境部署**
```bash
vercel --prod
```

### 方法二: 通过 Vercel 网页界面

1. **访问 [vercel.com](https://vercel.com)** 并登录
2. **点击 "Add New..." → "Project"**
3. **导入 Git 仓库**
   - 选择 GitHub/GitLab/Bitbucket
   - 搜索并选择 `golden-hall` 项目
4. **配置部署设置**
   ```json
   {
     "Build Command": "npm run build",
     "Output Directory": ".next",
     "Install Command": "npm install",
     "Node Version": "20.x"
   }
   ```
5. **点击 "Deploy"**

## ⚙️ 环境变量配置

在 Vercel 控制台中添加环境变量：

### 路径
`Project Settings → Environment Variables`

### 常用环境变量
```bash
# 示例环境变量
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
# 添加其他需要的变量...
```

## 🔧 自定义域名

### 1. 添加域名
在 Vercel 控制台：
`Project Settings → Domains → Add`

### 2. 配置 DNS 记录
```
Type: CNAME
Name: @ (或 www)
Value: cname.vercel-dns.com
```

### 3. SSL 证书
Vercel 会自动配置 SSL 证书

## 📊 部署后优化

### 1. 性能监控
- 使用 Vercel Analytics
- 检查 Core Web Vitals
- 监控构建时间

### 2. 缓存优化
- 静态资源自动缓存
- 配置 ISR (Incremental Static Regeneration)
- 优化图片加载

### 3. SEO 优化
- 配置 `robots.txt`
- 添加 `sitemap.xml`
- 检查 meta 标签

## 🐛 常见问题解决

### 构建失败
1. **检查 Node 版本**: 确保使用 20.x
2. **依赖安装失败**: 清除缓存重新安装
3. **内存不足**: 升级到 Pro 计划

### 部署后页面空白
1. **检查控制台错误**: F12 → Console
2. **验证构建产物**: 查看 .next 目录
3. **检查环境变量配置**

### 图片加载问题
1. **域名配置**: 在 `next.config.js` 中添加允许的域名
2. **图片优化**: 使用 Next.js Image 组件

## 🔄 CI/CD 自动部署

### GitHub Actions 集成
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main, master]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm install
      - name: Build project
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 获取帮助

- **Vercel 官方文档**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js 部署指南**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **项目支持**: 查看项目 README 或联系开发团队

---

## 🎉 部署完成！

部署成功后，您的网站将在以下地址可访问：
- **预览环境**: `https://your-project-username.vercel.app`
- **生产环境**: `https://your-custom-domain.com` (如果配置了自定义域名)

恭喜！您的 Next.js 项目已成功部署到 Vercel！ 🚀