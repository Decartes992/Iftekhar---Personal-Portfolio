import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("your_resend_api_key_here");
const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject");
  const message = data.get("message");
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({
        message: "All fields are required."
      }),
      { status: 400 }
    );
  }
  if (typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
    return new Response(
      JSON.stringify({
        message: "Invalid email format."
      }),
      { status: 400 }
    );
  }
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      // Replace with your verified domain
      to: "your-email@example.com",
      // Replace with the recipient email
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    });
    return new Response(
      JSON.stringify({
        message: "Message sent successfully!"
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to send message.",
        error: error.message
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
