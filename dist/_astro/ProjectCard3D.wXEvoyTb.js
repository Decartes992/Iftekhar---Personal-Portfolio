import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as b}from"./index.BVOCwoKb.js";const $=({children:o,perspective:s=500,maxTilt:m=5,scale:a=1,transitionSpeed:i=200,transitionEase:l="cubic-bezier(.03,.98,.52,.99)",className:d=""})=>{const[x,n]=b.useState({transform:`perspective(${s}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`}),c=b.useRef(null),t=b.useRef(null),p=f=>{t.current&&clearTimeout(t.current);const h=c.current.getBoundingClientRect(),k=f.clientX-h.left,w=f.clientY-h.top,j=h.width/2,v=h.height/2,y=(w-v)/v*m*-1,N=(k-j)/j*m;n({transform:`perspective(${s}px) rotateX(${y}deg) rotateY(${N}deg) scale3d(${a}, ${a}, ${a})`,transition:`transform 0ms ${l}`})},u=()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{n({transform:`perspective(${s}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,transition:`transform ${i}ms ${l}`})},0)},r=()=>{t.current&&clearTimeout(t.current),n({transform:`perspective(${s}px) rotateX(0deg) rotateY(0deg) scale3d(${a}, ${a}, ${a})`,transition:`transform ${i}ms ${l}`})};return e.jsx("div",{ref:c,onMouseMove:p,onMouseLeave:u,onMouseEnter:r,style:x,className:`tilt-3d will-change-transform ${d}`,children:o})},C=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),R=({title:o,description:s,longDescription:m,image:a="/images/project-placeholder.jpg",tags:i=[],techStack:l=[],demoUrl:d="#",codeUrl:x="#",featured:n=!1})=>{const[c,t]=b.useState(!1),p=r=>{r.target.closest("a, button")||t(!c)},u=({items:r})=>e.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:r.map((f,g)=>e.jsx("span",{className:"bg-primary-500/20 text-primary-700 dark:bg-primary-400/20 dark:text-primary-300 text-xs px-2.5 py-1 rounded-full font-medium transition-transform hover:scale-110",children:f},g))});return e.jsxs($,{maxTilt:8,scale:1.03,transitionSpeed:600,className:`project-card-container rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${n?"border-2 border-primary-500":""}`,children:[e.jsxs("div",{className:`project-card-flipper ${c?"is-flipped":""}`,onClick:p,role:"button",tabIndex:0,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&p(r)},"aria-pressed":c,"aria-label":`Project: ${o}. Click to flip for more details.`,children:[e.jsxs("div",{className:"project-card-face project-card-front bg-bg-base-current dark:bg-bg-alt-dark rounded-xl overflow-hidden flex flex-col h-full",children:[e.jsxs("div",{className:"relative overflow-hidden h-48 sm:h-56 group",children:[e.jsx("img",{src:a,alt:`Preview of ${o}`,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"}),n&&e.jsx("span",{className:"absolute top-3 right-3 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md",children:"Featured"}),e.jsx("div",{className:"absolute bottom-3 left-3",children:e.jsx("h3",{className:"text-xl md:text-2xl font-bold font-display text-white leading-tight drop-shadow-md",children:o})})]}),e.jsxs("div",{className:"p-5 flex-grow flex flex-col",children:[e.jsx("p",{className:"text-text-muted-current dark:text-text-muted-dark-current text-sm mb-3 line-clamp-3 flex-grow",children:s}),i.length>0&&e.jsx(u,{items:i.slice(0,4)}),e.jsx("div",{className:"mt-auto text-center text-xs text-primary-500 dark:text-primary-400 font-medium group-hover:underline",children:"Click to see details"})]})]}),e.jsxs("div",{className:"project-card-face project-card-back bg-bg-alt-current dark:bg-bg-tertiary-dark rounded-xl overflow-hidden flex flex-col p-5 h-full",children:[e.jsx("h4",{className:"text-xl font-bold font-display text-text-base-current dark:text-text-dark-current mb-2",children:o}),e.jsx("p",{className:"text-sm text-text-muted-current dark:text-text-muted-dark-current mb-3 text-pretty scrollable-content flex-grow max-h-32 overflow-y-auto pr-2",children:m||s}),l.length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{class:"text-sm font-semibold text-text-base-current dark:text-text-dark-current mb-1.5",children:"Tech Stack:"}),e.jsx(u,{items:l})]}),e.jsxs("div",{className:"mt-auto flex gap-3 pt-3 border-t border-border-current dark:border-border-dark/50",children:[d&&d!=="#"&&e.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-primary-500 text-white text-center py-2.5 px-4 rounded-md hover:bg-primary-600 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md flex items-center justify-center",children:["Live Demo",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-4 h-4 ml-1.5",children:[e.jsx("path",{d:"M12.232 4.232a2.75 2.75 0 0 1 3.888 3.888l-3.36 3.36a2.75 2.75 0 0 1-3.888-3.888l3.36-3.36Zm2.121 2.121a1.25 1.25 0 0 0-1.768-1.768L9.225 8.045a1.25 1.25 0 0 0 1.768 1.768l3.36-3.36Z"}),e.jsx("path",{d:"m11.364 7.878-.707-.707-3.5 3.5.707.707 3.5-3.5Z"}),e.jsx("path",{d:"m11.404 11.288.94-.94a2.75 2.75 0 0 0-3.889-3.888l-.94.94a2.75 2.75 0 0 0 3.889 3.888Z"})]})]}),x&&x!=="#"&&e.jsxs("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-bg-tertiary-current dark:bg-bg-alt-dark text-text-base-current dark:text-text-dark-current text-center py-2.5 px-4 rounded-md hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md flex items-center justify-center",children:[e.jsx(C,{}),e.jsx("span",{class:"ml-1.5",children:"Source Code"})]})]})]})]}),e.jsx("style",{jsx:!0,global:!0,children:`
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
      `})]})};export{R as default};
