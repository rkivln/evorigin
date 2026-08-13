import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'cyan' | 'rose' | 'dark' | 'subtle';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  hoverable = true,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-surface-subtle border border-accent/30 text-primary shadow-floating';
      case 'cyan':
        return 'bg-surface-subtle border border-status-info-text/30 text-primary shadow-card';
      case 'rose':
        return 'bg-surface-subtle border border-status-critical-text/30 text-primary shadow-card';
      case 'dark':
        return 'bg-surface border border-surface-border text-primary shadow-card';
      case 'subtle':
        return 'bg-surface border border-surface-border text-primary shadow-sm';
      default:
        return 'bg-surface-soft border border-surface-border text-primary shadow-card';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`rounded-[16px] p-6 transition-all duration-200 ${getVariantStyles()} ${
        hoverable ? 'hover:border-surface-border hover:shadow-floating' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
