import React from 'react';

const ProjectDashboard = ({ project }) => {
  // TODO: Implement display of summary data (Technology Stack Breakdown, Project Duration/Timeline)
  // Data should be sourced from project frontmatter.

  // TODO: Use Tailwind CSS for styling.

  return (
    <div className="project-dashboard">
      <h2>Project Dashboard</h2>
      <p>Project: {project?.data?.title}</p>
      {/* TODO: Add more dashboard elements here */}
    </div>
  );
};

export default ProjectDashboard;