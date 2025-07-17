/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CUDSO68N.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B4tAeTz0.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { r as resumeData } from '../chunks/aboutData_BjTP3D2B.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const ExpandableSection = ({ title, children, initiallyOpen = false, titleClassName, iconSize = 6 }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, children]);
  const toggleOpen = () => setIsOpen(!isOpen);
  const IconComponent = isOpen ? MinusIcon : PlusIcon;
  return /* @__PURE__ */ jsxs("div", { className: "mb-6 border border-border dark:border-border-dark rounded-xl shadow-sm overflow-hidden transition-all duration-300 ease-in-out", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: toggleOpen,
        className: `w-full flex justify-between items-center p-5 md:p-6 text-left bg-bg-alt dark:bg-bg-dark-alt hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 transition-colors duration-200 ${isOpen ? "border-b border-border dark:border-border-dark" : ""}`,
        "aria-expanded": isOpen,
        "aria-controls": `section-content-${title.replace(/\s+/g, "-").toLowerCase()}`,
        children: [
          /* @__PURE__ */ jsx("h3", { className: `text-xl md:text-2xl font-semibold text-text-headings dark:text-text-dark-headings ${titleClassName || ""}`, children: title }),
          /* @__PURE__ */ jsx(IconComponent, { className: `w-${iconSize} h-${iconSize} text-primary-600 dark:text-primary-400 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}` })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: contentRef,
        style: { maxHeight: contentHeight },
        id: `section-content-${title.replace(/\s+/g, "-").toLowerCase()}`,
        className: "overflow-hidden transition-max-height duration-500 ease-in-out",
        children: /* @__PURE__ */ jsx("div", { className: "p-5 md:p-6 bg-card dark:bg-card-dark text-text-base dark:text-text-dark-base prose dark:prose-invert max-w-none prose-sm md:prose-base", children })
      }
    )
  ] });
};

const $$Resume = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Resume | Iftekhar's Portfolio";
  const pageDescription = "Detailed resume of Iftekhar, showcasing skills, experience, projects, and education in software and electrical engineering.";
  const skillsByCategory = resumeData.skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-ruvg6z4q": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" data-astro-cid-ruvg6z4q> <header class="text-center mb-16 md:mb-20" data-aos="fade-down" data-astro-cid-ruvg6z4q> <h1 class="text-5xl md:text-6xl font-bold text-text-headings dark:text-text-dark-headings mb-6 tracking-tight" data-astro-cid-ruvg6z4q>My Resume</h1> <p class="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed" data-astro-cid-ruvg6z4q>
A comprehensive overview of my professional journey, skills, and academic achievements in the fields of software and electrical engineering.
</p> <div class="mt-8" data-astro-cid-ruvg6z4q> <a href="/Iftekhar_Resume.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-bg-dark transition-transform transform hover:scale-105 shadow-lg" data-astro-cid-ruvg6z4q>
Download PDF Resume
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-ruvg6z4q> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-ruvg6z4q></path> </svg> </a> </div> </header> <!-- Skills Section --> ${renderComponent($$result2, "InteractiveResumeSection", ExpandableSection, { "title": "Skills Showcase", "client:load": true, "initiallyOpen": true, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/InteractiveResumeSection.jsx", "client:component-export": "default", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result3) => renderTemplate` <div class="space-y-8" data-astro-cid-ruvg6z4q> ${Object.entries(skillsByCategory).map(([category, skills]) => renderTemplate`<div class="p-4 bg-bg-alt dark:bg-bg-dark-alt rounded-lg shadow-sm" data-astro-cid-ruvg6z4q> <div class="flex items-center mb-3" data-astro-cid-ruvg6z4q> <div class="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" data-astro-cid-ruvg6z4q> <!-- Icon placeholder based on category --> ${category === "Programming Languages" && "\u{1F4BB}"} ${category === "Frameworks/Libraries" && "\u{1F527}"} ${category === "Tools/Platforms" && "\u{1F6E0}\uFE0F"} ${category === "Methodologies" && "\u{1F4CA}"} ${category === "Software" && "\u2728"} ${category === "Hardware" && "\u{1F50C}"} ${category === "Soft Skills" && "\u{1F465}"} ${category === "Other" && "\u{1F4A1}"} </div> <h4 class="text-lg font-semibold text-text-headings dark:text-text-dark-headings" data-astro-cid-ruvg6z4q>${category}</h4> </div> <ul class="flex flex-wrap gap-2" data-astro-cid-ruvg6z4q> ${skills.map((skill) => renderTemplate`<li class="bg-tag-bg dark:bg-tag-dark-bg text-tag-text dark:text-tag-dark-text px-3 py-1.5 rounded-full text-sm font-medium" data-astro-cid-ruvg6z4q> ${skill.name} </li>`)} </ul> </div>`)} </div> ` })} <!-- Work Experience Section --> ${renderComponent($$result2, "InteractiveResumeSection", ExpandableSection, { "title": "Work Experience", "client:load": true, "initiallyOpen": true, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/InteractiveResumeSection.jsx", "client:component-export": "default", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result3) => renderTemplate` <div class="space-y-8" data-astro-cid-ruvg6z4q> ${resumeData.workExperience.map((exp, index) => renderTemplate`<div class="p-5 border border-border dark:border-border-dark rounded-lg shadow-md bg-card dark:bg-card-dark" data-astro-cid-ruvg6z4q> <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-2" data-astro-cid-ruvg6z4q> <h4 class="text-xl font-semibold text-primary-700 dark:text-primary-300" data-astro-cid-ruvg6z4q>${exp.role}</h4> <p class="text-sm text-text-muted dark:text-text-dark-muted mt-1 sm:mt-0" data-astro-cid-ruvg6z4q>${exp.period}</p> </div> <p class="text-md font-medium text-text-secondary dark:text-text-dark-secondary mb-1" data-astro-cid-ruvg6z4q>${exp.company} - <span class="italic" data-astro-cid-ruvg6z4q>${exp.location}</span></p> <ul class="list-disc list-outside ml-5 space-y-1.5 text-text-base dark:text-text-dark-base mt-3" data-astro-cid-ruvg6z4q> ${exp.responsibilities.map((resp) => renderTemplate`<li data-astro-cid-ruvg6z4q>${resp}</li>`)} </ul> ${exp.technologies && exp.technologies.length > 0 && renderTemplate`<div class="mt-4 pt-3 border-t border-border-subtle dark:border-border-dark-subtle" data-astro-cid-ruvg6z4q> <h5 class="text-sm font-semibold text-text-muted dark:text-text-dark-muted mb-2" data-astro-cid-ruvg6z4q>Key Technologies:</h5> <div class="flex flex-wrap gap-2" data-astro-cid-ruvg6z4q> ${exp.technologies.map((tech) => renderTemplate`<span class="text-xs bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 px-2.5 py-1 rounded-full font-medium" data-astro-cid-ruvg6z4q> ${tech} </span>`)} </div> </div>`} </div>`)} </div> ` })} <!-- Academic Projects Section --> ${renderComponent($$result2, "InteractiveResumeSection", ExpandableSection, { "title": "Academic & Personal Projects", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/InteractiveResumeSection.jsx", "client:component-export": "default", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result3) => renderTemplate` <div class="space-y-8" data-astro-cid-ruvg6z4q> ${resumeData.academicProjects.map((project) => renderTemplate`<div class="p-5 border border-border dark:border-border-dark rounded-lg shadow-md bg-card dark:bg-card-dark" data-astro-cid-ruvg6z4q> <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-2" data-astro-cid-ruvg6z4q> <h4 class="text-xl font-semibold text-primary-700 dark:text-primary-300" data-astro-cid-ruvg6z4q>${project.name}</h4> <p class="text-sm text-text-muted dark:text-text-dark-muted mt-1 sm:mt-0" data-astro-cid-ruvg6z4q>${project.period}</p> </div> <p class="text-md font-medium text-text-secondary dark:text-text-dark-secondary mb-1" data-astro-cid-ruvg6z4q>${project.affiliation}</p> ${project.description && renderTemplate`<p class="text-text-base dark:text-text-dark-base mb-2" data-astro-cid-ruvg6z4q>${project.description}</p>`} <ul class="list-disc list-outside ml-5 space-y-1.5 text-text-base dark:text-text-dark-base mt-3" data-astro-cid-ruvg6z4q> ${project.highlights.map((highlight) => renderTemplate`<li data-astro-cid-ruvg6z4q>${highlight}</li>`)} </ul> ${project.technologies && project.technologies.length > 0 && renderTemplate`<div class="mt-4 pt-3 border-t border-border-subtle dark:border-border-dark-subtle" data-astro-cid-ruvg6z4q> <h5 class="text-sm font-semibold text-text-muted dark:text-text-dark-muted mb-2" data-astro-cid-ruvg6z4q>Key Technologies:</h5> <div class="flex flex-wrap gap-2" data-astro-cid-ruvg6z4q> ${project.technologies.map((tech) => renderTemplate`<span class="text-xs bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 px-2.5 py-1 rounded-full font-medium" data-astro-cid-ruvg6z4q> ${tech} </span>`)} </div> </div>`} </div>`)} </div> ` })} <!-- Education Section --> ${renderComponent($$result2, "InteractiveResumeSection", ExpandableSection, { "title": "Education", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/InteractiveResumeSection.jsx", "client:component-export": "default", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result3) => renderTemplate` <div class="space-y-8" data-astro-cid-ruvg6z4q> ${resumeData.education.map((edu) => renderTemplate`<div class="p-5 border border-border dark:border-border-dark rounded-lg shadow-md bg-card dark:bg-card-dark" data-astro-cid-ruvg6z4q> <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-2" data-astro-cid-ruvg6z4q> <h4 class="text-xl font-semibold text-primary-700 dark:text-primary-300" data-astro-cid-ruvg6z4q>${edu.degree}</h4> <p class="text-sm text-text-muted dark:text-text-dark-muted mt-1 sm:mt-0" data-astro-cid-ruvg6z4q>${edu.period}</p> </div> <p class="text-md font-medium text-text-secondary dark:text-text-dark-secondary mb-1" data-astro-cid-ruvg6z4q>${edu.institution}</p> ${edu.gpa && renderTemplate`<p class="text-sm text-text-muted dark:text-text-dark-muted" data-astro-cid-ruvg6z4q>GPA: ${edu.gpa}</p>`} ${edu.details && edu.details.length > 0 && renderTemplate`<ul class="list-disc list-outside ml-5 space-y-1 text-text-base dark:text-text-dark-base mt-3" data-astro-cid-ruvg6z4q> ${edu.details.map((detail) => renderTemplate`<li data-astro-cid-ruvg6z4q>${detail}</li>`)} </ul>`} </div>`)} </div> ` })} <!-- Certifications Section --> ${renderComponent($$result2, "InteractiveResumeSection", ExpandableSection, { "title": "Certifications", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/InteractiveResumeSection.jsx", "client:component-export": "default", "data-astro-cid-ruvg6z4q": true }, { "default": ($$result3) => renderTemplate` <div class="space-y-6" data-astro-cid-ruvg6z4q> ${resumeData.certifications.map((cert) => renderTemplate`<div class="p-5 border border-border dark:border-border-dark rounded-lg shadow-md bg-card dark:bg-card-dark flex items-center" data-astro-cid-ruvg6z4q> <div class="h-8 w-8 text-green-500 dark:text-green-400 mr-4 flex-shrink-0" data-astro-cid-ruvg6z4q>✅</div> <div data-astro-cid-ruvg6z4q> <h4 class="text-lg font-semibold text-text-headings dark:text-text-dark-headings" data-astro-cid-ruvg6z4q>${cert.name}</h4> <p class="text-sm text-text-muted dark:text-text-dark-muted" data-astro-cid-ruvg6z4q>${cert.issuer}${cert.date ? ` - ${cert.date}` : ""}</p> ${cert.url && renderTemplate`<a${addAttribute(cert.url, "href")} target="_blank" rel="noopener noreferrer" class="text-sm text-primary-600 dark:text-primary-400 hover:underline" data-astro-cid-ruvg6z4q>View Credential</a>`} </div> </div>`)} </div> ` })} </div> ` })} `;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/pages/resume.astro", void 0);

const $$file = "D:/Github/Iftekhar---Personal-Portfolio/src/pages/resume.astro";
const $$url = "/resume";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resume,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
