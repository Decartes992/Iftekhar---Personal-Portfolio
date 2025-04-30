import { useState, useEffect, useRef } from 'react';

/**
 * AnimatedStatsCounter - A visually impressive component to display animated statistics
 * 
 * @param {Object} props Component props
 * @param {Array} props.stats Array of statistic objects with label, value, suffix, icon properties
 */
const AnimatedStatsCounter = ({ stats }) => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const containerRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const durations = stats.map(stat => 
      // Scale duration based on value for a more natural feel
      Math.min(Math.max(1000, stat.value * 10), 2500)
    );
    
    const startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      const newCounters = stats.map((stat, index) => {
        const progress = Math.min(elapsedTime / durations[index], 1);
        // Easing function for natural counting feel
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        return Math.floor(easeOutQuart * stat.value);
      });
      
      setCounters(newCounters);
      
      const allComplete = newCounters.every((counter, index) => 
        counter >= stats[index].value
      );
      
      if (!allComplete) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final values match exactly
        setCounters(stats.map(stat => stat.value));
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div 
      ref={containerRef} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <div 
          key={stat.label} 
          className="bg-white dark:bg-bg-dark rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center card-hover"
        >
          {stat.icon && (
            <div className="flex justify-center mb-3">
              <div className="text-primary dark:text-primary bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                {stat.icon}
              </div>
            </div>
          )}
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {counters[index].toLocaleString()}{stat.suffix || ''}
          </div>
          <div className="text-gray-600 dark:text-gray-300 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedStatsCounter;