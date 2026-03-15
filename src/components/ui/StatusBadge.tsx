import React from 'react';

interface StatusBadgeProps {
  label: string;
  variant?: 'accent' | 'secondary';
}

/**
 * Small pill badge — used for "Coming Soon", "Bangkok Hospitality Group", etc.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = 'accent',
}) => {
  const colours =
    variant === 'accent'
      ? 'border-matte-accent/10 bg-matte-accent/5 text-matte-accent'
      : 'border-matte-secondary/20 bg-matte-secondary/10 text-matte-secondary';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm shadow-sm ${colours}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
      {label}
    </span>
  );
};
