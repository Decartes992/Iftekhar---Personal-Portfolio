import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedTimeline Component (Theme-Aware)
 *
 * Creates a theme-aware, animated timeline that uses Tailwind CSS classes for styling.
 *
 * @component
 *
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of timeline items.
 * @param {string} [props.layout="vertical"] - "vertical" or "horizontal".
 * @param {boolean} [props.alternating=true] - Alternate sides in vertical layout.
 */
const AnimatedTimeline = ({
  items = [],
  layout = "vertical",
  alternating = true,
}) => {
  const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false));
  const itemRefs = useRef([]);

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
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, [items]);

  // Vertical timeline item
  const VerticalTimelineItem = ({ item, index, isVisible }) => {
    const side = alternating ? (index % 2 === 0 ? 'left' : 'right') : 'left';
    const isLeft = side === 'left';

    return (
      <div
        ref={el => itemRefs.current[index] = el}
        data-index={index}
        className={`timeline-item relative flex items-start w-full my-6 md:my-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        {/* Content card */}
        <div className={`w-full md:w-5/12 p-4 md:p-5 rounded-lg shadow-md bg-background-alt border border-border transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
        >
          <span className="text-sm text-text-muted font-medium">{item.date}</span>
          <h3 className="text-lg font-bold mt-1 mb-2 text-text">{item.title}</h3>
          <p className="text-text-muted mb-3 text-base">{item.description}</p>

          {/* Technologies/Skills */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Timeline line and dot for large screens */}
        <div className="hidden md:block absolute top-5 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
        <div className="hidden md:block absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
      </div>
    );
  };

  return (
    <div className="py-6">
      {layout === "vertical" ? (
        <div className="relative md:border-l-2 md:border-transparent md:ml-0 pl-4 md:pl-0">
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute top-0 left-0 h-full w-0.5 bg-border ml-2" />
          {Array.isArray(items) && items.map((item, index) => (
             <div key={index} className="relative">
                {/* Dot for mobile */}
                <div className="md:hidden absolute top-5 -left-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                <VerticalTimelineItem
                    item={item}
                    index={index}
                    isVisible={visibleItems[index]}
                />
             </div>
          ))}
        </div>
      ) : (
        <p>Horizontal layout not implemented in this version.</p>
      )}
    </div>
  );
};

export default AnimatedTimeline;
