import{j as s}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.BVOCwoKb.js";const g=()=>{const c=o.useRef(null),e=o.useRef(null),n=o.useRef({x:0,y:0}),t=o.useRef({x:0,y:0}),u=o.useRef(null);return o.useEffect(()=>{const i="a, button, input, select, textarea, [data-interactive-cursor]";if(window.matchMedia("(pointer: coarse)").matches)return;const a=r=>{n.current={x:r.clientX,y:r.clientY}},d=()=>e.current?.classList.add("clicked"),m=()=>e.current?.classList.remove("clicked"),l=r=>{r.target.closest(i)&&e.current?.classList.add("hovered")},p=r=>{r.target.closest(i)&&e.current?.classList.remove("hovered")},x=()=>{t.current.x+=(n.current.x-t.current.x)*.15,t.current.y+=(n.current.y-t.current.y)*.15,c.current&&(c.current.style.transform=`translate(${n.current.x}px, ${n.current.y}px)`),e.current&&(e.current.style.transform=`translate(${t.current.x}px, ${t.current.y}px)`),u.current=requestAnimationFrame(x)};return document.body.style.cursor="none",document.addEventListener("mousemove",a),document.addEventListener("mousedown",d),document.addEventListener("mouseup",m),document.addEventListener("mouseover",l),document.addEventListener("mouseout",p),x(),()=>{document.body.style.cursor="auto",document.removeEventListener("mousemove",a),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",m),document.removeEventListener("mouseover",l),document.removeEventListener("mouseout",p),u.current&&cancelAnimationFrame(u.current)}},[]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                .custom-cursor-dot {
                    position: fixed;
                    top: -5px;
                    left: -5px;
                    width: 10px;
                    height: 10px;
                    background-color: hsl(var(--color-primary));
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    will-change: transform;
                    transition: background-color 0.2s ease;
                }
                .custom-cursor-outline {
                    position: fixed;
                    top: -15px;
                    left: -15px;
                    width: 30px;
                    height: 30px;
                    border: 1.5px solid hsl(var(--color-primary) / 0.5);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    will-change: transform, width, height, border-color;
                    transition: 
                        width 0.2s ease, 
                        height 0.2s ease, 
                        border-color 0.2s ease;
                }
                .custom-cursor-outline.hovered {
                    width: 40px;
                    height: 40px;
                    top: -20px;
                    left: -20px;
                    border-color: hsl(var(--color-primary) / 0.8);
                }
                .custom-cursor-outline.clicked {
                    width: 25px;
                    height: 25px;
                    top: -12.5px;
                    left: -12.5px;
                    transition: width 0.1s ease, height 0.1s ease;
                }
                @media (pointer: coarse) {
                    .custom-cursor-dot, .custom-cursor-outline {
                        display: none;
                    }
                }
            `}),s.jsx("div",{ref:e,className:"custom-cursor-outline"}),s.jsx("div",{ref:c,className:"custom-cursor-dot"})]})};export{g as default};
