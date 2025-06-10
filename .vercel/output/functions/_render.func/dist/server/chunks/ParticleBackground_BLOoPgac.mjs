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
        errorMessage: "Please fill in all required fields"
      });
      const form = e.target;
      form.classList.add("animate-shake");
      setTimeout(() => form.classList.remove("animate-shake"), 500);
      return;
    }
    try {
      setFormState((prev) => ({ ...prev, isSubmitting: true }));
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
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
    return /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center animate-fade-in", children: [
      /* @__PURE__ */ jsx("div", { className: "text-green-600 dark:text-green-400 mb-4", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-16 w-16 mx-auto", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-green-800 dark:text-green-300 mb-2", children: "Message Sent!" }),
      /* @__PURE__ */ jsx("p", { className: "text-green-700 dark:text-green-400 mb-6", children: "Thank you for reaching out. I'll get back to you as soon as possible." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFormState((prev) => ({ ...prev, isSubmitted: false })),
          className: "btn btn-primary",
          children: "Send Another Message"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "space-y-6 transition-all duration-300",
      children: [
        formState.isError && /* @__PURE__ */ jsx("div", { className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-red-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-800 dark:text-red-200", children: formState.errorMessage }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "name",
                className: `absolute left-4 transition-all duration-300 ${focusedField === "name" || formData.name ? "-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1" : "top-3 text-gray-500"}`,
                children: "Name*"
              }
            ),
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
                className: "form-input pt-4",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "email",
                className: `absolute left-4 transition-all duration-300 ${focusedField === "email" || formData.email ? "-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1" : "top-3 text-gray-500"}`,
                children: "Email*"
              }
            ),
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
                className: "form-input pt-4",
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "subject",
              className: `absolute left-4 transition-all duration-300 ${focusedField === "subject" || formData.subject ? "-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1" : "top-3 text-gray-500"}`,
              children: "Subject"
            }
          ),
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
              className: "form-input pt-4"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "message",
              className: `absolute left-4 transition-all duration-300 ${focusedField === "message" || formData.message ? "-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1" : "top-3 text-gray-500"}`,
              children: "Message*"
            }
          ),
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
              className: "form-input pt-4 resize-none",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: formState.isSubmitting,
            className: `btn btn-primary ${formState.isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`,
            children: formState.isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
              ] }),
              "Sending..."
            ] }) : "Send Message"
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
