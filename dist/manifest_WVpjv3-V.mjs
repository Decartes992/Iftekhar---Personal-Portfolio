import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_CUDSO68N.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Github/Iftekhar---Personal-Portfolio/","cacheDir":"file:///D:/Github/Iftekhar---Personal-Portfolio/node_modules/.astro/","outDir":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/","srcDir":"file:///D:/Github/Iftekhar---Personal-Portfolio/src/","publicDir":"file:///D:/Github/Iftekhar---Personal-Portfolio/public/","buildClientDir":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/client/","buildServerDir":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/api/contact","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/resume/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resume","isIndex":false,"type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Github/Iftekhar---Personal-Portfolio/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Github/Iftekhar---Personal-Portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/Iftekhar---Personal-Portfolio/src/pages/blog/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/Iftekhar---Personal-Portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/Github/Iftekhar---Personal-Portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/Iftekhar---Personal-Portfolio/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/Iftekhar---Personal-Portfolio/src/pages/resume.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Github/Iftekhar---Personal-Portfolio/src/components/ProjectsSection.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/blog/tags/[tag]@_@astro":"pages/blog/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/resume@_@astro":"pages/resume.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_WVpjv3-V.mjs","D:\\Github\\Iftekhar---Personal-Portfolio\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","D:\\Github\\Iftekhar---Personal-Portfolio\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_RmH2TTxd.mjs","\u0000astro:content":"chunks/_astro_content_peXGOEan.mjs","D:/Github/Iftekhar---Personal-Portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ijeJVydZ.mjs","D:/Github/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx":"_astro/SectionDivider.CoQEV5x5.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/AnimatedTimeline.jsx":"_astro/AnimatedTimeline.DLlkob8I.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/BlogPostCard.jsx":"_astro/BlogPostCard.D7DD0Hz_.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/ParticleBackground.jsx":"_astro/ParticleBackground.B7_gZZc4.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/ContactForm.jsx":"_astro/ContactForm.Dv4vCakJ.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/ProjectFilterSort.jsx":"_astro/ProjectFilterSort.Dfx8GcJl.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/AnimatedStatsCounter.jsx":"_astro/AnimatedStatsCounter.DPTau3x7.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/CustomCursor.jsx":"_astro/CustomCursor.BFa1alZn.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/About.astro?astro&type=script&index=0&lang.ts":"_astro/About.astro_astro_type_script_index_0_lang.DGOFkTqs.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.aOz-mWXx.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/InteractiveResumeSection.jsx":"_astro/InteractiveResumeSection.DxIjEMJZ.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/SkillRadarChart.jsx":"_astro/SkillRadarChart.B02QXmpu.js","D:/Github/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","D:/Github/Iftekhar---Personal-Portfolio/src/components/ProjectCard3D.jsx":"_astro/ProjectCard3D.0g2vkWO4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Github/Iftekhar---Personal-Portfolio/src/components/About.astro?astro&type=script&index=0&lang.ts","console.log(\"About section interactive elements initialized.\");"],["D:/Github/Iftekhar---Personal-Portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"main-header\"),u=document.getElementById(\"scroll-progress-bar\");let m=0;function b(){const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,s=t>0?e/t*100:0;u&&(u.style.width=`${s}%`),c&&!document.body.classList.contains(\"mobile-menu-open\")&&(e>m&&e>c.offsetHeight?c.classList.add(\"header-hidden\"):c.classList.remove(\"header-hidden\")),m=e<=0?0:e}window.addEventListener(\"scroll\",b,{passive:!0});const o=document.getElementById(\"mobile-menu-button\"),l=document.getElementById(\"mobile-menu-close-button\"),n=document.getElementById(\"mobile-menu-overlay\");function h(){return n?Array.from(n.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])')).filter(t=>t.offsetParent!==null):[]}let r=null;function p(){if(!n||!o||!l)return;r=document.activeElement,document.body.classList.add(\"mobile-menu-open\"),n.classList.add(\"is-open\"),n.setAttribute(\"aria-hidden\",\"false\"),o.setAttribute(\"aria-expanded\",\"true\");const e=o.querySelector(\".icon-open\"),t=o.querySelector(\".icon-close\");e&&e.classList.add(\"hidden\"),t&&t.classList.remove(\"hidden\"),setTimeout(()=>{l.focus()},50),document.addEventListener(\"keydown\",f)}function i(){if(!n||!o)return;document.body.classList.remove(\"mobile-menu-open\"),n.classList.remove(\"is-open\"),n.setAttribute(\"aria-hidden\",\"true\"),o.setAttribute(\"aria-expanded\",\"false\");const e=o.querySelector(\".icon-open\"),t=o.querySelector(\".icon-close\");e&&e.classList.remove(\"hidden\"),t&&t.classList.add(\"hidden\"),r&&r.focus(),document.removeEventListener(\"keydown\",f)}function f(e){if(e.key!==\"Tab\")return;const t=h();if(t.length===0)return;const s=t[0],a=t[t.length-1];e.shiftKey?document.activeElement===s&&(a.focus(),e.preventDefault()):document.activeElement===a&&(s.focus(),e.preventDefault())}o&&o.addEventListener(\"click\",p);l&&l.addEventListener(\"click\",i);window.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&n&&n.classList.contains(\"is-open\")&&i()});if(n){n.querySelectorAll(\"nav a[href]\").forEach(s=>{s.addEventListener(\"click\",a=>{if(n.classList.contains(\"is-open\")){const d=new URL(s.href,window.location.origin);d.pathname===window.location.pathname&&d.hash,i()}})});const t=n.querySelector('a[href=\"/contact#contact-form\"]');t&&t.addEventListener(\"click\",()=>{n.classList.contains(\"is-open\")&&i()})}n&&n.setAttribute(\"aria-hidden\",\"true\");o&&o.setAttribute(\"aria-expanded\",\"false\");"]],"assets":["/file:///D:/Github/Iftekhar---Personal-Portfolio/dist/about/index.html","/file:///D:/Github/Iftekhar---Personal-Portfolio/dist/api/contact","/file:///D:/Github/Iftekhar---Personal-Portfolio/dist/blog/index.html","/file:///D:/Github/Iftekhar---Personal-Portfolio/dist/contact/index.html","/file:///D:/Github/Iftekhar---Personal-Portfolio/dist/projects/index.html","/file:///D:/Github/Iftekhar---Personal-Portfolio/dist/resume/index.html","/file:///D:/Github/Iftekhar---Personal-Portfolio/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"TVT+NMg14biCnaY9Ktmg+FvEG8CquM3cG2truhXExxM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
