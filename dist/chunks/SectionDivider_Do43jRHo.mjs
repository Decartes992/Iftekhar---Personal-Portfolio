import { jsx } from 'react/jsx-runtime';
import 'react';

const SectionDivider = ({
  type = "wave",
  position = "bottom",
  color = "bg-white",
  bgColor = "",
  flipX = false,
  height = 60,
  width = 100
}) => {
  const containerStyle = {
    height: `${height}px`,
    width: `${width}%`,
    ...position === "top" ? { marginBottom: "-1px" } : { marginTop: "-1px" },
    ...flipX ? { transform: "rotateY(180deg)" } : {}
  };
  const fillColor = color.startsWith("bg-") ? "currentColor" : color;
  const renderDivider = () => {
    switch (type) {
      case "wave":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            preserveAspectRatio: "none",
            viewBox: "0 0 1200 120",
            xmlns: "http://www.w3.org/2000/svg",
            style: { height: "100%", width: "100%" },
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                style: { fill: fillColor }
              }
            )
          }
        );
      case "curve":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            preserveAspectRatio: "none",
            viewBox: "0 0 1200 120",
            xmlns: "http://www.w3.org/2000/svg",
            style: { height: "100%", width: "100%" },
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z",
                style: { fill: fillColor }
              }
            )
          }
        );
      case "triangles":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            preserveAspectRatio: "none",
            viewBox: "0 0 1200 120",
            xmlns: "http://www.w3.org/2000/svg",
            style: { height: "100%", width: "100%" },
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M1200 0L0 0 598.97 114.72 1200 0z",
                style: { fill: fillColor }
              }
            )
          }
        );
      case "zigzag":
        return /* @__PURE__ */ jsx(
          "svg",
          {
            preserveAspectRatio: "none",
            viewBox: "0 0 1200 120",
            xmlns: "http://www.w3.org/2000/svg",
            style: { height: "100%", width: "100%" },
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M1200 120L0 16.48 0 0 1200 0 1200 120z",
                style: { fill: fillColor }
              }
            )
          }
        );
      default:
        return /* @__PURE__ */ jsx(
          "svg",
          {
            preserveAspectRatio: "none",
            viewBox: "0 0 1200 120",
            xmlns: "http://www.w3.org/2000/svg",
            style: { height: "100%", width: "100%" },
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                style: { fill: fillColor }
              }
            )
          }
        );
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `w-full overflow-hidden ${position === "top" ? "mt-auto" : "mb-auto"} ${bgColor}`, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `relative block w-full ${color}`,
      style: containerStyle,
      children: renderDivider()
    }
  ) });
};

export { SectionDivider as S };
