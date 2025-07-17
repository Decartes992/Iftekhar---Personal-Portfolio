export { renderers } from '../../renderers.mjs';

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
  console.log("Mock email sent:", { name, email, subject, message });
  return new Response(
    JSON.stringify({
      message: "Message sent successfully! (Mock)"
    }),
    { status: 200 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
