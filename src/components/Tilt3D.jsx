import React, { useState, useRef, useEffect } from 'react';

/**
 * Tilt3D - Creates a 3D tilt effect on hover for cards and other elements
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to apply the tilt effect to
 * @param {number} props.perspective - The perspective value for the 3D effect (default: 1000)
 * @param {number} props.maxTilt - Maximum tilt in degrees (default: 15)
 * @param {number} props.scale - Scale on hover (default: 1.05)
 * @param {number} props.transitionSpeed - Transition speed for tilt effect (default: 400)
 * @param {number} props.transitionEase - Easing function for the transition (default: 'cubic-bezier(.03,.98,.52,.99)')
 * @param {string} props.className - Additional CSS classes
 */
const Tilt3D = ({
  children,
  perspective = 500,
  maxTilt = 5,
  scale = 1.0,
  transitionSpeed = 200,
  transitionEase = 'cubic-bezier(.03,.98,.52,.99)',
  className = '',
}) => {
  const [supports3D, setSupports3D] = useState(false);
  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
  });
  
  // Check for CSS 3D transform support
  useEffect(() => {
    const check3DSupport = () => {
      const element = document.createElement('div');
      const testProperties = [
        'transform',
        'WebkitTransform',
        'MozTransform',
        'msTransform',
        'OTransform'
      ];
      
      return testProperties.some(property => {
        if (property in element.style) {
          element.style[property] = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)';
          return element.style[property] !== '';
        }
        return false;
      });
    };
    
    setSupports3D(check3DSupport());
  }, []);
  
  const cardRef = useRef(null);
  const transitionRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!supports3D) return;
    
    if (transitionRef.current) clearTimeout(transitionRef.current);
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * maxTilt * -1;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform 0ms ${transitionEase}`,
    });
  };

  const handleMouseLeave = () => {
    if (!supports3D) {
      setStyle({
        transform: 'none',
      });
      return;
    }
    
    if (transitionRef.current) clearTimeout(transitionRef.current);
    
    transitionRef.current = setTimeout(() => {
      setStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: `transform ${transitionSpeed}ms ${transitionEase}`,
      });
    }, 0);
  };

  const handleMouseEnter = () => {
    if (!supports3D) return;
    
    if (transitionRef.current) clearTimeout(transitionRef.current);
    
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform ${transitionSpeed}ms ${transitionEase}`,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={style}
      className={`tilt-3d ${supports3D ? 'will-change-transform' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Tilt3D;