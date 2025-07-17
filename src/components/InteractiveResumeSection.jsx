import React, { useState, useRef, useEffect } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'; // Using Plus/Minus for a slightly different feel

/**
 * ExpandableSection Component
 *
 * A component that displays a title and content which can be expanded or collapsed.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section, always visible.
 * @param {React.ReactNode} props.children - The content to be shown/hidden.
 * @param {boolean} [props.initiallyOpen=false] - Whether the section is open by default.
 */
const ExpandableSection = ({ title, children, initiallyOpen = false, titleClassName, iconSize = 6 }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen, children]); // Re-calculate on children change too, in case content becomes dynamic

  const toggleOpen = () => setIsOpen(!isOpen);

  const IconComponent = isOpen ? MinusIcon : PlusIcon;

  return (
    <div className="mb-6 border border-border dark:border-border-dark rounded-xl shadow-sm overflow-hidden transition-all duration-300 ease-in-out">
      <button
        onClick={toggleOpen}
        className={`w-full flex justify-between items-center p-5 md:p-6 text-left bg-bg-alt dark:bg-bg-dark-alt hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 transition-colors duration-200 ${isOpen ? 'border-b border-border dark:border-border-dark' : ''}`}
        aria-expanded={isOpen}
        aria-controls={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <h3 className={`text-xl md:text-2xl font-semibold text-text-headings dark:text-text-dark-headings ${titleClassName || ''}`}>{title}</h3>
        <IconComponent className={`w-${iconSize} h-${iconSize} text-primary-600 dark:text-primary-400 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        id={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-5 md:p-6 bg-card dark:bg-card-dark text-text-base dark:text-text-dark-base prose dark:prose-invert max-w-none prose-sm md:prose-base">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;
