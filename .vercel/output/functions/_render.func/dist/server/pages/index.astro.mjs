/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, f as renderSlot, a as renderTemplate, u as unescapeHTML, r as renderComponent, e as renderScript } from '../chunks/astro/server_GqbIBp2s.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DqKAphKk.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_Ds1yPFmJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, variant = "primary", children } = Astro2.props;
  const className = `btn btn-${variant}`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(className, "class")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(className, "class")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/components/Button.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<section class="hero-section" aria-labelledby="hero-headline" data-astro-cid-bbe6dxrz> <div class="container hero-content-wrapper" data-astro-cid-bbe6dxrz> <div class="hero-text" data-astro-cid-bbe6dxrz> <h1 id="hero-headline" data-astro-cid-bbe6dxrz>${unescapeHTML(headline)}</h1> <p data-astro-cid-bbe6dxrz>${unescapeHTML(subheadline)}</p> ${ctaText && ctaLink && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": ctaLink, "variant": "primary", "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate`${ctaText}` })}`}  ${socialProofLogos && socialProofLogos.length > 0 && renderTemplate`<div class="hero-social-proof" data-astro-cid-bbe6dxrz> ${socialProofLogos.map((logo) => renderTemplate`<img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} data-astro-cid-bbe6dxrz>`)} </div>`} </div> ${imageUrl && renderTemplate`<div class="hero-visual" data-astro-cid-bbe6dxrz> <img${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} loading="eager" fetchpriority="high" data-astro-cid-bbe6dxrz> </div>`} </div> </section> `;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate(_a || (_a = __template(["", `<section class="about-section" id="about" aria-labelledby="about-headline" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <h2 id="about-headline" class="section-title" data-astro-cid-v2cbyr3p>About Me</h2> <div class="about-content" data-astro-cid-v2cbyr3p> <div class="about-image" data-astro-cid-v2cbyr3p> <img src="/images/iftekhar_photo.jpg" alt="Profile picture of Iftekhar" loading="lazy" width="250" height="250" data-astro-cid-v2cbyr3p>  </div> <div class="about-text" data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p>I am an Electrical Engineering student with a background in Computer Engineering at Dalhousie University. I have developed strong skills in software and embedded systems, including proficiency in Python, C/C++, Git, Docker, and Linux.</p> <p data-astro-cid-v2cbyr3p>My project experience includes working on Dalhousie Space Systems Lab's LORIS satellite and developing the MILTON AI-powered training decisions application.</p> <p data-astro-cid-v2cbyr3p>Previously, I served as a Makerspace Coordinator at Dalhousie's Emera Ideahub, where I gained valuable experience in managing resources and supporting innovation.</p> <p data-astro-cid-v2cbyr3p>I am now seeking opportunities in software engineering, systems development, and electrical engineering, driven by my passion for technology and problem-solving.</p>   <div class="skills-section" data-astro-cid-v2cbyr3p> <h3 data-astro-cid-v2cbyr3p>Skills</h3> <ul class="skills-list" data-astro-cid-v2cbyr3p> <li data-astro-cid-v2cbyr3p>Python</li> <li data-astro-cid-v2cbyr3p>C/C++</li> <li data-astro-cid-v2cbyr3p>JavaScript</li> <li data-astro-cid-v2cbyr3p>HTML</li> <li data-astro-cid-v2cbyr3p>CSS</li> <li data-astro-cid-v2cbyr3p>Astro</li> <li data-astro-cid-v2cbyr3p>Git</li> <li data-astro-cid-v2cbyr3p>Docker</li> <li data-astro-cid-v2cbyr3p>Linux</li> <li data-astro-cid-v2cbyr3p>UI/UX</li> </ul> </div>  </div> </div> </div> </section> <script src="/scripts/about-interactive.js" type="module"><\/script> `])), maybeRenderHead());
}, "/workspaces/Iftekhar---Personal-Portfolio/src/components/About.astro", void 0);

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, technologies = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="project-card" data-astro-cid-mspuyifq> <div class="card-content" data-astro-cid-mspuyifq> <h3 data-astro-cid-mspuyifq>${title}</h3> <p data-astro-cid-mspuyifq>${description}</p> ${technologies.length > 0 && renderTemplate`<div class="tech-stack-wrapper" data-astro-cid-mspuyifq> <h4 class="visually-hidden" data-astro-cid-mspuyifq>Technologies Used</h4> <ul class="tech-stack"${addAttribute(`Technologies used for ${title}`, "aria-label")} data-astro-cid-mspuyifq> ${technologies.map((tech) => renderTemplate`<li data-astro-cid-mspuyifq>${tech}</li>`)} </ul> </div>`} </div> </article> `;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/components/ProjectCard.astro", void 0);

const $$ProjectsSection = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<section class="projects-section" id="projects" aria-labelledby="projects-headline" data-astro-cid-oyo7lhtz> <div class="container" data-astro-cid-oyo7lhtz> <h2 id="projects-headline" class="section-title" data-astro-cid-oyo7lhtz>Featured Projects</h2> <div class="projects-grid" data-astro-cid-oyo7lhtz> ${projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": project.data.title, "description": project.data.description, "technologies": project.data.technologies, "data-astro-cid-oyo7lhtz": true })}`)} </div> </div> </section> `;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/components/ProjectsSection.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contact-section" id="contact" aria-labelledby="contact-headline" data-astro-cid-svshx33u> <div class="container" data-astro-cid-svshx33u> <h2 id="contact-headline" class="section-title" data-astro-cid-svshx33u>Get In Touch</h2> <p class="contact-intro" data-astro-cid-svshx33u></p>    <form class="contact-form" name="contact" method="POST" netlify data-astro-cid-svshx33u>   <p class="hidden" data-astro-cid-svshx33u> <label data-astro-cid-svshx33u>Don’t fill this out if you’re human: <input name="bot-field" data-astro-cid-svshx33u></label> </p>  <input type="hidden" name="form-name" value="contact" data-astro-cid-svshx33u> <div class="form-group" data-astro-cid-svshx33u> <label for="name" data-astro-cid-svshx33u>Name</label> <input type="text" id="name" name="name" required autocomplete="name" data-astro-cid-svshx33u>  </div> <div class="form-group" data-astro-cid-svshx33u> <label for="email" data-astro-cid-svshx33u>Email</label> <input type="email" id="email" name="email" required autocomplete="email" inputmode="email" data-astro-cid-svshx33u>  </div> <div class="form-group" data-astro-cid-svshx33u> <label for="message" data-astro-cid-svshx33u>Message</label> <textarea id="message" name="message" rows="5" required data-astro-cid-svshx33u></textarea> </div> <div class="form-submit" data-astro-cid-svshx33u> <button type="submit" class="btn btn-primary" data-astro-cid-svshx33u>Send Message</button>  </div> </form>  <div class="social-links" data-astro-cid-svshx33u> <p data-astro-cid-svshx33u>Connect with me:</p>   </div>  ${renderScript($$result, "/workspaces/Iftekhar---Personal-Portfolio/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")} </div> </section> `;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/components/ContactForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroData = {
    headline: "Iftekhar Rafi: Building digital Experiences",
    subheadline: "Passionate developer specializing in modern web technologies and user-centric design."
    // Add other props as defined in Hero.astro
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Iftekhar Rafi - Portfolio", "description": "Personal portfolio showcasing projects and skills in programming." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { ...heroData })} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/pages/index.astro", void 0);

const $$file = "/workspaces/Iftekhar---Personal-Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
