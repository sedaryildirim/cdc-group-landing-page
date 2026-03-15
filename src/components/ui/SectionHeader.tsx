import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  counter?: string;
  align?: 'left' | 'center';
}

/**
 * Reusable section heading used in Portfolio, Leadership, and About.
 * The decorative counter (e.g. "01") is aria-hidden so screen readers skip it.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  counter,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-20 flex flex-col gap-8 ${
        isCenter
          ? 'items-center text-center'
          : 'items-end justify-between md:flex-row'
      }`}
    >
      <div className="max-w-xl space-y-4">
        <h2 className="font-serif text-5xl tracking-tight text-matte-ink">
          {title}
          <span className="text-matte-accent" aria-hidden="true">
            .
          </span>
        </h2>
        {isCenter && (
          <div className="mx-auto h-1 w-20 bg-matte-accent/20" aria-hidden="true" />
        )}
        {subtitle && (
          <p className="text-lg text-matte-ink/70">{subtitle}</p>
        )}
      </div>
      {counter && !isCenter && (
        <div className="text-right" aria-hidden="true">
          <span className="text-5xl font-light tracking-tighter text-matte-accent/20 md:text-7xl">
            {counter}
          </span>
        </div>
      )}
    </div>
  );
};
