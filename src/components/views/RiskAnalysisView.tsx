import React from 'react';
import { useDemo } from '../../context/useDemo';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { RISK_ITEMS } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

export const RiskAnalysisView: React.FC = () => {
  const { setActivePage } = useDemo();

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="07"
        tag="RISK MATRIX"
        title="What are we at risk of losing?"
        subtitle="Legacy Risk Analysis identifies critical tacit skills dependent on single experts or retiring staff before permanent knowledge decay occurs."
      />

      {/* Risk Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <GlassCard variant="rose" className="space-y-1">
          <span className="text-[10px] font-sans uppercase text-status-critical-text font-medium">Critical Risk Level</span>
          <div className="text-2xl font-medium font-sans text-primary">1 Skill</div>
          <p className="text-[10px] text-primary-muted">1 Knowledge Holder Remaining</p>
        </GlassCard>

        <GlassCard variant="gold" className="space-y-1">
          <span className="text-[10px] font-sans uppercase text-primary font-medium">High Risk Level</span>
          <div className="text-2xl font-medium font-sans text-primary">2 Skills</div>
          <p className="text-[10px] text-primary-muted">2 Experts Retiring &lt; 90 days</p>
        </GlassCard>

        <GlassCard variant="cyan" className="space-y-1">
          <span className="text-[10px] font-sans uppercase text-status-info-text font-medium">Medium Risk Level</span>
          <div className="text-2xl font-medium font-sans text-primary">4 Skills</div>
          <p className="text-[10px] text-primary-muted">Unwritten Manual Procedures</p>
        </GlassCard>

        <GlassCard variant="default" className="space-y-1">
          <span className="text-[10px] font-sans uppercase text-status-success-text font-medium">Preserved Risk Level</span>
          <div className="text-2xl font-medium font-sans text-primary">86 Skills</div>
          <p className="text-[10px] text-primary-muted">Graph Indexed &amp; Multi-Holder</p>
        </GlassCard>
      </div>

      {/* Ranked Risk Items List */}
      <div className="space-y-4">
        <h3 className="text-base font-medium font-sans text-primary">Ranked Organizational Knowledge Loss Risks</h3>

        <div className="space-y-4">
          {RISK_ITEMS.map((item, idx) => (
            <GlassCard
              key={item.id}
              variant={item.riskLevel === 'Critical' ? 'rose' : item.riskLevel === 'High' ? 'gold' : 'default'}
              className="space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-medium font-sans text-primary">0{idx + 1}</span>
                  <div>
                    <h4 className="text-base font-medium text-primary font-sans">{item.title}</h4>
                    <p className="text-xs text-primary-muted font-sans">{item.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={item.riskLevel === 'Critical' ? 'rose' : item.riskLevel === 'High' ? 'gold' : 'cyan'}>
                    {item.riskLevel} Risk
                  </Badge>
                  <span className="font-sans text-lg font-medium text-primary bg-surface px-3 py-1 rounded-control border border-surface-border shadow-sm">
                    {item.riskScore} / 100
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                <div className="p-3.5 rounded-control bg-surface/80 border border-surface-border space-y-1">
                  <span className="text-primary-muted text-[10px] block uppercase font-medium">Vulnerability Reason</span>
                  <p className="text-status-critical-text font-medium">{item.reason}</p>
                </div>

                <div className="p-3.5 rounded-control bg-surface/80 border border-surface-border space-y-1">
                  <span className="text-primary-muted text-[10px] block uppercase font-medium">Projected Loss Impact</span>
                  <p className="text-primary">{item.lossImpact}</p>
                </div>

                <div className="p-3.5 rounded-control bg-surface/80 border border-surface-border space-y-1">
                  <span className="text-primary-muted text-[10px] block uppercase font-medium">Active Experts</span>
                  <p className="text-primary font-medium">{item.expertNames.join(', ')}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-control bg-accent/10 border border-accent/30 text-primary text-xs font-sans flex items-center justify-between">
                <span>Action: {item.preservationAction}</span>
                <button
                  onClick={() => setActivePage('capture')}
                  className="px-3.5 py-1.5 rounded-control bg-surface-soft hover:bg-surface-subtle text-primary font-medium text-xs flex items-center gap-1 shadow-sm transition-all"
                >
                  <span>Preserve Now</span>
                  <ArrowRight size={12} className="text-accent" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

