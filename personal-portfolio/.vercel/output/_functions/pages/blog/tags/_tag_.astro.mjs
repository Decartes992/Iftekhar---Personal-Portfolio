import { c as createComponent, a as createAstro, f as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_B7_fxlpj.mjs';
import 'kleur/colors';
<<<<<<< HEAD
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_D3k3n2ZK.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_C9trdLCr.mjs';
=======
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_B8Ece2LE.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_Bn0ya_Tv.mjs';
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
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
<<<<<<< HEAD
}, "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/tags/[tag].astro";
=======
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/blog/tags/[tag].astro";
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
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
