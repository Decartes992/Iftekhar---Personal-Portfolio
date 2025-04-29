// Example using Intersection Observer for scroll animation
const skillsList = document.querySelector('.about-section .skills-list');
if (skillsList) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate list items
        entry.target.querySelectorAll('li').forEach((li, index) => {
          li.style.animation = `popIn 0.5s ${index * 0.1}s ease-out forwards`;
        });
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% visible
  observer.observe(skillsList);
}