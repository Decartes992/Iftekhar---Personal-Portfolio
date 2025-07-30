import React, { useState, useRef } from 'react';
import Tilt3D from './Tilt3D.jsx';

// Helper for GitHub icon (simple SVG path)
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard3D = ({
  title,
  description,
  longDescription, // Added for the back of the card
  image = '/images/project-placeholder.jpg',
  tags = [],
  techStack = [], // More detailed tech stack for the back
  demoUrl = '#',
  codeUrl = '#',
  featured = false,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e) => {
    // Prevent flipping if a link/button inside the card was clicked
    if (e.target.closest('a, button')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  // Technology Tag Cloud - simple styling for now
  const TagCloud = ({ items }) => (
    <div className="flex flex-wrap gap-2 mb-3">
      {items.map((item, index) => (
        <span 
          key={index} 
          className="bg-primary-500/20 text-primary-700 dark:bg-primary-400/20 dark:text-primary-300 text-xs px-2.5 py-1 rounded-full font-medium transition-transform hover:scale-110"
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <Tilt3D 
      maxTilt={8} 
      scale={1.03} 
      transitionSpeed={600} 
      className={`project-card-container rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${featured ? 'border-2 border-primary-500' : ''}`}
    >
      <div 
        className={`project-card-flipper ${isFlipped ? 'is-flipped' : ''}`}
        onClick={handleCardClick}
        role="button" // Make it keyboard accessible for flipping
        tabIndex={0} // Make it focusable
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(e); }}
        aria-pressed={isFlipped}
        aria-label={`Project: ${title}. Click to flip for more details.`}
      >
        {/* Card Front */}
        <div className="project-card-face project-card-front bg-bg-base-current dark:bg-bg-alt-dark rounded-xl overflow-hidden flex flex-col h-full">
          <div className="relative overflow-hidden min-h-[12rem] sm:min-h-[14rem] group">
            <img 
              src={image} 
              alt={`Preview of ${title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
            {featured && (
              <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">Featured</span>
            )}
            <div className="absolute bottom-3 left-3">
              <h3 className="text-xl md:text-2xl font-bold font-display text-white leading-tight drop-shadow-md">{title}</h3>
            </div>
          </div>
          <div className="p-5 flex-grow flex flex-col">
            <p className="text-text-muted-current dark:text-text-muted-dark-current text-sm mb-3 line-clamp-3 flex-grow">{description}</p>
            {tags.length > 0 && <TagCloud items={tags.slice(0, 4)} />}
            <div className="mt-auto text-center text-xs text-primary-500 dark:text-primary-400 font-medium group-hover:underline">Click to see details</div>
          </div>
        </div>

        {/* Card Back */}
        <div className="project-card-face project-card-back bg-bg-alt-current dark:bg-bg-tertiary-dark rounded-xl overflow-hidden flex flex-col p-5 h-full">
          <h4 className="text-xl font-bold font-display text-text-base-current dark:text-text-dark-current mb-2">{title}</h4>
          <p className="text-sm text-text-muted-current dark:text-text-muted-dark-current mb-3 text-pretty scrollable-content flex-grow max-h-32 overflow-y-auto pr-2">
            {longDescription || description} 
          </p>
          
          {techStack.length > 0 && (
            <div className="mb-4">
              <h5 class="text-sm font-semibold text-text-base-current dark:text-text-dark-current mb-1.5">Tech Stack:</h5>
              <TagCloud items={techStack} />
            </div>
          )}

          <div className="mt-auto flex gap-3 pt-3 border-t border-border-current dark:border-border-dark/50">
            {demoUrl && demoUrl !== '#' && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-primary-500 text-white text-center py-2.5 px-4 rounded-md hover:bg-primary-600 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md flex items-center justify-center"
              >
                Live Demo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1.5"><path d="M12.232 4.232a2.75 2.75 0 0 1 3.888 3.888l-3.36 3.36a2.75 2.75 0 0 1-3.888-3.888l3.36-3.36Zm2.121 2.121a1.25 1.25 0 0 0-1.768-1.768L9.225 8.045a1.25 1.25 0 0 0 1.768 1.768l3.36-3.36Z"/><path d="m11.364 7.878-.707-.707-3.5 3.5.707.707 3.5-3.5Z"/><path d="m11.404 11.288.94-.94a2.75 2.75 0 0 0-3.889-3.888l-.94.94a2.75 2.75 0 0 0 3.889 3.888Z"/></svg>
              </a>
            )}
            {codeUrl && codeUrl !== '#' && (
              <a 
                href={codeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-bg-tertiary-current dark:bg-bg-alt-dark text-text-base-current dark:text-text-dark-current text-center py-2.5 px-4 rounded-md hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <GitHubIcon />
                <span class="ml-1.5">Source Code</span>
              </a>
            )}
          </div>
          {/* Mini Live Preview - Advanced: Requires iframe or similar */}
          {/* {livePreviewUrl && <iframe src={livePreviewUrl} className="w-full h-32 mt-2 border rounded"></iframe>} */}
        </div>
      </div>
      <style jsx global>{`
        .project-card-container {
          perspective: 1000px;
        }
        .project-card-flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1); /* Springy flip */
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .project-card-flipper.is-flipped {
          transform: rotateY(180deg);
        }
        .project-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden; /* Safari */
          display: flex;
          flex-direction: column;
        }
        .project-card-back {
          transform: rotateY(180deg);
        }
        .scrollable-content::-webkit-scrollbar {
          width: 6px;
        }
        .scrollable-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollable-content::-webkit-scrollbar-thumb {
          background-color: var(--clr-primary-300);
          border-radius: 3px;
        }
        html[data-theme="dark"] .scrollable-content::-webkit-scrollbar-thumb {
          background-color: var(--clr-primary-700);
        }
        .text-pretty {
          text-wrap: pretty;
        }
      `}</style>
    </Tilt3D>
  );
};

export default ProjectCard3D;