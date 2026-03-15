import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'motion/react';

const SPRING_CONFIG = { damping: 40, stiffness: 120 };

/**
 * Tracks the mouse position and returns smoothed spring motion values.
 * Uses CSS transform (x/y) instead of left/top to avoid layout recalculation.
 */
export function useMouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, SPRING_CONFIG);
  const springY = useSpring(mouseY, SPRING_CONFIG);

  useEffect(() => {
    // Set initial position to viewport centre so glow starts centred
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 3);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return { springX, springY };
}
