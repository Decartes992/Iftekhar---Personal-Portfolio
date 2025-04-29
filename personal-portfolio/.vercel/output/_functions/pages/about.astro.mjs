/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cb9XKqvL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BVxVitlN.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About Me | Iftekhar's Portfolio";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-6">About Me</h1> <div class="flex flex-col md:flex-row items-center md:items-start gap-8"> <img src="/profile-picture.jpg" alt="Iftekhar Hossain Rafi" class="w-48 h-48 rounded-full object-cover"> <div> <p class="text-lg mb-4">Hello! I'm Iftekhar Hossain Rafi, an Electrical Engineering student at Dalhousie University with a strong focus on the Computer Engineering option. I'm passionate about the intersection of hardware and software, with hands-on experience in software development (Python, C/C++), embedded systems programming, and system architecture.</p> <p class="text-lg mb-4">My academic journey and project work, such as contributing as a core software developer for the Dalhousie Space Systems Lab's LORIS satellite project and working on the MILTON AI-powered training decisions application, have allowed me to develop practical skills in areas like data structures, algorithms, API development, and working with tools like Git, Docker, and Linux.</p> <p class="text-lg mb-4">Previously, as a Makerspace Coordinator at Dalhousie's Emera Ideahub, I enjoyed advising students on diverse engineering projects and maintaining a variety of advanced equipment.</p> <p class="text-lg mb-4">I am actively seeking opportunities where I can apply my skills in software engineering, systems development, and electrical engineering to contribute to innovative projects.</p> </div> </div> </section> ` })}`;
}, "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
