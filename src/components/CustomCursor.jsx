import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${x - 15}px, ${y - 15}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Detect interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input[type="submit"], input[type="checkbox"], input[type="radio"], select, textarea, [data-interactive-cursor]'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHoveringInteractive(true));
      el.addEventListener('mouseleave', () => setIsHoveringInteractive(false));
    });
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHoveringInteractive(true));
        el.removeEventListener('mouseleave', () => setIsHoveringInteractive(false));
      });
      document.body.style.cursor = 'auto'; // Restore default cursor on component unmount
    };
  }, []);

  const outlineSize = isHoveringInteractive ? (isMouseDown ? 25 : 35) : 30;
  const outlineOpacity = isHoveringInteractive ? 0.3 : 0.2;
  const dotSize = isMouseDown ? 8 : 6;
  const dotColor = isHoveringInteractive ? 'var(--color-primary-500)' : 'var(--color-text-base)';
  const outlineColor = isHoveringInteractive ? 'var(--color-primary-500)' : 'var(--color-text-base)';


  return (
    <>
      <div
        ref={cursorOutlineRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${outlineSize}px`,
          height: `${outlineSize}px`,
          border: `1.5px solid ${outlineColor}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease-out, width 0.2s ease, height 0.2s ease, opacity 0.2s ease, border-color 0.2s ease',
          opacity: outlineOpacity,
          willChange: 'transform, width, height, opacity',
        }}
      />
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: dotColor,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.05s ease-out, width 0.15s ease, height 0.15s ease, background-color 0.2s ease',
          willChange: 'transform, width, height, background-color',
        }}
      />
    </>
  );
};

export default CustomCursor;
