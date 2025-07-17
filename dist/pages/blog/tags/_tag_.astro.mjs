/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CUDSO68N.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_B4tAeTz0.mjs';
import { getCollection } from '../../../chunks/_astro_content_peXGOEan.mjs';
import { B as BlogPostCard } from '../../../chunks/BlogPostCard_B_Jtq9YK.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).map((tag) => ({
    params: { tag: tag.toLowerCase().replace(/\s+/g, "-") },
    // Ensure consistent slug format
    props: { originalTag: tag }
    // Pass original tag for display
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { originalTag } = Astro2.props;
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter(
    (post) => post.data.tags?.some((t) => t.toLowerCase() === originalTag.toLowerCase())
  );
  posts.sort((a, b) => {
    const dateA = a.data.pubDate || a.data.date;
    const dateB = b.data.pubDate || b.data.date;
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Posts tagged "${originalTag}" | Blog`, "description": `Browse blog posts tagged with ${originalTag}.`, "data-astro-cid-nm6udwxr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" data-astro-cid-nm6udwxr> <header class="mb-12 md:mb-16 text-center" data-aos="fade-down" data-astro-cid-nm6udwxr> <p class="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2" data-astro-cid-nm6udwxr>Tag Archive</p> <h1 class="text-4xl md:text-5xl font-bold text-text-headings dark:text-text-dark-headings tracking-tight" data-astro-cid-nm6udwxr>Posts tagged "${originalTag}"</h1> </header> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" data-aos="fade-up" data-aos-delay="100" data-astro-cid-nm6udwxr> ${posts.map((post, index) => renderTemplate`<div data-aos="fade-up"${addAttribute(100 * index, "data-aos-delay")} data-astro-cid-nm6udwxr> ${renderComponent($$result2, "BlogPostCard", BlogPostCard, { "post": post, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/BlogPostCard.jsx", "client:component-export": "default", "data-astro-cid-nm6udwxr": true })} </div>`)} </div>` : renderTemplate`<div class="text-center py-16" data-aos="fade-up" data-astro-cid-nm6udwxr> <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-nm6udwxr> <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-nm6udwxr></path> </svg> <h3 class="mt-2 text-xl font-medium text-text-headings dark:text-text-dark-headings" data-astro-cid-nm6udwxr>No posts found</h3> <p class="mt-1 text-text-secondary dark:text-text-dark-secondary" data-astro-cid-nm6udwxr>There are no blog posts tagged with "${originalTag}" yet.</p> <div class="mt-6" data-astro-cid-nm6udwxr> <a href="/blog" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-offset-bg-dark" data-astro-cid-nm6udwxr>
&larr; Back to Blog Index
</a> </div> </div>`} </div> ` })} `;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
