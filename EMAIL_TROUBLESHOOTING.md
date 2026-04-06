# 🔧 邮件发送失败排查指南

## 问题：发送失败，请重试

### 可能的原因

1. **环境变量未配置** ⭐ 最常见
2. **API Key 无效**
3. **域名未验证**
4. **网络问题**

---

## ✅ 解决方案

### 方案一：检查 Cloudflare 环境变量（最重要）

**如果已部署到 Cloudflare Pages：**

1. **登录 Cloudflare Dashboard**
   - 访问：https://dash.cloudflare.com
   - 进入你的 Pages 项目

2. **检查环境变量**
   - Settings → Environment variables
   - 查看是否有 `RESEND_API_KEY`
   - 值应该是：`re_4VQqEjVG_EnUAqMMEADbzh4XBZjGz673g`

3. **如果没有，添加环境变量**
   ```
   Variable name: RESEND_API_KEY
   Value: re_4VQqEjVG_EnUAqMMEADbzh4XBZjGz673g
   Environment: Production 和 Preview
   ```

4. **重新部署**
   - Deployments → 选择最新部署 → Retry deployment
   - 或者推送新的 commit 触发重新部署

---

### 方案二：验证 Resend API Key

1. **登录 Resend**
   - 访问：https://resend.com
   - 进入 Dashboard

2. **检查 API Key**
   - 左侧菜单 → API Keys
   - 确认 Key 存在且状态为 Active
   - 如果 Key 无效，重新创建一个新的

3. **测试 API Key**
   - 在 Resend Dashboard 点击 "Send Test Email"
   - 输入 `weidajx@gmail.com`
   - 确认能收到测试邮件

---

### 方案三：检查日志

**Cloudflare Pages 日志：**

1. 进入你的 Pages 项目
2. Functions → Logs
3. 提交表单，查看错误信息

**常见错误：**

```
❌ RESEND_API_KEY not configured
→ 解决：添加环境变量

❌ 401 Unauthorized
→ 解决：API Key 错误或过期

❌ 403 Forbidden
→ 解决：域名未验证，只能发送到注册邮箱
```

---

### 方案四：本地测试

**如果想在本地测试邮件发送：**

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **创建 `.dev.vars` 文件**
   ```bash
   RESEND_API_KEY=re_4VQqEjVG_EnUAqMMEADbzh4XBZjGz673g
   ```

3. **本地运行**
   ```bash
   # 构建项目
   npm run build
   
   # 启动本地服务器
   wrangler pages dev out --compatibility-flag=nodejs_compat
   ```

4. **访问测试**
   - 打开 http://localhost:8788
   - 填写表单提交
   - 查看控制台日志

---

## 🎯 快速修复步骤

**如果你刚部署完就出现这个问题：**

1. ✅ 进入 Cloudflare Dashboard
2. ✅ Pages → 你的项目 → Settings → Environment variables
3. ✅ 添加 `RESEND_API_KEY` = `re_4VQqEjVG_EnUAqMMEADbzh4XBZjGz673g`
4. ✅ 选择 Production 和 Preview
5. ✅ 点击 Save
6. ✅ Deployments → Retry deployment
7. ✅ 等待 2-3 分钟
8. ✅ 重新测试表单

---

## 📧 临时方案：禁用邮件发送

如果暂时不需要邮件功能，可以让表单只显示成功提示：

**修改 `functions/api/contact.ts`：**

```typescript
export async function onRequestPost(context: any) {
  try {
    const formData = await context.request.json();
    
    // 暂时只记录日志，不发送邮件
    console.log('Contact form submission:', formData);
    
    // 直接返回成功
    return new Response(JSON.stringify({
      success: true,
      message: 'Message received'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to process message'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

---

## 🔍 检查清单

- [ ] Resend API Key 已添加到 Cloudflare 环境变量
- [ ] 环境变量应用到 Production 和 Preview
- [ ] 已重新部署项目
- [ ] API Key 有效且未过期
- [ ] 收件邮箱是注册 Resend 时的邮箱（如果域名未验证）
- [ ] Cloudflare Functions 日志无错误

---

## 💡 常见问题

**Q: 为什么部署后立即测试失败？**
A: 环境变量需要重新部署才能生效

**Q: 本地测试成功，部署后失败？**
A: 检查 Cloudflare 环境变量是否正确配置

**Q: 如何确认邮件已发送？**
A: Resend Dashboard → Emails → Sent 查看发送记录

**Q: 收件箱没有邮件？**
A: 检查垃圾邮件文件夹，或验证域名提高送达率

---

## 📞 需要帮助？

如果以上方案都无法解决，请提供：
1. Cloudflare Functions 的错误日志
2. Resend Dashboard 的 API Key 状态
3. 具体的错误信息

我可以帮你进一步排查问题。
