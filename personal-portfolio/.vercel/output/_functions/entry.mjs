import { renderers } from './renderers.mjs';
<<<<<<< HEAD
import { c as createExports } from './chunks/entrypoint_DKy1_abd.mjs';
import { manifest } from './manifest_uOT9yvF_.mjs';
=======
import { c as createExports } from './chunks/entrypoint_D3QNA7ah.mjs';
import { manifest } from './manifest_BEOeDCht.mjs';
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/blog/tags/_tag_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/projects.astro.mjs');
const _page8 = () => import('./pages/resume.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/blog/tags/[tag].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/projects.astro", _page7],
    ["src/pages/resume.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
<<<<<<< HEAD
    "middlewareSecret": "cea84ebc-e59d-4d99-b447-29e3fefcc3d9",
=======
    "middlewareSecret": "8397a764-e98d-496d-beda-e8ecaf0668b0",
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
