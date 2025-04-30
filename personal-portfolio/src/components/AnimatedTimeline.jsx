import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedTimeline - Creates an animated timeline for experience, projects, or other chronological data
 * 
 * @param {Object} props
 * @param {Array} props.items - Array of timeline items with date, title, description, and optional technologies properties
 * @param {string} props.layout - Layout of the timeline (vertical or horizontal) (default: "vertical")
 * @param {boolean} props.alternating - Whether to alternate items on left and right (for vertical layout) (default: true)
 * @param {string} props.lineColor - Color of the timeline line (default: "#3B82F6")
 * @param {string} props.accentColor - Accent color for dots and highlights (default: "#3B82F6")
 */
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
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleItems(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    
    const itemElements = timelineRef.current.querySelectorAll('.timeline-item');
    itemElements.forEach(item => observer.observe(item));
    
    return () => {
      if (itemElements) {
        itemElements.forEach(item => observer.unobserve(item));
      }
    };
  }, [items]);
  
  // Vertical timeline item
  const VerticalTimelineItem = ({ item, index, isVisible }) => {
    const side = alternating ? (index % 2 === 0 ? 'left' : 'right') : 'left';
    
    return (
      <div className={`relative flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} my-8`}>
        {/* Timeline vertical line */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5" 
          style={{ backgroundColor: lineColor, opacity: 0.3 }}
        />
        
        {/* Timeline dot */}
        <div 
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
          style={{ backgroundColor: accentColor, borderColor: 'white' }}
        />
        
        {/* Content card */}
        <div 
          className={`w-5/12 p-5 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
            ${side === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.date}</span>
          <h3 className="text-lg font-bold mt-1 mb-2 text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
          
          {/* Technologies/Skills */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  // Horizontal timeline item
  const HorizontalTimelineItem = ({ item, index, isVisible }) => {
    return (
      <div className={`min-w-[250px] relative transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Timeline dot */}
        <div 
          className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 z-10"
          style={{ backgroundColor: accentColor, borderColor: 'white' }}
        />
        
        {/* Content card */}
        <div className="mt-6 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.date}</span>
          <h3 className="text-lg font-bold mt-1 mb-2 text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
        </div>
      </div>
    );
  };
  
  return (
    <div ref={timelineRef} className="py-6">
      {layout === "vertical" ? (
        <div className="relative">
          {items.map((item, index) => (
            <div key={index} className="timeline-item" data-index={index}>
              <VerticalTimelineItem 
                item={item} 
                index={index} 
                isVisible={visibleItems[index]} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative">
          {/* Horizontal timeline line */}
          <div 
            className="absolute top-2 left-0 w-full h-0.5" 
            style={{ backgroundColor: lineColor, opacity: 0.3 }}
          />
          
          {/* Horizontal timeline items */}
          <div className="flex overflow-x-auto space-x-6 py-4 px-2">
            {items.map((item, index) => (
              <div key={index} className="timeline-item" data-index={index}>
                <HorizontalTimelineItem 
                  item={item} 
                  index={index} 
                  isVisible={visibleItems[index]} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedTimeline;