import React from 'react';

/**
 * SectionDivider - Creates visually interesting dividers between sections
 * 
 * @param {Object} props
 * @param {string} props.type - Type of divider (wave, curve, triangles, zigzag)
 * @param {string} props.position - Position of divider (top or bottom)
 * @param {string} props.color - Background color of the section this divider is attached to
 * @param {string} props.bgColor - Background color of the adjacent section (optional)
 * @param {boolean} props.flipX - Whether to flip the divider horizontally (default: false)
 * @param {number} props.height - Height of the divider in pixels (default: 60)
 * @param {number} props.width - Width percentage of the divider (default: 100)
 */
const SectionDivider = ({
  type = 'wave',
  position = 'bottom',
  color = 'bg-white',
  bgColor = '',
  flipX = false,
  height = 60,
  width = 100
}) => {
  // Style for the container
  const containerStyle = {
    height: `${height}px`,
    width: `${width}%`,
    ...(position === 'top' ? { marginBottom: '-1px' } : { marginTop: '-1px' }),
    ...(flipX ? { transform: 'rotateY(180deg)' } : {})
  };

  // Extract the color value from the Tailwind class if needed
  const fillColor = color.startsWith('bg-') ? 'currentColor' : color;

  // Generate SVG based on divider type
  const renderDivider = () => {
    switch (type) {
      case 'wave':
        return (
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
            style={{ height: '100%', width: '100%' }}>
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              style={{ fill: fillColor }}
            />
          </svg>
        );
        
      case 'curve':
        return (
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
            style={{ height: '100%', width: '100%' }}>
            <path 
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
              style={{ fill: fillColor }}
            />
          </svg>
        );
        
      case 'triangles':
        return (
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
            style={{ height: '100%', width: '100%' }}>
            <path 
              d="M1200 0L0 0 598.97 114.72 1200 0z" 
              style={{ fill: fillColor }}
            />
          </svg>
        );
        
      case 'zigzag':
        return (
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
            style={{ height: '100%', width: '100%' }}>
            <path 
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z" 
              style={{ fill: fillColor }}
            />
          </svg>
        );
        
      default:
        return (
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
            style={{ height: '100%', width: '100%' }}>
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              style={{ fill: fillColor }}
            />
          </svg>
        );
    }
  };

  return (
    <div className={`w-full overflow-hidden ${position === 'top' ? 'mt-auto' : 'mb-auto'} ${bgColor}`}>
      <div 
        className={`relative block w-full ${color}`} 
        style={containerStyle}
      >
        {renderDivider()}
      </div>
    </div>
  );
};

export default SectionDivider;