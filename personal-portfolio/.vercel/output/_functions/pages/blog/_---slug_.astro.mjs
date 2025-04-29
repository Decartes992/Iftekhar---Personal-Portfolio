import { c as createComponent, a as createAstro, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B7_fxlpj.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D3k3n2ZK.mjs';
import { a as getEntryBySlug } from '../../chunks/_astro_content_C9trdLCr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("blog", slug);
  if (!post) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<article class="prose lg:prose-xl mx-auto py-8"> <h1 class="text-4xl font-bold mb-2">${post.data.title}</h1> <p class="text-gray-600 text-sm mb-4"> ${new Date(post.data.date).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })} </p> ${renderComponent($$result2, "Content", Content, {})} </article> ` })}`;
}, "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
