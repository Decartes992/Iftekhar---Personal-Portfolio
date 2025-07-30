import type { APIRoute } from 'astro';

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

  // Mock response for testing - in production, this would use Resend
  console.log('Mock email sent:', { name, email, subject, message });
  
  return new Response(
    JSON.stringify({
      message: 'Message sent successfully! (Mock)',
    }),
    { status: 200 }
  );
};