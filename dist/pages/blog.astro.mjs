/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CUDSO68N.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B4tAeTz0.mjs';
import { getCollection } from '../chunks/_astro_content_peXGOEan.mjs';
import { B as BlogPostCard } from '../chunks/BlogPostCard_B_Jtq9YK.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  posts.sort((a, b) => {
    const dateA = a.data.pubDate || a.data.date;
    const dateB = b.data.pubDate || b.data.date;
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.length > 1 ? posts.slice(1) : [];
  const postsByYear = regularPosts.reduce((acc, post) => {
    const postDate = post.data.pubDate || post.data.date;
    if (!postDate) return acc;
    const year = new Date(postDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
  const years = Object.keys(postsByYear).map(Number).sort((a, b) => b - a);
  const allTags = [...new Set(posts.flatMap((post) => post.data.tags || []))].sort();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog | Iftekhar's Portfolio", "description": "Explore articles on web development, software engineering, and technology.", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" data-astro-cid-5tznm7mj> <header class="text-center mb-16 md:mb-20" data-astro-cid-5tznm7mj> <h1 class="text-5xl md:text-6xl font-bold text-text-headings dark:text-text-dark-headings mb-6 tracking-tight" data-aos="fade-down" data-astro-cid-5tznm7mj>Iftekhar's Blog</h1> <p class="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100" data-astro-cid-5tznm7mj>
A collection of thoughts, tutorials, and explorations in the world of software engineering, web development, and beyond.
</p> </header> <!-- Featured Post Section --> ${featuredPost && renderTemplate`<section class="mb-16 md:mb-20" aria-labelledby="featured-post-heading" data-aos="fade-up" data-aos-delay="200" data-astro-cid-5tznm7mj> <h2 id="featured-post-heading" class="text-3xl md:text-4xl font-semibold text-text-headings dark:text-text-dark-headings mb-8 text-center tracking-tight" data-astro-cid-5tznm7mj>Featured Post</h2> <div class="max-w-3xl mx-auto" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "BlogPostCard", BlogPostCard, { "post": featuredPost, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/BlogPostCard.jsx", "client:component-export": "default", "data-astro-cid-5tznm7mj": true })} </div> </section>`} <!-- Tag Cloud/Filter Section --> ${allTags.length > 0 && renderTemplate`<section class="mb-16 md:mb-20 py-8 bg-bg-alt dark:bg-bg-dark-alt rounded-xl shadow-sm" aria-labelledby="tags-heading" data-aos="fade-up" data-aos-delay="300" data-astro-cid-5tznm7mj> <h2 id="tags-heading" class="text-3xl md:text-4xl font-semibold text-text-headings dark:text-text-dark-headings mb-8 text-center tracking-tight" data-astro-cid-5tznm7mj>Explore by Tag</h2> <div class="flex flex-wrap justify-center gap-3 md:gap-4 px-4" data-astro-cid-5tznm7mj> ${allTags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag.toLowerCase().replace(/\s+/g, "-")}/`, "href")} class="px-5 py-2 bg-tag-bg dark:bg-tag-dark-bg text-tag-text dark:text-tag-dark-text rounded-full text-sm font-medium hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-bg-dark-alt"${addAttribute(`View posts tagged with ${tag}`, "aria-label")} data-astro-cid-5tznm7mj>
#${tag} </a>`)} </div> </section>`} <!-- Posts Archive Section --> ${years.length > 0 && renderTemplate`<section aria-labelledby="posts-archive-heading" data-aos="fade-up" data-aos-delay="400" data-astro-cid-5tznm7mj> <h2 id="posts-archive-heading" class="text-3xl md:text-4xl font-semibold text-text-headings dark:text-text-dark-headings mb-12 text-center tracking-tight" data-astro-cid-5tznm7mj>All Posts</h2> ${years.map((year, yearIndex) => renderTemplate`<div class="mb-12"${addAttribute(year, "key")} data-aos="fade-up"${addAttribute(100 * yearIndex, "data-aos-delay")} data-astro-cid-5tznm7mj> <h3 class="text-2xl md:text-3xl font-semibold text-text-headings dark:text-text-dark-headings mb-8 border-b-2 border-border dark:border-border-dark pb-4 tracking-tight" data-astro-cid-5tznm7mj>${year}</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" data-astro-cid-5tznm7mj> ${postsByYear[year].map((post, postIndex) => renderTemplate`<div data-aos="fade-up"${addAttribute(50 * postIndex, "data-aos-delay")} data-astro-cid-5tznm7mj> ${renderComponent($$result2, "BlogPostCard", BlogPostCard, { "post": post, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/BlogPostCard.jsx", "client:component-export": "default", "data-astro-cid-5tznm7mj": true })} </div>`)} </div> </div>`)} </section>`} ${posts.length === 0 && renderTemplate`<div class="text-center py-16" data-aos="fade-up" data-astro-cid-5tznm7mj> <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-5tznm7mj> <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-5tznm7mj></path> </svg> <h3 class="mt-2 text-xl font-medium text-text-headings dark:text-text-dark-headings" data-astro-cid-5tznm7mj>No posts yet</h3> <p class="mt-1 text-text-secondary dark:text-text-dark-secondary" data-astro-cid-5tznm7mj>Keep an eye on this space! New content is coming soon.</p> </div>`} </div> ` })} `;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/index.astro", void 0);

const $$file = "D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
