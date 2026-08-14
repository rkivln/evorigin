import React from 'react';
import { useDemo } from '../../context/useDemo';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Cpu
} from 'lucide-react';

export const AiProcessingView: React.FC = () => {
  const {
    setActivePage,
    isProcessingPipeline,
    processingProgress,
    pipelineCompleted,
    runProcessingPipeline
  } = useDemo();

  const pipelineStages = [
    { label: "Upload received & checksum verified", threshold: 10 },
    { label: "Speech recognition & Whisper acoustic transcription", threshold: 22 },
    { label: "Semantic analysis & context parsing", threshold: 35 },
    { label: "Entity extraction (People, Artifacts, Locations)", threshold: 48 },
    { label: "Tacit Skill & Intuition Pattern detection", threshold: 60 },
    { label: "Relationship detection & ontology mapping", threshold: 72 },
    { label: "Universal Legacy Graph update", threshold: 84 },
    { label: "Dense vector indexing for Hybrid RAG", threshold: 92 },
    { label: "Legacy Value & Risk Scoring calculation", threshold: 100 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="03"
        tag="NLP PIPELINE"
        title="Knowledge Processing Screen"
        subtitle="Observe how raw unstructured audio, video, and text are converted into structured, relational knowledge nodes."
        action={
          <button
            onClick={runProcessingPipeline}
            disabled={isProcessingPipeline}
            className={`px-5 py-2.5 rounded-control text-xs font-medium flex items-center gap-2 transition-all ${
              isProcessingPipeline
                ? 'bg-surface/80 text-primary-muted cursor-not-allowed border border-surface-border'
                : 'bg-accent hover:brightness-110 text-primary shadow-sm'
            }`}
          >
            <Sparkles size={14} className={isProcessingPipeline ? 'animate-spin' : ''} />
            <span>{isProcessingPipeline ? 'Processing AI Pipeline...' : 'Process with EVORIGEN AI'}</span>
          </button>
        }
      />

      {/* Progress Bar & Status */}
      <GlassCard variant="gold" className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu size={18} className="text-primary" />
            <h3 className="text-base font-medium font-sans text-primary">Tacit Extraction Pipeline Status</h3>
          </div>
          <span className="text-xs font-sans text-primary font-medium">
            {processingProgress}% Complete
          </span>
        </div>

        <div className="w-full h-2.5 bg-surface/80 rounded-control overflow-hidden p-0.5 border border-surface-border">
          <div
            className="h-full bg-surface-subtle rounded-control transition-all duration-300"
            style={{ width: `${processingProgress}%` }}
          />
        </div>

        {pipelineCompleted && (
          <div className="p-3.5 rounded-full bg-status-success/10 border border-status-success-text/30 text-status-success-text text-status-success-text text-xs font-sans flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-status-success-text" />
              <span>Knowledge extraction complete — 18 knowledge items & 24 graph relationships generated.</span>
            </div>
            <button
              onClick={() => setActivePage('graph')}
              className="text-primary hover:underline flex items-center gap-1 font-medium"
            >
              <span>View in Graph</span>
              <ArrowRight size={12} />
            </button>
          </div>
        )}
      </GlassCard>

      {/* 9-Stage Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left: Animated Pipeline Stages */}
        <GlassCard variant="default" className="space-y-3">
          <h3 className="text-xs font-medium font-sans uppercase tracking-wider text-primary-muted mb-2">
            Multi-Stage Extraction Verification
          </h3>

          <div className="space-y-2">
            {pipelineStages.map((stage, idx) => {
              const isDone = processingProgress >= stage.threshold;
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-control border text-xs font-sans flex items-center justify-between transition-all ${
                    isDone
                      ? 'bg-status-success border-status-success-text/30 text-status-success-text'
                      : 'bg-surface/80 border-surface-border text-primary-muted'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] text-primary-muted font-medium">0{idx + 1}</span>
                    <span>{stage.label}</span>
                  </div>
                  {isDone ? (
                    <CheckCircle2 size={16} className="text-status-success-text shrink-0" />
                  ) : (
                    <Clock size={14} className="text-primary-light shrink-0 animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </GlassCard>

        {/* Right: Knowledge Extraction Results Cards */}
        <GlassCard variant="cyan" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium font-sans text-primary">Extracted Tacit Knowledge Card</h3>
            <Badge variant="cyan" className="font-sans">Source Provenance Verified</Badge>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-control bg-surface/90 border border-surface-border space-y-1">
              <span className="text-[10px] font-sans text-primary-muted uppercase tracking-wider font-medium">Skill Identified</span>
              <h4 className="text-sm font-medium text-primary font-sans">Industrial Vibration Diagnosis</h4>
              <p className="text-xs text-primary-muted">
                Ability to differentiate foundation thermal shift harmonics from bearing pit defects.
              </p>
            </div>

            <div className="p-4 rounded-control bg-surface/90 border border-surface-border space-y-1">
              <span className="text-[10px] font-sans text-primary-muted uppercase tracking-wider font-medium">Decision Pattern</span>
              <h4 className="text-sm font-medium text-primary font-sans">Check foundation alignment before replacing bearings</h4>
              <p className="text-xs text-primary-muted">
                Rule of thumb established post-2019 power surge anomaly by Dr. Arun.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              <div className="p-3 rounded-control bg-surface/80 border border-surface-border">
                <span className="text-primary-muted block text-[10px]">Experience Level</span>
                <span className="text-status-success-text font-medium">34 Years (Expert)</span>
              </div>
              <div className="p-3 rounded-control bg-surface/80 border border-surface-border">
                <span className="text-primary-muted block text-[10px]">Source Evidence</span>
                <span className="text-status-info-text font-medium">Interview — 14:32</span>
              </div>
            </div>

            <div className="p-3.5 rounded-full bg-status-success/10 border border-status-success-text/30 text-status-success-text text-status-success-text text-xs font-sans">
              ✓ Verified Outcome: Reduced unnecessary component replacement by 84% ($1.4M saved)
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActivePage('graph')}
                className="w-full py-3 rounded-control bg-surface-soft hover:bg-surface-subtle text-primary font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Publish to Universal Legacy Graph</span>
                <ArrowRight size={14} className="text-accent" />
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

