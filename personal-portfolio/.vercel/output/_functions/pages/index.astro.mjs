import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B7_fxlpj.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CycZLcLl.mjs';
import { g as getCollection } from '../chunks/_astro_content_C9trdLCr.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const BlogPostCard = ({ post }) => {
  const formattedDate = new Date(post.data.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxs("a", { href: `/blog/${post.slug}`, className: "block border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", "aria-label": `Read more about ${post.data.title}`, children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: post.data.title }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4", children: formattedDate }),
    post.data.description && /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: post.data.description })
  ] });
};

const HomePageClickCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-lg font-semibold mb-2", "aria-live": "polite", "aria-atomic": "true", children: [
      "Clicks: ",
      count
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleClick,
        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
        "aria-label": "Increment click count",
        children: "Click Me!"
      }
    )
  ] });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Home | Iftekhar's Portfolio";
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-6">Welcome to My Portfolio!</h1> <p class="text-lg mb-8">This is the home page. Content coming soon...</p> <p class="text-lg mb-12">Here you'll find information about my skills, projects, and experience.</p> <div class="my-8"> <h2 class="text-3xl font-semibold mb-4">Interactive Demo</h2> ${renderComponent($$result2, "HomePageClickCounter", HomePageClickCounter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/components/HomePageClickCounter.jsx", "client:component-export": "default" })} </div> <h2 class="text-3xl font-semibold mb-6">Recent Blog Posts</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPostCard", BlogPostCard, { "post": post, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/components/BlogPostCard", "client:component-export": "default" })}`)} </div> </section> ` })}`;
}, "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
