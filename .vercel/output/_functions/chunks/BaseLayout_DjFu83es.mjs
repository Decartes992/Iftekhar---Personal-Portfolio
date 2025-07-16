import { c as createComponent, b as createAstro, d as addAttribute, e as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, F as Fragment, u as unescapeHTML, f as renderSlot } from './astro/server_GqbIBp2s.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/runner/work/Iftekhar---Personal-Portfolio/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/Iftekhar---Personal-Portfolio/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro", void 0);

const $$ThemeToggleButton = createComponent(($$result, $$props, $$slots) => {
  const sunIcon = `<svg class="sun-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 7.05 5.636 8.464zm12-.001l1.414-1.414L20.95 7.05l-1.414 1.414zm-2.828 14.286l1.414 1.414L20.95 16.95l-1.414-1.414zm-10.607-.001l1.414 1.414L7.05 16.95l-1.414 1.414zM0 11h3v2H0v-2zm21 0h3v2h-3v-2z"/></svg>`;
  const moonIcon = `<svg class="moon-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.75 22.78a.75.75 0 0 1-.75-.75V2.97a.75.75 0 0 1 1.5 0v19.06a.75.75 0 0 1-.75.75zM12 22.5c-5.523 0-10-4.477-10-10S6.477 2.5 12 2.5c.75 0 1.5.07 2.22.2a.75.75 0 0 1 .58.91.76.76 0 0 1-.91.58A8.5 8.5 0 0 0 12 4c-4.694 0-8.5 3.806-8.5 8.5S7.306 21 12 21c.75 0 1.5-.07 2.22-.2a.75.75 0 0 1 .91.58.76.76 0 0 1-.58.91A13.02 13.02 0 0 1 12 22.5z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="theme-toggle-button" aria-label="Toggle light/dark theme" aria-pressed="false" title="Toggle light/dark theme" data-current-theme="light" role="switch" data-astro-cid-vwmlrl6u> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(sunIcon)}` })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(moonIcon)}` })} </button> `;
}, "/home/runner/work/Iftekhar---Personal-Portfolio/Iftekhar---Personal-Portfolio/src/components/ThemeToggleButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Iftekhar - Personal Portfolio" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="light"> <meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Merriweather:wght@700&display=swap" rel="stylesheet"><title>', " | Iftekhar - Personal Portfolio</title>", "<script>\n			const storageKey = 'theme-preference';\n			const theme = {\n				value: (() => {\n					const storedPref = localStorage.getItem(storageKey);\n					if (storedPref) return storedPref;\n					return window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light';\n				})(),\n			};\n			document.documentElement.setAttribute('data-theme', theme.value);\n		<\/script> ", '<body>  <a href="#main-content" class="skip-link">Skip to main content</a>   <header> <div class="container"> <!-- Site Title/Logo (Optional) --> <nav> <ul> <li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/projects">Projects</a></li> <li><a href="/resume">Resume/Skills</a></li> <li><a href="/contact">Contact</a></li> </ul> </nav>  ', ' </div> </header> <main id="main-content">  <div class="container"> ', '  </div> </main>   <footer> <div class="container"> <p>&copy; ', ` Iftekhar - Personal Portfolio</p> <p>Site Last Updated: <span id="last-updated-timestamp"></span></p> </div> </footer>  <script>
			document.addEventListener('DOMContentLoaded', () => {
				const timestampSpan = document.getElementById('last-updated-timestamp');
				if (timestampSpan) {
					const now = new Date();
					const options = { year: 'numeric', month: 'long', day: 'numeric' };
					timestampSpan.textContent = now.toLocaleDateString(undefined, options);
				}
			});
		<\/script>  <script src="/scripts/theme-toggle.js" defer><\/script>   <script>
			document.addEventListener('astro:page-load', () => {
				document.documentElement.classList.remove('is-animating');
			});
			document.addEventListener('astro:before-swap', (e) => {
				document.documentElement.classList.add('is-animating');
			});
		<\/script>  <script>
			document.addEventListener('click', (event) => {
				const button = event.target.closest('button, a.btn');
				if (button) {
					button.classList.add('active-pulse');
					button.addEventListener('animationend', () => {
						button.classList.remove('active-pulse');
					}, { once: true });
				}
			});
		<\/script> </body> </html>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, { "fallback": "animate" }), maybeRenderHead(), renderComponent($$result, "ThemeToggleButton", $$ThemeToggleButton, {}), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "/home/runner/work/Iftekhar---Personal-Portfolio/Iftekhar---Personal-Portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
