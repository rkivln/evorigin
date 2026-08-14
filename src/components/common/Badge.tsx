import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'emerald' | 'rose' | 'slate' | 'warning' | 'success' | 'critical' | 'info' | 'gold' | 'orange';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'sm',
  className = '',
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'blue':
      case 'orange':
      case 'info':
        return 'bg-orange-50 text-brand-orange border border-orange-200/60';
      case 'emerald':
      case 'success':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200/60';
      case 'gold':
      case 'warning':
        return 'bg-amber-50 text-amber-800 border border-amber-200/60';
      case 'rose':
      case 'critical':
        return 'bg-rose-50 text-rose-700 border border-rose-200/60';
      case 'cyan':
        return 'bg-orange-50 text-brand-orange border border-orange-200/60';
      case 'slate':
      default:
        return 'bg-brand-soft text-brand-muted border border-brand-border';
    }
  };

  const getIndicatorColor = () => {
    switch (variant) {
      case 'blue':
      case 'orange':
      case 'info': return 'bg-brand-orange';
      case 'emerald':
      case 'success': return 'bg-emerald-500';
      case 'gold':
      case 'warning': return 'bg-amber-500';
      case 'rose':
      case 'critical': return 'bg-rose-500';
      case 'cyan': return 'bg-brand-orange';
      case 'slate':
      default: return 'bg-brand-muted';
    }
  };

  const sizeStyles = size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-[12px]';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans font-semibold tracking-wide rounded-pill ${getStyles()} ${sizeStyles} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getIndicatorColor()}`}></span>
      {children}
    </span>
  );
};
