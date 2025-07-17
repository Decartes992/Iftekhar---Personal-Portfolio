import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    errorMessage: ""
  });
  const [focusedField, setFocusedField] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFocus = (field) => {
    setFocusedField(field);
  };
  const handleBlur = () => {
    setFocusedField(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: "Please fill in all required fields."
        // Corrected typo
      });
      const form = e.target;
      form.classList.add("animate-shake");
      setTimeout(() => form.classList.remove("animate-shake"), 600);
      return;
    }
    try {
      setFormState((prev) => ({ ...prev, isSubmitting: true, isError: false, errorMessage: "" }));
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Failed to send message. Please try again." }));
        throw new Error(errorData.message || "Failed to send message. Please try again.");
      }
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFocusedField(null);
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        errorMessage: ""
      });
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: error.message || "Something went wrong. Please try again later."
      });
    }
  };
  if (formState.isSubmitted) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-success-50 dark:bg-success-900/30 border border-success-300 dark:border-success-700 rounded-xl p-8 text-center animate-fade-in-up shadow-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "text-success-600 dark:text-success-400 mb-4", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16 mx-auto animate-pulse", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-success-800 dark:text-success-200 mb-2", children: "Message Sent Successfully!" }),
      /* @__PURE__ */ jsx("p", { className: "text-success-700 dark:text-success-300 mb-6", children: "Thank you for reaching out. I'll get back to you as soon as possible." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFormState({ isSubmitting: false, isSubmitted: false, isError: false, errorMessage: "" }),
          className: "btn btn-primary hover:btn-primary-dark focus:ring-primary-500/50 transition-all duration-300 ease-in-out transform hover:scale-105",
          children: "Send Another Message"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "space-y-8 p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 transition-all duration-300",
      noValidate: true,
      children: [
        formState.isError && /* @__PURE__ */ jsx("div", { className: "bg-danger-50 dark:bg-danger-900/30 border border-danger-300 dark:border-danger-700 rounded-lg p-4 mb-6 animate-fade-in-down shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 text-danger-500 dark:text-danger-400", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-danger-700 dark:text-danger-200", children: formState.errorMessage }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                onFocus: () => handleFocus("name"),
                onBlur: handleBlur,
                className: `form-input peer ${formState.isError && !formData.name ? "border-danger-500 dark:border-danger-400 focus:border-danger-500 focus:ring-danger-500/50" : "focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30"}`,
                required: true,
                "aria-describedby": formState.isError && !formData.name ? "name-error" : void 0
              }
            ),
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "name",
                className: `form-label peer-focus:form-label-focused ${focusedField === "name" || formData.name ? "form-label-focused" : ""} ${formState.isError && !formData.name ? "text-danger-500 dark:text-danger-400" : "text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300"}`,
                children: "Full Name*"
              }
            ),
            formState.isError && !formData.name && /* @__PURE__ */ jsx("p", { id: "name-error", className: "mt-1 text-xs text-danger-600 dark:text-danger-400", children: "Name is required." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
                onFocus: () => handleFocus("email"),
                onBlur: handleBlur,
                className: `form-input peer ${formState.isError && !formData.email ? "border-danger-500 dark:border-danger-400 focus:border-danger-500 focus:ring-danger-500/50" : "focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30"}`,
                required: true,
                "aria-describedby": formState.isError && !formData.email ? "email-error" : void 0
              }
            ),
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "email",
                className: `form-label peer-focus:form-label-focused ${focusedField === "email" || formData.email ? "form-label-focused" : ""} ${formState.isError && !formData.email ? "text-danger-500 dark:text-danger-400" : "text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300"}`,
                children: "Email Address*"
              }
            ),
            formState.isError && !formData.email && /* @__PURE__ */ jsx("p", { id: "email-error", className: "mt-1 text-xs text-danger-600 dark:text-danger-400", children: "A valid email is required." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "subject",
              name: "subject",
              value: formData.subject,
              onChange: handleChange,
              onFocus: () => handleFocus("subject"),
              onBlur: handleBlur,
              className: "form-input peer focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30"
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "subject",
              className: `form-label peer-focus:form-label-focused ${focusedField === "subject" || formData.subject ? "form-label-focused" : ""} text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300`,
              children: "Subject (Optional)"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              value: formData.message,
              onChange: handleChange,
              onFocus: () => handleFocus("message"),
              onBlur: handleBlur,
              rows: "5",
              className: `form-input peer resize-none ${formState.isError && !formData.message ? "border-danger-500 dark:border-danger-400 focus:border-danger-500 focus:ring-danger-500/50" : "focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30"}`,
              required: true,
              "aria-describedby": formState.isError && !formData.message ? "message-error" : void 0
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "message",
              className: `form-label peer-focus:form-label-focused ${focusedField === "message" || formData.message ? "form-label-focused" : ""} ${formState.isError && !formData.message ? "text-danger-500 dark:text-danger-400" : "text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300"}`,
              children: "Your Message*"
            }
          ),
          formState.isError && !formData.message && /* @__PURE__ */ jsx("p", { id: "message-error", className: "mt-1 text-xs text-danger-600 dark:text-danger-400", children: "Message cannot be empty." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            disabled: formState.isSubmitting,
            className: "btn btn-lg btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-primary-500/50 shadow-md hover:shadow-lg",
            children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" }),
              formState.isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "relative flex items-center justify-center", children: [
                /* @__PURE__ */ jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Sending..."
              ] }) : /* @__PURE__ */ jsx("span", { className: "relative", children: "Send Message" })
            ]
          }
        ) })
      ]
    }
  );
};

const ParticleBackground = ({
  color = "59, 130, 246",
  particleDensity = 8,
  opacity = 0.2,
  mouseInteract = true,
  maxConnectDistance = 100,
  minSize = 1,
  maxSize = 3,
  minSpeed = 0.3,
  maxSpeed = 0.8
}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let mouse = {
      x: null,
      y: null,
      radius: mouseInteract ? 150 : 0
    };
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      init();
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    if (mouseInteract) {
      window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
      });
    }
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
        this.speedY = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
        this.color = `rgba(${color}, ${Math.random() * opacity + opacity / 2})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        if (mouseInteract && mouse.x != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            this.speedX -= force * Math.cos(angle) * 0.1;
            this.speedY -= force * Math.sin(angle) * 0.1;
          }
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const init = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / (1e4 / particleDensity));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxConnectDistance) {
            const opacity2 = (1 - distance / maxConnectDistance) * 0.5;
            ctx.strokeStyle = `rgba(${color}, ${opacity2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    init();
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (mouseInteract) {
        window.removeEventListener("mousemove", () => {
        });
        window.removeEventListener("mouseout", () => {
        });
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleDensity, opacity, mouseInteract, maxConnectDistance, minSize, maxSize, minSpeed, maxSpeed]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "absolute inset-0 z-0",
      style: { pointerEvents: "none" }
    }
  );
};

export { ContactForm as C, ParticleBackground as P };
