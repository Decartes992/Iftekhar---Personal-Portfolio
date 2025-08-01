import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

/**
 * Gets a specific CSS variable value from the root element.
 * @param {string} variable - The name of the CSS variable (e.g., '--primary').
 * @returns {string} The computed value of the variable.
 */
const getCssVariable = (variable) => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

/**
 * Converts an HSL color string (e.g., "210 40% 96.1%") to an HSLA string.
 * @param {string} hslString - The HSL string from the CSS variable.
 * @param {number} alpha - The alpha transparency value (0 to 1).
 * @returns {string} The HSLA color string.
 */
const hslToHsla = (hslString, alpha) => {
  if (!hslString) return `hsla(0, 0%, 0%, ${alpha})`;
  return `hsla(${hslString}, ${alpha})`;
};

/**
 * SkillRadarChart - A theme-aware radar chart to visualize skills.
 * It automatically adapts to light/dark mode by using CSS variables for colors.
 *
 * @param {Object} props
 * @param {Array} props.skills - Array of skill objects with name and level properties.
 * @param {number} [props.height=400] - Height of the chart in pixels.
 * @param {number} [props.animationDuration=1500] - Duration of the animation in milliseconds.
 * @param {boolean} [props.showLegend=false] - Whether to show the legend.
 */
const SkillRadarChart = ({
  skills = [],
  height = 400,
  animationDuration = 1500,
  showLegend = false
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const drawChart = () => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (!chartRef.current || !skills.length) return;

    const ctx = chartRef.current.getContext('2d');

    // Get theme colors from CSS variables
    const primaryColorHsl = getCssVariable('--primary');
    const textColorHsl = getCssVariable('--text');
    const mutedColorHsl = getCssVariable('--text-muted');
    const gridColorHsl = getCssVariable('--border');

    const primaryColor = `hsl(${primaryColorHsl})`;
    const backgroundColor = hslToHsla(primaryColorHsl, 0.1);
    const textColor = `hsl(${textColorHsl})`;
    const mutedTextColor = `hsl(${mutedColorHsl})`;
    const gridColor = `hsl(${gridColorHsl})`;


    const labels = skills.map(skill => skill.name);
    const data = skills.map(skill => skill.level);

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
            angleLines: { color: gridColor },
            grid: { color: gridColor },
            pointLabels: {
              color: textColor,
              font: { size: 12, family: 'Inter, sans-serif' }
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 20,
              backdropColor: 'transparent',
              color: mutedTextColor
            }
          }
        },
        plugins: {
          legend: {
            display: showLegend,
            labels: { color: textColor }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: { size: 13 },
            bodyFont: { size: 12 },
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
  };

  useEffect(() => {
    // Initial draw
    drawChart();

    // Redraw chart when theme changes
    const themeToggle = document.getElementById('theme-toggle'); // Assuming your toggle has this ID
    if (themeToggle) {
        // Use a MutationObserver to detect class changes on <html>, which is more reliable
        const observer = new MutationObserver((mutationsList) => {
            for(let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    // Add a small delay to allow CSS variables to update
                    setTimeout(drawChart, 50);
                }
            }
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }
  }, [skills, animationDuration, showLegend, height]);

  return (
    <div style={{ height: `${height}px`, width: '100%' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default SkillRadarChart;
