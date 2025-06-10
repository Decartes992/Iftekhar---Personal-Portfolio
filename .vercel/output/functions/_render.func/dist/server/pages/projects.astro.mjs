/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Du6cOOQ1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B0PhLHCa.mjs';
import { getCollection } from '../chunks/_astro_content_DhyUz1z_.mjs';
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

const ProjectCard3D = ({
  title,
  description,
  image = "/images/project-placeholder.jpg",
  tags = [],
  demoUrl = "#",
  codeUrl = "#",
  featured = false
}) => {
  return /* @__PURE__ */ jsx(
    Tilt3D,
    {
      maxTilt: 10,
      scale: 1.03,
      transitionSpeed: 800,
      className: "rounded-xl overflow-hidden h-full",
      children: /* @__PURE__ */ jsxs("div", { className: `bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden h-full flex flex-col ${featured ? "border-2 border-primary" : ""}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden h-48 sm:h-56", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: title,
              className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 p-3 flex flex-wrap gap-2", children: [
            tags.slice(0, 3).map((tag, index) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "bg-primary/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm",
                children: tag
              },
              index
            )),
            tags.length > 3 && /* @__PURE__ */ jsxs("span", { className: "bg-gray-800/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm", children: [
              "+",
              tags.length - 3
            ] })
          ] }),
          featured && /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx("span", { className: "bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm font-semibold", children: "Featured" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 flex-grow flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-gray-900 dark:text-white", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4 flex-grow", children: description }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-auto", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: demoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300",
                children: "Live Demo"
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: codeUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-1", fill: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) }),
                  "Code"
                ]
              }
            )
          ] })
        ] })
      ] })
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
</p> </div> </section>  <section class="py-16 bg-white dark:bg-bg-dark"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold mb-8 text-center">Featured Projects</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${featuredProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard3D", ProjectCard3D, { "client:visible": true, "title": project.data.title, "description": project.data.description, "image": project.data.image || "/images/project-placeholder.jpg", "tags": project.data.tags || project.data.technologies || [], "demoUrl": project.data.demoUrl, "codeUrl": project.data.codeUrl, "featured": project.data.featured, "client:component-hydration": "visible", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/src/components/ProjectCard3D.jsx", "client:component-export": "default" })}`)} </div> </div> </section>  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "curve", "position": "bottom", "color": "bg-gray-50 dark:bg-gray-900", "height": 60, "bgColor": "", "flipX": false, "width": 100, "client:component-hydration": "load", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold mb-8">All Projects</h2> ${renderComponent($$result2, "ProjectFilterSort", ProjectFilterSort, { "projects": allProjects, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/src/components/ProjectFilterSort.jsx", "client:component-export": "default" })} </div> </section> ` })}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/src/pages/projects.astro", void 0);

const $$file = "/workspaces/Iftekhar---Personal-Portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
