/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, d as addAttribute } from '../../chunks/astro/server_CUDSO68N.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B4tAeTz0.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CYu5Q0Sa.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const { getCollection } = await import('../../chunks/_astro_content_peXGOEan.mjs');
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { post: entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  if (!post) {
    return Astro2.redirect("/404");
  }
  const { Content, headings } = await post.render();
  const postDate = post.data.pubDate || post.data.date;
  const formattedDate = postDate ? new Date(postDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "No publication date";
  const author = post.data.author || "Iftekhar";
  const category = post.data.category;
  const toc = headings.filter((h) => h.depth <= 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.description, "openGraph": {
    type: "article",
    title: post.data.title,
    description: post.data.description,
    image: post.data.image ? Astro2.url.origin + (typeof post.data.image === "string" ? post.data.image : post.data.image.src) : void 0,
    article: {
      publishedTime: postDate ? new Date(postDate).toISOString() : void 0,
      authors: [author],
      tags: post.data.tags
    }
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> <!-- Main Content Area --> <article class="w-full lg:w-3/4 lg:max-w-3xl mx-auto"> <header class="mb-10 md:mb-14"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-headings dark:text-text-dark-headings mb-6 leading-tight tracking-tight" data-aos="fade-down"> ${post.data.title} </h1> <div class="text-sm text-text-muted dark:text-text-dark-muted mb-6 flex flex-wrap items-center gap-x-4 gap-y-2" data-aos="fade-up" data-aos-delay="100"> <span>Published: ${formattedDate}</span> <span class="hidden sm:inline">•</span> <span>By: ${author}</span> ${category && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span class="hidden sm:inline">•</span> <span>In: <a${addAttribute(`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}/`, "href")} class="hover:underline text-primary-600 dark:text-primary-400">${category}</a></span> ` })}`} </div> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="200"> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag.toLowerCase().replace(/\s+/g, "-")}/`, "href")} class="text-xs bg-tag-bg dark:bg-tag-dark-bg text-tag-text dark:text-tag-dark-text px-3 py-1.5 rounded-full font-medium hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-gray-900 transition-colors duration-200">
#${tag} </a>`)} </div>`} </header> ${post.data.image && renderTemplate`<div class="mb-10 md:mb-12 rounded-xl overflow-hidden shadow-xl aspect-video bg-gray-100 dark:bg-gray-800" data-aos="zoom-in"> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 1200, "height": 675, "class": "w-full h-full object-cover transition-transform duration-500 hover:scale-105" })} </div>`} <div class="prose dark:prose-invert max-w-none 
                  prose-headings:text-text-headings dark:prose-headings:text-text-dark-headings 
                  prose-p:text-text-base dark:prose-p:text-text-dark-base 
                  prose-a:text-primary-600 dark:prose-a:text-primary-400 
                  prose-strong:text-text-strong dark:prose-strong:text-text-dark-strong 
                  prose-blockquote:border-primary-500 dark:prose-blockquote:border-primary-400 
                  prose-code:bg-bg-code dark:prose-code:bg-bg-dark-code 
                  prose-code:text-text-code dark:prose-code:text-text-dark-code 
                  prose-pre:bg-bg-code dark:prose-pre:bg-bg-dark-code 
                  prose-pre:text-text-code dark:prose-pre:text-text-dark-code 
                  lg:prose-lg xl:prose-xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300"> ${renderComponent($$result2, "Content", Content, {})} </div> <nav class="mt-16 md:mt-20 pt-10 border-t border-border dark:border-border-dark text-center" aria-label="Blog post navigation"> <a href="/blog" class="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium group"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"> <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.56l2.72 2.72a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 1.06L5.56 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path> </svg>
Back to Blog Index
</a> </nav> </article> <!-- Sidebar / Table of Contents --> ${toc.length > 0 && renderTemplate`<aside class="w-full lg:w-1/4 lg:sticky lg:top-24 h-max mt-12 lg:mt-0" data-aos="fade-left" data-aos-delay="400"> <div class="p-6 bg-bg-alt dark:bg-bg-dark-alt rounded-xl shadow-sm"> <h2 class="text-xl font-semibold text-text-headings dark:text-text-dark-headings mb-4">Table of Contents</h2> <ul class="space-y-2"> ${toc.map((item) => renderTemplate`<li${addAttribute(item.slug, "key")}${addAttribute(`${item.depth === 3 ? "ml-4" : ""}`, "class")}> <a${addAttribute(`#${item.slug}`, "href")} class="text-text-secondary dark:text-text-dark-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm leading-relaxed"> ${item.text} </a> </li>`)} </ul> </div> </aside>`} </div> ` })} `;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
