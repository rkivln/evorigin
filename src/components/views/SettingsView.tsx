import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { useDemo } from '../../context/useDemo';
import { ShieldCheck, Download, Lock, CheckCircle2 } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { } = useDemo();
  const [dataConsent, setDataConsent] = useState(true);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="14"
        tag="GOVERNANCE & SYSTEM"
        title="Data Ownership & Preferences"
        subtitle="Full sovereign control over your legacy assets, encryption permissions, theme visual modes, and verifiable audit logs."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Ownership & Consent */}
        <GlassCard variant="default" className="space-y-5">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <h3 className="text-base font-medium font-sans text-primary flex items-center gap-2">
              <ShieldCheck size={18} className="text-accent" />
              Sovereign Data Ownership Policy
            </h3>
            <Badge variant="gold">Zero Lock-In</Badge>
          </div>

          <p className="text-xs text-primary-muted leading-relaxed font-sans">
            You maintain 100% legal ownership of all uploaded voice recordings, transcripts, decision rules, and graph nodes. EVORIGEN acts solely as an encrypted custodian.
          </p>

          <div className="p-3.5 rounded-xl bg-surface border border-surface-border flex items-center justify-between text-xs font-sans shadow-sm">
            <span className="text-primary font-medium">AI Training Consent (Opt-Out Enabled)</span>
            <input
              type="checkbox"
              checked={dataConsent}
              onChange={(e) => setDataConsent(e.target.checked)}
              className="accent-yellow-400 w-4 h-4 cursor-pointer rounded"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={handleExport}
              className="px-5 py-2.5 rounded-full bg-accent hover:brightness-110 text-background font-medium text-xs flex items-center gap-2 transition-all shadow-soft-sm"
            >
              <Download size={14} />
              <span>Export Full Knowledge Package (JSON/GraphML)</span>
            </button>
          </div>

          {exported && (
            <div className="text-xs font-sans text-status-success-text flex items-center gap-1.5 font-medium animate-in fade-in">
              <CheckCircle2 size={16} />
              <span>Download initiated: EVORIGEN_DrArun_LegacyExport_2026.json</span>
            </div>
          )}
        </GlassCard>

        {/* Audit Log Table */}
        <GlassCard variant="default" className="space-y-5">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <h3 className="text-base font-bold font-sans text-primary flex items-center gap-2">
              <Lock size={18} className="text-accent" />
              Verifiable Access Audit Log
            </h3>
            <Badge variant="cyan">Immutable</Badge>
          </div>

          <div className="space-y-2.5 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-surface border border-surface-border flex items-center justify-between shadow-sm">
              <div>
                <span className="text-primary font-medium block">Priya Sharma (Successor)</span>
                <span className="text-primary-muted text-[11px]">Queried 'Spindle Vibration Diagnosis'</span>
              </div>
              <span className="text-primary-light text-[11px]">10m ago</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface border border-surface-border flex items-center justify-between shadow-sm">
              <div>
                <span className="text-primary font-medium block">SIH Judge Evaluator</span>
                <span className="text-primary-muted text-[11px]">Graph Inspection Session</span>
              </div>
              <span className="text-primary-light text-[11px]">1h ago</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface border border-surface-border flex items-center justify-between shadow-sm">
              <div>
                <span className="text-status-critical-text font-medium block">Permanent Deletion Request</span>
                <span className="text-primary-muted text-[11px]">3 Sources Purged on Demand</span>
              </div>
              <span className="text-primary-light text-[11px]">2d ago</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
