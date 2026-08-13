import React, { useState } from 'react';
import { useDemo } from '../../context/useDemo';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { EXPERT_PROFILE } from '../../data/mockData';
import {
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Brain,
  Layers,
  Share2,
  Lock,
  Cpu,
  Clock,
  UserCheck,
  Zap,
  Search,
  TrendingUp,
  Globe,
  Anchor,
  FileText
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setActivePage, startJudgeDemo } = useDemo();
  const [activeTimelineNode, setActiveTimelineNode] = useState<number | null>(3);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(1);

  const timelineNodes = [
    {
      year: "1978",
      title: "Experienced Engineer",
      subtitle: "34 Years Operational Intuition",
      desc: "Dr. Arun Kumar begins diagnosing precision CNC acoustic vibration anomalies on shop floors.",
      icon: UserCheck
    },
    {
      year: "1995",
      title: "Machine Troubleshooting",
      subtitle: "Empirical Decision Pattern",
      desc: "Discovers foundation anchor expansion torque prevents unnecessary spindle bearing swaps.",
      icon: Zap
    },
    {
      year: "2019",
      title: "Production Overhaul Method",
      subtitle: "Unwritten Institutional Rule",
      desc: "Establishes non-destructive vibration diagnostic sequence saving $1.4M annually.",
      icon: Cpu
    },
    {
      year: "2026",
      title: "EVORIGEN Knowledge Capture",
      subtitle: "Tacit Knowledge AI Processing",
      desc: "AI Interview Mode extracts entities, skills, & decision patterns into Universal Legacy Graph.",
      icon: Sparkles
    },
    {
      year: "2045",
      title: "Future Engineer (Priya's Successor)",
      subtitle: "Capability Preserved Across Decades",
      desc: "Future team queries RAG Assistant & simulates scenarios to resolve CNC failures instantly.",
      icon: Brain
    }
  ];

  const problemCards = [
    {
      title: "Expert Retirement",
      desc: "Decades of unwritten practical knowledge and decision intuition vanish when experienced employees retire.",
      icon: ShieldAlert,
      tag: "Institutional Memory"
    },
    {
      title: "Cultural Loss",
      desc: "Traditional arts, endangered languages, and indigenous practices disappear as knowledge holders decline.",
      icon: Globe,
      tag: "Heritage"
    },
    {
      title: "Institutional Memory Gap",
      desc: "Organizations document standard procedures, but completely lose the reasoning and context behind decisions.",
      icon: FileText,
      tag: "Knowledge Context"
    },
    {
      title: "Generational Disconnect",
      desc: "Younger generations inherit raw files and reports without understanding the tacit intuition needed to execute them.",
      icon: Clock,
      tag: "Capability Transfer"
    },
    {
      title: "Disaster Repetition",
      desc: "Communities repeatedly relearn recovery and survival lessons after every major cyclone or crisis.",
      icon: Anchor,
      tag: "Resilience"
    },
    {
      title: "Digital Fragmentation",
      desc: "Critical intelligence becomes scattered across lost emails, voice notes, and disconnected cloud storage.",
      icon: Layers,
      tag: "Data Decay"
    }
  ];

  const processStages = [
    { step: "01", title: "CAPTURE", desc: "Collect voice interviews, videos, logs, drawings & sensor data.", icon: Brain },
    { step: "02", title: "UNDERSTAND", desc: "AI NLP & Vision extract people, skills, decisions, events & problems.", icon: Cpu },
    { step: "03", title: "STRUCTURE", desc: "Convert unstructured experience into structured decision taxonomy.", icon: Layers },
    { step: "04", title: "CONNECT", desc: "Construct the Universal Legacy Graph linking knowledge relationships.", icon: Share2 },
    { step: "05", title: "PRESERVE", desc: "Index evidence sources with tamper-proof provenance & timestamps.", icon: Lock },
    { step: "06", title: "RETRIEVE", desc: "Execute Vector Search + RAG for instant contextual query answers.", icon: Search },
    { step: "07", title: "TRANSFER", desc: "Deliver interactive learning modules & future impact simulations.", icon: TrendingUp }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-12 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent-soft font-sans text-xs font-medium shadow-soft-sm">
            <Sparkles size={14} className="text-accent" />
            <span>AI-POWERED LEGACY INTELLIGENCE PLATFORM</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-medium font-sans tracking-tight text-primary leading-none">
            EVORIGEN
          </h1>

          <p className="text-xl sm:text-2xl font-sans font-medium text-accent-soft max-w-2xl mx-auto">
            Preserve Wisdom. Power the Future.
          </p>

          <p className="text-base sm:text-lg text-primary-muted max-w-2xl mx-auto leading-relaxed">
            An AI-powered Legacy Intelligence platform that transforms human experience, institutional knowledge, and cultural memory into structured, searchable, and transferable intelligence for future generations.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActivePage('dashboard')}
              className="px-6 py-3 rounded-full bg-accent hover:brightness-110 text-background font-medium text-xs shadow-soft-sm flex items-center gap-2 transition-all"
            >
              <span>Explore the Platform</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={startJudgeDemo}
              className="px-6 py-3 rounded-full bg-surface-subtle hover:bg-surface-subtle border border-accent/40 text-primary font-medium text-xs flex items-center gap-2 transition-all shadow-soft-sm"
            >
              <Sparkles size={14} className="text-accent" />
              <span>Start Judge Demonstration</span>
            </button>

            <button
              onClick={() => setActivePage('processing')}
              className="px-6 py-3 rounded-full bg-surface-soft hover:bg-surface-subtle border border-surface-border text-primary font-medium text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <Cpu size={14} className="text-primary-muted" />
              <span>Watch Knowledge Flow</span>
            </button>
          </div>
        </div>
      </section>

      {/* HERO VISUALIZATION — GENERATIONAL TIMELINE */}
      <section className="max-w-6xl mx-auto px-4">
        <GlassCard variant="default" className="p-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="gold">Generational Transfer Visualizer</Badge>
                <span className="text-xs font-sans text-accent font-medium">PAST → PRESENT → FUTURE</span>
              </div>
              <h3 className="text-2xl font-medium font-sans text-primary">
                How Knowledge Moves Across Time
              </h3>
            </div>
            <p className="text-xs text-primary-muted font-sans">
              Select nodes to inspect knowledge transformation
            </p>
          </div>

          {/* Timeline Nodes Container */}
          <div className="relative pt-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {timelineNodes.map((node, idx) => {
                const Icon = node.icon;
                const isSelected = activeTimelineNode === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTimelineNode(idx)}
                    className={`cursor-pointer transition-all duration-300 text-center ${
                      isSelected ? 'scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 transition-all ${
                        isSelected
                          ? 'bg-accent text-background shadow-soft-sm'
                          : 'bg-surface border border-surface-border text-primary-muted'
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <span className="text-xs font-sans text-accent font-medium block">
                      {node.year}
                    </span>
                    <h4 className="text-xs font-medium text-primary font-sans mt-0.5">
                      {node.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Active Node Detail Card */}
            {activeTimelineNode !== null && (
              <div className="mt-8 p-5 rounded-xl bg-surface border border-surface-border text-left transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-sans text-accent font-medium uppercase tracking-wider">
                    {timelineNodes[activeTimelineNode].year} Node Details
                  </span>
                  <span className="text-[11px] font-sans text-primary-muted">
                    {timelineNodes[activeTimelineNode].subtitle}
                  </span>
                </div>
                <h4 className="text-base font-medium text-primary font-sans">
                  {timelineNodes[activeTimelineNode].title}
                </h4>
                <p className="text-xs text-primary-muted mt-1">
                  {timelineNodes[activeTimelineNode].desc}
                </p>
              </div>
            )}
          </div>
        </GlassCard>
      </section>

      {/* "THE PROBLEM" SECTION */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="rose">Critical Challenge</Badge>
          <h2 className="text-3xl sm:text-4xl font-medium font-sans text-primary">
            Valuable knowledge disappears every day.
          </h2>
          <p className="text-sm text-primary-muted">
            When experts retire or communities change, decades of undocumented practical capability vanish without a trace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <GlassCard key={idx} variant="rose" className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-status-critical/40 text-status-critical-text">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-sans font-medium text-status-critical-text bg-status-critical/40 border border-status-critical-text/30 px-2.5 py-0.5 rounded-full">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base font-medium text-primary font-sans">{card.title}</h3>
                <p className="text-xs text-primary-muted leading-relaxed">{card.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* THE EVORIGEN SOLUTION */}
      <section className="max-w-6xl mx-auto px-4">
        <GlassCard variant="gold" className="p-8 sm:p-10 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <Badge variant="gold">Paradigm Shift</Badge>
            <h2 className="text-3xl sm:text-4xl font-medium font-sans text-primary">
              We don't just store knowledge.
            </h2>
            <p className="text-xl sm:text-2xl font-sans font-medium text-accent-soft">
              We make knowledge transferable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Traditional Archive */}
            <div className="p-6 rounded-xl bg-surface border border-surface-border text-left space-y-3">
              <span className="text-xs font-sans text-primary-muted uppercase">Traditional System</span>
              <h4 className="text-base font-medium text-primary font-sans">Static Document Storage</h4>
              <div className="flex items-center gap-2 text-xs font-sans text-primary-muted bg-surface-soft p-3 rounded-full border border-surface-border">
                <span>File</span>
                <span>→</span>
                <span>Storage Box</span>
                <span>→</span>
                <span className="text-status-critical-text">Forgotten PDF</span>
              </div>
              <p className="text-xs text-primary-muted">
                Preserves static files without understanding context, reasoning, or real-world application.
              </p>
            </div>

            {/* EVORIGEN Transformation */}
            <div className="p-6 rounded-xl bg-surface-subtle border border-accent/40 text-left space-y-3 shadow-soft-sm">
              <span className="text-xs font-sans text-accent uppercase font-medium">EVORIGEN System</span>
              <h4 className="text-base font-medium text-primary font-sans">Capability Preservation Engine</h4>
              <div className="flex items-center gap-1.5 text-[11px] font-sans text-primary bg-surface p-3 rounded-full overflow-x-auto border border-accent/30">
                <span>Experience</span>
                <span>→</span>
                <span className="text-accent">AI</span>
                <span>→</span>
                <span>Knowledge</span>
                <span>→</span>
                <span>Relationships</span>
                <span>→</span>
                <span className="text-accent-soft font-medium">Future Capability</span>
              </div>
              <p className="text-xs text-primary-muted">
                Extracts tacit decision intuition, connects relationships in Universal Legacy Graph, and enables future teams to act.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* "HOW EVORIGEN WORKS" */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="cyan">7-Stage Tacit AI Workflow</Badge>
          <h2 className="text-3xl sm:text-4xl font-medium font-sans text-primary">
            How EVORIGEN Works
          </h2>
          <p className="text-sm text-primary-muted">
            From raw human experience to active generational intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <GlassCard
                key={idx}
                variant={activeProcessStep === idx + 1 ? 'gold' : 'default'}
                onClick={() => setActiveProcessStep(idx + 1)}
                className="space-y-3 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium font-sans text-accent">
                    {stage.step}
                  </span>
                  <div className="p-2 rounded-xl bg-surface border border-surface-border text-primary">
                    <Icon size={16} />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-primary font-sans">{stage.title}</h3>
                <p className="text-xs text-primary-muted leading-relaxed">{stage.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* SAMPLE EXPERT DEMO PREVIEW — DR. ARUN */}
      <section className="max-w-6xl mx-auto px-4">
        <GlassCard variant="gold" className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Expert Profile Info */}
            <div className="space-y-4">
              <Badge variant="gold">Sample Expert Scenario</Badge>
              <div className="flex items-center gap-4">
                <img
                  src={EXPERT_PROFILE.avatarUrl}
                  alt={EXPERT_PROFILE.name}
                  className="w-14 h-14 rounded-full object-cover border border-accent/40"
                />
                <div>
                  <h3 className="text-base font-medium text-primary font-sans">{EXPERT_PROFILE.name}</h3>
                  <p className="text-xs text-primary-muted font-sans">{EXPERT_PROFILE.title}</p>
                  <p className="text-xs text-primary-light">{EXPERT_PROFILE.organization}</p>
                </div>
              </div>

              <div className="p-3 rounded-full bg-status-critical/40 border border-status-critical-text/30 text-status-critical-text text-xs font-sans text-center">
                Retiring in 45 Days — Critical Knowledge Risk
              </div>
            </div>

            {/* Expert Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-surface border border-surface-border text-center">
                <span className="text-2xl font-normal font-sans text-primary">34</span>
                <p className="text-[10px] font-sans text-primary-light uppercase mt-1">Years Experience</p>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-surface-border text-center">
                <span className="text-2xl font-normal font-sans text-primary">247</span>
                <p className="text-[10px] font-sans text-primary-light uppercase mt-1">Knowledge Items</p>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-surface-border text-center">
                <span className="text-2xl font-normal font-sans text-status-critical-text">78 / 100</span>
                <p className="text-[10px] font-sans text-status-critical-text uppercase mt-1">Legacy Risk</p>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-surface-border text-center">
                <span className="text-2xl font-normal font-sans text-status-success-text">94 / 100</span>
                <p className="text-[10px] font-sans text-status-success-text uppercase mt-1">Legacy Value</p>
              </div>
            </div>

            {/* Launch Action */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-base font-medium text-primary font-sans">
                See Dr. Arun's Legacy Become Intelligence
              </h4>
              <p className="text-xs text-primary-muted">
                Explore how EVORIGEN captured 34 years of CNC vibration diagnostic intuition into an interactive AI knowledge graph.
              </p>
              <button
                onClick={() => setActivePage('graph')}
                className="w-full py-3 rounded-full bg-accent hover:brightness-110 text-background font-medium text-xs shadow-soft-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Inspect Universal Legacy Graph</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* FINAL LANDING CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center space-y-6 pt-6">
        <h2 className="text-3xl sm:text-4xl font-medium font-sans text-primary tracking-tight">
          What if valuable knowledge never had to disappear?
        </h2>
        <p className="text-sm text-primary-muted max-w-xl mx-auto">
          EVORIGEN transforms human experience into transferable intelligence that can move across generations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setActivePage('dashboard')}
            className="px-6 py-3 rounded-full bg-accent hover:brightness-110 text-background font-medium text-xs shadow-soft-sm flex items-center gap-2 transition-all"
          >
            <span>Explore EVORIGEN</span>
            <ArrowRight size={14} />
          </button>
          <button
            onClick={startJudgeDemo}
            className="px-6 py-3 rounded-full bg-surface-subtle hover:bg-surface-subtle border border-accent/40 text-primary font-medium text-xs transition-all shadow-soft-sm"
          >
            Start Judge Demo
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-surface-border pt-10 max-w-6xl mx-auto px-4 text-primary-muted text-xs">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-2">
            <span className="text-base font-medium font-sans text-primary">EVORIGEN</span>
            <p className="text-[11px] text-primary-muted font-sans">AI-Powered Legacy Intelligence Platform</p>
            <p className="text-[11px] text-primary-light">Preserve Wisdom. Power the Future.</p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-primary font-sans uppercase mb-2">Platform</h4>
            <ul className="space-y-1.5 text-primary-muted">
              <li><button onClick={() => setActivePage('capture')}>Legacy Capture</button></li>
              <li><button onClick={() => setActivePage('graph')}>Universal Legacy Graph</button></li>
              <li><button onClick={() => setActivePage('assistant')}>AI Assistant</button></li>
              <li><button onClick={() => setActivePage('simulator')}>Future Simulator</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-primary font-sans uppercase mb-2">Research & Tech</h4>
            <ul className="space-y-1.5 text-primary-muted">
              <li><button onClick={() => setActivePage('architecture')}>Technical Architecture</button></li>
              <li><button onClick={() => setActivePage('value-index')}>Legacy Value Index</button></li>
              <li><button onClick={() => setActivePage('risk')}>Legacy Risk Scoring</button></li>
              <li><button onClick={() => setActivePage('api')}>Developer APIs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-primary font-sans uppercase mb-2">Smart India Hackathon</h4>
            <p className="text-[11px] text-primary-muted leading-relaxed mb-2">
              Prototype developed for SIH 2026 — Tacit Knowledge Preservation & Future Capability Transfer.
            </p>
            <span className="text-[10px] font-sans text-accent-soft bg-accent/20 px-2.5 py-1 rounded-full border border-accent/30 inline-block">
              PROTOTYPE VERIFIED
            </span>
          </div>
        </div>

        <div className="border-t border-surface-border pt-6 text-center text-[11px] font-sans text-primary-light">
          © 2026 EVORIGEN Platform — Preserve Wisdom. Power the Future.
        </div>
      </footer>
    </div>
  );
};
