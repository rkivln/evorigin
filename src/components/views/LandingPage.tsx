import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Database,
  Cpu,
  Share2,
  Bot,
  ShieldAlert,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowUpRight,
  FileText,
  ShieldCheck,
  Brain,
  Activity,
  Settings as GearIcon,
  Send,
  Lightbulb
} from 'lucide-react';
import { useDemo } from '../../context/useDemo';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { BackgroundGridVideo } from '../common/BackgroundGridVideo';

export const LandingPage: React.FC = () => {
  const { setActivePage, startJudgeDemo } = useDemo();

  // Interactive State for Hero Graph Node Hover
  const [activeHeroNode, setActiveHeroNode] = useState<string>('node-arun');
  
  // Interactive State for Problem Visualizer
  const [problemConnected, setProblemConnected] = useState<boolean>(true);

  // Interactive State for AI Query
  const [selectedQuestion, setSelectedQuestion] = useState<string>("Which critical processes depend on only one employee?");
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  const heroNodes = [
    { id: 'node-arun', title: 'Dr. Arun Kumar', type: 'Expert', subtitle: '34 yrs experience • CNC Specialist', color: 'bg-[#FF4D00]', x: '20%', y: '30%' },
    { id: 'node-vibe', title: 'CNC Spindle Diagnostics', type: 'Skill', subtitle: 'Critical tacit troubleshooting rule', color: 'bg-emerald-500', x: '55%', y: '25%' },
    { id: 'node-proc', title: 'Foundation Realignment', type: 'Process', subtitle: 'Acoustic harmonic bolt check', color: 'bg-amber-500', x: '78%', y: '45%' },
    { id: 'node-doc', title: 'Logbook #4092', type: 'Source', subtitle: 'Verified empirical maintenance record', color: 'bg-[#FF7700]', x: '35%', y: '70%' },
    { id: 'node-appr', title: 'Junior Engineering Team', type: 'Learner', subtitle: 'Knowledge transfer in progress (68%)', color: 'bg-purple-500', x: '68%', y: '80%' }
  ];

  const handleRunAiQuery = (query: string) => {
    setSelectedQuestion(query);
    setIsAiLoading(true);
    setTimeout(() => {
      setIsAiLoading(false);
    }, 500);
  };

  return (
    <div className="w-full bg-white text-brand-black selection:bg-[#FF4D00] selection:text-white pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-orange-50 border border-orange-200 text-[#FF4D00] font-semibold text-xs shadow-2xs">
              <Sparkles size={14} className="text-[#FF4D00]" />
              <span>AI-POWERED LEGACY INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08] text-brand-black">
              Turn organizational knowledge into{' '}
              <span className="font-serif italic font-normal text-[#FF4D00] block sm:inline">
                lasting intelligence.
              </span>
            </h1>

            <p className="text-lg text-brand-muted leading-relaxed font-medium max-w-xl">
              Capture what your people know. Connect what your organization has learned. Preserve what the future cannot afford to lose.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActivePage('dashboard')}
                className="px-6 py-3 rounded-pill bg-[#FF4D00] text-white font-bold text-sm shadow-glow-orange hover:bg-[#E03E00] transition-all flex items-center gap-2 group"
              >
                <span>Explore EVORIGEN</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActivePage('graph')}
                className="px-6 py-3 rounded-pill bg-white text-brand-black border border-brand-border hover:bg-brand-soft hover:border-[#FF4D00] transition-all font-semibold text-sm flex items-center gap-2"
              >
                <span>See how it works →</span>
              </button>

              <button
                onClick={startJudgeDemo}
                className="px-5 py-3 rounded-pill bg-orange-50/80 border border-orange-200 text-[#FF4D00] hover:bg-orange-100 transition-all font-semibold text-xs flex items-center gap-2"
              >
                <Sparkles size={14} />
                <span>Start Judge Demo</span>
              </button>
            </div>

            {/* Quick Proof Cards matching screenshot */}
            <div className="pt-6 border-t border-brand-border grid grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF4D00] shrink-0">
                  <Share2 size={18} />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-brand-black block leading-none">1,248</span>
                  <span className="text-[11px] font-semibold text-brand-muted">Knowledge Nodes</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF4D00] shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-brand-black block leading-none">100%</span>
                  <span className="text-[11px] font-semibold text-brand-muted">Source Provenance</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF4D00] shrink-0">
                  <ShieldAlert size={18} />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-brand-black block leading-none">78%</span>
                  <span className="text-[11px] font-semibold text-brand-muted">Risk Mitigation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column — Interactive Knowledge Infrastructure */}
          <div className="lg:col-span-6">
            <GlassCard variant="elevated" className="p-6 relative overflow-hidden min-h-[420px] bg-gradient-to-br from-white via-orange-50/20 to-slate-50">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D00] animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-black">Live Knowledge Network Visualizer</span>
                </div>
                <Badge variant="orange">Interactive Nodes</Badge>
              </div>

              {/* Node Canvas Area */}
              <div className="relative h-72 w-full rounded-control border border-brand-border/60 p-4 overflow-hidden bg-black">
                {/* Canvas Video Background */}
                <div className="absolute inset-0 pointer-events-none opacity-80">
                  <BackgroundGridVideo opacity={0.8} overlayDarkness={0.15} interactive={false} />
                </div>

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="20%" y1="30%" x2="55%" y2="25%" stroke="#FF4D00" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse-slow" />
                  <line x1="55%" y1="25%" x2="78%" y2="45%" stroke="#FF4D00" strokeWidth="1.5" />
                  <line x1="20%" y1="30%" x2="35%" y2="70%" stroke="#FF8855" strokeWidth="1.5" />
                  <line x1="55%" y1="25%" x2="68%" y2="80%" stroke="#FF4D00" strokeWidth="2" />
                  <line x1="35%" y1="70%" x2="68%" y2="80%" stroke="#A855F7" strokeWidth="1.5" />
                </svg>

                {/* Nodes */}
                {heroNodes.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setActiveHeroNode(node.id)}
                    style={{ left: node.x, top: node.y }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-card bg-white border transition-all duration-300 shadow-md flex items-center gap-2 group ${
                      activeHeroNode === node.id ? 'border-[#FF4D00] ring-4 ring-orange-100 scale-105 z-20 shadow-glow-orange' : 'border-brand-border hover:border-[#FF4D00] z-10'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${node.color}`}></span>
                    <div className="text-left">
                      <p className="text-xs font-bold text-brand-black whitespace-nowrap">{node.title}</p>
                      <p className="text-[10px] font-semibold text-brand-muted">{node.type}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Inspector Banner for Selected Hero Node */}
              {(() => {
                const node = heroNodes.find(n => n.id === activeHeroNode) || heroNodes[0];
                return (
                  <div className="mt-4 p-3.5 rounded-control bg-brand-soft border border-brand-border flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D00] block">Selected Node Metadata</span>
                      <p className="text-xs font-bold text-brand-black">{node.title} — <span className="text-brand-muted font-medium">{node.subtitle}</span></p>
                    </div>
                    <button
                      onClick={() => setActivePage('graph')}
                      className="px-3.5 py-1.5 rounded-pill bg-[#FF4D00] text-white text-xs font-semibold hover:bg-[#E03E00] transition-all flex items-center gap-1"
                    >
                      <span>Explore Graph</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                );
              })()}
            </GlassCard>
          </div>

        </div>
      </section>

      {/* 2. TRUST / POSITIONING STRIP */}
      <section className="py-8 bg-[#FFF5F2] border-y border-orange-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF4D00]">
            Built for organizations where knowledge is too valuable to lose
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-bold text-brand-black">
            <div className="flex items-center gap-2">
              <Database size={18} className="text-[#FF4D00]" />
              <span>Organizational Memory</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb size={18} className="text-[#FF4D00]" />
              <span>Knowledge Intelligence</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-[#FF4D00]" />
              <span>Operational Continuity</span>
            </div>
            <div className="flex items-center gap-2">
              <Send size={18} className="text-[#FF4D00]" />
              <span>Future Readiness</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METRIC SECTION (LARGE VIBRANT ORANGE PANEL MATCHING SCREENSHOT) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#FF4D00] via-[#F23B00] to-[#C82A00] text-white rounded-card-xl p-8 sm:p-14 shadow-floating relative overflow-hidden">
          {/* Subtle Background Waves */}
          <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>

          <div className="relative z-10 space-y-10">
            <div className="max-w-2xl">
              <Badge variant="orange" className="bg-white/20 text-white border-white/30 mb-3">Enterprise Impact</Badge>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Four pillars of organizational continuity.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-card bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                <span className="text-3xl font-extrabold text-white font-mono">01</span>
                <h3 className="text-lg font-bold text-white mt-2">Organizational Memory</h3>
                <p className="text-xs text-orange-100 mt-1 leading-relaxed font-medium">
                  Capture tacit human knowledge before key engineers and experts retire.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-2 text-white/90">
                  <Brain size={18} />
                </div>
              </div>

              <div className="p-6 rounded-card bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                <span className="text-3xl font-extrabold text-white font-mono">02</span>
                <h3 className="text-lg font-bold text-white mt-2">Multimodal Intelligence</h3>
                <p className="text-xs text-orange-100 mt-1 leading-relaxed font-medium">
                  Extract wisdom from voice recordings, legacy logs, documents, and more.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-2 text-white/90">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="p-6 rounded-card bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                <span className="text-3xl font-extrabold text-white font-mono">03</span>
                <h3 className="text-lg font-bold text-white mt-2">Operational Continuity</h3>
                <p className="text-xs text-orange-100 mt-1 leading-relaxed font-medium">
                  Ensure critical processes and decisions continue seamlessly.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-2 text-white/90">
                  <GearIcon size={18} />
                </div>
              </div>

              <div className="p-6 rounded-card bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                <span className="text-3xl font-extrabold text-white font-mono">04</span>
                <h3 className="text-lg font-bold text-white mt-2">Future Readiness</h3>
                <p className="text-xs text-orange-100 mt-1 leading-relaxed font-medium">
                  Build a knowledge foundation that adapts and scales with your future.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-2 text-white/90">
                  <Send size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEM SECTION — FRAGMENTED vs CONNECTED */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="rose">The Challenge</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black leading-tight">
              The most valuable knowledge is often the least documented.
            </h2>
            <p className="text-brand-muted text-base leading-relaxed font-medium">
              Organizations accumulate decades of critical experience inside employees' minds, verbal troubleshooting habits, and unindexed logbooks. When experts retire, institutions lose more than staff — they lose operational memory.
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-control bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-3">
                <AlertTriangle size={18} className="text-rose-600 shrink-0" />
                <span>Single-Person Expert Concentration creates massive downtime risks.</span>
              </div>
              <div className="p-3.5 rounded-control bg-orange-50 border border-orange-200 text-[#FF4D00] text-xs font-semibold flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#FF4D00] shrink-0" />
                <span>EVORIGEN captures, indexes, and grounds experience into searchable AI memory.</span>
              </div>
            </div>

            <button
              onClick={() => setProblemConnected(!problemConnected)}
              className="px-5 py-2.5 rounded-pill bg-brand-black text-white text-xs font-bold hover:bg-[#FF4D00] transition-all flex items-center gap-2"
            >
              <RotateCcw size={14} />
              <span>Toggle State: {problemConnected ? 'Connected Network' : 'Fragmented Knowledge'}</span>
            </button>
          </div>

          <div className="lg:col-span-7">
            <GlassCard variant="elevated" className="p-8 relative min-h-[380px] flex flex-col justify-between bg-brand-soft">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-black">
                  Knowledge Network State: {problemConnected ? 'EVORIGEN Unified Graph' : 'Fragmented Silos'}
                </span>
                <Badge variant={problemConnected ? 'emerald' : 'rose'}>
                  {problemConnected ? '82% Risk Mitigated' : 'High Dependency Risk'}
                </Badge>
              </div>

              {/* Visual Node Grid */}
              <div className="my-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Dr. Arun (Senior Engineer)', role: '34 Yrs Tacit Experience', status: problemConnected ? 'Indexed & Connected' : 'Isolated Expert' },
                  { name: 'CNC Vibration Protocol', role: 'Spindle Diagnostics', status: problemConnected ? 'Mapped in Graph' : 'Undocumented' },
                  { name: 'Logbook #4092', role: 'Empirical Maintenance', status: problemConnected ? 'RAG Vector Indexed' : 'Physical Paper' },
                  { name: 'Foundation Alignment', role: 'Thermal Expansion', status: problemConnected ? 'Linked Rule' : 'Oral Memory' },
                  { name: 'Junior Maintenance Team', role: 'Knowledge Transferee', status: problemConnected ? '68% Completed' : 'No Transfer Plan' },
                  { name: 'Factory Operations', role: 'Continuity Index', status: problemConnected ? 'Protected (94/100)' : 'Vulnerable (32/100)' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-control border transition-all duration-300 ${
                      problemConnected
                        ? 'bg-white border-orange-200 shadow-sm'
                        : 'bg-rose-50/50 border-rose-200 opacity-80'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${problemConnected ? 'bg-[#FF4D00]' : 'bg-rose-500'}`}></span>
                      <p className="text-xs font-bold text-brand-black truncate">{item.name}</p>
                    </div>
                    <p className="text-[10px] font-semibold text-brand-muted">{item.role}</p>
                    <p className={`text-[10px] font-bold mt-2 ${problemConnected ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-brand-muted text-center font-medium">
                {problemConnected
                  ? '✓ All entities are semantically linked with source grounding.'
                  : '⚠ Critical knowledge is fragmented across disconnected spreadsheets and individuals.'}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES SECTION (INTELLIGENCE LAYER) */}
      <section className="py-20 bg-brand-soft/50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-4">
              <Badge variant="orange">Our Intelligence Layer</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black">
                Comprehensive capabilities for managing legacy knowledge.
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed font-medium">
                EVORIGEN transforms fragmented organizational knowledge into connected intelligence that teams can search, understand, and act on.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '01. Knowledge Capture', desc: 'Capture knowledge from people, documents, audio interviews, and operational media.', icon: Database },
                { title: '02. AI Extraction', desc: 'Extract skills, processes, decisions, problems, and lessons using domain AI models.', icon: Cpu },
                { title: '03. Knowledge Graph', desc: 'Connect organizational knowledge into a high-dimensional dependency network.', icon: Share2 },
                { title: '04. Intelligence Assistant', desc: 'Ask questions and retrieve source-grounded answers with full empirical provenance.', icon: Bot },
                { title: '05. Risk Intelligence', desc: 'Identify single-expert dependencies and knowledge concentration vulnerabilities.', icon: ShieldAlert },
                { title: '06. Future Simulation', desc: 'Model the impact of key staff retirements and simulate succession strategies.', icon: TrendingUp },
              ].map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <GlassCard key={idx} variant="default" className="p-5 hover:border-[#FF4D00] group">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-control bg-orange-50 text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-all">
                        <Icon size={20} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-brand-black">{cap.title}</h3>
                        <p className="text-xs text-brand-muted font-medium leading-relaxed">{cap.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 6. STRATEGIC EDITORIAL CARDS WITH BLURRED BOTTOM GLOWS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <Badge variant="orange">Strategic Vision</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-brand-black">
            Strategic Intelligence for Modern Enterprises
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 — Yellow Glow */}
          <GlassCard variant="glow-yellow" className="p-8 flex flex-col justify-between space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Insight #01</span>
            <blockquote className="text-xl font-medium text-brand-black leading-snug">
              “Critical knowledge is rarely stored in one place.”
            </blockquote>
            <p className="text-xs text-brand-muted font-medium leading-relaxed">
              It resides across decades of verbal decisions, informal habits, and individual technical intuition.
            </p>
          </GlassCard>

          {/* Card 2 — Cyan/Orange Glow */}
          <GlassCard variant="glow-cyan" className="p-8 flex flex-col justify-between space-y-8 md:translate-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">Insight #02</span>
            <blockquote className="text-xl font-medium text-brand-black leading-snug">
              “EVORIGEN turns experience into structured organizational intelligence.”
            </blockquote>
            <p className="text-xs text-brand-muted font-medium leading-relaxed">
              Converting isolated tacit knowledge into a searchable, transferable, and permanent asset.
            </p>
          </GlassCard>

          {/* Card 3 — Coral Glow */}
          <GlassCard variant="glow-coral" className="p-8 flex flex-col justify-between space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">Insight #03</span>
            <blockquote className="text-xl font-medium text-brand-black leading-snug">
              “Preserve today's expertise before tomorrow depends on it.”
            </blockquote>
            <p className="text-xs text-brand-muted font-medium leading-relaxed">
              Prevent operational disruptions before retirement timelines create irreversible knowledge gaps.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 7. KNOWLEDGE INFRASTRUCTURE SECTION */}
      <section className="py-20 bg-brand-soft border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-2xl space-y-3">
            <Badge variant="orange">Knowledge Architecture</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-brand-black">
              Your organization is a network of knowledge.
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed font-medium">
              People, processes, machines, documents, decisions, and experience are already connected. EVORIGEN makes those relationships visible and actionable.
            </p>
          </div>

          {/* Orange Wireframe Architecture Box */}
          <div className="p-8 rounded-card-lg bg-white border border-brand-border shadow-card relative overflow-hidden">
            <div className="h-64 w-full bg-grid-pattern rounded-control border border-brand-border/80 p-6 flex flex-col justify-between relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FF4D00] uppercase tracking-wider">Universal Legacy Wireframe Infrastructure</span>
                <span className="text-[10px] font-mono text-brand-muted">NETWORK_NODES: 1,248</span>
              </div>

              {/* Wireframe Architectural Visual Lines */}
              <div className="relative flex-1 my-4 flex items-center justify-around">
                <div className="p-3 rounded-card bg-orange-50 border border-orange-200 text-center space-y-1 shadow-sm">
                  <p className="text-xs font-bold text-brand-black">People & Experts</p>
                  <p className="text-[10px] text-brand-muted">42 Active Holders</p>
                </div>
                <div className="w-12 h-0.5 bg-[#FF4D00]"></div>
                <div className="p-3 rounded-card bg-emerald-50 border border-emerald-200 text-center space-y-1 shadow-sm">
                  <p className="text-xs font-bold text-brand-black">Tacit Skills</p>
                  <p className="text-[10px] text-brand-muted">86 Critical Rules</p>
                </div>
                <div className="w-12 h-0.5 bg-[#FF4D00]"></div>
                <div className="p-3 rounded-card bg-amber-50 border border-amber-200 text-center space-y-1 shadow-sm">
                  <p className="text-xs font-bold text-brand-black">Processes</p>
                  <p className="text-[10px] text-brand-muted">14 Dependent Flowlines</p>
                </div>
              </div>

              <div className="flex justify-between text-[11px] font-semibold text-brand-muted">
                <span>RAG Hybrid Retrieval</span>
                <span>Grounding Verification: 99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRODUCT SHOWCASE (DEEP ORANGE ATMOSPHERIC BACKGROUND WITH VIDEO) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1A0600] text-white rounded-card-xl p-8 sm:p-14 shadow-floating relative overflow-hidden space-y-10 border border-orange-900/40">
          {/* Animated Video Background */}
          <div className="absolute inset-0 pointer-events-none opacity-90">
            <BackgroundGridVideo opacity={0.85} overlayDarkness={0.2} interactive={true} />
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <Badge variant="orange" className="bg-white/10 text-white border-white/20 mb-2">Interface Preview</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience EVORIGEN Platform Modules</h2>
            </div>
            <button
              onClick={() => setActivePage('dashboard')}
              className="px-5 py-2.5 rounded-pill bg-[#FF4D00] text-white font-bold text-xs hover:bg-[#E03E00] transition-all"
            >
              Launch Live App →
            </button>
          </div>

          {/* Layered Product Interface Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Panel 1 — Knowledge Vault */}
            <div className="p-5 rounded-card bg-white/10 backdrop-blur-md border border-white/15 space-y-4 hover:border-orange-400/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-orange-200">Knowledge Vault</span>
                <Badge variant="orange" className="bg-orange-500/20 text-orange-200">1,248 Items</Badge>
              </div>
              <p className="text-xs text-orange-100/80 font-medium">Multimodal empirical archive with instant RAG semantic search.</p>
              <div className="p-3 rounded-control bg-black/30 border border-white/10 text-[11px] font-mono space-y-1">
                <p className="text-emerald-300 font-bold">✓ CNC Spindle Vibration Log #4092</p>
                <p className="text-slate-300">Empirical diagnostic procedure uploaded by Dr. Arun.</p>
              </div>
            </div>

            {/* Panel 2 — Universal Graph */}
            <div className="p-5 rounded-card bg-white/10 backdrop-blur-md border border-white/15 space-y-4 hover:border-orange-400/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-orange-200">Universal Legacy Graph</span>
                <Badge variant="emerald" className="bg-emerald-500/20 text-emerald-200">Interactive</Badge>
              </div>
              <p className="text-xs text-orange-100/80 font-medium">Map entity relationships between skills, engineers, and processes.</p>
              <div className="p-3 rounded-control bg-black/30 border border-white/10 text-[11px] font-mono space-y-1">
                <p className="text-orange-300 font-bold">Dr. Arun → Knows → Vibration Diag</p>
                <p className="text-slate-300">2 Active Holders • Risk Score: 78/100</p>
              </div>
            </div>

            {/* Panel 3 — Future Impact Simulator */}
            <div className="p-5 rounded-card bg-white/10 backdrop-blur-md border border-white/15 space-y-4 hover:border-orange-400/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-orange-200">Future Simulator</span>
                <Badge variant="gold" className="bg-amber-500/20 text-amber-200">25-Yr Projection</Badge>
              </div>
              <p className="text-xs text-orange-100/80 font-medium">Simulate knowledge loss risks and plan automated succession transfer.</p>
              <div className="p-3 rounded-control bg-black/30 border border-white/10 text-[11px] font-mono space-y-1">
                <p className="text-amber-300 font-bold">Retirement Scenario: Dr. Arun</p>
                <p className="text-slate-300">14 Processes Affected • Transfer Plan Active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AI INTELLIGENCE INTERACTIVE DEMO */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <Badge variant="orange">RAG & AI Intelligence</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-brand-black">
              Ask your organization what it knows.
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed font-medium">
              Query decades of accumulated experience in natural language. Every answer is grounded in verified source recordings and documentation.
            </p>

            <div className="space-y-2 pt-2">
              {[
                "Which critical processes depend on only one employee?",
                "How did Arun diagnose CNC spindle vibration during maintenance?",
                "What family agrarian financial hedging principles were recorded?"
              ].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRunAiQuery(q)}
                  className={`w-full text-left p-3 rounded-control text-xs font-semibold border transition-all flex items-center justify-between ${
                    selectedQuestion === q
                      ? 'bg-orange-50 border-[#FF4D00] text-[#FF4D00] shadow-2xs'
                      : 'bg-white border-brand-border text-brand-black hover:border-[#FF4D00]'
                  }`}
                >
                  <span>{q}</span>
                  <ArrowRight size={14} className={selectedQuestion === q ? 'text-[#FF4D00]' : 'text-brand-muted'} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <GlassCard variant="elevated" className="p-6 bg-brand-soft space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <Bot size={18} className="text-[#FF4D00]" />
                  <span className="text-xs font-bold text-brand-black">EVORIGEN AI Assistant (Vector RAG)</span>
                </div>
                <Badge variant="emerald">Source Grounded</Badge>
              </div>

              {/* Chat Bubble Simulation */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-control bg-orange-50/80 border border-orange-200 text-[#FF4D00] font-semibold">
                  Q: {selectedQuestion}
                </div>

                {isAiLoading ? (
                  <div className="p-4 rounded-control bg-white border border-brand-border text-brand-muted font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping"></span>
                    <span>Retrieving empirical RAG vectors...</span>
                  </div>
                ) : (
                  <div className="p-4 rounded-control bg-white border border-brand-border text-brand-black space-y-3 shadow-2xs">
                    <p className="leading-relaxed font-medium">
                      Based on Dr. Arun's recorded interview (Session #4, 14:32) and Maintenance Log #4092: CNC vibration diagnosis requires assessing foundation anchor bolt torque harmonics prior to replacing spindle bearings. In 82% of reported cases, foundation thermal drift was the root cause.
                    </p>

                    <div className="pt-2 border-t border-brand-border space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Grounded Evidence Sources:</span>
                      <div className="flex flex-wrap gap-2 text-[10px]">
                        <span className="px-2 py-1 rounded-pill bg-brand-soft border border-brand-border text-brand-black font-semibold flex items-center gap-1">
                          <FileText size={12} className="text-[#FF4D00]" />
                          Arun Interview Session #4 (14:32)
                        </span>
                        <span className="px-2 py-1 rounded-pill bg-brand-soft border border-brand-border text-brand-black font-semibold flex items-center gap-1">
                          <FileText size={12} className="text-[#FF4D00]" />
                          Maintenance Log #4092
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 10. FINAL ORANGE CTA SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1A0600] text-white rounded-card-xl p-10 sm:p-16 shadow-floating text-center space-y-6 relative overflow-hidden border border-orange-800/40">
          {/* Animated Video Background */}
          <div className="absolute inset-0 pointer-events-none">
            <BackgroundGridVideo opacity={0.75} overlayDarkness={0.2} interactive={false} />
          </div>

          <div className="relative z-10 space-y-6">
            <Badge variant="orange" className="bg-white/20 text-white border-white/30 mx-auto">Get Started Today</Badge>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Don't let your organization's knowledge retire with its people.
            </h2>

            <p className="text-lg text-orange-100 font-semibold max-w-xl mx-auto">
              Capture it. Connect it. Preserve it. Transfer it.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setActivePage('dashboard')}
                className="px-8 py-3.5 rounded-pill bg-[#FF4D00] text-white font-bold text-sm hover:bg-[#E03E00] transition-all shadow-glow-orange"
              >
                Start with EVORIGEN
              </button>
              <button
                onClick={startJudgeDemo}
                className="px-8 py-3.5 rounded-pill bg-white/10 border border-white/25 text-white font-bold text-sm hover:bg-white/20 transition-all"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="mt-20 bg-[#1A0600] text-white pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-control bg-[#FF4D00] flex items-center justify-center text-white font-bold text-sm">
                  E
                </div>
                <span className="font-bold text-lg text-white">EVORIGEN</span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-medium">
                AI-Powered Legacy Intelligence Platform transforming organizational experience into permanent connected memory.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <p className="font-bold uppercase tracking-wider text-white">Platform</p>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li><button onClick={() => setActivePage('library')} className="hover:text-white">Knowledge Vault</button></li>
                <li><button onClick={() => setActivePage('graph')} className="hover:text-white">Knowledge Graph</button></li>
                <li><button onClick={() => setActivePage('assistant')} className="hover:text-white">AI Assistant</button></li>
                <li><button onClick={() => setActivePage('risk')} className="hover:text-white">Legacy Risk</button></li>
              </ul>
            </div>

            <div className="space-y-3 text-xs">
              <p className="font-bold uppercase tracking-wider text-white">Solutions</p>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li><button onClick={() => setActivePage('transfer')} className="hover:text-white">Knowledge Transfer</button></li>
                <li><button onClick={() => setActivePage('organization')} className="hover:text-white">Succession Planning</button></li>
                <li><button onClick={() => setActivePage('multidomain')} className="hover:text-white">Multi-Domain Impact</button></li>
              </ul>
            </div>

            <div className="space-y-3 text-xs">
              <p className="font-bold uppercase tracking-wider text-white">Company</p>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li><button onClick={() => setActivePage('status')} className="hover:text-white">System Status</button></li>
                <li><button onClick={() => setActivePage('architecture')} className="hover:text-white">Tech Architecture</button></li>
                <li><button onClick={() => setActivePage('api')} className="hover:text-white">Developer API</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-semibold">
            <p>EVORIGEN © 2026 — AI-Powered Legacy Intelligence Platform</p>
            <p className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              All Systems Operational
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
