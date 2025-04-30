import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

/**
 * SkillRadarChart - Creates a radar chart to visualize skills
 * 
 * @param {Object} props
 * @param {Array} props.skills - Array of skill objects with name and level properties
 * @param {string} props.primaryColor - Primary color for the chart (default: "rgb(59, 130, 246)")
 * @param {string} props.backgroundColor - Background color for the chart area (default: "rgba(59, 130, 246, 0.1)")
 * @param {number} props.height - Height of the chart in pixels (default: 400)
 * @param {number} props.animationDuration - Duration of the animation in milliseconds (default: 1500)
 * @param {boolean} props.showLegend - Whether to show the legend (default: false)
 */
const SkillRadarChart = ({
  skills = [],
  primaryColor = "rgb(59, 130, 246)",
  backgroundColor = "rgba(59, 130, 246, 0.1)",
  height = 400,
  animationDuration = 1500,
  showLegend = false
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  useEffect(() => {
    // Clean up any existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Make sure we have a canvas element and skills
    if (!chartRef.current || !skills.length) return;
    
    const ctx = chartRef.current.getContext('2d');
    
    // Extract skill data for chart
    const labels = skills.map(skill => skill.name);
    const data = skills.map(skill => skill.level);
    
    // Create chart
    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: 'Skill Level',
          data,
          backgroundColor: backgroundColor,
          borderColor: primaryColor,
          borderWidth: 2,
          pointBackgroundColor: primaryColor,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: primaryColor,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              color: 'rgba(100, 100, 100, 0.1)'
            },
            grid: {
              color: 'rgba(100, 100, 100, 0.1)'
            },
            pointLabels: {
              color: 'var(--color-text, rgb(100, 100, 100))',
              font: {
                size: 12,
                family: 'Poppins, sans-serif'
              }
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 20,
              backdropColor: 'transparent',
              color: 'var(--color-text, rgb(100, 100, 100))'
            }
          }
        },
        plugins: {
          legend: {
            display: showLegend,
            position: 'bottom',
            labels: {
              color: 'var(--color-text, rgb(100, 100, 100))',
              font: {
                size: 12,
                family: 'Poppins, sans-serif'
              },
              boxWidth: 12,
              padding: 15
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: {
              size: 13
            },
            bodyFont: {
              size: 12
            },
            padding: 10,
            displayColors: false
          }
        },
        animation: {
          duration: animationDuration,
          easing: 'easeOutQuart'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
    
    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [skills, primaryColor, backgroundColor, animationDuration, showLegend]);
  
  // Handle system theme change for dark mode support
  useEffect(() => {
    const handleThemeChange = () => {
      if (chartInstance.current) {
        // Get the updated colors based on current theme
        const isDarkMode = document.documentElement.classList.contains('dark');
        const textColor = isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)';
        
        // Update chart colors
        chartInstance.current.options.scales.r.pointLabels.color = textColor;
        chartInstance.current.options.scales.r.ticks.color = textColor;
        chartInstance.current.options.plugins.legend.labels.color = textColor;
        
        // Update the chart
        chartInstance.current.update();
      }
    };
    
    // Initialize with correct colors
    handleThemeChange();
    
    // Listen for theme changes if using a theme toggle
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);
  
  return (
    <div style={{ height: `${height}px`, width: '100%' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default SkillRadarChart;