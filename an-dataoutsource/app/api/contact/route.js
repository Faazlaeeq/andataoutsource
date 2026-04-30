import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'AN Dataoutsource <website@andataoutsource.com>',
      to: 'support@andataoutsource.com',
      replyTo: email,
      subject: `New Inquiry: ${subject || 'Contact Form Submission'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Name</td><td style="padding:8px;border-bottom:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Subject</td><td style="padding:8px;border-bottom:1px solid #ddd;">${subject || 'N/A'}</td></tr>
        </table>
        <h3 style="margin-top:20px;">Message</h3>
        <p style="background:#f5f5f5;padding:16px;border-radius:4px;white-space:pre-wrap;">${message}</p>
        <hr style="margin-top:30px;border:none;border-top:1px solid #ddd;" />
        <p style="color:#999;font-size:12px;">Sent from andataoutsource.com contact form</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully. ID:', data?.id);

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We will get back to you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
