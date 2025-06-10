import { c as createComponent, a as createAstro, d as addAttribute, e as renderScript, b as renderTemplate, m as maybeRenderHead, f as renderSlot, r as renderComponent } from './astro/server_Du6cOOQ1.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/workspaces/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro", void 0);

const $$ThemeToggleButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="theme-toggle-button group" aria-label="Toggle dark mode" data-astro-cid-vwmlrl6u> <!-- Sun icon (visible in dark mode) --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 rotate-0 dark:rotate-90 dark:scale-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vwmlrl6u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-vwmlrl6u></path> </svg> <!-- Moon icon (visible in light mode) --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vwmlrl6u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-vwmlrl6u></path> </svg> </button>  ${renderScript($$result, "/workspaces/Iftekhar---Personal-Portfolio/src/components/ThemeToggleButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/components/ThemeToggleButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Iftekhar - Personal Portfolio" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Merriweather:wght@700&display=swap" rel="stylesheet"><title>', " | Iftekhar - Personal Portfolio</title>", "<script>\n			const theme = (() => {\n				// Use 'theme-preference' key consistently\n				const storedPref = localStorage.getItem('theme-preference');\n				if (typeof storedPref === 'string') return storedPref;\n				// Check system preference\n				const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');\n				return mediaQuery.matches ? 'dark' : 'light';\n			})();\n\n			// Set initial data-theme attribute ONLY\n			document.documentElement.setAttribute('data-theme', theme);\n			// Do NOT add/remove 'dark' class here, let the main script handle it after hydration\n		<\/script> ", '<body>  <a href="#main-content" class="skip-link">Skip to main content</a>   <header> <div class="container"> <!-- Site Title/Logo (Optional) --> <nav> <ul> <li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/projects">Projects</a></li> <li><a href="/resume">Resume/Skills</a></li> <li><a href="/contact">Contact</a></li> </ul> </nav>  ', ' </div> </header> <main id="main-content">  <div class="container"> ', '  </div> </main>   <footer> <div class="container"> <p>&copy; ', ` Iftekhar - Personal Portfolio</p> <p>Site Last Updated: <span id="last-updated-timestamp"></span></p> </div> </footer>  <script>
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
}, "/workspaces/Iftekhar---Personal-Portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
