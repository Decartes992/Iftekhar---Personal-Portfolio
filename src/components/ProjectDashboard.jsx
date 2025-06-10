import React from 'react';

const ProjectDashboard = ({ project }) => {
  const techStack = project?.data?.techStack || [];
  const startDate = project?.data?.startDate;
  const endDate = project?.data?.endDate;

  return (
  	<div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" role="region" aria-label="Project Dashboard">
  		<img src={project?.data?.image} alt={project?.data?.title} className="w-full h-48 object-cover mb-4 rounded-md" />
  		<h2 className="text-2xl font-bold mb-2" id="project-dashboard-title">{project?.data?.title}</h2>
  		<p className="text-lg mb-4">{project?.data?.description}</p>
  		<div className="mb-4">
  			<h3 className="text-xl font-semibold mb-2">Technology Stack:</h3>
  			<ul className="flex flex-wrap gap-2">
  				{techStack.map((tech, index) => (
  					<li key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">{tech}</li>
  				))}
  			</ul>
  		</div>
  		<div>
  			<h3 className="text-xl font-semibold mb-2">Project Duration:</h3>
  			<p aria-label={`Project started on ${startDate} and ended on ${endDate}`} className="text-gray-600">
  				{startDate} - {endDate}
  			</p>
  		</div>
  	</div>
  );
};

export default ProjectDashboard;