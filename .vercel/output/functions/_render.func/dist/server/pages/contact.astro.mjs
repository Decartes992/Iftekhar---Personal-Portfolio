/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_GqbIBp2s.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DjFu83es.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required.";
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: new FormData(e.target)
        });
        if (response.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl", "aria-label": "Contact Form", children: [
    submitStatus === "success" && /* @__PURE__ */ jsx("div", { className: "mb-4 p-3 bg-green-100 text-green-800 rounded animate-fade-in", children: "Message sent successfully!" }),
    submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "mb-4 p-3 bg-red-100 text-red-800 rounded animate-shake", children: "Failed to send message. Please try again later." }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-gray-700 text-sm font-bold mb-2 transition-colors duration-200 hover:text-gray-900", children: "Name" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          "aria-required": "true",
          "aria-invalid": !!errors.name,
          "aria-describedby": errors.name ? "name-error" : void 0,
          className: `shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-shadow duration-200 focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""}`
        }
      ),
      errors.name && /* @__PURE__ */ jsx("p", { id: "name-error", className: "text-red-700 text-xs italic animate-fade-in", children: errors.name }),
      errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-700 text-xs italic", children: errors.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-gray-700 text-sm font-bold mb-2", children: "Email" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          "aria-required": "true",
          "aria-invalid": !!errors.email,
          "aria-describedby": errors.email ? "email-error" : void 0,
          className: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`
        }
      ),
      errors.email && /* @__PURE__ */ jsx("p", { id: "email-error", className: "text-red-700 text-xs italic", children: errors.email }),
      errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-700 text-xs italic", children: errors.email })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-gray-700 text-sm font-bold mb-2", children: "Subject" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "subject",
          name: "subject",
          value: formData.subject,
          onChange: handleChange,
          "aria-required": "true",
          "aria-invalid": !!errors.subject,
          "aria-describedby": errors.subject ? "subject-error" : void 0,
          className: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.subject ? "border-red-500" : ""}`
        }
      ),
      errors.subject && /* @__PURE__ */ jsx("p", { id: "subject-error", className: "text-red-700 text-xs italic", children: errors.subject }),
      errors.subject && /* @__PURE__ */ jsx("p", { className: "text-red-700 text-xs italic", children: errors.subject })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-gray-700 text-sm font-bold mb-2", children: "Message" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          value: formData.message,
          onChange: handleChange,
          rows: "6",
          "aria-required": "true",
          "aria-invalid": !!errors.message,
          "aria-describedby": errors.message ? "message-error" : void 0,
          className: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? "border-red-500" : ""}`
        }
      ),
      errors.message && /* @__PURE__ */ jsx("p", { id: "message-error", className: "text-red-700 text-xs italic", children: errors.message }),
      errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-700 text-xs italic", children: errors.message })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50",
        disabled: isSubmitting,
        children: isSubmitting ? "Sending..." : "Send Message"
      }
    ) })
  ] });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Contact Me | Iftekhar's Portfolio";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Contact Me</h1> <p>Feel free to reach out via email, phone, or connect with me on LinkedIn.</p> <ul> <li><strong>Email:</strong> <a href="mailto:Iftekhar.Rafi@dal.ca" class="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded">Iftekhar.Rafi@dal.ca</a></li> <li><strong>Phone:</strong> +1 902 324 3992</li> <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/iftekhar-hossain992" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded">linkedin.com/in/iftekhar-hossain992</a></li> <li><strong>Location:</strong> Halifax, N.S, B3R 1S9</li> </ul> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/Iftekhar---Personal-Portfolio/Iftekhar---Personal-Portfolio/src/components/ContactForm.jsx", "client:component-export": "default" })} ` })}`;
}, "/home/runner/work/Iftekhar---Personal-Portfolio/Iftekhar---Personal-Portfolio/src/pages/contact.astro", void 0);

const $$file = "/home/runner/work/Iftekhar---Personal-Portfolio/Iftekhar---Personal-Portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
