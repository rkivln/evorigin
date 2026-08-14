import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { Activity, Cpu, HardDrive, Share2, Search, TrendingUp } from 'lucide-react';

export const SystemStatusView: React.FC = () => {
  const services = [
    { name: "AI Processing Service", status: "Operational", latency: "140ms", icon: Cpu, isOperational: true },
    { name: "Vector Search Engine (Qdrant)", status: "Operational", latency: "18ms", icon: Search, isOperational: true },
    { name: "Knowledge Graph DB (Memgraph)", status: "Operational", latency: "34ms", icon: Share2, isOperational: true },
    { name: "Hybrid RAG Engine", status: "Operational", latency: "210ms", icon: Activity, isOperational: true },
    { name: "Simulation Engine", status: "Prototype Active", latency: "420ms", icon: TrendingUp, isOperational: false },
    { name: "Encrypted Blob Storage", status: "Operational", latency: "45ms", icon: HardDrive, isOperational: true },
  ];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="13"
        tag="INFRASTRUCTURE"
        title="System Status & Health"
        subtitle="Real-time monitoring of AI Tacit Engine, Vector DB, Knowledge Graph DB, and RAG services."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <GlassCard key={idx} variant="default" className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-control bg-white border border-[#252525]/[0.08] text-[#252525]">
                  <Icon size={18} />
                </div>
                <span className="text-xs font-sans text-[#777770]">Latency: {s.latency}</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#252525] font-sans">{s.name}</h4>
                <div className="mt-2 flex items-center justify-between">
                  {s.isOperational ? (
                    <Badge variant="emerald" size="sm" className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-success-text animate-pulse"></span>
                      {s.status}
                    </Badge>
                  ) : (
                    <Badge variant="gold" size="sm" className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-warning-text"></span>
                      {s.status}
                    </Badge>
                  )}
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};
