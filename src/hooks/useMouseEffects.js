import { useEffect } from 'react';

export function useMouseEffects() {
  useEffect(() => {
    // 1. Mouse Glow
    const handleGlowMove = (e) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
    };

    const glowElements = document.querySelectorAll('.mouse-glow');
    glowElements.forEach((el) => {
      el.addEventListener('mousemove', handleGlowMove);
    });

    // 2. 3D Tilt
    const handleTiltMove = (e) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
      const tiltY = ((x - centerX) / centerX) * 10;
      
      target.style.setProperty('--tilt-x', `${tiltX}deg`);
      target.style.setProperty('--tilt-y', `${tiltY}deg`);
    };

    const handleTiltLeave = (e) => {
      const target = e.currentTarget;
      target.style.setProperty('--tilt-x', `0deg`);
      target.style.setProperty('--tilt-y', `0deg`);
    };

    const tiltElements = document.querySelectorAll('.mouse-tilt');
    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', handleTiltMove);
      el.addEventListener('mouseleave', handleTiltLeave);
    });

    return () => {
      glowElements.forEach((el) => el.removeEventListener('mousemove', handleGlowMove));
      tiltElements.forEach((el) => {
        el.removeEventListener('mousemove', handleTiltMove);
        el.removeEventListener('mouseleave', handleTiltLeave);
      });
    };
  }, []);
}
