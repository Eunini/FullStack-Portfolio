import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    // Check if required environment variables are set
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    if (!fromEmail) {
      console.error("FROM_EMAIL is not set in environment variables");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const { email, subject, message } = await req.json();
    
    // Validate input
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email, subject, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    console.log("Sending email from:", email, "Subject:", subject);
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail], // Send to your email
      replyTo: email, // Set reply-to as the sender's email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              <strong>Note:</strong> This email was sent from your portfolio contact form. 
              You can reply directly to this email to respond to ${email}.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later or contact me directly." },
      { status: 500 }
    );
  }
}
