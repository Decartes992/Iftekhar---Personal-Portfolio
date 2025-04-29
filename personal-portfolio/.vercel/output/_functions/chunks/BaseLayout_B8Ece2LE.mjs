import { c as createComponent, a as createAstro, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute } from './astro/server_B7_fxlpj.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title><script>\n			// Theme switching logic\n			const getTheme = () => {\n				// Check localStorage first\n				const storedTheme = localStorage.getItem('theme');\n				if (storedTheme) {\n					return storedTheme;\n				}\n				// If no preference, check system preference\n				return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';\n			};\n\n			const setTheme = (theme) => {\n				document.documentElement.setAttribute('data-theme', theme);\n				localStorage.setItem('theme', theme); // Save preference\n			};\n\n			// Apply theme on initial load\n			const initialTheme = getTheme();\n			setTheme(initialTheme);\n\n			// Function to toggle theme (will be called by button)\n			window.toggleTheme = () => {\n				const currentTheme = document.documentElement.getAttribute('data-theme');\n				const newTheme = currentTheme === 'light' ? 'dark' : 'light';\n				setTheme(newTheme);\n				// Optional: Update button text/icon if needed\n				const button = document.getElementById('theme-toggle');\n				if (button) {\n					button.textContent = newTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';\n				}\n			};\n\n			// Set initial button text after theme is determined and applied\n			document.addEventListener('DOMContentLoaded', () => {\n				const button = document.getElementById('theme-toggle');\n				const currentTheme = document.documentElement.getAttribute('data-theme');\n				if (button) {\n					button.textContent = currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';\n				}\n			});\n		<\/script>", '</head> <body> <header> <div class="container"> <!-- Site Title/Logo (Optional) --> <nav> <ul> <li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/projects">Projects</a></li> <li><a href="/resume">Resume/Skills</a></li> <li><a href="/contact">Contact</a></li> </ul> </nav> <button id="theme-toggle" class="theme-toggle-button" onclick="toggleTheme()"> \nLoading Theme...\n</button> </div> </header> <main> <div class="container"> ', ' <!-- Page content will be injected here --> </div> </main> <footer> <div class="container"> <p>&copy; ', " Iftekhar - Personal Portfolio</p> <p>Site Last Updated: [Placeholder for dynamic timestamp]</p> </div> </footer> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
