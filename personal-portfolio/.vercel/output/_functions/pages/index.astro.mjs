/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, e as renderScript, b as renderTemplate, d as addAttribute, r as renderComponent } from '../chunks/astro/server_Dbp9A865.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BPHo4pPs.mjs';
import 'clsx';
/* empty css                                 */
import { getCollection } from '../chunks/_astro_content_DXkUQocM.mjs';
import { P as ParticleBackground, C as ContactForm } from '../chunks/ParticleBackground_BLOoPgac.mjs';
import { S as SectionDivider } from '../chunks/SectionDivider_DaiY7dJn.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    headline = "Default Headline",
    subheadline = "Default subheadline text.",
    ctaText = "Get In Touch",
    ctaLink = "#contact",
    imageUrl = "/images/iftekhar_photo.jpg",
    imageAlt = "Hero visual element",
    socialProofLogos
    // Destructure socialProofLogos
  } = Astro2.props;
  return renderTemplate`// Enhanced Hero component with modern visual effects
---
${maybeRenderHead()}<section class="hero relative overflow-hidden bg-gradient-to-br from-bg-base to-bg-alt dark:from-bg-dark dark:to-bg-alt-dark py-16 md:py-24"> <!-- Decorative floating elements --> <div class="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 floating-element" style="animation-delay: 0s;"></div> <div class="absolute top-40 right-10 w-16 h-16 rounded-full bg-secondary/10 dark:bg-secondary/20 floating-element" style="animation-delay: 1s;"></div> <div class="absolute bottom-10 left-1/4 w-20 h-20 rounded-full bg-accent/10 dark:bg-accent/20 floating-element" style="animation-delay: 2s;"></div> <!-- Hero content container --> <div class="container relative z-10"> <div class="max-w-3xl mx-auto text-center"> <!-- Animated gradient text for name --> <h1 class="font-bold mb-4 sm:mb-6 gradient-text animate-fade-in">
Iftekhar Ahmed
</h1> <!-- Typewriter effect for role --> <div class="text-xl sm:text-2xl md:text-3xl font-light mb-6 overflow-hidden whitespace-nowrap"> <span class="typewriter-text">Full Stack Developer</span> </div> <!-- Description with highlight --> <p class="text-lg md:text-xl mb-8 animate-fade-in" style="animation-delay: 0.3s;">
Creating <span class="font-semibold text-primary dark:text-primary">intuitive</span> and
<span class="font-semibold text-secondary dark:text-secondary">impactful</span> digital experiences
</p> <!-- Call to action buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style="animation-delay: 0.6s;"> <a href="#projects" class="btn btn-primary">
View My Work
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> <a href="#contact" class="btn btn-outline">
Get In Touch
</a> </div> </div> </div> <!-- Background tech pattern (SVG shape) --> <div class="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"> <defs> <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"> <path d="M 0 10 L 40 10 M 10 0 L 10 40 M 0 20 L 40 20 M 20 0 L 20 40 M 0 30 L 40 30 M 30 0 L 30 40" fill="none" stroke="currentColor" stroke-width="0.5"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#grid)"></rect> </svg> </div> </section> ${renderScript($$result, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate(_a || (_a = __template(["", `<section class="about-section" id="about" aria-labelledby="about-headline" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <h2 id="about-headline" class="section-title" data-astro-cid-v2cbyr3p>About Me</h2> <div class="about-content" data-astro-cid-v2cbyr3p> <div class="about-image" data-astro-cid-v2cbyr3p> <img src="/images/iftekhar_photo.jpg" alt="Profile picture of Iftekhar" loading="lazy" width="250" height="250" data-astro-cid-v2cbyr3p>  </div> <div class="about-text" data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p>I am an Electrical Engineering student with a background in Computer Engineering at Dalhousie University. I have developed strong skills in software and embedded systems, including proficiency in Python, C/C++, Git, Docker, and Linux.</p> <p data-astro-cid-v2cbyr3p>My project experience includes working on Dalhousie Space Systems Lab's LORIS satellite and developing the MILTON AI-powered training decisions application.</p> <p data-astro-cid-v2cbyr3p>Previously, I served as a Makerspace Coordinator at Dalhousie's Emera Ideahub, where I gained valuable experience in managing resources and supporting innovation.</p> <p data-astro-cid-v2cbyr3p>I am now seeking opportunities in software engineering, systems development, and electrical engineering, driven by my passion for technology and problem-solving.</p>   <div class="skills-section" data-astro-cid-v2cbyr3p> <h3 data-astro-cid-v2cbyr3p>Skills</h3> <ul class="skills-list" data-astro-cid-v2cbyr3p> <li data-astro-cid-v2cbyr3p>Python</li> <li data-astro-cid-v2cbyr3p>C/C++</li> <li data-astro-cid-v2cbyr3p>JavaScript</li> <li data-astro-cid-v2cbyr3p>HTML</li> <li data-astro-cid-v2cbyr3p>CSS</li> <li data-astro-cid-v2cbyr3p>Astro</li> <li data-astro-cid-v2cbyr3p>Git</li> <li data-astro-cid-v2cbyr3p>Docker</li> <li data-astro-cid-v2cbyr3p>Linux</li> <li data-astro-cid-v2cbyr3p>UI/UX</li> </ul> </div>  </div> </div> </div> </section> <script src="/scripts/about-interactive.js" type="module"><\/script> `])), maybeRenderHead());
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/About.astro", void 0);

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    title,
    description,
    image,
    tags,
    demoUrl,
    codeUrl,
    featured = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`group relative overflow-hidden rounded-xl bg-white dark:bg-bg-dark transition-all duration-500 shadow-card hover:shadow-floating ${featured ? "md:col-span-2" : ""} card-hover`, "class")}> <!-- Project Image with Overlay --> <div class="relative h-60 overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(`Screenshot of ${title}`, "alt")} class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div> <!-- Technology Tags --> <div class="absolute top-3 right-3 flex flex-wrap gap-2 justify-end max-w-[70%]"> ${tags.map((tag) => renderTemplate`<span class="tag tag-primary px-2 py-1 text-xs font-medium rounded-full"> ${tag} </span>`)} </div> </div> <!-- Content --> <div class="p-6 bg-white dark:bg-bg-dark transition-all duration-500"> <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300"> ${title} </h3> <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"> ${description} </p> <!-- Call to Action --> <div class="flex items-center justify-between"> <a${addAttribute(demoUrl, "href")} class="animated-border text-primary font-medium flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
View Demo
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> <a${addAttribute(codeUrl, "href")} class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> <!-- Featured Badge (shown only for featured projects) --> ${featured && renderTemplate`<div class="absolute top-0 left-0 bg-accent text-white py-1 px-3 text-xs font-bold transform rotate-0 origin-top-left">
Featured
</div>`} </div> </article>`;
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/ProjectCard.astro", void 0);

const $$ProjectsSection = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<section class="projects-section" id="projects" aria-labelledby="projects-headline" data-astro-cid-oyo7lhtz> <div class="container" data-astro-cid-oyo7lhtz> <h2 id="projects-headline" class="section-title" data-astro-cid-oyo7lhtz>Featured Projects</h2> <div class="projects-grid" data-astro-cid-oyo7lhtz> ${projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": project.data.title, "description": project.data.description, "technologies": project.data.technologies, "data-astro-cid-oyo7lhtz": true })}`)} </div> </div> </section> `;
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/ProjectsSection.astro", void 0);

const AnimatedStatsCounter = ({
  stats = [],
  bgColor = "bg-white dark:bg-gray-800",
  textColor = "text-primary",
  duration = 2e3
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const counterRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    const stepDuration = 20;
    const steps = duration / stepDuration;
    const incrementValues = stats.map((stat) => stat.value / steps);
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounters(stats.map((stat) => stat.value));
        clearInterval(timer);
      } else {
        setCounters(
          (prevCounters) => prevCounters.map((count, index) => {
            const newValue = count + incrementValues[index];
            return Math.min(newValue, stats[index].value);
          })
        );
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isVisible, stats, duration]);
  const formatNumber = (num) => {
    return Math.round(num).toLocaleString();
  };
  const renderIcon = (icon) => {
    if (!icon) return null;
    return /* @__PURE__ */ jsx("div", { className: "mb-3 text-primary", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: icon.path }) }) });
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: counterRef,
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
      children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${bgColor} p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 duration-300`,
          children: [
            stat.icon && renderIcon(stat.icon),
            /* @__PURE__ */ jsx("div", { className: `text-4xl font-bold mb-2 ${textColor}`, children: formatNumber(counters[index]) }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-600 dark:text-gray-300 font-medium", children: stat.label })
          ]
        },
        index
      ))
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroData = {
    headline: "Iftekhar Rafi: Building digital Experiences",
    subheadline: "Passionate developer specializing in modern web technologies and user-centric design."
    // Add other props as defined in Hero.astro
  };
  const stats = [
    {
      label: "Projects Completed",
      value: 30,
      icon: {
        path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      }
    },
    {
      label: "Happy Clients",
      value: 25,
      icon: {
        path: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    },
    {
      label: "Years Experience",
      value: 5,
      icon: {
        path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    },
    {
      label: "Technologies",
      value: 15,
      icon: {
        path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Iftekhar Rafi - Portfolio", "description": "Personal portfolio showcasing projects and skills in programming." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative"> ${renderComponent($$result2, "ParticleBackground", ParticleBackground, { "client:load": true, "color": "59, 130, 246", "particleDensity": 8, "opacity": 0.2, "mouseInteract": true, "maxConnectDistance": 150, "minSize": 1, "maxSize": 3, "minSpeed": 0.3, "maxSpeed": 0.8, "client:component-hydration": "load", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/ParticleBackground.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", $$Hero, { ...heroData })} </div>  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "wave", "position": "bottom", "color": "bg-white dark:bg-bg-dark", "bgColor": "", "flipX": false, "height": 60, "width": 100, "client:component-hydration": "load", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="section-title text-center mb-12">At a Glance</h2> ${renderComponent($$result2, "AnimatedStatsCounter", AnimatedStatsCounter, { "client:visible": true, "stats": stats, "bgColor": "bg-white dark:bg-gray-800", "textColor": "text-primary", "duration": 2e3, "client:component-hydration": "visible", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/AnimatedStatsCounter.jsx", "client:component-export": "default" })} </div> </section>  ${renderComponent($$result2, "About", $$About, {})}  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "curve", "position": "top", "color": "bg-white dark:bg-bg-dark", "bgColor": "", "flipX": false, "height": 60, "width": 100, "client:component-hydration": "load", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})}  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "triangles", "position": "top", "color": "bg-white dark:bg-bg-dark", "bgColor": "", "flipX": false, "height": 60, "width": 100, "client:component-hydration": "load", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section id="contact" class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="section-title text-center mb-12">Get In Touch</h2> <div class="max-w-2xl mx-auto"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/ContactForm.jsx", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/index.astro", void 0);

const $$file = "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
