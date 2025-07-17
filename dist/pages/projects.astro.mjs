/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CUDSO68N.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B4tAeTz0.mjs';
import { getCollection } from '../chunks/_astro_content_peXGOEan.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { S as SectionDivider } from '../chunks/SectionDivider_Do43jRHo.mjs';
export { renderers } from '../renderers.mjs';

const Tilt3D = ({
  children,
  perspective = 1e3,
  maxTilt = 15,
  scale = 1.05,
  transitionSpeed = 400,
  transitionEase = "cubic-bezier(.03,.98,.52,.99)",
  className = ""
}) => {
  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  });
  const cardRef = useRef(null);
  const transitionRef = useRef(null);
  const handleMouseMove = (e) => {
    if (transitionRef.current) clearTimeout(transitionRef.current);
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * maxTilt * -1;
    const rotateY = (x - centerX) / centerX * maxTilt;
    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform 0ms ${transitionEase}`
    });
  };
  const handleMouseLeave = () => {
    if (transitionRef.current) clearTimeout(transitionRef.current);
    transitionRef.current = setTimeout(() => {
      setStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: `transform ${transitionSpeed}ms ${transitionEase}`
      });
    }, 0);
  };
  const handleMouseEnter = () => {
    if (transitionRef.current) clearTimeout(transitionRef.current);
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform ${transitionSpeed}ms ${transitionEase}`
    });
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter,
      style,
      className: `tilt-3d will-change-transform ${className}`,
      children
    }
  );
};

const GitHubIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) });
const ProjectCard3D = ({
  title,
  description,
  longDescription,
  // Added for the back of the card
  image = "/images/project-placeholder.jpg",
  tags = [],
  techStack = [],
  // More detailed tech stack for the back
  demoUrl = "#",
  codeUrl = "#",
  featured = false,
  livePreviewUrl,
  // For embedded mini-previews (advanced)
  githubStars
  // For GitHub integration (advanced)
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = (e) => {
    if (e.target.closest("a, button")) {
      return;
    }
    setIsFlipped(!isFlipped);
  };
  const TagCloud = ({ items }) => /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: items.map((item, index) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "bg-primary-500/20 text-primary-700 dark:bg-primary-400/20 dark:text-primary-300 text-xs px-2.5 py-1 rounded-full font-medium transition-transform hover:scale-110",
      children: item
    },
    index
  )) });
  return /* @__PURE__ */ jsxs(
    Tilt3D,
    {
      maxTilt: 8,
      scale: 1.03,
      transitionSpeed: 600,
      className: `project-card-container rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${featured ? "border-2 border-primary-500" : ""}`,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `project-card-flipper ${isFlipped ? "is-flipped" : ""}`,
            onClick: handleCardClick,
            role: "button",
            tabIndex: 0,
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") handleCardClick(e);
            },
            "aria-pressed": isFlipped,
            "aria-label": `Project: ${title}. Click to flip for more details.`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "project-card-face project-card-front bg-bg-base-current dark:bg-bg-alt-dark rounded-xl overflow-hidden flex flex-col h-full", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden h-48 sm:h-56 group", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: image,
                      alt: `Preview of ${title}`,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" }),
                  featured && /* @__PURE__ */ jsx("span", { className: "absolute top-3 right-3 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md", children: "Featured" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold font-display text-white leading-tight drop-shadow-md", children: title }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-5 flex-grow flex flex-col", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-text-muted-current dark:text-text-muted-dark-current text-sm mb-3 line-clamp-3 flex-grow", children: description }),
                  tags.length > 0 && /* @__PURE__ */ jsx(TagCloud, { items: tags.slice(0, 4) }),
                  /* @__PURE__ */ jsx("div", { className: "mt-auto text-center text-xs text-primary-500 dark:text-primary-400 font-medium group-hover:underline", children: "Click to see details" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "project-card-face project-card-back bg-bg-alt-current dark:bg-bg-tertiary-dark rounded-xl overflow-hidden flex flex-col p-5 h-full", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold font-display text-text-base-current dark:text-text-dark-current mb-2", children: title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted-current dark:text-text-muted-dark-current mb-3 text-pretty scrollable-content flex-grow max-h-32 overflow-y-auto pr-2", children: longDescription || description }),
                techStack.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsx("h5", { class: "text-sm font-semibold text-text-base-current dark:text-text-dark-current mb-1.5", children: "Tech Stack:" }),
                  /* @__PURE__ */ jsx(TagCloud, { items: techStack })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-auto flex gap-3 pt-3 border-t border-border-current dark:border-border-dark/50", children: [
                  demoUrl && demoUrl !== "#" && /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: demoUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex-1 bg-primary-500 text-white text-center py-2.5 px-4 rounded-md hover:bg-primary-600 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md flex items-center justify-center",
                      children: [
                        "Live Demo",
                        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", class: "w-4 h-4 ml-1.5", children: [
                          /* @__PURE__ */ jsx("path", { d: "M12.232 4.232a2.75 2.75 0 0 1 3.888 3.888l-3.36 3.36a2.75 2.75 0 0 1-3.888-3.888l3.36-3.36Zm2.121 2.121a1.25 1.25 0 0 0-1.768-1.768L9.225 8.045a1.25 1.25 0 0 0 1.768 1.768l3.36-3.36Z" }),
                          /* @__PURE__ */ jsx("path", { d: "m11.364 7.878-.707-.707-3.5 3.5.707.707 3.5-3.5Z" }),
                          /* @__PURE__ */ jsx("path", { d: "m11.404 11.288.94-.94a2.75 2.75 0 0 0-3.889-3.888l-.94.94a2.75 2.75 0 0 0 3.889 3.888Z" })
                        ] })
                      ]
                    }
                  ),
                  codeUrl && codeUrl !== "#" && /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: codeUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex-1 bg-bg-tertiary-current dark:bg-bg-alt-dark text-text-base-current dark:text-text-dark-current text-center py-2.5 px-4 rounded-md hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md flex items-center justify-center",
                      children: [
                        /* @__PURE__ */ jsx(GitHubIcon, {}),
                        /* @__PURE__ */ jsx("span", { class: "ml-1.5", children: "Source Code" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
        .project-card-container {
          perspective: 1000px;
        }
        .project-card-flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1); /* Springy flip */
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .project-card-flipper.is-flipped {
          transform: rotateY(180deg);
        }
        .project-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden; /* Safari */
          display: flex;
          flex-direction: column;
        }
        .project-card-back {
          transform: rotateY(180deg);
        }
        .scrollable-content::-webkit-scrollbar {
          width: 6px;
        }
        .scrollable-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollable-content::-webkit-scrollbar-thumb {
          background-color: var(--clr-primary-300);
          border-radius: 3px;
        }
        html[data-theme="dark"] .scrollable-content::-webkit-scrollbar-thumb {
          background-color: var(--clr-primary-700);
        }
        .text-pretty {
          text-wrap: pretty;
        }
      ` })
      ]
    }
  );
};

const ProjectFilterSort = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortOption, setSortOption] = useState("date-desc");
  const allTechnologies = [...new Set(projects.flatMap((project) => project.data.technologies || project.data.tags || []))];
  const allProjectTypes = [...new Set(projects.flatMap((project) => project.data.project_type || []))];
  const allSkills = [...new Set(projects.flatMap((project) => project.data.skills || []))];
  useEffect(() => {
    let projectsToFilter = [...projects];
    if (selectedTechnologies.length > 0) {
      projectsToFilter = projectsToFilter.filter((project) => {
        const projectTechs = project.data.technologies || project.data.tags || [];
        return selectedTechnologies.every((tech) => projectTechs.includes(tech));
      });
    }
    if (selectedProjectTypes.length > 0) {
      projectsToFilter = projectsToFilter.filter(
        (project) => selectedProjectTypes.every((type) => project.data.project_type?.includes(type))
      );
    }
    if (selectedSkills.length > 0) {
      projectsToFilter = projectsToFilter.filter(
        (project) => selectedSkills.every((skill) => project.data.skills?.includes(skill))
      );
    }
    projectsToFilter.sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.data.title.localeCompare(b.data.title);
      } else {
        const dateA = a.data.publishDate || a.data.date || a.data.pubDate || /* @__PURE__ */ new Date();
        const dateB = b.data.publishDate || b.data.date || b.data.pubDate || /* @__PURE__ */ new Date();
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      }
    });
    setFilteredProjects(projectsToFilter);
  }, [projects, selectedTechnologies, selectedProjectTypes, selectedSkills, sortOption]);
  const handleTechnologyChange = (tech) => {
    setSelectedTechnologies(
      (prev) => prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };
  const handleProjectTypeChange = (type) => {
    setSelectedProjectTypes(
      (prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleSkillChange = (skill) => {
    setSelectedSkills(
      (prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const clearAllFilters = () => {
    setSelectedTechnologies([]);
    setSelectedProjectTypes([]);
    setSelectedSkills([]);
    setSortOption("date-desc");
  };
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Filter Projects" }),
        (selectedTechnologies.length > 0 || selectedProjectTypes.length > 0 || selectedSkills.length > 0) && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: clearAllFilters,
            className: "text-primary hover:text-primary-dark text-sm mt-2 md:mt-0",
            children: "Clear all filters"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { id: "technologies-label", className: "font-medium mb-2", children: "Technologies:" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1 max-h-40 overflow-y-auto pr-2", children: allTechnologies.map((tech) => /* @__PURE__ */ jsxs("label", { className: "flex items-center cursor-pointer", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: selectedTechnologies.includes(tech),
                  onChange: () => handleTechnologyChange(tech),
                  "aria-labelledby": "technologies-label",
                  className: "mr-2 focus:ring-2 focus:ring-primary"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: tech })
            ] }, tech)) })
          ] }),
          allProjectTypes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { id: "project-types-label", className: "font-medium mb-2", children: "Project Types:" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1 max-h-40 overflow-y-auto pr-2", children: allProjectTypes.map((type) => /* @__PURE__ */ jsxs("label", { className: "flex items-center cursor-pointer", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: selectedProjectTypes.includes(type),
                  onChange: () => handleProjectTypeChange(type),
                  "aria-labelledby": "project-types-label",
                  className: "mr-2 focus:ring-2 focus:ring-primary"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: type })
            ] }, type)) })
          ] }),
          allSkills.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { id: "skills-label", className: "font-medium mb-2", children: "Skills:" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1 max-h-40 overflow-y-auto pr-2", children: allSkills.map((skill) => /* @__PURE__ */ jsxs("label", { className: "flex items-center cursor-pointer", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: selectedSkills.includes(skill),
                  onChange: () => handleSkillChange(skill),
                  "aria-labelledby": "skills-label",
                  className: "mr-2 focus:ring-2 focus:ring-primary"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: skill })
            ] }, skill)) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-[200px]", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "sort-options", className: "font-medium mb-2 block", children: "Sort by:" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "sort-options",
              value: sortOption,
              onChange: handleSortChange,
              className: "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600",
              children: [
                /* @__PURE__ */ jsx("option", { value: "date-desc", children: "Date (Newest First)" }),
                /* @__PURE__ */ jsx("option", { value: "alphabetical", children: "Alphabetical" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProjects.length > 0 ? filteredProjects.map((project) => /* @__PURE__ */ jsx(
      ProjectCard3D,
      {
        title: project.data.title,
        description: project.data.description,
        image: project.data.image || "/images/project-placeholder.jpg",
        tags: project.data.tags || project.data.technologies || [],
        demoUrl: project.data.demoUrl || "#",
        codeUrl: project.data.codeUrl || "#",
        featured: project.data.featured
      },
      project.slug
    )) : /* @__PURE__ */ jsxs("div", { className: "col-span-full text-center py-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "No projects match your filter criteria." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: clearAllFilters,
          className: "mt-4 text-primary hover:underline",
          children: "Clear all filters"
        }
      )
    ] }) })
  ] });
};

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Projects | Iftekhar's Portfolio";
  const allProjects = await getCollection("projects");
  const featuredProjects = allProjects.filter((project) => project.data.featured).slice(0, 2);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-bg-dark relative overflow-hidden"> <div class="container mx-auto px-4"> <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">My Projects</h1> <p class="text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
Explore my portfolio of work spanning web development, design, and interactive experiences
</p> </div> </section>  <section class="py-16 bg-white dark:bg-bg-dark"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold mb-8 text-center">Featured Projects</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${featuredProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard3D", ProjectCard3D, { "client:visible": true, "title": project.data.title, "description": project.data.description, "image": project.data.image || "/images/project-placeholder.jpg", "tags": project.data.tags || project.data.technologies || [], "demoUrl": project.data.demoUrl, "codeUrl": project.data.codeUrl, "featured": project.data.featured, "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/ProjectCard3D.jsx", "client:component-export": "default" })}`)} </div> </div> </section>  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "curve", "position": "bottom", "color": "bg-gray-50 dark:bg-gray-900", "height": 60, "bgColor": "", "flipX": false, "width": 100, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold mb-8">All Projects</h2> ${renderComponent($$result2, "ProjectFilterSort", ProjectFilterSort, { "projects": allProjects, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/ProjectFilterSort.jsx", "client:component-export": "default" })} </div> </section> ` })}`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/pages/projects.astro", void 0);

const $$file = "D:/Github/Iftekhar---Personal-Portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
