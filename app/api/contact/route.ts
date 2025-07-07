import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ankamallaaravind97@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
  <div style="font-family: 'Segoe UI', Roboto, sans-serif; padding: 20px; background-color: #f9fafb; color: #111827;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #4f46e5; padding: 16px;">
        <h2 style="color: white; margin: 0; font-size: 24px;">📬 New Contact Message</h2>
      </div>
      <div style="padding: 24px;">
        <p style="font-size: 16px; margin-bottom: 20px;">You’ve received a new message from your portfolio contact form:</p>

        <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
          <tr>
            <td style="font-weight: 600; padding: 8px 0; width: 100px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; padding: 8px 0;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; padding: 8px 0; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; white-space: pre-line; line-height: 1.5;">${message}</td>
          </tr>
        </table>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

        <p style="font-size: 14px; color: #6b7280;">
          This message was sent from your portfolio contact form.
        </p>
      </div>
    </div>
  </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
