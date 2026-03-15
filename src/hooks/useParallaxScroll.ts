import { useScroll, useTransform } from 'motion/react';

/**
 * Encapsulates all parallax + scroll-driven animation transforms used in the app.
 * Returns motion values ready to pass as `style` props.
 */
export function useParallaxScroll() {
  const { scrollY, scrollYProgress } = useScroll();

  // Background blob parallax
  const blobY1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const blobY2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const blobY3 = useTransform(scrollY, [0, 1000], [0, 150]);
  const blobY4 = useTransform(scrollY, [0, 1000], [0, -100]);

  // Hero glow fades and scales as user scrolls
  const heroGlowOpacity = useTransform(scrollY, [0, 2000], [1, 0.4]);
  const heroGlowScale  = useTransform(scrollY, [0, 2000], [1, 1.8]);
  const heroGlowY      = useTransform(scrollY, [0, 2000], [0, 400]);

  // Particles — staggered vertical travel
  const particleY = [
    useTransform(scrollY, [0, 1000], [0, -50]),
    useTransform(scrollY, [0, 1000], [0, -100]),
    useTransform(scrollY, [0, 1000], [0, -150]),
    useTransform(scrollY, [0, 1000], [0, -200]),
    useTransform(scrollY, [0, 1000], [0, -250]),
    useTransform(scrollY, [0, 1000], [0, -300]),
  ];

  return {
    blobY1, blobY2, blobY3, blobY4,
    heroGlowOpacity, heroGlowScale, heroGlowY,
    particleY,
    scrollYProgress,
  };
}
