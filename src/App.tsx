import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Target, ArrowRight } from 'lucide-react';
import { Nav } from './components/Nav';
import { BrandCard } from './components/BrandCard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BRANDS, OWNERS } from './constants';
import { useScroll, useTransform } from 'motion/react';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="min-h-screen bg-matte-bg font-sans text-matte-ink antialiased selection:bg-matte-accent selection:text-white">
      <ScrollProgress />
      <Nav />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 z-0">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-matte-accent/10 blur-[120px]" 
            />
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-matte-secondary/10 blur-[120px]" 
            />
          </div>

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
                  className="group flex items-center gap-3 rounded-full bg-matte-ink px-10 py-5 text-xs font-bold tracking-widest uppercase text-white transition-all hover:bg-matte-secondary hover:shadow-[0_20px_40px_rgba(212,163,115,0.2)]"
                >
                  View Portfolio
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="#philosophy" 
                  className="text-xs font-bold tracking-widest uppercase text-matte-ink/40 transition-colors hover:text-matte-ink"
                >
                  Our Philosophy
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

        {/* Philosophy Section */}
        <section id="philosophy" className="relative overflow-hidden bg-white py-32">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-matte-accent/5 blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-24 lg:grid-cols-2">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="font-serif text-5xl tracking-tight text-matte-ink">Our Philosophy<span className="text-matte-accent">.</span></h2>
                  <p className="text-xl leading-relaxed text-matte-ink/70">
                    We believe hospitality is an art form. It's the intersection of primal techniques, modern aesthetics, and genuine human connection.
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-4 rounded-2xl bg-matte-bg p-8">
                    <Target className="text-matte-accent" size={24} />
                    <h4 className="font-serif text-xl text-matte-ink">Vision</h4>
                    <p className="text-sm text-matte-ink/60">To set new benchmarks for hospitality in Southeast Asia through innovation and excellence.</p>
                  </div>
                  <div className="space-y-4 rounded-2xl bg-matte-bg p-8">
                    <Users className="text-matte-accent" size={24} />
                    <h4 className="font-serif text-xl text-matte-ink">Community</h4>
                    <p className="text-sm text-matte-ink/60">Building lasting relationships with our guests, staff, and local partners in every location.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-16">
                <div className="flex items-start gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-matte-accent/10 text-matte-accent">
                    <MapPin size={32} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-matte-ink/30">Locations</h4>
                    <p className="font-serif text-4xl text-matte-ink">BKK, SAMUI, PHANGAN</p>
                    <p className="text-sm text-matte-ink/40 italic">Expanding across Thailand's most vibrant destinations.</p>
                  </div>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-3xl bg-matte-bg">
                  <img 
                    src="https://picsum.photos/seed/philosophy/1200/800" 
                    alt="Hospitality atmosphere" 
                    className="h-full w-full object-cover opacity-80"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
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
                      src={`https://picsum.photos/seed/owner-${index}/600/800`} 
                      alt={owner.name} 
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      loading="lazy"
                      referrerPolicy="no-referrer"
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

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
