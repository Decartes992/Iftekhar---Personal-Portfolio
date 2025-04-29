import React from 'react';

const ProjectSpecificViz = ({ vizData }) => {
  return (
    <div className="project-specific-viz">
      <h3 id="viz-title">Project Specific Visualization Details</h3>
      {vizData && vizData.length > 0 ? (
        <ul aria-labelledby="viz-title">
          {vizData.map((item, index) => (
            <li key={index}>{item.label}: {item.value}</li>
          ))}
        </ul>
      ) : (
        <p>No visualization data available.</p>
      )}
    </div>
  );
};

export default ProjectSpecificViz;