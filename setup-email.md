# 快速配置 Cloudflare 邮件发送

## 第一步：注册 Resend（5分钟）

1. 访问 https://resend.com
2. 使用 GitHub 或邮箱注册
3. 验证邮箱

## 第二步：获取 API Key（1分钟）

1. 登录 Resend Dashboard
2. 点击左侧 "API Keys"
3. 点击 "Create API Key"
4. 名称输入：`Weida Machinery`
5. 点击 "Add"
6. **复制 API Key**（类似 `re_123456789...`）

## 第三步：配置 Cloudflare 环境变量（2分钟）

### 在 Cloudflare Dashboard：

1. 进入你的 Pages 项目
2. 点击 "Settings" → "Environment variables"
3. 点击 "Add variable"
   - Variable name: `RESEND_API_KEY`
   - Value: 粘贴你的 API Key
   - 选择: Production 和 Preview
4. 点击 "Save"

## 第四步：更新邮箱地址（1分钟）

编辑 `functions/api/contact.ts` 文件第 48-49 行：

```typescript
from: 'contact@你的域名.com',  // 改成你的域名
to: '你的邮箱@example.com',      // 改成接收咨询的邮箱
```

**注意**：如果域名未验证，`to` 只能是你注册 Resend 时的邮箱。

## 第五步：部署（2分钟）

在 Cloudflare Dashboard 点击 "Deployments" → "Retry deployment"

或者推送新代码到 Git 仓库自动部署。

## 第六步：测试（1分钟）

1. 访问你的网站
2. 填写联系表单
3. 提交
4. 检查邮箱

## 完成！

现在你的联系表单会自动发送邮件到你的邮箱。

---

## 常见问题

**Q: 收不到邮件？**
- 检查垃圾邮件文件夹
- 确认 API Key 正确
- 查看发送域名是否验证

**Q: 想用自定义域名？**
1. Resend Dashboard → Domains → Add Domain
2. 按照提示在 Cloudflare 添加 DNS 记录
3. 等待验证

**Q: 想发送到多个邮箱？**
修改 `to` 字段为数组：
```typescript
to: ['sales@yourdomain.com', 'support@yourdomain.com'],
```

---

## 需要帮助？

查看详细文档：[EMAIL_CONFIG.md](./EMAIL_CONFIG.md)
