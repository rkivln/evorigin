import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'cyan' | 'emerald' | 'rose' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'sm',
  className = '',
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-accent/20 text-accent-soft border border-accent/30';
      case 'cyan':
        return 'bg-status-info/40 text-status-info-text border border-status-info-text/30';
      case 'emerald':
        return 'bg-status-success/40 text-status-success-text border border-status-success-text/30';
      case 'rose':
        return 'bg-status-critical/40 text-status-critical-text border border-status-critical-text/30';
      default:
        return 'bg-[rgba(255,255,255,0.05)] text-primary-muted border border-[rgba(255,255,255,0.09)]';
    }
  };

  const sizeStyles = size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1 font-sans font-medium rounded-full ${getStyles()} ${sizeStyles} ${className}`}
    >
      {children}
    </span>
  );
};
