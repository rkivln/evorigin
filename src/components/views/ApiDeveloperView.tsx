import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { API_ENDPOINTS } from '../../data/mockData';
import { Code2, Copy, CheckCircle2 } from 'lucide-react';

export const ApiDeveloperView: React.FC = () => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const sampleSnippet = `// Example POST /api/v1/chat/query
const response = await fetch("https://api.evorigen.ai/v1/chat/query", {
  method: "POST",
  headers: {
    "Authorization": "Bearer ev_live_89f3a9d201c",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: "How did Arun diagnose CNC spindle vibration?",
    includeProvenance: true,
    topK: 5
  })
});
const data = await response.json();
console.log(data.answer, data.sources, data.graphNodes);`;

  const handleCopy = (idx: number) => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="16"
        tag="PROTOTYPE API"
        title="Developer API View"
        subtitle="RESTful & GraphQL API endpoints for integrating EVORIGEN Legacy Intelligence into enterprise ERPs, HR systems, and LMS platforms."
      />

      {/* Code Snippet Box */}
      <GlassCard variant="gold" className="p-6 space-y-4 font-sans text-xs">
        <div className="flex items-center justify-between border-b border-accent/30/60 pb-3">
          <div className="flex items-center gap-2 text-primary font-medium">
            <Code2 size={18} className="text-status-info-text" />
            <span>Interactive REST Request Example</span>
          </div>
          <button
            onClick={() => handleCopy(99)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-soft hover:bg-surface-subtle text-primary font-medium transition-all shadow-sm"
          >
            {copiedIdx === 99 ? <CheckCircle2 size={14} className="text-status-success-text" /> : <Copy size={14} />}
            <span>{copiedIdx === 99 ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        <div className="rounded-2xl bg-surface-subtle p-4 text-amber-200 border border-slate-700 font-mono overflow-x-auto leading-relaxed shadow-sm">
          <pre>{sampleSnippet}</pre>
        </div>
      </GlassCard>

      {/* Endpoints List */}
      <div className="space-y-4">
        <h3 className="text-base font-medium font-sans text-primary">Production REST Endpoints Specifications</h3>

        <div className="space-y-3 font-sans text-xs">
          {API_ENDPOINTS.map((ep, idx) => (
            <GlassCard key={idx} variant="default" className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Badge variant={ep.method === 'POST' ? 'gold' : 'cyan'} className="font-mono text-[10px]">
                  {ep.method}
                </Badge>
                <span className="text-primary font-mono font-medium text-xs">{ep.path}</span>
              </div>
              <span className="text-primary-muted text-xs">{ep.desc}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};
