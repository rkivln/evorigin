import React from 'react';

interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  action,
  centered,
}) => {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'sm:flex-row sm:items-end justify-between'} gap-4 mb-6`}>
      <div>
        <div className={`flex items-center ${centered ? 'justify-center' : ''} gap-2 mb-1.5`}>
          {number && (
            <span className="font-mono text-xs text-accent font-medium tracking-wider">
              {number}
            </span>
          )}
          {tag && (
            <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-accent bg-accent/20 px-2.5 py-0.5 rounded-control border border-accent/30">
              {tag}
            </span>
          )}
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium font-sans text-primary tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-primary-muted max-w-2xl mt-1 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
