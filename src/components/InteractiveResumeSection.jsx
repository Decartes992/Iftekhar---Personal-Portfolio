import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'; // Assuming heroicons for icons

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
const ExpandableSection = ({ title, children, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div 
          id={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-500 ease-in-out"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;
