import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Leadership', href: '#leadership' },
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'bg-white/80 py-4 shadow-sm backdrop-blur-md' : 'bg-transparent py-8'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a 
          href="#" 
          className="font-serif text-2xl tracking-tighter text-matte-ink outline-none focus-visible:ring-2 focus-visible:ring-matte-accent focus-visible:ring-offset-2 rounded-lg"
          aria-label="CDC Group Home"
        >
          CDC<span className="text-matte-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold tracking-widest uppercase transition-all outline-none focus-visible:ring-2 focus-visible:ring-matte-accent focus-visible:ring-offset-2 rounded-full ${
                link.name === 'Inquiry' 
                  ? 'rounded-full bg-matte-secondary/10 px-6 py-2.5 text-matte-secondary hover:bg-matte-secondary hover:text-white' 
                  : 'text-matte-ink/60 hover:text-matte-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="text-matte-ink md:hidden outline-none focus-visible:ring-2 focus-visible:ring-matte-accent focus-visible:ring-offset-2 rounded-lg p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-matte-ink"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
