import React from 'react';

/**
 * PersonalityIndicator Component
 *
 * Visually represents a personality trait or skill proficiency using a customizable bar or radial indicator.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.trait - Name of the personality trait or skill (e.g., "Creativity", "Problem Solving")
 * @param {number} props.level - Proficiency level (0-100)
 * @param {string} [props.type="bar"] - Type of indicator: "bar" or "radial"
 * @param {string} [props.color="#4F46E5"] - Color for the indicator
 * @param {string} [props.size="medium"] - Size of the indicator: "small", "medium", "large"
 */
const PersonalityIndicator = ({ trait, level, type = "bar", color = "#4F46E5", size = "medium" }) => {
  const safeLevel = Math.max(0, Math.min(100, level)); // Ensure level is between 0 and 100

  const sizeClasses = {
    bar: {
      small: "h-2",
      medium: "h-3",
      large: "h-4",
    },
    radial: {
      small: { svg: "w-16 h-16", stroke: 2, radius: 6, textSize: "text-xs" },
      medium: { svg: "w-20 h-20", stroke: 3, radius: 8, textSize: "text-sm" },
      large: { svg: "w-24 h-24", stroke: 4, radius: 10, textSize: "text-base" },
    },
  };

  if (type === "bar") {
    return (
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{trait}</span>
          <span className={`text-sm font-medium`} style={{ color }}>{safeLevel}%</span>
        </div>
        <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full ${sizeClasses.bar[size]}`}>
          <div 
            className={`rounded-full ${sizeClasses.bar[size]}`}
            style={{ width: `${safeLevel}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    );
  }

  if (type === "radial") {
    const { svg, stroke, radius, textSize } = sizeClasses.radial[size];
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (safeLevel / 100) * circumference;

    return (
      <div className="flex flex-col items-center m-2">
        <svg className={svg} viewBox={`0 0 ${radius * 2 + stroke * 2} ${radius * 2 + stroke * 2}`}>
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth={stroke}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={radius + stroke}
            cy={radius + stroke}
          />
          <circle
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            style={{ color }}
            fill="transparent"
            r={radius}
            cx={radius + stroke}
            cy={radius + stroke}
            transform={`rotate(-90 ${radius + stroke} ${radius + stroke})`}
            className="transition-all duration-1000 ease-out"
          />
          <text 
            x="50%" 
            y="50%" 
            dy=".3em" 
            textAnchor="middle" 
            className={`${textSize} font-semibold`}
            style={{ fill: color }}
          >
            {`${safeLevel}%`}
          </text>
        </svg>
        <span className={`mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 ${textSize}`}>{trait}</span>
      </div>
    );
  }

  return null;
};

export default PersonalityIndicator;
