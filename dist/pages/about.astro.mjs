/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CUDSO68N.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B4tAeTz0.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { S as SectionDivider } from '../chunks/SectionDivider_Do43jRHo.mjs';
import { s as skillsData, e as experienceData } from '../chunks/aboutData_BjTP3D2B.mjs';
export { renderers } from '../renderers.mjs';

const SkillRadarChart = ({
  skills = [],
  primaryColor = "rgb(59, 130, 246)",
  backgroundColor = "rgba(59, 130, 246, 0.1)",
  height = 400,
  animationDuration = 1500,
  showLegend = false
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (!chartRef.current || !skills.length) return;
    const ctx = chartRef.current.getContext("2d");
    const labels = skills.map((skill) => skill.name);
    const data = skills.map((skill) => skill.level);
    chartInstance.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels,
        datasets: [{
          label: "Skill Level",
          data,
          backgroundColor,
          borderColor: primaryColor,
          borderWidth: 2,
          pointBackgroundColor: primaryColor,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: primaryColor,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              color: "rgba(100, 100, 100, 0.1)"
            },
            grid: {
              color: "rgba(100, 100, 100, 0.1)"
            },
            pointLabels: {
              color: "var(--color-text, rgb(100, 100, 100))",
              font: {
                size: 12,
                family: "Poppins, sans-serif"
              }
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 20,
              backdropColor: "transparent",
              color: "var(--color-text, rgb(100, 100, 100))"
            }
          }
        },
        plugins: {
          legend: {
            display: showLegend,
            position: "bottom",
            labels: {
              color: "var(--color-text, rgb(100, 100, 100))",
              font: {
                size: 12,
                family: "Poppins, sans-serif"
              },
              boxWidth: 12,
              padding: 15
            }
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            titleFont: {
              size: 13
            },
            bodyFont: {
              size: 12
            },
            padding: 10,
            displayColors: false
          }
        },
        animation: {
          duration: animationDuration,
          easing: "easeOutQuart"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [skills, primaryColor, backgroundColor, animationDuration, showLegend]);
  useEffect(() => {
    const handleThemeChange = () => {
      if (chartInstance.current) {
        const isDarkMode = document.documentElement.classList.contains("dark");
        const textColor = isDarkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.7)";
        chartInstance.current.options.scales.r.pointLabels.color = textColor;
        chartInstance.current.options.scales.r.ticks.color = textColor;
        chartInstance.current.options.plugins.legend.labels.color = textColor;
        chartInstance.current.update();
      }
    };
    handleThemeChange();
    window.addEventListener("themechange", handleThemeChange);
    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { style: { height: `${height}px`, width: "100%" }, children: /* @__PURE__ */ jsx("canvas", { ref: chartRef }) });
};

const AnimatedTimeline = ({
  items = [],
  layout = "vertical",
  alternating = true,
  lineColor = "#3B82F6",
  accentColor = "#3B82F6"
}) => {
  const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false));
  const timelineRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );
    const itemElements = timelineRef.current.querySelectorAll(".timeline-item");
    itemElements.forEach((item) => observer.observe(item));
    return () => {
      if (itemElements) {
        itemElements.forEach((item) => observer.unobserve(item));
      }
    };
  }, [items]);
  const VerticalTimelineItem = ({ item, index, isVisible }) => {
    const side = alternating ? index % 2 === 0 ? "left" : "right" : "left";
    return /* @__PURE__ */ jsxs("div", { className: `relative flex ${side === "left" ? "flex-row" : "flex-row-reverse"} my-8`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5",
          style: { backgroundColor: lineColor, opacity: 0.3 }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10",
          style: { backgroundColor: accentColor, borderColor: "white" }
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `w-5/12 p-5 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} 
            ${side === "left" ? "mr-auto pr-8" : "ml-auto pl-8"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400 font-medium", children: item.date }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mt-1 mb-2 text-gray-900 dark:text-white", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-3", children: item.description }),
            item.technologies && item.technologies.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: item.technologies.map((tech, i) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-2 py-1 text-xs rounded-full",
                style: { backgroundColor: `${accentColor}20`, color: accentColor },
                children: tech
              },
              i
            )) })
          ]
        }
      )
    ] });
  };
  const HorizontalTimelineItem = ({ item, index, isVisible }) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `min-w-[250px] relative transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 z-10",
              style: { backgroundColor: accentColor, borderColor: "white" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400 font-medium", children: item.date }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mt-1 mb-2 text-gray-900 dark:text-white", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: item.description })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsx("div", { ref: timelineRef, className: "py-6", children: layout === "vertical" ? /* @__PURE__ */ jsx("div", { className: "relative", children: items.map((item, index) => /* @__PURE__ */ jsx("div", { className: "timeline-item", "data-index": index, children: /* @__PURE__ */ jsx(
    VerticalTimelineItem,
    {
      item,
      index,
      isVisible: visibleItems[index]
    }
  ) }, index)) }) : /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-2 left-0 w-full h-0.5",
        style: { backgroundColor: lineColor, opacity: 0.3 }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex overflow-x-auto space-x-6 py-4 px-2", children: items.map((item, index) => /* @__PURE__ */ jsx("div", { className: "timeline-item", "data-index": index, children: /* @__PURE__ */ jsx(
      HorizontalTimelineItem,
      {
        item,
        index,
        isVisible: visibleItems[index]
      }
    ) }, index)) })
  ] }) });
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About Me | Iftekhar's Portfolio";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-bg-dark"> <div class="container mx-auto px-4"> <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">About Me</h1> <p class="text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
Electrical Engineering student with a passion for software development and embedded systems
</p> </div> </section>  <section class="py-16 bg-white dark:bg-bg-dark"> <div class="container mx-auto px-4"> <div class="flex flex-col md:flex-row items-center md:items-start gap-8"> <img src="/images/iftekhar_photo.jpg" alt="Iftekhar Hossain Rafi" class="w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-primary/20"> <div> <p class="text-lg mb-4">Hello! I'm Iftekhar Hossain Rafi, an Electrical Engineering student at Dalhousie University with a strong focus on the Computer Engineering option. I'm passionate about the intersection of hardware and software, with hands-on experience in software development (Python, C/C++), embedded systems programming, and system architecture.</p> <p class="text-lg mb-4">My academic journey and project work, such as contributing as a core software developer for the Dalhousie Space Systems Lab's LORIS satellite project and working on the MILTON AI-powered training decisions application, have allowed me to develop practical skills in areas like data structures, algorithms, API development, and working with tools like Git, Docker, and Linux.</p> <p class="text-lg mb-4">Previously, as a Makerspace Coordinator at Dalhousie's Emera Ideahub, I enjoyed advising students on diverse engineering projects and maintaining a variety of advanced equipment.</p> <p class="text-lg mb-4">I am actively seeking opportunities where I can apply my skills in software engineering, systems development, and electrical engineering to contribute to innovative projects.</p> </div> </div> </div> </section>  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "wave", "position": "bottom", "color": "bg-gray-50 dark:bg-gray-900", "height": 60, "bgColor": "", "flipX": false, "width": 100, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Technical Skills</h2> <div class="max-w-3xl mx-auto"> ${renderComponent($$result2, "SkillRadarChart", SkillRadarChart, { "client:visible": true, "skills": skillsData, "primaryColor": "rgb(59, 130, 246)", "backgroundColor": "rgba(59, 130, 246, 0.1)", "height": 400, "animationDuration": 1500, "showLegend": true, "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/SkillRadarChart.jsx", "client:component-export": "default" })} </div> </div> </section>  ${renderComponent($$result2, "SectionDivider", SectionDivider, { "client:load": true, "type": "triangles", "position": "top", "color": "bg-white dark:bg-bg-dark", "height": 60, "bgColor": "", "flipX": false, "width": 100, "client:component-hydration": "load", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/SectionDivider.jsx", "client:component-export": "default" })}  <section class="py-16 bg-white dark:bg-bg-dark"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Professional Journey</h2> <div class="max-w-4xl mx-auto"> ${renderComponent($$result2, "AnimatedTimeline", AnimatedTimeline, { "client:visible": true, "items": experienceData, "layout": "vertical", "alternating": true, "lineColor": "#3B82F6", "accentColor": "#3B82F6", "client:component-hydration": "visible", "client:component-path": "D:/Github/Iftekhar---Personal-Portfolio/src/components/AnimatedTimeline.jsx", "client:component-export": "default" })} </div> </div> </section>  <section class="py-16 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-8">Education</h2> <div class="max-w-2xl mx-auto"> <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"> <h3 class="text-xl font-bold mb-2">Bachelor of Electrical Engineering</h3> <p class="text-gray-700 dark:text-gray-300 mb-1">Dalhousie University</p> <p class="text-gray-600 dark:text-gray-400 mb-4">Computer Engineering Option, Graduating 2025</p> <p class="text-gray-700 dark:text-gray-300">
Relevant coursework includes data structures and algorithms, embedded systems, digital logic, signals and systems, 
            and software development methodologies.
</p> </div> </div> </div> </section> ` })}`;
}, "D:/Github/Iftekhar---Personal-Portfolio/src/pages/about.astro", void 0);

const $$file = "D:/Github/Iftekhar---Personal-Portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
