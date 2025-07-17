/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as renderScript, d as addAttribute } from '../chunks/astro/server_CUDSO68N.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$BaseLayout } from '../chunks/BaseLayout_B4tAeTz0.mjs';
/* empty css                                 */
import 'clsx';
import { getCollection } from '../chunks/_astro_content_peXGOEan.mjs';
import { P as ParticleBackground, C as ContactForm } from '../chunks/ParticleBackground_Df2T0plM.mjs';
import { S as SectionDivider } from '../chunks/SectionDivider_Do43jRHo.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    headline = "Iftekhar Rafi",
    // Default to name as per new design
    subheadline = "Software Engineer & Creative Technologist",
    ctaPrimaryText = "View My Work",
    ctaPrimaryLink = "/projects",
    ctaSecondaryText = "Get In Touch",
    ctaSecondaryLink = "/contact",
    imageUrl = "/images/iftekhar_photo.jpg",
    imageAlt = "Hero visual element",
    socialProofLogos
  } = Astro2.props;
  return renderTemplate`<!-- Hero Section -->${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 bg-gradient-hero print:min-h-0 print:py-12"> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <div class="max-w-3xl mx-auto"> <div data-aos="fade-down" data-aos-delay="100"> <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white tracking-tight leading-tight mb-6 md:mb-8"> ${headline} </h1> </div> <p class="text-xl sm:text-2xl md:text-3xl font-primary text-primary-200/90 mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="300"> ${subheadline} </p> <!-- Evolved Call-to-Action Buttons --> <div class="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center" data-aos="fade-up" data-aos-delay="500"> ${renderComponent($$result, "Button", $$Button, { "href": ctaPrimaryLink, "variant": "primary", "size": "lg" }, { "default": ($$result2) => renderTemplate`${ctaPrimaryText}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"> <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path> </svg> ` })} ${renderComponent($$result, "Button", $$Button, { "href": ctaSecondaryLink, "variant": "outline", "size": "lg", "extraClass": "text-white border-primary-200/70 hover:bg-white/10 hover:border-white" }, { "default": ($$result2) => renderTemplate`${ctaSecondaryText}` })} </div> </div> </div> </section>`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`/**
 * About Section Component
 *
 * Displays the "About Me" section with profile image, bio text, and skills list.
 *
 * @component
 *
 * @example
 * <About />
 */${renderScript($$result, "D:/Github/Iftekhar---Personal-Portfolio/src/components/About.astro?astro&type=script&index=0&lang.ts")}
import { skillsData, experienceData, achievements, personalityTraits } from '../data/aboutData.ts';
import type { LegacySkill as Skill, LegacyExperience as Experience, LegacyAchievement as Achievement, LegacyPersonalityTrait as PersonalityTrait } from '../data/aboutData.ts';

import SkillRadarChart from './SkillRadarChart.jsx';
import AnimatedTimeline from './AnimatedTimeline.jsx';
import AchievementBadge from './AchievementBadge.jsx';
import InteractiveResumeSection from './InteractiveResumeSection.jsx';
import PersonalityIndicator from './PersonalityIndicator.jsx';
${maybeRenderHead()}<section class="about-section py-12 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900" id="about" aria-labelledby="about-headline" data-astro-cid-v2cbyr3p> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" data-astro-cid-v2cbyr3p> <h2 id="about-headline" class="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white tracking-tight" data-aos="fade-up" data-astro-cid-v2cbyr3p>
More About <span class="text-primary-500 dark:text-primary-400" data-astro-cid-v2cbyr3p>Me</span> </h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-16" data-astro-cid-v2cbyr3p> <div class="md:col-span-1 flex flex-col items-center" data-aos="fade-right" data-aos-delay="200" data-astro-cid-v2cbyr3p> <div class="relative group mb-6" data-astro-cid-v2cbyr3p> <img src="/images/iftekhar_photo.jpg" alt="Profile picture of Iftekhar" loading="lazy" width="250" height="250" class="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover border-4 border-primary-500 dark:border-primary-400 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" data-astro-cid-v2cbyr3p> <div class="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-secondary-500 dark:group-hover:border-secondary-400 transition-all duration-300 animate-pulse-slow group-hover:animate-none" data-astro-cid-v2cbyr3p></div> </div> <div class="text-center md:text-left w-full" data-astro-cid-v2cbyr3p> <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-3" data-astro-cid-v2cbyr3p>Iftekhar Ahmed</h3> <p class="text-gray-600 dark:text-gray-400 mb-4" data-astro-cid-v2cbyr3p>Electrical Engineering Student | Aspiring Software & Systems Developer</p> <div class="mb-6" data-astro-cid-v2cbyr3p> <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3" data-astro-cid-v2cbyr3p>Personality Snapshot</h4> <div class="space-y-2" data-astro-cid-v2cbyr3p> ${personalityTraits.map((trait) => renderTemplate`${renderComponent($$result, "PersonalityIndicator", PersonalityIndicator, { "trait": trait.trait, "level": trait.level, "color": trait.color, "type": "bar", "size": "small", "client:visible": true, "client:component-hydration": "visible", "data-astro-cid-v2cbyr3p": true })}`)} <div class="md:col-span-2" data-aos="fade-left" data-aos-delay="300" data-astro-cid-v2cbyr3p> <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6" data-astro-cid-v2cbyr3p>
I am an Electrical Engineering student with a strong foundation in Computer Engineering from Dalhousie University. My academic journey and project experiences have equipped me with robust skills in software development, embedded systems, and system design. I thrive on solving complex problems and building innovative technology solutions.
</p> <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8" data-astro-cid-v2cbyr3p>
My key technical proficiencies include Python, C/C++, JavaScript, Git, Docker, and Linux. I'm passionate about creating efficient, scalable, and user-friendly applications. I'm currently seeking challenging opportunities where I can contribute to impactful projects in software engineering, systems development, or electrical engineering.
</p> <div class="mb-10" data-astro-cid-v2cbyr3p> <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-4" data-astro-cid-v2cbyr3p>My Achievements</h4> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-v2cbyr3p> ${achievements.map((badge, index) => renderTemplate`<div data-aos="fade-up"${addAttribute(index * 100 + 400, "data-aos-delay")} data-astro-cid-v2cbyr3p> ${renderComponent($$result, "AchievementBadge", AchievementBadge, { "icon": badge.icon, "title": badge.title, "description": badge.description, "color": badge.color, "client:visible": true, "client:component-hydration": "visible", "data-astro-cid-v2cbyr3p": true })} </div>`)} </div> </div> </div> </div> <div class="mb-16" data-aos="fade-up" data-aos-delay="200" data-astro-cid-v2cbyr3p> <h3 class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white" data-astro-cid-v2cbyr3p>Skills & Expertise</h3> <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "SkillRadarChart", SkillRadarChart, { "skills": skillsData, "client:load": true, "client:component-hydration": "load", "data-astro-cid-v2cbyr3p": true })} </div> </div> <div data-aos="fade-up" data-aos-delay="300" data-astro-cid-v2cbyr3p> <h3 class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white" data-astro-cid-v2cbyr3p>My Journey</h3> <div class="max-w-3xl mx-auto" data-astro-cid-v2cbyr3p> ${experienceData.map((exp, index) => renderTemplate`<div data-aos="fade-up"${addAttribute(index * 150 + 400, "data-aos-delay")} data-astro-cid-v2cbyr3p> ${renderComponent($$result, "InteractiveResumeSection", InteractiveResumeSection, { "title": `${exp.title} (${exp.date})`, "initiallyOpen": index === 0, "client:load": true, "client:component-hydration": "load", "data-astro-cid-v2cbyr3p": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnimatedTimeline", AnimatedTimeline, { "items": [exp], "layout": "vertical", "alternating": false, "accentColor": "var(--tw-prose-links)", "lineColor": "var(--tw-prose-bullets)", "client:visible": true, "client:component-hydration": "visible", "data-astro-cid-v2cbyr3p": true })} ` })} </div>`)} </div></div></div></div></div></div></div></section>`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/About.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    title,
    description,
    image,
    tags = [],
    // Provide an empty array as default value
    demoUrl,
    codeUrl,
    featured = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`group relative overflow-hidden rounded-xl bg-white dark:bg-bg-dark transition-all duration-500 shadow-card hover:shadow-floating ${featured ? "md:col-span-2" : ""} card-hover`, "class")}> <!-- Project Image with Overlay --> <div class="relative h-60 overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(`Screenshot of ${title}`, "alt")} class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div> <!-- Technology Tags --> <div class="absolute top-3 right-3 flex flex-wrap gap-2 justify-end max-w-[70%]"> ${tags && tags.map((tag) => renderTemplate`<span class="tag tag-primary px-2 py-1 text-xs font-medium rounded-full"> ${tag} </span>`)} </div> </div> <!-- Content --> <div class="p-6 bg-white dark:bg-bg-dark transition-all duration-500"> <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300"> ${title} </h3> <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"> ${description} </p> <!-- Call to Action --> <div class="flex items-center justify-between">  ${demoUrl ? renderTemplate`<a${addAttribute(demoUrl, "href")} class="animated-border text-primary font-medium flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
View Demo
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a>` : renderTemplate`<span></span>`}  ${codeUrl ? renderTemplate`<a${addAttribute(codeUrl, "href")} class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer" aria-label="View Source Code"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a>` : renderTemplate`<span></span>`} </div> <!-- Featured Badge (shown only for featured projects) --> ${featured && renderTemplate`<div class="absolute top-0 left-0 bg-accent text-white py-1 px-3 text-xs font-bold transform rotate-0 origin-top-left">
Featured
</div>`} </div> </article>`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro();
const $$ProjectsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectsSection;
  const projects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<section class="projects-section" id="projects" aria-labelledby="projects-headline" data-astro-cid-oyo7lhtz> <div class="container" data-astro-cid-oyo7lhtz> <h2 id="projects-headline" class="section-title" data-astro-cid-oyo7lhtz>Featured Projects</h2> <div class="projects-grid" data-astro-cid-oyo7lhtz> ${projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": project.data.title, "description": project.data.description, "tags": project.data.tags || project.data.technologies || [], "image": project.data.image || "/images/project-placeholder.jpg", "demoUrl": project.data.demoUrl, "codeUrl": project.data.codeUrl, "featured": project.data.featured, "data-astro-cid-oyo7lhtz": true })}`)} </div> </div> </section> `;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/ProjectsSection.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Iftekhar Rafi - Portfolio", "description": "Personal portfolio showcasing projects and skills in programming." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative"> ${renderComponent($$result2, "ParticleBackground", ParticleBackground, { "client:load": true, "color": "59, 130, 246", "particleDensity": 8, "opacity": 0.2, "mouseInteract": true, "maxConnectDistance": 150, "minSize": 1, "maxSize": 3, "minSpeed": 0.3, "maxSpeed": 0.8, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/ParticleBackground.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", $$Hero, { ...heroData })} </div>  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "wave", "position": "bottom", "color": "bg-white dark:bg-bg-dark", "bgColor": "", "flipX": false, "height": 60, "width": 100, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="section-title text-center mb-12">At a Glance</h2> ${renderComponent($$result2, "AnimatedStatsCounter", AnimatedStatsCounter, { "client:visible": true, "stats": stats, "bgColor": "bg-white dark:bg-gray-800", "textColor": "text-primary", "duration": 2e3, "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/AnimatedStatsCounter.jsx", "client:component-export": "default" })} </div> </section>  ${renderComponent($$result2, "About", $$About, {})}  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "curve", "position": "top", "color": "bg-white dark:bg-bg-dark", "bgColor": "", "flipX": false, "height": 60, "width": 100, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})}  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "triangles", "position": "top", "color": "bg-white dark:bg-bg-dark", "bgColor": "", "flipX": false, "height": 60, "width": 100, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section id="contact" class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="section-title text-center mb-12">Get In Touch</h2> <div class="max-w-2xl mx-auto"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/ContactForm.jsx", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/pages/index.astro", void 0);

const $$file = "D:/Github/Iftekhar---Personal-Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
