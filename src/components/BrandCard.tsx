import React from 'react';
import { motion } from 'motion/react';
import { Brand } from '../constants';
import { ExternalLink, Facebook, Instagram } from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
  index: number;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, index }) => {
  const isUpcoming = brand.status === 'upcoming';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.21, 1, 0.36, 1] 
      }}
      className={`group relative overflow-hidden rounded-2xl border border-matte-accent/10 bg-white/40 p-6 backdrop-blur-md transition-all duration-500 ${
        isUpcoming ? 'opacity-70 grayscale' : 'hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:-translate-y-2'
      }`}
    >
      <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-xl bg-matte-accent/5 p-12">
        {brand.thumbnail && (
          <img
            src={brand.thumbnail}
            alt={`${brand.name} logo`}
            className={`h-full w-full object-contain transition-transform duration-1000 group-hover:scale-110 ${brand.invertLogo ? 'invert' : ''}`}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        )}
        {!isUpcoming && brand.url && (
          <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 outline-none focus-visible:opacity-100 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-matte-accent rounded-xl"
            aria-label={`Visit ${brand.name} website`}
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-matte-secondary p-3 text-white shadow-lg"
            >
              <ExternalLink size={20} />
            </motion.div>
          </a>
        )}
        {isUpcoming && (
          <div className="absolute inset-0 flex items-end justify-center pb-6 bg-black/5">
            <span className="rounded-full bg-matte-accent/10 px-4 py-1.5 text-[10px] font-semibold tracking-widest uppercase text-matte-accent backdrop-blur-sm shadow-sm border border-matte-accent/20">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl tracking-tight text-matte-ink">{brand.name}</h3>
          <div className="flex gap-3">
            {brand.facebookUrl && (
              <a 
                href={brand.facebookUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-matte-ink/40 transition-colors hover:text-matte-secondary outline-none focus-visible:text-matte-secondary focus-visible:ring-2 focus-visible:ring-matte-accent focus-visible:ring-offset-2 rounded-md p-1"
                aria-label={`Visit ${brand.name} Facebook page`}
              >
                <Facebook size={18} />
              </a>
            )}
            {brand.instagramUrl && (
              <a 
                href={brand.instagramUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-matte-ink/40 transition-colors hover:text-matte-secondary outline-none focus-visible:text-matte-secondary focus-visible:ring-2 focus-visible:ring-matte-accent focus-visible:ring-offset-2 rounded-md p-1"
                aria-label={`Visit ${brand.name} Instagram profile`}
              >
                <Instagram size={18} />
              </a>
            )}
          </div>
        </div>
        <div className="space-y-2">
          {brand.tagline && (
            <p className="text-[10px] font-bold tracking-widest uppercase text-matte-accent">
              {brand.tagline}
            </p>
          )}
          <p className="text-sm leading-relaxed text-matte-ink/60">{brand.description}</p>
        </div>
      </div>
    </motion.div>
  );
};
