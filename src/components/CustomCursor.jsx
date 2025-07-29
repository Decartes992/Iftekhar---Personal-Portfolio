import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    // Refs for the cursor elements and position data
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);
    
    const mousePosition = useRef({ x: 0, y: 0 });
    const outlinePosition = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef(null);

    useEffect(() => {
        // --- Configuration ---
        const interactiveSelector = 'a, button, input, select, textarea, [data-interactive-cursor]';
        const lerpAmount = 0.15; // Controls the "lag" of the outline. Lower is more laggy.

        // --- State Check ---
        // Don't run this effect on touch devices where there is no cursor
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) return;

        // --- Event Handlers ---
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = () => cursorOutlineRef.current?.classList.add('clicked');
        const handleMouseUp = () => cursorOutlineRef.current?.classList.remove('clicked');

        const handleMouseOver = (e) => {
            if (e.target.closest(interactiveSelector)) {
                cursorOutlineRef.current?.classList.add('hovered');
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.closest(interactiveSelector)) {
                cursorOutlineRef.current?.classList.remove('hovered');
            }
        };

        // --- Animation Loop ---
        const animate = () => {
            // Linear interpolation for smooth following
            outlinePosition.current.x += (mousePosition.current.x - outlinePosition.current.x) * lerpAmount;
            outlinePosition.current.y += (mousePosition.current.y - outlinePosition.current.y) * lerpAmount;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate(${mousePosition.current.x}px, ${mousePosition.current.y}px)`;
            }
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.transform = `translate(${outlinePosition.current.x}px, ${outlinePosition.current.y}px)`;
            }
            animationFrameId.current = requestAnimationFrame(animate);
        };

        // --- Setup and Cleanup ---
        document.body.style.cursor = 'none';
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        // Use event delegation for hover effects for better performance
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        // Start the animation loop
        animate();

        return () => {
            // Cleanup on component unmount
            document.body.style.cursor = 'auto';
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <>
            <style>{`
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
            `}</style>
            <div ref={cursorOutlineRef} className="custom-cursor-outline" />
            <div ref={cursorDotRef} className="custom-cursor-dot" />
        </>
    );
};

export default CustomCursor;
