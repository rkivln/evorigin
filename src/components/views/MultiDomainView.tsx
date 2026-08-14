import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import {
  Heart,
  Globe,
  Anchor,
  FolderLock
} from 'lucide-react';

export const MultiDomainView: React.FC = () => {
  const [activeDomainTab, setActiveDomainTab] = useState<'family' | 'culture' | 'disaster' | 'estate'>('family');

  const domainCards = [
    {
      id: 'family',
      title: "Family Legacy",
      desc: "Preserve ancestral stories, family recipes, ethical values, and life resilience lessons across generations.",
      icon: Heart,
      color: "text-status-critical-text"
    },
    {
      id: 'culture',
      title: "Cultural Preservation",
      desc: "Preserve endangered languages, traditional songs, indigenous art techniques, and heritage context.",
      icon: Globe,
      color: "text-status-warning-text"
    },
    {
      id: 'disaster',
      title: "Disaster Resilience",
      desc: "Community recovery archives storing evacuation routes, storm surge navigation, and relief practices.",
      icon: Anchor,
      color: "text-status-info-text"
    },
    {
      id: 'estate',
      title: "Digital Inheritance Estate",
      desc: "Conceptual governance interface for passing digital creations, accounts, and memories to heirs.",
      icon: FolderLock,
      color: "text-status-success-text"
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="11"
        tag="MULTI-DOMAIN"
        title="EVORIGEN Across Society"
        subtitle="Legacy preservation extends beyond industrial engineering into family heritage, cultural preservation, disaster recovery, and digital estates."
      />

      {/* Domain Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {domainCards.map(d => {
          const Icon = d.icon;
          const isActive = activeDomainTab === d.id;
          return (
            <GlassCard
              key={d.id}
              variant={isActive ? 'gold' : 'default'}
              onClick={() => setActiveDomainTab(d.id as any)}
              className="space-y-3 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-control bg-surface border border-surface-border ${d.color}`}>
                  <Icon size={20} />
                </div>
                {isActive && <Badge variant="gold">Active View</Badge>}
              </div>
              <h3 className="text-base font-medium font-sans text-primary">{d.title}</h3>
              <p className="text-xs text-primary-muted leading-relaxed font-sans">{d.desc}</p>
            </GlassCard>
          );
        })}
      </div>

      {/* DOMAIN 1: FAMILY LEGACY DEMO */}
      {activeDomainTab === 'family' && (
        <GlassCard variant="gold" className="p-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-accent/30/60 pb-3">
            <div className="flex items-center gap-2 text-status-critical-text">
              <Heart size={18} />
              <h3 className="text-base font-medium font-sans text-primary">Family Legacy Query Demo</h3>
            </div>
            <Badge variant="rose">Fictional Demo Data</Badge>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-control bg-surface border border-surface-border text-xs font-sans text-primary font-medium shadow-sm">
              User Question: “How did grandmother handle difficult financial situations?”
            </div>

            <div className="p-5 rounded-control bg-surface border border-surface-border space-y-3 text-xs leading-relaxed text-primary shadow-sm">
              <p className="font-sans text-primary-muted">
                Based on preserved oral history recordings from Late Savitri Ammal (1982 Cassette Tape #03):
              </p>
              <blockquote className="p-4 rounded-control bg-accent/10 border-l-4 border-accent/30 text-primary italic font-serif text-sm">
                “Never mortgage primary ancestral farmland for short-term liquidity; utilize gold-backed emergency credit lines during agrarian drought cycles. Maintain 18 months of grain & emergency reserves before any capital expansion.”
              </blockquote>
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-sans text-primary-muted pt-2 border-t border-surface-border">
                <span>Source: Family Oral Archive Tape #03 (1982)</span>
                <span>• Confidence: Verifiable</span>
                <span>• Heirs Granted Access: 4 Members</span>
              </div>
            </div>
          </div>
        </GlassCard>
      )}

      {/* DOMAIN 2: CULTURAL PRESERVATION DEMO */}
      {activeDomainTab === 'culture' && (
        <GlassCard variant="cyan" className="p-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#C8DCF1]/80 pb-3">
            <div className="flex items-center gap-2 text-status-info-text">
              <Globe size={18} />
              <h3 className="text-base font-medium font-sans text-primary">Endangered Language & Craft Preservation</h3>
            </div>
            <Badge variant="cyan">Heritage Architecture</Badge>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-primary-muted font-sans">
              Visualizing cultural semantic mapping: <span className="font-medium text-primary">Word → Meaning → Context → Story → Speaker → Region</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
              <div className="p-4 rounded-control bg-surface border border-surface-border space-y-1 shadow-sm">
                <span className="text-status-warning-text block font-medium">Endangered Term</span>
                <p className="text-primary text-sm font-medium">"Agni-Kumbh Pitch"</p>
                <p className="text-primary-muted text-[11px]">Terracotta Kiln Harmonic</p>
              </div>

              <div className="p-4 rounded-control bg-surface border border-surface-border space-y-1 shadow-sm">
                <span className="text-status-info-text block font-medium">Contextual Meaning</span>
                <p className="text-primary leading-relaxed">Resonant sound of kiln airflow indicating 1150°C temperature.</p>
              </div>

              <div className="p-4 rounded-control bg-surface border border-surface-border space-y-1 shadow-sm">
                <span className="text-status-success-text block font-medium">Master Speaker</span>
                <p className="text-primary font-medium">Master Ramanathan (79 yrs)</p>
                <p className="text-primary-muted text-[11px]">Kumbakonam Region</p>
              </div>
            </div>
          </div>
        </GlassCard>
      )}

      {/* DOMAIN 3: DISASTER RESILIENCE DEMO */}
      {activeDomainTab === 'disaster' && (
        <GlassCard variant="default" className="p-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <div className="flex items-center gap-2 text-status-info-text">
              <Anchor size={18} />
              <h3 className="text-base font-medium font-sans text-primary">Cyclone Recovery Archive</h3>
            </div>
            <Badge variant="emerald">Bay of Bengal Delta</Badge>
          </div>

          <div className="p-5 rounded-control bg-surface border border-surface-border space-y-2 text-xs font-sans shadow-sm">
            <span className="text-status-info-text font-medium block">Community Query: “What worked during the previous cyclone evacuation?”</span>
            <p className="text-primary leading-relaxed">
              Captured recovery wisdom: Shallow-draft boat paths through shifted sandbars post-surge are marked by the eastern mangrove tree line. Emergency solar water filtration pads located at Village #4.
            </p>
          </div>
        </GlassCard>
      )}

      {/* DOMAIN 4: DIGITAL ESTATE DEMO */}
      {activeDomainTab === 'estate' && (
        <GlassCard variant="gold" className="p-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-accent/30/60 pb-3">
            <div className="flex items-center gap-2 text-status-success-text">
              <FolderLock size={18} />
              <h3 className="text-base font-medium font-sans text-primary">Digital Inheritance Estate (Conceptual)</h3>
            </div>
            <Badge variant="gold">Zero-Knowledge Encrypted</Badge>
          </div>

          <div className="space-y-2.5 text-xs font-sans">
            <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between shadow-sm">
              <span className="text-primary font-medium">Historical Research Manuscripts (.pdf)</span>
              <Badge variant="emerald">Transferable to Heirs</Badge>
            </div>

            <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between shadow-sm">
              <span className="text-primary font-medium">Family Photo Archives (1975-2025)</span>
              <Badge variant="cyan">Protected Archive</Badge>
            </div>

            <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between shadow-sm">
              <span className="text-primary font-medium">Engineering Patent Drafts</span>
              <Badge variant="gold">Organization Succession</Badge>
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
};
