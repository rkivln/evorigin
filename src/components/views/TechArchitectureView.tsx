import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { TECHNICAL_STACK } from '../../data/mockData';
import { ArrowDown } from 'lucide-react';

export const TechArchitectureView: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="15"
        tag="JUDGE TECH DEEP-DIVE"
        title="How the Technology Works"
        subtitle="Full production-grade system architecture showing flow from raw audio/video ingestion to Tacit NLP, Vector Indexing, Graph Cypher, and RAG."
      />

      {/* Visual System Flowchart Diagram */}
      <GlassCard variant="gold" className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-accent/30/60 pb-4">
          <Badge variant="gold">EVORIGEN Architecture Blueprint</Badge>
          <span className="text-xs font-sans text-primary-muted">SIH 2026 Innovation Stack</span>
        </div>

        {/* Diagram Box Chain */}
        <div className="space-y-4 font-sans text-xs text-center max-w-3xl mx-auto">
          <div className="p-4 rounded-control bg-surface border border-surface-border space-y-1 shadow-sm">
            <span className="text-primary font-medium block uppercase tracking-wider">1. CAPTURE LAYER</span>
            <p className="text-primary-muted">Voice / Video / Documents / Expert AI Interviews / Sensor Logs</p>
          </div>

          <ArrowDown size={20} className="mx-auto text-primary" />

          <div className="p-4 rounded-control bg-accent/20 border border-accent/30 space-y-1 shadow-sm">
            <span className="text-status-warning-text font-medium block uppercase tracking-wider">2. AI &amp; TACIT NLP PIPELINE (Python / FastAPI)</span>
            <p className="text-primary">Whisper ASR • Spacy Entity Extractor • Decision Pattern Taxonomy Parser</p>
          </div>

          <ArrowDown size={20} className="mx-auto text-primary" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-full bg-status-info/10 border border-status-info-text/30 space-y-1 shadow-sm">
              <span className="text-status-info-text font-medium block uppercase tracking-wider">3A. VECTOR SEARCH (Qdrant / Milvus)</span>
              <p className="text-primary">Dense Embeddings (text-embedding-3) + Hybrid BM25 Sparse Search</p>
            </div>

            <div className="p-4 rounded-full bg-status-critical/10 border border-status-critical-text/30 space-y-1 shadow-sm">
              <span className="text-status-critical-text font-medium block uppercase tracking-wider">3B. UNIVERSAL LEGACY GRAPH (Neo4j / Memgraph)</span>
              <p className="text-primary">Semantic Nodes: People → Skills → Decisions → Problems → Solutions</p>
            </div>
          </div>

          <ArrowDown size={20} className="mx-auto text-primary" />

          <div className="p-4 rounded-full bg-status-success/10 border border-status-success-text/30 text-status-success-text space-y-1 shadow-sm">
            <span className="text-status-success-text font-medium block uppercase tracking-wider">4. GENERATIONAL KNOWLEDGE DELIVERY</span>
            <p className="text-primary">RAG AI Assistant • Future Impact Simulator • Knowledge Transfer Modules</p>
          </div>
        </div>
      </GlassCard>

      {/* Layer Specs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TECHNICAL_STACK.map((layer, idx) => (
          <GlassCard key={idx} variant="default" className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans text-primary font-medium">{layer.layer}</span>
              <Badge variant="cyan">Layer 0{idx + 1}</Badge>
            </div>
            <h4 className="text-sm font-medium text-primary font-sans">{layer.tech}</h4>
            <p className="text-xs text-primary-muted leading-relaxed font-sans">{layer.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
