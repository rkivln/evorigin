import React, { useState } from 'react';
import { useDemo } from '../../context/useDemo';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { KNOWLEDGE_ITEMS } from '../../data/mockData';
import {
  Search,
  User,
  Calendar,
  Bot
} from 'lucide-react';

export const KnowledgeLibraryView: React.FC = () => {
  const { sendUserChatMessage, setActivePage } = useDemo();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const filteredItems = KNOWLEDGE_ITEMS.filter(item => {
    const matchesDomain = selectedDomain === 'All' || item.domain === selectedDomain;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.expert.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesQuery;
  });

  const handleQueryAI = (query: string) => {
    sendUserChatMessage(query);
    setActivePage('assistant');
  };

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="05"
        tag="HYBRID RAG"
        title="Knowledge Library"
        subtitle="Search across generations of preserved human experience, industrial decisions, cultural heritage, and emergency disaster archives."
      />

      {/* Search Bar & Domain Filter Chips */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search generations of knowledge… e.g. 'How did previous engineers diagnose spindle vibration?'"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface border border-surface-border focus:border-accent/40 rounded-full py-3.5 pl-12 pr-4 text-xs text-primary placeholder-[#A8A29E] focus:outline-none shadow-sm font-sans"
          />
          <Search size={18} className="absolute left-4 top-4 text-primary" />
        </div>

        {/* Domain Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-sans text-primary-muted mr-2">Filter Domain:</span>
          {['All', 'Industrial', 'Cultural', 'Disaster', 'Family'].map(domain => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all ${
                selectedDomain === domain
                  ? 'bg-surface-subtle text-primary font-medium shadow-sm'
                  : 'bg-surface/80 text-primary-muted hover:text-primary border border-surface-border'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map(item => (
          <GlassCard key={item.id} variant="gold" className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Badge variant={item.domain === 'Industrial' ? 'gold' : item.domain === 'Cultural' ? 'cyan' : 'emerald'}>
                  {item.domain} • {item.category}
                </Badge>
                <h3 className="text-base font-medium font-sans text-primary mt-2 leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="font-sans text-xs text-primary font-medium block">LVS: {item.legacyValueScore}</span>
                <span className="font-sans text-[10px] text-status-critical-text">Risk: {item.legacyRiskScore}</span>
              </div>
            </div>

            <p className="text-xs text-primary-muted leading-relaxed bg-surface/90 p-3.5 rounded-2xl border border-surface-border">
              {item.summary}
            </p>

            {item.keyDecisionPattern && (
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/30 text-primary text-xs font-sans">
                💡 Key Decision Pattern: "{item.keyDecisionPattern}"
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between text-[11px] font-sans text-primary-muted pt-2 border-t border-surface-border">
              <div className="flex items-center gap-2">
                <User size={13} className="text-primary" />
                <span className="font-medium text-primary">{item.expert} ({item.expertRole})</span>
              </div>
              <div className="flex items-center gap-1 text-primary-muted">
                <Calendar size={12} />
                <span>{item.date}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex flex-wrap gap-1">
                {item.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-surface/80 text-primary-muted border border-surface-border">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleQueryAI(`Give me full details on "${item.title}" by ${item.expert}`)}
                className="px-3.5 py-1.5 rounded-full bg-surface-soft hover:bg-surface-subtle text-primary text-xs font-medium flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Bot size={13} className="text-accent" />
                <span>Ask AI</span>
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

