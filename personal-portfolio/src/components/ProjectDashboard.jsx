import React from 'react';

const ProjectDashboard = ({ project }) => {
  const techStack = project?.data?.techStack || [];
  const startDate = project?.data?.startDate;
  const endDate = project?.data?.endDate;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md" role="region" aria-label="Project Dashboard">
      <h2 className="text-2xl font-bold mb-4" id="project-dashboard-title">Project Dashboard</h2>
      <p className="text-lg mb-2">Project: {project?.data?.title}</p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Technology Stack:</h3>
        <ul className="list-disc list-inside">
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Project Duration:</h3>
        <p aria-label={`Project started on ${startDate} and ended on ${endDate}`}>
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default ProjectDashboard;