import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedStatsCounter - Animated stat counters with counting-up effect
 * 
 * @param {Object} props
 * @param {Array} props.stats - Array of stat objects with label, value, and optional icon properties
 * @param {string} props.bgColor - Background color for stat cards (default: "bg-white dark:bg-gray-800")
 * @param {string} props.textColor - Text color for the stat numbers (default: "text-primary")
 * @param {number} props.duration - Animation duration in ms (default: 2000)
 */
const AnimatedStatsCounter = ({
  stats = [],
  bgColor = "bg-white dark:bg-gray-800",
  textColor = "text-primary",
  duration = 2000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(stat => (stat.value && typeof stat.value === 'number' ? 0 : 0)));
  const counterRef = useRef(null);
  
  // Set up intersection observer to trigger animation when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;
    
    const stepDuration = 20; // Update every 20ms for smooth animation
    const steps = duration / stepDuration;
    
    // For each stat, calculate increment per step
    const incrementValues = stats.map(stat => (stat.value && typeof stat.value === 'number' ? stat.value : 0) / steps);
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep >= steps) {
        // Ensure final values are exact
        setCounters(stats.map(stat => (stat.value && typeof stat.value === 'number' ? stat.value : 0)));
        clearInterval(timer);
      } else {
        // Increment counters for each step
        setCounters(prevCounters => 
          prevCounters.map((count, index) => {
            const newValue = count + incrementValues[index];
            // Don't exceed the target value
            return Math.min(newValue, stats[index].value);
          })
        );
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [isVisible, stats, duration]);
  
  // Format numbers with commas
  const formatNumber = (num) => {
    return Math.round(num).toLocaleString();
  };
  
  // Render icon based on the icon object format
  const renderIcon = (icon) => {
    if (!icon) return null;
    
    return (
      <div className="mb-3 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
        </svg>
      </div>
    );
  };
  
  return (
    <div 
      ref={counterRef} 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => {
        // Skip rendering if stat doesn't have required properties
        if (!stat || typeof stat !== 'object') return null;
        
        return (
          <div
            key={index}
            className={`${bgColor} p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 duration-300`}
          >
            {/* Icon if provided */}
            {stat.icon && renderIcon(stat.icon)}
            
            {/* Counter value */}
            <div className={`text-4xl font-bold mb-2 ${textColor}`}>
              {formatNumber(counters[index])}
            </div>
            
            {/* Label */}
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              {stat.label || ''}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedStatsCounter;