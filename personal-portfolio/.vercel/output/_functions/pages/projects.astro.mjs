import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B7_fxlpj.mjs';
import 'kleur/colors';
<<<<<<< HEAD
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D3k3n2ZK.mjs';
import { g as getCollection } from '../chunks/_astro_content_C9trdLCr.mjs';
=======
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B8Ece2LE.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bn0ya_Tv.mjs';
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const ProjectFilterSort = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortOption, setSortOption] = useState("date-desc");
  const allTechnologies = [...new Set(projects.flatMap((project) => project.data.technologies || []))];
  const allProjectTypes = [...new Set(projects.flatMap((project) => project.data.project_type || []))];
  const allSkills = [...new Set(projects.flatMap((project) => project.data.skills || []))];
  useEffect(() => {
    let projectsToFilter = [...projects];
    if (selectedTechnologies.length > 0) {
      projectsToFilter = projectsToFilter.filter(
        (project) => selectedTechnologies.every((tech) => project.data.technologies?.includes(tech))
      );
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
        return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
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
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Filter by:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
<<<<<<< HEAD
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Technologies:" }),
=======
            /* @__PURE__ */ jsx("h4", { id: "technologies-label", className: "font-medium", children: "Technologies:" }),
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
            allTechnologies.map((tech) => /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: selectedTechnologies.includes(tech),
                  onChange: () => handleTechnologyChange(tech),
<<<<<<< HEAD
=======
                  "aria-labelledby": "technologies-label",
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
                  className: "mr-2 focus:ring-2 focus:ring-blue-500"
                }
              ),
              tech
            ] }, tech))
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
<<<<<<< HEAD
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Project Types:" }),
=======
            /* @__PURE__ */ jsx("h4", { id: "project-types-label", className: "font-medium", children: "Project Types:" }),
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
            allProjectTypes.map((type) => /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: selectedProjectTypes.includes(type),
                  onChange: () => handleProjectTypeChange(type),
<<<<<<< HEAD
=======
                  "aria-labelledby": "project-types-label",
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
                  className: "mr-2 focus:ring-2 focus:ring-blue-500"
                }
              ),
              type
            ] }, type))
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
<<<<<<< HEAD
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Skills:" }),
=======
            /* @__PURE__ */ jsx("h4", { id: "skills-label", className: "font-medium", children: "Skills:" }),
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
            allSkills.map((skill) => /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: selectedSkills.includes(skill),
                  onChange: () => handleSkillChange(skill),
<<<<<<< HEAD
=======
                  "aria-labelledby": "skills-label",
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
                  className: "mr-2 focus:ring-2 focus:ring-blue-500"
                }
              ),
              skill
            ] }, skill))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
<<<<<<< HEAD
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Sort by:" }),
        /* @__PURE__ */ jsxs("select", { value: sortOption, onChange: handleSortChange, className: "p-2 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: [
=======
        /* @__PURE__ */ jsx("label", { htmlFor: "sort-options", className: "text-lg font-semibold mb-2 block", children: "Sort by:" }),
        /* @__PURE__ */ jsxs("select", { id: "sort-options", value: sortOption, onChange: handleSortChange, className: "p-2 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: [
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
          /* @__PURE__ */ jsx("option", { value: "date-desc", children: "Date (Newest First)" }),
          /* @__PURE__ */ jsx("option", { value: "alphabetical", children: "Alphabetical" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProjects.map((project) => /* @__PURE__ */ jsxs("article", { className: "border p-4 rounded-lg shadow", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-2", children: project.data.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: project.data.description }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
        "Technologies: ",
        project.data.technologies?.join(", ")
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
        "Project Type: ",
        project.data.project_type?.join(", ")
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
        "Skills: ",
        project.data.skills?.join(", ")
      ] })
    ] }, project.slug)) })
  ] });
};

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Projects | Iftekhar's Portfolio";
  const projects = await getCollection("projects");
<<<<<<< HEAD
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>My Projects</h1> <p>Here are some of the projects I've contributed to:</p> ${renderComponent($$result2, "ProjectFilterSort", ProjectFilterSort, { "projects": projects, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/components/ProjectFilterSort.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio/personal-portfolio/src/pages/projects.astro";
=======
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>My Projects</h1> <p>Here are some of the projects I've contributed to:</p> ${renderComponent($$result2, "ProjectFilterSort", ProjectFilterSort, { "projects": projects, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/components/ProjectFilterSort.jsx", "client:component-export": "default" })} ` })}`;
}, "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/projects.astro", void 0);

const $$file = "/workspaces/Iftekhar---Personal-Portfolio/personal-portfolio/src/pages/projects.astro";
>>>>>>> f7baf53d4a5dbc135fc6bf0788842b256d3b1efb
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
