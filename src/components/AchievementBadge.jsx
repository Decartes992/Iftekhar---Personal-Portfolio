import React from 'react';

/**
 * AchievementBadge Component
 *
 * Displays a single achievement badge with an icon, title, and description.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.icon - SVG path or URL for the badge icon
 * @param {string} props.title - Title of the achievement
 * @param {string} props.description - Short description of the achievement
 * @param {string} [props.color="blue"] - Base color theme for the badge (e.g., 'blue', 'green', 'gold')
 */
const AchievementBadge = ({ icon, title, description, color = "blue" }) => {
  const colorVariants = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-700 dark:text-blue-300',
      iconBg: 'bg-blue-500 dark:bg-blue-700',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-700 dark:text-green-300',
      iconBg: 'bg-green-500 dark:bg-green-700',
    },
    gold: {
      bg: 'bg-yellow-100 dark:bg-yellow-900',
      text: 'text-yellow-700 dark:text-yellow-300',
      iconBg: 'bg-yellow-500 dark:bg-yellow-700',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-700 dark:text-purple-300',
      iconBg: 'bg-purple-500 dark:bg-purple-700',
    }
  };

  const selectedColor = colorVariants[color] || colorVariants.blue;

  return (
    <div className={`p-4 rounded-lg shadow-md flex items-center space-x-3 transition-all duration-300 hover:shadow-lg hover:scale-105 ${selectedColor.bg}`}>
      <div className={`p-2 rounded-full ${selectedColor.iconBg}`}>
        {/* Placeholder for icon - recommend using an SVG icon library or custom SVGs */}
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          {/* Example Icon Path (replace with actual icon logic) */}
          {icon === 'code' && <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>}
          {icon === 'award' && <path d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm6 4h-2v-1c0-1.103-.897-2-2-2s-2 .897-2 2v1H8c-1.103 0-2 .897-2 2v2h12v-2c0-1.103-.897-2-2-2z"></path>}
          {icon === 'trophy' && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>}
          {/* Add more icon conditions or pass SVG directly */}
          {!['code', 'award', 'trophy'].includes(icon) && <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>} {/* Default icon */}
        </svg>
      </div>
      <div>
        <h4 className={`font-semibold ${selectedColor.text}`}>{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default AchievementBadge;
