import React, { useState, useEffect } from 'react';
import ProjectCard3D from './ProjectCard3D';

const ProjectFilterSort = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortOption, setSortOption] = useState('date-desc'); // 'date-desc', 'alphabetical'

  // Extract unique filter options from projects
  const allTechnologies = [...new Set(projects.flatMap(project => 
    project.data.technologies || project.data.tags || []))];
  const allProjectTypes = [...new Set(projects.flatMap(project => project.data.project_type || []))];
  const allSkills = [...new Set(projects.flatMap(project => project.data.skills || []))];

  useEffect(() => {
    let projectsToFilter = [...projects];

    // Filtering logic
    if (selectedTechnologies.length > 0) {
      projectsToFilter = projectsToFilter.filter(project => {
        const projectTechs = project.data.technologies || project.data.tags || [];
        return selectedTechnologies.every(tech => projectTechs.includes(tech));
      });
    }
    if (selectedProjectTypes.length > 0) {
       projectsToFilter = projectsToFilter.filter(project =>
        selectedProjectTypes.every(type => project.data.project_type?.includes(type))
      );
    }
     if (selectedSkills.length > 0) {
       projectsToFilter = projectsToFilter.filter(project =>
        selectedSkills.every(skill => project.data.skills?.includes(skill))
      );
    }

    // Sorting logic with more robust date handling
    projectsToFilter.sort((a, b) => {
      if (sortOption === 'alphabetical') {
        return a.data.title.localeCompare(b.data.title);
      } else { // 'date-desc'
        const dateA = a.data.publishDate || a.data.date || a.data.pubDate || new Date();
        const dateB = b.data.publishDate || b.data.date || b.data.pubDate || new Date();
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      }
    });

    setFilteredProjects(projectsToFilter);
  }, [projects, selectedTechnologies, selectedProjectTypes, selectedSkills, sortOption]);

  const handleTechnologyChange = (tech) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

   const handleProjectTypeChange = (type) => {
    setSelectedProjectTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

   const handleSkillChange = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Clear all filters function
  const clearAllFilters = () => {
    setSelectedTechnologies([]);
    setSelectedProjectTypes([]);
    setSelectedSkills([]);
    setSortOption('date-desc');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="text-lg font-semibold">Filter Projects</h3>
          {(selectedTechnologies.length > 0 || selectedProjectTypes.length > 0 || selectedSkills.length > 0) && (
            <button 
              onClick={clearAllFilters}
              className="text-primary hover:text-primary-dark text-sm mt-2 md:mt-0"
            >
              Clear all filters
            </button>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          {/* Filter Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h4 id="technologies-label" className="font-medium mb-2">Technologies:</h4>
                <div className="space-y-1 max-h-40 overflow-y-auto pr-2">
                  {allTechnologies.map(tech => (
                    <label key={tech} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTechnologies.includes(tech)}
                        onChange={() => handleTechnologyChange(tech)}
                        aria-labelledby="technologies-label"
                        className="mr-2 focus:ring-2 focus:ring-primary"
                      />
                      <span className="text-sm">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {allProjectTypes.length > 0 && (
                <div>
                  <h4 id="project-types-label" className="font-medium mb-2">Project Types:</h4>
                  <div className="space-y-1 max-h-40 overflow-y-auto pr-2">
                    {allProjectTypes.map(type => (
                      <label key={type} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedProjectTypes.includes(type)}
                          onChange={() => handleProjectTypeChange(type)}
                          aria-labelledby="project-types-label"
                          className="mr-2 focus:ring-2 focus:ring-primary"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              
              {allSkills.length > 0 && (
                <div>
                  <h4 id="skills-label" className="font-medium mb-2">Skills:</h4>
                  <div className="space-y-1 max-h-40 overflow-y-auto pr-2">
                    {allSkills.map(skill => (
                      <label key={skill} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedSkills.includes(skill)}
                          onChange={() => handleSkillChange(skill)}
                          aria-labelledby="skills-label"
                          className="mr-2 focus:ring-2 focus:ring-primary"
                        />
                        <span className="text-sm">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sort Section */}
          <div className="min-w-[200px]">
            <label htmlFor="sort-options" className="font-medium mb-2 block">Sort by:</label>
            <select 
              id="sort-options" 
              value={sortOption} 
              onChange={handleSortChange} 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="date-desc">Date (Newest First)</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard3D
              key={project.slug}
              title={project.data.title}
              description={project.data.description}
              image={project.data.image || "/images/project-placeholder.jpg"}
              tags={project.data.tags || project.data.technologies || []}
              demoUrl={project.data.demoUrl || "#"}
              codeUrl={project.data.codeUrl || "#"}
              featured={project.data.featured}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-lg text-gray-600 dark:text-gray-300">No projects match your filter criteria.</p>
            <button 
              onClick={clearAllFilters}
              className="mt-4 text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilterSort;