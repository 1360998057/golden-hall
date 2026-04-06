// 使用 Resend 邮件服务
// 文档: https://resend.com/docs/send-with-cloudflare-workers

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export async function onRequestPost(context: any) {
  try {
    const formData: ContactForm = await context.request.json();

    // 验证必填字段
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Missing required fields'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 从环境变量获取 Resend API Key
    const RESEND_API_KEY = context.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({
        success: false,
        message: 'Email service not configured'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 发送邮件
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Resend 默认发件地址
        to: 'weidajx@gmail.com', // 接收客户咨询的邮箱
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
              .content { background: #f9fafb; padding: 20px; margin-top: 20px; }
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
                ` : ''}
                ${formData.company ? `
                <div class="field">
                  <div class="label">公司：</div>
                  <div class="value">${formData.company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">留言：</div>
                  <div class="value">${formData.message}</div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
        // 发送确认邮件给客户
        reply_to: formData.email,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    // 返回成功响应
    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to send message'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
