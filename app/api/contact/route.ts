import { getCloudflareContext } from "@opennextjs/cloudflare";

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const formData: ContactForm = await request.json();

    if (!formData.name || !formData.email || !formData.message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 通过 Cloudflare Worker 环境变量获取 Resend API Key
    const { env } = getCloudflareContext();
    const RESEND_API_KEY: string | undefined = env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return Response.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    // 构建邮件 HTML 内容
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; }
          .value { color: #4b5563; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>新客户咨询</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">姓名：</div>
              <div class="value">${formData.name}</div>
            </div>
            <div class="field">
              <div class="label">邮箱：</div>
              <div class="value">${formData.email}</div>
            </div>
            ${formData.phone ? `
            <div class="field">
              <div class="label">电话：</div>
              <div class="value">${formData.phone}</div>
            </div>
            ` : ""}
            ${formData.company ? `
            <div class="field">
              <div class="label">公司：</div>
              <div class="value">${formData.company}</div>
            </div>
            ` : ""}
            <div class="field">
              <div class="label">留言：</div>
              <div class="value">${formData.message}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // 使用 Resend API 发送邮件（免费计划每月 100 封）
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "weidajx@gmail.com",
        subject: `新客户咨询 - ${formData.name}`,
        html: htmlContent,
        reply_to: formData.email,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return Response.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);

    return Response.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
