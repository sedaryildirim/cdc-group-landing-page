import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Nav } from './components/Nav';
import { BrandCard } from './components/BrandCard';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { PrivacyModal } from './components/PrivacyModal';
import { BRANDS, OWNERS } from './constants';
import { useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  // Mouse tracking for background glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    // Initial center position
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 3);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  const heroGlowOpacity = useTransform(scrollY, [0, 2000], [1, 0.4]);
  const heroGlowScale = useTransform(scrollY, [0, 2000], [1, 1.8]);
  const heroGlowY = useTransform(scrollY, [0, 2000], [0, 400]);

  // Particle transforms
  const p1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const p2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const p3 = useTransform(scrollY, [0, 1000], [0, -150]);
  const p4 = useTransform(scrollY, [0, 1000], [0, -200]);
  const p5 = useTransform(scrollY, [0, 1000], [0, -250]);
  const p6 = useTransform(scrollY, [0, 1000], [0, -300]);
  const particleY = [p1, p2, p3, p4, p5, p6];

  return (
    <div className="min-h-screen bg-matte-bg font-sans text-matte-ink antialiased selection:bg-matte-secondary selection:text-white">
      <ScrollProgress />
      <Nav />

      {/* Persistent Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-matte-accent/10 blur-[120px]" 
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-matte-secondary/10 blur-[130px]" 
          />
          <motion.div 
            style={{ y: y3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-matte-accent/5 blur-[100px]" 
          />
          <motion.div 
            style={{ y: y4 }}
            className="absolute top-1/3 right-1/3 h-48 w-48 rounded-full bg-matte-secondary/5 blur-[80px]" 
          />
        </div>

        {/* Dynamic Hero Glow - Now follows mouse on desktop */}
        <motion.div
          style={{ 
            opacity: heroGlowOpacity,
            scale: heroGlowScale,
            left: mouseXSpring,
            top: mouseYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="fixed -z-10 h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(148,163,152,0.5)_0%,rgba(212,163,115,0.4)_40%,rgba(148,163,152,0.15)_70%,transparent_100%)] blur-[100px] pointer-events-none"
        />

        {/* Subtle Floating Particles - Now Persistent */}
        <motion.div 
          style={{ y: heroGlowY }}
          className="absolute inset-0 -z-10"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              style={{ 
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 15}%`,
                y: particleY[i % 6],
                opacity: heroGlowOpacity 
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute h-1.5 w-1.5 rounded-full bg-matte-accent/40 shadow-[0_0_10px_rgba(148,163,152,0.3)]"
            />
          ))}
        </motion.div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-20">
          <div className="relative z-10 mx-auto max-w-4xl text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-matte-accent/10 bg-matte-accent/5 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-matte-accent animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-matte-accent">Bangkok Hospitality Group</span>
              </div>
              
              <h1 className="font-serif text-6xl leading-[1.1] tracking-tight text-matte-ink md:text-8xl">
                Crafting the future of <span className="italic text-matte-accent">dining</span>.
              </h1>
              
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-matte-ink/60 md:text-xl">
                CDC Group is a boutique hospitality collective dedicated to elevated concepts, primal techniques, and exceptional service.
              </p>

              <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
                <a 
                  href="#portfolio" 
                  className="group flex items-center gap-3 rounded-full bg-matte-ink px-10 py-5 text-xs font-bold tracking-widest uppercase text-white transition-all hover:bg-matte-secondary hover:shadow-[0_20px_40px_rgba(212,163,115,0.2)] outline-none focus-visible:ring-2 focus-visible:ring-matte-accent focus-visible:ring-offset-2"
                >
                  View Portfolio
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="portfolio" className="py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-xl space-y-4">
                <h2 className="font-serif text-5xl tracking-tight text-matte-ink">The Portfolio<span className="text-matte-accent">.</span></h2>
                <p className="text-lg text-matte-ink/60">
                  From smokehouse burgers to beachfront dining, our brands are defined by quality, atmosphere, and a commitment to the craft.
                </p>
              </div>
              <div className="text-right">
                <span className="text-5xl font-light tracking-tighter text-matte-accent/20 md:text-7xl">01</span>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BRANDS.map((brand, index) => (
                <BrandCard key={brand.name} brand={brand} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-xl space-y-4">
                <h2 className="font-serif text-5xl tracking-tight text-matte-ink">Leadership<span className="text-matte-accent">.</span></h2>
                <p className="text-lg text-matte-ink/60">
                  Driven by a diverse team of experts with a shared passion for exceptional hospitality and strategic growth.
                </p>
              </div>
              <div className="text-right">
                <span className="text-5xl font-light tracking-tighter text-matte-accent/20 md:text-7xl">02</span>
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {OWNERS.map((owner, index) => (
                <motion.div 
                  key={owner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-6"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-matte-ink/5">
                    <img 
                      src={owner.image || `https://picsum.photos/seed/owner-${owner.name}/600/800`} 
                      alt={owner.name} 
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/owner-${owner.name}/600/800`;
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl text-matte-ink">{owner.name}</h4>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-matte-accent">{owner.role}</p>
                    <p className="text-sm leading-relaxed text-matte-ink/60">{owner.background}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default App;
