import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_Du6cOOQ1.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BV7spUDa.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/Iftekhar---Personal-Portfolio/","cacheDir":"file:///workspaces/Iftekhar---Personal-Portfolio/node_modules/.astro/","outDir":"file:///workspaces/Iftekhar---Personal-Portfolio/dist/","srcDir":"file:///workspaces/Iftekhar---Personal-Portfolio/src/","publicDir":"file:///workspaces/Iftekhar---Personal-Portfolio/public/","buildClientDir":"file:///workspaces/Iftekhar---Personal-Portfolio/dist/client/","buildServerDir":"file:///workspaces/Iftekhar---Personal-Portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DEPGQZii.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DEPGQZii.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DEPGQZii.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DEPGQZii.css"}],"routeData":{"route":"/resume","isIndex":false,"type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DEPGQZii.css"},{"type":"inline","content":".about-section[data-astro-cid-v2cbyr3p]{padding-block:clamp(3rem,10vh,5rem)}.container[data-astro-cid-v2cbyr3p]{max-width:1000px;margin-inline:auto;padding-inline:1rem}.section-title[data-astro-cid-v2cbyr3p]{text-align:center;margin-bottom:2rem;font-size:var(--fs-3)}.about-content[data-astro-cid-v2cbyr3p]{display:grid;grid-template-columns:1fr;gap:2rem;align-items:flex-start}.about-image[data-astro-cid-v2cbyr3p]{text-align:center}.about-image[data-astro-cid-v2cbyr3p] img[data-astro-cid-v2cbyr3p]{max-width:250px;width:100%;height:auto;border-radius:50%;-o-object-fit:cover;object-fit:cover;border:3px solid var(--clr-primary);box-shadow:0 4px 15px #0000001a;transition:transform .4s cubic-bezier(.175,.885,.32,1.275),box-shadow .3s ease}.about-image[data-astro-cid-v2cbyr3p] img[data-astro-cid-v2cbyr3p]:hover{transform:scale(1.05) rotate(2deg);box-shadow:0 8px 25px #00000026}.about-text[data-astro-cid-v2cbyr3p] p[data-astro-cid-v2cbyr3p]{margin-bottom:1em;line-height:var(--lh-base)}.skills-section[data-astro-cid-v2cbyr3p]{margin-top:2rem}.skills-section[data-astro-cid-v2cbyr3p] h3[data-astro-cid-v2cbyr3p]{font-size:var(--fs-1);margin-bottom:1rem}.skills-list[data-astro-cid-v2cbyr3p]{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:.75rem;opacity:0}.skills-list[data-astro-cid-v2cbyr3p].visible{opacity:1}.skills-list[data-astro-cid-v2cbyr3p] li[data-astro-cid-v2cbyr3p]{background-color:var(--clr-secondary);color:#fff;padding:.3rem .8rem;border-radius:99px;font-size:var(--fs--1);font-weight:500;transition:background-color .2s ease,transform .2s ease;opacity:0;transform:scale(.5)}.skills-list[data-astro-cid-v2cbyr3p] li[data-astro-cid-v2cbyr3p]:hover{background-color:var(--clr-secondary);transform:translateY(-2px)}.skills-list[data-astro-cid-v2cbyr3p].visible li[data-astro-cid-v2cbyr3p]{animation:popIn .5s ease-out forwards}@media (min-width: 768px){.about-content[data-astro-cid-v2cbyr3p]{grid-template-columns:250px 1fr;gap:3rem;text-align:left}.about-image[data-astro-cid-v2cbyr3p]{text-align:left}}@keyframes popIn{to{opacity:1;transform:scale(1)}}.projects-section[data-astro-cid-oyo7lhtz]{padding-block:clamp(3rem,10vh,5rem);background-color:var(--clr-bg-alt-current, var(--clr-bg-current))}.container[data-astro-cid-oyo7lhtz]{max-width:1200px;margin-inline:auto;padding-inline:1rem}.section-title[data-astro-cid-oyo7lhtz]{text-align:center;margin-bottom:2.5rem;font-size:var(--fs-3)}.projects-grid[data-astro-cid-oyo7lhtz]{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,350px),1fr));gap:2rem}@media (max-width: 600px){.projects-grid[data-astro-cid-oyo7lhtz]{gap:1rem}}.view-all-cta[data-astro-cid-oyo7lhtz]{text-align:center;margin-top:3rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/workspaces/Iftekhar---Personal-Portfolio/src/components/ProjectsSection.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/Iftekhar---Personal-Portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/workspaces/Iftekhar---Personal-Portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/Iftekhar---Personal-Portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/Iftekhar---Personal-Portfolio/src/pages/blog/tags/[tag].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/Iftekhar---Personal-Portfolio/src/pages/projects.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/blog/tags/[tag]@_@astro":"pages/blog/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/resume@_@astro":"pages/resume.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/workspaces/Iftekhar---Personal-Portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BMSOA7ox.mjs","/workspaces/Iftekhar---Personal-Portfolio/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/workspaces/Iftekhar---Personal-Portfolio/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C-oiphJV.mjs","\u0000@astrojs-manifest":"manifest_CZCTHQLv.mjs","\u0000astro:content":"chunks/_astro_content_DhyUz1z_.mjs","/workspaces/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx":"_astro/SectionDivider.CoQEV5x5.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/AnimatedTimeline.jsx":"_astro/AnimatedTimeline.DLlkob8I.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/ParticleBackground.jsx":"_astro/ParticleBackground.B7_gZZc4.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/ContactForm.jsx":"_astro/ContactForm.CbHn_YVJ.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/ProjectFilterSort.jsx":"_astro/ProjectFilterSort.Bz-vytVM.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/AnimatedStatsCounter.jsx":"_astro/AnimatedStatsCounter.DPTau3x7.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.ORCp1sy6.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/ThemeToggleButton.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggleButton.astro_astro_type_script_index_0_lang.Dm4gIboO.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/SkillRadarChart.jsx":"_astro/SkillRadarChart.B02QXmpu.js","/workspaces/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","/workspaces/Iftekhar---Personal-Portfolio/src/components/ProjectCard3D.jsx":"_astro/ProjectCard3D.B5Pj2A7f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/workspaces/Iftekhar---Personal-Portfolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"animate-fade-in\"),r.unobserve(t.target))})},{threshold:.1});document.querySelectorAll(\".scroll-animate\").forEach(e=>{r.observe(e)})});"],["/workspaces/Iftekhar---Personal-Portfolio/src/components/ThemeToggleButton.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"theme-toggle\"),n=()=>{const e=localStorage.getItem(\"theme\");return e||(window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")},a=e=>{e===\"dark\"?(document.documentElement.setAttribute(\"data-theme\",\"dark\"),document.documentElement.classList.add(\"dark\")):(document.documentElement.removeAttribute(\"data-theme\"),document.documentElement.classList.remove(\"dark\")),localStorage.setItem(\"theme\",e)};a(n()),t.addEventListener(\"click\",()=>{const m=(localStorage.getItem(\"theme\")||\"light\")===\"dark\"?\"light\":\"dark\";t.classList.add(\"animate-pulse\"),setTimeout(()=>t.classList.remove(\"animate-pulse\"),300),a(m)}),window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",e=>{const m=e.matches?\"dark\":\"light\";a(m)})});"]],"assets":["/_astro/about.DEPGQZii.css","/favicon.svg","/_astro/AnimatedStatsCounter.DPTau3x7.js","/_astro/AnimatedTimeline.DLlkob8I.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/ContactForm.CbHn_YVJ.js","/_astro/ParticleBackground.B7_gZZc4.js","/_astro/ProjectCard3D.B5Pj2A7f.js","/_astro/ProjectFilterSort.Bz-vytVM.js","/_astro/SectionDivider.CoQEV5x5.js","/_astro/SkillRadarChart.B02QXmpu.js","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/images/iftekhar_photo.jpg","/scripts/theme-toggle.js","/blog/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"psAz6v6w9WK9WwlOzmLi9CK8dAfejkKPC4+rNIn0zuw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
