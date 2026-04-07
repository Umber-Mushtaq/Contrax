import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimationBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 100;
    const connectionDistance = 160;

    // Colors from your requested "Two Purples" palette
    const colors = ["#ffaa32", "#ffcc00", "#7a5af5"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      let p = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      particles.push(p);

      // GSAP Animation for each particle
      gsap.to(p, {
        x: `random(0, ${window.innerWidth})`,
        y: `random(0, ${window.innerHeight})`,
        duration: gsap.utils.random(20, 40),
        ease: "none",
        repeat: -1,
        repeatRefresh: true, // Key for React: picks a new random value on each repeat
      });
    }

    const render = () => {
      // Clear the canvas so the CSS gradient shows through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.4;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1.0;

      // Draw Nodes
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    // Add to GSAP Ticker
    gsap.ticker.add(render);

    // Cleanup function for React unmounting
    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(render);
      gsap.killTweensOf(particles);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", // Change from 'fixed' to 'absolute'
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background:
          "radial-gradient(circle at 70% 40%, #3a1c71 0%, #160a2c 40%, #05050a 100%)",
      }}
    />
  );
};

export default AnimationBackground;
