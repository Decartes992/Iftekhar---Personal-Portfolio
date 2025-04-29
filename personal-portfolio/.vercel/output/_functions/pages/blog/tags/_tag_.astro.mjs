/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_Cb9XKqvL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CqVMGi1P.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_pHFDW997.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).map((tag) => ({
    params: { tag },
    props: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((post) => post.data.tags?.includes(tag));
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Posts tagged "${tag}"` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-6">Posts tagged "${tag}"</h1> <ul class="space-y-4"> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="text-xl text-blue-600 hover:underline"> ${post.data.title} </a> <p class="text-gray-600 text-sm">${post.data.pubDate.toDateString()}</p> </li>`)} </ul> ` })}`;
}, "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
