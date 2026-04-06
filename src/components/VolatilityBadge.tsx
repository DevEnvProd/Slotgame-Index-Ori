import { VolatilityLevel } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface VolatilityBadgeProps {
  level: VolatilityLevel;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function VolatilityBadge({ level, className, size = 'md' }: VolatilityBadgeProps) {
  const colors = {
    Low: 'bg-green-100 text-green-700 border-green-200',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    High: 'bg-orange-100 text-orange-700 border-orange-200',
    Extreme: 'bg-red-100 text-red-700 border-red-200',
  };

  const sizes = {
    sm: 'text-[9px] px-1.5 py-0.5',
    md: 'text-[10px] px-2.5 py-1',
    lg: 'text-xs px-4 py-1.5',
  };

  return (
    <span
      className={cn(
        'volatility-badge border inline-flex items-center justify-center font-display font-extrabold uppercase tracking-wider rounded-full shadow-sm',
        colors[level],
        sizes[size],
        className
      )}
    >
      {level} Volatility
    </span>
  );
}
