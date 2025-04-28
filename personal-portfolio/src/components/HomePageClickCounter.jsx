import React, { useState } from 'react';

const HomePageClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm">
      <p className="text-lg font-semibold mb-2">Clicks: {count}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Click Me!
      </button>
    </div>
  );
};

export default HomePageClickCounter;