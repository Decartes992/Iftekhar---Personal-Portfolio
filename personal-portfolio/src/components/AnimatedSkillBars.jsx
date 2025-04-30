import { useEffect, useState, useRef } from 'react';

/**
 * AnimatedSkillBars - A visually impressive component to display skills with animated progress bars
 * 
 * @param {Object} props Component props
 * @param {Array} props.skills Array of skill objects with name, level (0-100), and category properties
 * @param {boolean} props.showCategories Whether to show category filters
 */
const AnimatedSkillBars = ({ skills, showCategories = true }) => {
  const [visibleSkills, setVisibleSkills] = useState(skills);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  // Extract unique categories from skills
  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];

  // Filter skills by category
  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setVisibleSkills(skills);
    } else {
      setVisibleSkills(skills.filter(skill => skill.category === category));
    }
  };

  // Intersection Observer to trigger animation when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Once triggered, no need to observe anymore
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
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

  return (
    <div ref={containerRef} className="skills-container space-y-8">
      {/* Category filters */}
      {showCategories && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterByCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-bg-alt dark:bg-bg-alt-dark hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Skills grid with animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleSkills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="skill-item" 
            style={{ animationDelay: `${isInView ? index * 0.1 : 0}s` }}
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm font-semibold">{skill.level}%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: isInView ? `${skill.level}%` : '0%',
                  transition: 'width 1.5s ease-in-out'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSkillBars;