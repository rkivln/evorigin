import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'soft' | 'dark' | 'navy' | 'blue' | 'glow-yellow' | 'glow-cyan' | 'glow-coral' | 'rose' | 'subtle' | 'gold' | 'cyan' | 'orange';
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
      case 'elevated':
        return 'bg-white border border-brand-border text-brand-black shadow-card hover:shadow-card-hover';
      case 'soft':
        return 'bg-brand-soft border border-brand-border text-brand-black shadow-sm';
      case 'navy':
        return 'bg-gradient-to-br from-[#FF4D00] via-[#E03E00] to-[#992200] border border-white/10 text-white shadow-elevated';
      case 'dark':
        return 'bg-gradient-to-br from-[#FF4D00] via-[#D43800] to-[#8C2300] border border-white/10 text-white shadow-floating';
      case 'orange':
      case 'blue':
        return 'bg-gradient-to-br from-brand-orange to-brand-royal text-white border border-orange-400/20 shadow-glow-orange';
      case 'gold':
      case 'glow-yellow':
        return 'bg-white border border-brand-border text-brand-black shadow-card glow-blur-bottom-yellow';
      case 'cyan':
      case 'glow-cyan':
        return 'bg-white border border-brand-border text-brand-black shadow-card glow-blur-bottom-cyan';
      case 'glow-coral':
        return 'bg-white border border-brand-border text-brand-black shadow-card glow-blur-bottom-coral';
      case 'rose':
        return 'bg-white border border-red-200 text-brand-black shadow-card';
      case 'subtle':
        return 'bg-white/80 backdrop-blur-md border border-brand-border text-brand-black';
      default:
        return 'bg-white border border-brand-border text-brand-black shadow-card';
    }
  };

  const getHoverStyles = () => {
    if (!hoverable) return '';
    return 'hover:-translate-y-1 transition-all duration-300 ease-out';
  };

  return (
    <div
      onClick={onClick}
      className={`rounded-card p-5 sm:p-6 transition-all duration-300 relative ${getVariantStyles()} ${getHoverStyles()} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
