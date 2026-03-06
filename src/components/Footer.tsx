import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-matte-accent/10 bg-matte-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl tracking-tighter">CDC<span className="text-matte-accent">.</span></h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              A premier hospitality group based in Bangkok, dedicated to creating exceptional dining experiences across Thailand.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/30">Navigation</h4>
            <nav className="flex flex-col gap-4">
              <a href="#portfolio" className="text-sm text-white/60 transition-colors hover:text-white outline-none focus-visible:text-matte-accent focus-visible:ring-1 focus-visible:ring-matte-accent focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink rounded-sm w-fit">Portfolio</a>
              <a href="#philosophy" className="text-sm text-white/60 transition-colors hover:text-white outline-none focus-visible:text-matte-accent focus-visible:ring-1 focus-visible:ring-matte-accent focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink rounded-sm w-fit">Philosophy</a>
              <a href="#leadership" className="text-sm text-white/60 transition-colors hover:text-white outline-none focus-visible:text-matte-accent focus-visible:ring-1 focus-visible:ring-matte-accent focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink rounded-sm w-fit">Leadership</a>
              <a href="#contact" className="text-sm text-white/60 transition-colors hover:text-white outline-none focus-visible:text-matte-accent focus-visible:ring-1 focus-visible:ring-matte-accent focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink rounded-sm w-fit">Contact</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/30">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="rounded-full border border-white/10 p-3 transition-all hover:border-matte-secondary hover:bg-matte-secondary/10 hover:text-matte-secondary outline-none focus-visible:ring-2 focus-visible:ring-matte-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="rounded-full border border-white/10 p-3 transition-all hover:border-matte-secondary hover:bg-matte-secondary/10 hover:text-matte-secondary outline-none focus-visible:ring-2 focus-visible:ring-matte-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="rounded-full border border-white/10 p-3 transition-all hover:border-matte-secondary hover:bg-matte-secondary/10 hover:text-matte-secondary outline-none focus-visible:ring-2 focus-visible:ring-matte-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/30">Office</h4>
            <p className="text-sm leading-relaxed text-white/50">
              Sukhumvit Road, Watthana<br />
              Bangkok 10110, Thailand
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
          <p className="text-[10px] tracking-widest uppercase text-white/30">
            © {new Date().getFullYear()} CDC Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] tracking-widest uppercase text-white/30 hover:text-white outline-none focus-visible:text-white focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink rounded-sm">Privacy Policy</a>
            <a href="#" className="text-[10px] tracking-widest uppercase text-white/30 hover:text-white outline-none focus-visible:text-white focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-matte-ink rounded-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
