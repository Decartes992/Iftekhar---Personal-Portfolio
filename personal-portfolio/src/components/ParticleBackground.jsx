import React, { useEffect, useRef } from 'react';

/**
 * ParticleBackground - Creates a dynamic particle background with optional mouse interaction
 * 
 * @param {Object} props
 * @param {string} props.color - RGB color values (default: "59, 130, 246" - blue)
 * @param {number} props.particleDensity - Density of particles (default: 8) - higher = more particles
 * @param {number} props.opacity - Opacity of particles (default: 0.2)
 * @param {boolean} props.mouseInteract - Whether particles should interact with mouse (default: true)
 * @param {number} props.maxConnectDistance - Maximum distance for particle connections (default: 100)
 * @param {number} props.minSize - Minimum particle size (default: 1)
 * @param {number} props.maxSize - Maximum particle size (default: 3)
 * @param {number} props.minSpeed - Minimum particle speed (default: 0.3)
 * @param {number} props.maxSpeed - Maximum particle speed (default: 0.8)
 */
const ParticleBackground = ({
  color = "59, 130, 246",
  particleDensity = 8,
  opacity = 0.2,
  mouseInteract = true,
  maxConnectDistance = 100,
  minSize = 1,
  maxSize = 3,
  minSpeed = 0.3,
  maxSpeed = 0.8
}) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = {
      x: null,
      y: null,
      radius: mouseInteract ? 150 : 0
    };
    
    // Setup canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      
      // Reinitialize particles when canvas is resized
      init();
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Track mouse position if interaction is enabled
    if (mouseInteract) {
      window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      
      window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
      });
    }
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
        this.speedY = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
        this.color = `rgba(${color}, ${Math.random() * opacity + opacity / 2})`;
      }
      
      update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        
        // Mouse interaction
        if (mouseInteract && mouse.x != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            
            this.speedX -= force * Math.cos(angle) * 0.1;
            this.speedY -= force * Math.sin(angle) * 0.1;
          }
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles based on canvas size and density
    const init = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / (10000 / particleDensity));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    // Connect particles with lines if they are close enough
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxConnectDistance) {
            const opacity = (1 - distance / maxConnectDistance) * 0.5;
            
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (mouseInteract) {
        window.removeEventListener('mousemove', () => {});
        window.removeEventListener('mouseout', () => {});
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleDensity, opacity, mouseInteract, maxConnectDistance, minSize, maxSize, minSpeed, maxSpeed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground;