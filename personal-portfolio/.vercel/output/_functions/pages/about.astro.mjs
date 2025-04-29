import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B7_fxlpj.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B8Ece2LE.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About Me | Iftekhar's Portfolio";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About Me</h1> <p>Hello! I'm Iftekhar Hossain Rafi, an Electrical Engineering student at Dalhousie University with a strong focus on the Computer Engineering option. I'm passionate about the intersection of hardware and software, with hands-on experience in software development (Python, C/C++), embedded systems programming, and system architecture.</p> <p>My academic journey and project work, such as contributing as a core software developer for the Dalhousie Space Systems Lab's LORIS satellite project and working on the MILTON AI-powered training decisions application, have allowed me to develop practical skills in areas like data structures, algorithms, API development, and working with tools like Git, Docker, and Linux. I've also gained valuable experience in technical communication, project management, and collaborating effectively within teams.</p> <p>Previously, as a Makerspace Coordinator at Dalhousie's Emera Ideahub, I enjoyed advising students on diverse engineering projects and maintaining a variety of advanced equipment, further honing my problem-solving and technical support skills.</p> <p>I am actively seeking opportunities where I can apply my skills in software engineering, systems development, and electrical engineering to contribute to innovative projects, whether in a full-time role or through freelance collaborations.</p> ` })}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/about.astro", void 0);

const $$file = "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
