import React, { useState, useEffect } from 'react';

const ProjectFilterSort = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortOption, setSortOption] = useState('date-desc'); // 'date-desc', 'alphabetical'

  // Extract unique filter options from projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.data.technologies || []))];
  const allProjectTypes = [...new Set(projects.flatMap(project => project.data.project_type || []))];
  const allSkills = [...new Set(projects.flatMap(project => project.data.skills || []))];

  useEffect(() => {
    let projectsToFilter = [...projects];

    // Filtering logic
    if (selectedTechnologies.length > 0) {
      projectsToFilter = projectsToFilter.filter(project =>
        selectedTechnologies.every(tech => project.data.technologies?.includes(tech))
      );
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


    // Sorting logic
    projectsToFilter.sort((a, b) => {
      if (sortOption === 'alphabetical') {
        return a.data.title.localeCompare(b.data.title);
      } else { // 'date-desc'
        return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
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

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Filter Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Filter by:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <h4 className="font-medium">Technologies:</h4>
              {allTechnologies.map(tech => (
                <label key={tech} className="block">
                  <input
                    type="checkbox"
                    checked={selectedTechnologies.includes(tech)}
                    onChange={() => handleTechnologyChange(tech)}
                    className="mr-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {tech}
                </label>
              ))}
            </div>
             <div>
              <h4 className="font-medium">Project Types:</h4>
              {allProjectTypes.map(type => (
                <label key={type} className="block">
                  <input
                    type="checkbox"
                    checked={selectedProjectTypes.includes(type)}
                    onChange={() => handleProjectTypeChange(type)}
                    className="mr-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {type}
                </label>
              ))}
            </div>
             <div>
              <h4 className="font-medium">Skills:</h4>
              {allSkills.map(skill => (
                <label key={skill} className="block">
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="mr-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Sort Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sort by:</h3>
          <select value={sortOption} onChange={handleSortChange} className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <option value="date-desc">Date (Newest First)</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <article key={project.slug} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">{project.data.title}</h2>
            <p className="text-gray-600 mb-4">{project.data.description}</p>
            <p className="text-sm text-gray-600">Technologies: {project.data.technologies?.join(', ')}</p>
             <p className="text-sm text-gray-600">Project Type: {project.data.project_type?.join(', ')}</p>
              <p className="text-sm text-gray-600">Skills: {project.data.skills?.join(', ')}</p>
            {/* Add more project details as needed */}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilterSort;