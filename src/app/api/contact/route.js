import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (recaptchaToken) {
      const recaptchaResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: recaptchaToken,
          }),
        }
      );

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        console.log('reCAPTCHA verification failed:', recaptchaData);
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Victoria Osteopathy <onboarding@resend.dev>',
      to: process.env.CONTACT_FORM_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          This message was sent from the Victoria Osteopathy website contact form.
        </p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    try {
      await resend.emails.send({
        from: 'Victoria Osteopathy <onboarding@resend.dev>',
        to: email,
        subject: 'We received your message - Victoria Osteopathy',
        html: `
          <h2>Thank you for contacting Victoria Osteopathy!</h2>
          <p>Hi ${name},</p>
          <p>We have received your contact request and appreciate you reaching out to us.</p>
          <p>Our osteopathic practitioner will review your message and get back to you as soon as possible.</p>
          <br>
          <p><strong>Your message:</strong></p>
          <p style="padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            ${message ? message.replace(/\n/g, '<br>') : 'No message provided'}
          </p>
          <br>
          <p>If you have any urgent questions, feel free to call us or reply to this email.</p>
          <p>Thank you for choosing Victoria Osteopathy!</p>
          <br>
          <p style="color: #666;">
            Best regards,<br>
            Victoria Osteopathy
          </p>
        `,
      });
    } catch (confirmationError) {
      // Log but don't fail the request if confirmation email fails
      console.error('Confirmation email error:', confirmationError);
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
