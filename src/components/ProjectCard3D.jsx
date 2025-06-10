import React from 'react';
import Tilt3D from './Tilt3D';

/**
 * ProjectCard3D - A 3D animated card component for showcasing projects
 * 
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.image - URL to project image
 * @param {Array} props.tags - Array of technology tags
 * @param {string} props.demoUrl - URL to live demo
 * @param {string} props.codeUrl - URL to source code
 * @param {boolean} props.featured - Whether this is a featured project (default: false)
 */
const ProjectCard3D = ({
  title,
  description,
  image = '/images/project-placeholder.jpg',
  tags = [],
  demoUrl = '#',
  codeUrl = '#',
  featured = false
}) => {
  return (
    <Tilt3D 
      maxTilt={10} 
      scale={1.03} 
      transitionSpeed={800} 
      className="rounded-xl overflow-hidden h-full"
    >
      <div className={`bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden h-full flex flex-col ${featured ? 'border-2 border-primary' : ''}`}>
        {/* Project Image with Overlay */}
        <div className="relative overflow-hidden h-48 sm:h-56">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          
          {/* Tags overlaid on image */}
          <div className="absolute top-0 left-0 p-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="bg-gray-800/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                +{tags.length - 3}
              </span>
            )}
          </div>
          
          {featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm font-semibold">
                Featured
              </span>
            </div>
          )}
        </div>
        
        {/* Project Info */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Live Demo
            </a>
            <a 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </Tilt3D>
  );
};

export default ProjectCard3D;