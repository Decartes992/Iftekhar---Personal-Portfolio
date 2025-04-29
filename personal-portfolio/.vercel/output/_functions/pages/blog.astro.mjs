import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_B7_fxlpj.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CycZLcLl.mjs';
import { g as getCollection } from '../chunks/_astro_content_C9trdLCr.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-6">Blog Posts</h1> <ul class="space-y-4"> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="text-xl text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"> ${post.data.title} </a> <p class="text-gray-600 text-sm">${post.data.pubDate.toDateString()}</p> </li>`)} </ul> ` })}`;
}, "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
