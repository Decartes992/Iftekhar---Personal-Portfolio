import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');

  // Server-side validation
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({
        message: 'All fields are required.',
      }),
      { status: 400 }
    );
  }

  if (typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email)) {
     return new Response(
      JSON.stringify({
        message: 'Invalid email format.',
      }),
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: 'your-email@example.com', // Replace with the recipient email
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return new Response(
      JSON.stringify({
        message: 'Message sent successfully!',
      }),
      { status: 200 }
    );
  } catch (error: any) {
    // TODO: Implement proper server-side logging for email sending errors
    return new Response(
      JSON.stringify({
        message: 'Failed to send message.',
        error: error.message,
      }),
      { status: 500 }
    );
  }
};