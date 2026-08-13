import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { Clock, AlertTriangle } from 'lucide-react';

export const OrganizationView: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="12"
        tag="ENTERPRISE HR"
        title="Succession Intelligence"
        subtitle="Prepare the next generation before expert retirement through automated gap analysis and readiness scoring."
      />

      {/* Succession Transfer Card */}
      <GlassCard variant="gold" className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-accent/30/60 pb-4">
          <Badge variant="gold">BHPE Manufacturing Division</Badge>
          <span className="text-xs font-sans text-primary font-medium flex items-center gap-1.5">
            <Clock size={14} className="text-status-critical-text" />
            Target Retirement: 45 Days
          </span>
        </div>

        {/* Expert -> Successor Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2 shadow-sm">
            <span className="text-[10px] font-sans text-primary-muted uppercase font-medium">Current Retiring Expert</span>
            <h4 className="text-base font-medium text-primary font-sans">Dr. Arun Kumar</h4>
            <p className="text-xs text-status-warning-text font-medium">34 Yrs Experience</p>
          </div>

          <div className="p-4 rounded-2xl bg-accent/20 border border-accent/30 space-y-2 shadow-sm">
            <span className="text-[10px] font-sans text-status-warning-text uppercase font-medium">Transfer Progress</span>
            <div className="text-2xl font-medium font-sans text-primary">68%</div>
            <p className="text-[11px] text-status-warning-text font-medium">18 Sessions Processed</p>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2 shadow-sm">
            <span className="text-[10px] font-sans text-primary-muted uppercase font-medium">Designated Successor</span>
            <h4 className="text-base font-medium text-primary font-sans">Priya Sharma</h4>
            <p className="text-xs text-status-info-text font-medium">Junior Engineer (2 Yrs)</p>
          </div>

          <div className="p-4 rounded-2xl bg-status-success/10 border border-status-success-text/30 space-y-2 shadow-sm">
            <span className="text-[10px] font-sans text-status-success-text uppercase font-medium">Readiness Score</span>
            <div className="text-2xl font-medium font-sans text-status-success-text">74 / 100</div>
            <p className="text-[11px] text-status-success-text font-medium">Moderate Gap Remaining</p>
          </div>
        </div>

        {/* Critical Gaps Checklist */}
        <div className="p-5 rounded-2xl bg-surface border border-surface-border space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-status-critical-text font-medium text-xs font-sans">
            <AlertTriangle size={16} />
            <span>3 Critical Knowledge Gaps Requiring Verification</span>
          </div>
          <div className="space-y-2 text-xs font-sans">
            <div className="p-3 rounded-xl bg-surface border border-surface-border flex items-center justify-between">
              <span className="text-primary font-medium">1. CNC Spindle Bedplate Thermal Torque Harmonics</span>
              <Badge variant="emerald">Quiz Passed</Badge>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-surface-border flex items-center justify-between">
              <span className="text-primary font-medium">2. Multi-Stage Bearing Acoustic Pit Detection</span>
              <Badge variant="rose">Practical Session Pending</Badge>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-surface-border flex items-center justify-between">
              <span className="text-primary font-medium">3. Emergency Overhaul Procedure Post-Power Surge</span>
              <Badge variant="cyan">Graph Indexed</Badge>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
