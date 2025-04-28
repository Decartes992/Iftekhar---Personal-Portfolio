import React from 'react';

const ProjectSpecificViz = ({ vizData }) => {
  return (
    <div className="project-specific-viz">
      <h3>Project Specific Visualization</h3>
      {vizData && vizData.length > 0 ? (
        <ul>
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