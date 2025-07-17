import { c as createComponent, b as createAstro, d as addAttribute, e as renderScript, a as renderTemplate, m as maybeRenderHead, f as renderSlot, r as renderComponent, g as renderHead } from './astro/server_CUDSO68N.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$5 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Github/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Github/Iftekhar---Personal-Portfolio/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$4 = createAstro();
const $$ThemeToggleButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ThemeToggleButton;
  const { menuId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(menuId || "theme-toggle", "id")} class="theme-toggle-button group" aria-label="Toggle dark mode" aria-pressed="false" type="button" data-astro-cid-vwmlrl6u> <!-- Sun icon (visible in light mode, hidden in dark mode by JS/CSS) --> <svg xmlns="http://www.w3.org/2000/svg" class="sun-icon h-5 w-5 transition-all duration-300 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-vwmlrl6u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-vwmlrl6u></path> </svg> <!-- Moon icon (visible in dark mode, hidden in light mode by JS/CSS) --> <svg xmlns="http://www.w3.org/2000/svg" class="moon-icon h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-vwmlrl6u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-vwmlrl6u></path> </svg> </button> `;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/ThemeToggleButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    size = "md",
    // Default size
    extraClass = "",
    children,
    disabled = false,
    type = "button"
    // Default type for button element
  } = Astro2.props;
  const baseClasses = [
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base-current dark:focus-visible:ring-offset-bg-base-dark",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  ];
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white focus-visible:ring-primary-500",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white focus-visible:ring-secondary-500",
    outline: "border border-primary-500 text-primary-500 hover:bg-primary-500/10 focus-visible:ring-primary-500",
    ghost: "text-primary-500 hover:bg-primary-500/10 focus-visible:ring-primary-500"
  };
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const className = [
    ...baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    extraClass
  ].join(" ");
  return renderTemplate`${href && !disabled ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(className, "class")}${addAttribute(disabled ? "true" : void 0, "aria-disabled")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(className, "class")}${addAttribute(disabled, "disabled")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/Button.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/resume", text: "Resume" },
    { href: "/contact", text: "Contact" }
  ];
  const currentPage = Astro2.url.pathname;
  const siteTitle = "Iftekhar Rafi";
  const siteSubtitle = "Software Engineer";
  const { menuId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out group is-sticky bg-bg-base-current/80 dark:bg-bg-base-dark/80 backdrop-blur-md shadow-md print:hidden" data-astro-cid-3ef6ksr2> <div id="scroll-progress-bar" class="h-1 bg-gradient-to-r from-primary-500 to-accent-500" style="width: 0%;" data-astro-cid-3ef6ksr2></div> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-16 md:h-20" data-astro-cid-3ef6ksr2> <!-- Animated Logo/Brand --> <div class="flex-shrink-0" data-astro-cid-3ef6ksr2> <a href="/" class="flex flex-col group/logo" aria-label="Homepage" data-astro-cid-3ef6ksr2> <span class="text-xl md:text-2xl font-bold font-display text-text-base-current dark:text-text-dark-current group-hover/logo:text-primary-500 transition-colors duration-300" data-astro-cid-3ef6ksr2>${siteTitle}</span> <span class="text-xs md:text-sm text-text-muted-current dark:text-text-muted-dark-current group-hover/logo:text-primary-400 transition-colors duration-300" data-astro-cid-3ef6ksr2>${siteSubtitle}</span> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex space-x-5 lg:space-x-7 items-center" data-astro-cid-3ef6ksr2> ${navItems.map((item) => {
    const isActive = currentPage === item.href || item.href !== "/" && currentPage.startsWith(item.href) && item.href.length > 1;
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
      "relative text-base font-medium py-2 transition-colors duration-300 ease-out group/nav-item",
      isActive ? "text-primary-500 dark:text-primary-400 font-semibold" : "text-text-base-current dark:text-text-dark-current hover:text-primary-500 dark:hover:text-primary-400"
    ], "class:list")}${addAttribute(isActive ? "page" : false, "aria-current")} data-astro-cid-3ef6ksr2> ${item.text} <span${addAttribute([
      "absolute bottom-0 left-0 w-full h-0.5 transform origin-bottom transition-transform duration-300 ease-out",
      isActive ? "scale-x-100 bg-primary-500 dark:bg-primary-400" : "scale-x-0 group-hover/nav-item:scale-x-100 bg-primary-500 dark:bg-primary-400"
    ], "class:list")} data-astro-cid-3ef6ksr2></span> </a>`;
  })} </nav> <!-- Right side items: Theme Toggle & CTA --> <div class="flex items-center space-x-3 md:space-x-4" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ThemeToggleButton", $$ThemeToggleButton, { "data-astro-cid-3ef6ksr2": true })} <div class="hidden sm:block" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Button", $$Button, { "href": "/contact#contact-form", "variant": "primary", "size": "sm", "extraClass": "group/cta", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`
Hire Me
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1.5 transform transition-transform duration-200 group-hover/cta:translate-x-0.5" data-astro-cid-3ef6ksr2> <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" data-astro-cid-3ef6ksr2></path> </svg> ` })} </div> </div> <!-- Mobile Menu Button --> <div class="md:hidden flex items-center" data-astro-cid-3ef6ksr2> <button id="mobile-menu-button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu-overlay" class="text-text-base-current dark:text-text-dark-current focus:outline-none p-2 rounded-md hover:bg-bg-alt-current dark:hover:bg-bg-alt-dark-current focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6 icon-open block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <svg class="w-6 h-6 icon-close hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu-overlay" class="md:hidden fixed inset-0 bg-gradient-to-br from-bg-base-current via-bg-alt-current to-bg-tertiary-current dark:from-bg-base-dark dark:via-bg-alt-dark dark:to-bg-tertiary-dark z-40 transform translate-x-full transition-transform duration-300 ease-in-out motion-safe:transition-transform flex flex-col p-6 sm:p-8 will-change-transform" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="flex justify-between items-center mb-8" data-astro-cid-3ef6ksr2> <a href="/" class="flex flex-col group/logo" aria-label="Homepage" data-astro-cid-3ef6ksr2> <span id="mobile-menu-title" class="text-2xl sm:text-3xl font-bold font-display text-text-base-current dark:text-text-dark-current" data-astro-cid-3ef6ksr2>${siteTitle}</span> <span class="text-sm sm:text-base text-text-muted-current dark:text-text-muted-dark-current" data-astro-cid-3ef6ksr2>${siteSubtitle}</span> </a> <button id="mobile-menu-close-button" aria-label="Close menu" class="text-text-base-current dark:text-text-dark-current focus:outline-none p-2 rounded-md hover:bg-bg-alt-current dark:hover:bg-bg-alt-dark-current focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors" data-astro-cid-3ef6ksr2> <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <nav class="flex flex-col space-y-2 mt-4 flex-grow" aria-label="Mobile navigation" data-astro-cid-3ef6ksr2> ${navItems.map((item, index) => {
    const isActive = currentPage === item.href || item.href !== "/" && currentPage.startsWith(item.href) && item.href.length > 1;
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
      "block text-2xl sm:text-3xl font-medium py-3 sm:py-4 px-3 rounded-lg transition-all duration-300 ease-out transform opacity-0 translate-y-3 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:bg-primary-500/5 dark:focus-visible:bg-primary-400/5",
      isActive ? "text-primary-500 dark:text-primary-400 font-semibold bg-primary-500/5 dark:bg-primary-400/5" : "text-text-base-current dark:text-text-dark-current"
    ], "class:list")}${addAttribute(`transition-delay: ${index * 75 + 100}ms; transition-property: opacity, transform, background-color, color;`, "style")}${addAttribute(isActive ? "page" : void 0, "aria-current")}${addAttribute(`mobile-nav-${index}`, "id")} data-astro-cid-3ef6ksr2> ${item.text} </a>`;
  })} </nav> <div class="mt-auto pt-8 space-y-6 opacity-0 transform translate-y-3"${addAttribute(`transition-delay: ${navItems.length * 75 + 200}ms; transition-property: opacity, transform;`, "style")} data-astro-cid-3ef6ksr2> <div class="flex justify-center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ThemeToggleButton", $$ThemeToggleButton, { "menuId": "mobile-menu-theme-toggle-button", "data-astro-cid-3ef6ksr2": true })} </div> ${renderComponent($$result, "Button", $$Button, { "href": "/contact#contact-form", "variant": "primary", "size": "lg", "extraClass": "w-full", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`
Hire Me
` })} <div class="flex justify-center space-x-6 mt-6" data-astro-cid-3ef6ksr2> <a href="https://github.com/IftekharRafi" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" class="text-text-muted-current hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300" data-astro-cid-3ef6ksr2> <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3ef6ksr2><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.602-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.074 1.532 1.028 1.532 1.028.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.564 9.564 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.678.915.678 1.846 0 1.338-.012 2.419-.012 2.746 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" data-astro-cid-3ef6ksr2></path></svg> </a> <a href="https://linkedin.com/in/iftekhar-rafi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="text-text-muted-current hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300" data-astro-cid-3ef6ksr2> <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3ef6ksr2><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-3ef6ksr2></path></svg> </a> </div> </div> </div> </header>  ${renderScript($$result, "D:/Github/Iftekhar---Personal-Portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/iftekharrafi/", icon: "linkedin-icon.svg" },
    // Replace with actual icon paths or use an icon library
    { name: "GitHub", href: "https://github.com/iftekharrafi", icon: "github-icon.svg" },
    { name: "Twitter", href: "https://twitter.com/iftekharrafi", icon: "twitter-icon.svg" },
    // Update if you use a different handle or platform
    { name: "Email", href: "mailto:iftekhar.rafi@example.com", icon: "email-icon.svg" }
    // Update with your email
  ];
  const quickLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
    { href: "/resume", text: "Resume" }
    // Assuming you have a resume page
  ];
  const recentActivity = [
    { type: "Project", title: "Project Alpha", href: "/projects/alpha" },
    { type: "Blog", title: "My Latest Thoughts on AI", href: "/blog/ai-thoughts" }
  ];
  const availability = {
    // true for available, false for not
    message: "Available for new opportunities"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="bg-bg-alt-current dark:bg-bg-alt-dark-current text-text-muted-current dark:text-text-muted-dark-current border-t border-border-current dark:border-border-dark-current mt-auto" data-astro-cid-sz7xmlte> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" data-astro-cid-sz7xmlte> <!-- Newsletter Signup (Simplified Example) --> <div class="mb-12 text-center" data-astro-cid-sz7xmlte> <h3 class="text-2xl font-display font-semibold text-text-base-current dark:text-text-base-dark-current mb-2" data-astro-cid-sz7xmlte>Stay Updated</h3> <p class="mb-4 text-lg" data-astro-cid-sz7xmlte>Subscribe to my newsletter for updates on my journey and projects.</p> <form class="max-w-md mx-auto flex flex-col sm:flex-row gap-2" data-astro-cid-sz7xmlte> <label for="email-newsletter" class="sr-only" data-astro-cid-sz7xmlte>Email address</label> <input type="email" id="email-newsletter" name="email" placeholder="your.email@example.com" required class="flex-grow appearance-none rounded-md border border-border-current dark:border-border-dark-current bg-bg-base-current dark:bg-bg-base-dark-current px-4 py-2.5 text-base text-text-base-current dark:text-text-base-dark-current placeholder-text-muted-current focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" data-astro-cid-sz7xmlte> <button type="submit" class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-alt-current dark:focus:ring-offset-bg-alt-dark-current" data-astro-cid-sz7xmlte>
Subscribe
</button> </form> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <h4 class="text-lg font-semibold text-text-base-current dark:text-text-base-dark-current mb-4" data-astro-cid-sz7xmlte>Quick Links</h4> <ul class="space-y-2" data-astro-cid-sz7xmlte> ${quickLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(link.href, "href")} class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200" data-astro-cid-sz7xmlte>${link.text}</a></li>`)} </ul> </div> <div data-astro-cid-sz7xmlte> <h4 class="text-lg font-semibold text-text-base-current dark:text-text-base-dark-current mb-4" data-astro-cid-sz7xmlte>Recent Activity</h4> <ul class="space-y-2" data-astro-cid-sz7xmlte> ${recentActivity.map((activity) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(activity.href, "href")} class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200" data-astro-cid-sz7xmlte> <span class="font-medium" data-astro-cid-sz7xmlte>${activity.type}:</span> ${activity.title} </a> </li>`)} </ul> </div> <div data-astro-cid-sz7xmlte> <h4 class="text-lg font-semibold text-text-base-current dark:text-text-base-dark-current mb-4" data-astro-cid-sz7xmlte>Connect</h4> <ul class="space-y-2" data-astro-cid-sz7xmlte> ${socialLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200" data-astro-cid-sz7xmlte> <!-- Placeholder for SVG icon --> <svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" data-astro-cid-sz7xmlte><path d="M0 0h24v24H0z" fill="none" data-astro-cid-sz7xmlte></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" data-astro-cid-sz7xmlte></path></svg> ${link.name} </a> </li>`)} </ul> </div> <div data-astro-cid-sz7xmlte> <h4 class="text-lg font-semibold text-text-base-current dark:text-text-base-dark-current mb-4" data-astro-cid-sz7xmlte>Availability</h4> <div class="flex items-center" data-astro-cid-sz7xmlte> <span${addAttribute([
    "w-3 h-3 rounded-full mr-2",
    "bg-green-500" 
  ], "class:list")} data-astro-cid-sz7xmlte></span> <p${addAttribute("text-green-600 dark:text-green-400" , "class")} data-astro-cid-sz7xmlte>${availability.message}</p> </div> <p class="text-sm mt-2" data-astro-cid-sz7xmlte>Last updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p> </div> </div> <div class="border-t border-border-current dark:border-border-dark-current pt-8 text-center" data-astro-cid-sz7xmlte> <p class="text-sm" data-astro-cid-sz7xmlte>&copy; ${currentYear} Iftekhar Rafi. Made with
<span class="text-red-500 transition-transform duration-200 inline-block hover:scale-125" data-astro-cid-sz7xmlte>❤️</span> and
<span class="transition-transform duration-200 inline-block hover:rotate-12" data-astro-cid-sz7xmlte>☕</span>.
</p> <p class="text-xs mt-1" data-astro-cid-sz7xmlte>This site is built with Astro and Tailwind CSS. Hosted on Vercel.</p> </div> </div> </footer> `;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Iftekhar - Personal Portfolio",
    lastUpdated
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", ' | Iftekhar Rafi - Software Engineer</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Satoshi:wght@400;500;700&display=swap" rel="stylesheet">', "<script>\n            // Immediately set theme from localStorage or system preference to avoid FOUC\n            const STORAGE_KEY = 'theme-preference';\n            const getInitialTheme = () => {\n                try {\n                    const storedPref = localStorage.getItem(STORAGE_KEY);\n                    if (storedPref) return storedPref;\n                } catch (e) { /* localStorage may be disabled */ }\n                return window.matchMedia('(prefers-color-scheme: dark)').matches\n                    ? 'dark'\n                    : 'light';\n            };\n            const theme = getInitialTheme();\n            document.documentElement.dataset.theme = theme;\n            document.documentElement.classList.toggle('dark', theme === 'dark');\n        <\/script>", '</head> <body class="bg-bg-base-current text-text-base-current flex min-h-screen flex-col font-primary selection:bg-primary-500 selection:text-white" data-astro-cid-37fxchfa> ', " ", ' <main id="main-content" class="mx-auto w-full max-w-screen-2xl flex-grow px-6 py-16 sm:px-8 md:py-20 lg:px-12" data-astro-cid-37fxchfa> ', " </main> ", ` <script src="/scripts/aos.js" defer><\/script> <script>
            // --- Consolidated Page Load & Interaction Script ---

            // Function to handle scroll-driven header style changes
            const handleScroll = () => {
                const header = document.querySelector('header');
                if (header) {
                    header.classList.toggle('scrolled', window.scrollY > 50);
                }
            };
            
            // Function to add a micro-interaction pulse effect to buttons on click
            const handleButtonPulse = (event) => {
                const button = event.target.closest('button, a.btn');
                if (button) {
                    button.classList.add('active-pulse');
                    button.addEventListener(
                        'animationend',
                        () => button.classList.remove('active-pulse'),
                        { once: true }
                    );
                }
            };

            // This master function runs on initial load and after every page transition
            const runPageScripts = () => {
                // Initialize AOS (Animate on Scroll)
                if (typeof AOS !== 'undefined') {
                    AOS.init({
                        duration: 800,
                        easing: 'ease-in-out-quad',
                        once: true,
                        mirror: false,
                        anchorPlacement: 'top-bottom',
                    });
                }
                
                // Add scroll listener for the header effect
                window.addEventListener('scroll', handleScroll, { passive: true });
            };

            // --- Event Listeners ---
            
            // Astro's 'page-load' event is the primary trigger for scripts
            document.addEventListener('astro:page-load', runPageScripts);

            // Add global click listener for button pulse effect
            document.addEventListener('click', handleButtonPulse);
            
            // Handle View Transition animation classes
            document.addEventListener('astro:before-swap', () => {
                // Clean up scroll listener before page swaps to prevent duplicates
                window.removeEventListener('scroll', handleScroll);
                document.documentElement.classList.add('is-animating');
            });
            document.addEventListener('astro:after-swap', () => {
                document.documentElement.classList.remove('is-animating');
            });

        <\/script> </body> </html>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, { "fallback": "animate", "data-astro-cid-37fxchfa": true }), renderHead(), renderComponent($$result, "CustomCursor", null, { "client:only": "jsx", "client:component-hydration": "only", "data-astro-cid-37fxchfa": true, "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/CustomCursor.jsx", "client:component-export": "default" }), renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "lastUpdated": lastUpdated, "data-astro-cid-37fxchfa": true }));
}, "D:/Github/Iftekhar---Personal-Portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Button as a };
