import React, { useState } from 'react';
import { useDemo } from '../../context/useDemo';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import {
  Mic,
  Video,
  FileText,
  MessageSquare,
  PenTool,
  Upload,
  Sparkles,
  CheckCircle2,
  Cpu,
  Brain,
  ArrowRight
} from 'lucide-react';

export const LegacyCaptureView: React.FC = () => {
  const { setActivePage, runProcessingPipeline, addUploadedFile } = useDemo();
  const [activeTab, setActiveTab] = useState<'audio' | 'video' | 'doc' | 'interview' | 'manual'>('interview');
  const [interviewAnswer, setInterviewAnswer] = useState(
    "The vibration pattern was different from normal bearing failure. We eventually discovered that the foundation alignment had shifted after maintenance."
  );
  const [liveExtracted, setLiveExtracted] = useState(false);
  const [fileUploadedState, setFileUploadedState] = useState(false);

  const handleSimulateInterview = () => {
    setTimeout(() => {
      setLiveExtracted(true);
    }, 400);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploadedState(true);
      addUploadedFile();
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="02"
        tag="TACIT ENGINE"
        title="Capture a Legacy"
        subtitle="Capture the knowledge behind the experience. Upload voice recordings, video sessions, technical documents, or engage in interactive AI Interview Mode."
      />

      {/* Tabs Row */}
      <div className="flex flex-wrap items-center gap-2 border-b border-surface-border pb-3">
        {[
          { id: 'interview', label: 'AI Interview Mode', icon: MessageSquare, badge: 'Recommended' },
          { id: 'audio', label: 'Audio Recording', icon: Mic },
          { id: 'video', label: 'Video Session', icon: Video },
          { id: 'doc', label: 'Document / PDF', icon: FileText },
          { id: 'manual', label: 'Manual Entry', icon: PenTool },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-control text-xs font-medium transition-all ${
                isActive
                  ? 'bg-accent text-background shadow-soft-sm'
                  : 'bg-surface-soft hover:bg-surface-subtle text-primary-muted border border-surface-border'
              }`}
            >
              <Icon size={15} className={isActive ? 'text-background' : 'text-primary-muted'} />
              <span>{tab.label}</span>
              {tab.badge && <Badge variant="gold">{tab.badge}</Badge>}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT 1: INTERVIEW CAPTURE MODE */}
      {activeTab === 'interview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: AI Interview Prompt */}
          <GlassCard variant="gold" className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain size={18} className="text-accent" />
                <h3 className="text-base font-medium font-sans text-primary">AI Tacit Interviewer</h3>
              </div>
              <Badge variant="gold">Active Session: Dr. Arun Kumar</Badge>
            </div>

            {/* AI Question Bubble */}
            <div className="p-4 rounded-control bg-surface border border-accent/30 space-y-1.5 shadow-sm">
              <span className="text-[10px] font-sans text-accent font-medium uppercase tracking-wider">
                EVORIGEN AI Prompt #04
              </span>
              <p className="text-sm text-primary font-medium leading-relaxed">
                “Describe the most difficult machine failure you encountered during your career.”
              </p>
            </div>

            {/* Expert Input / Response */}
            <div className="space-y-2">
              <label className="text-xs font-sans text-primary-muted flex items-center justify-between">
                <span>Expert Response Input (Simulated Transcript / Audio Speech)</span>
                <span className="text-accent font-medium">Dr. Arun (Senior Specialist)</span>
              </label>
              <textarea
                value={interviewAnswer}
                onChange={(e) => setInterviewAnswer(e.target.value)}
                rows={4}
                className="w-full bg-surface border border-surface-border focus:border-accent rounded-control p-3.5 text-xs text-primary placeholder-primary-light focus:outline-none leading-relaxed font-sans shadow-sm"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleSimulateInterview}
                className="px-5 py-2.5 rounded-control bg-surface border border-accent/40 hover:border-accent text-primary font-medium text-xs flex items-center gap-2 shadow-sm transition-all"
              >
                <Sparkles size={14} className="text-accent" />
                <span>Analyze Expert Answer</span>
              </button>

              <button
                onClick={() => {
                  runProcessingPipeline();
                  setActivePage('processing');
                }}
                className="px-5 py-2.5 rounded-control bg-accent text-white shadow-glow-accent hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(255,112,67,0.16)] transition-all font-medium text-xs flex items-center gap-2 shadow-soft-sm transition-all"
              >
                <span>Process with EVORIGEN AI</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </GlassCard>

          {/* Right: Live AI Extraction Panel */}
          <GlassCard variant="cyan" className="space-y-4">
            <div className="flex items-center justify-between border-b border-surface-border pb-3">
              <div className="flex items-center gap-2">
                <Cpu size={18} className="text-accent" />
                <h3 className="text-base font-medium font-sans text-primary">Live NLP Entity Extraction</h3>
              </div>
              <span className="text-xs font-sans text-primary-muted">
                {liveExtracted ? "● 5 Entities Detected" : "Waiting for Input..."}
              </span>
            </div>

            {liveExtracted ? (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between">
                  <span className="text-xs text-primary-muted">Skill Identified:</span>
                  <span className="text-xs font-medium text-primary">Failure Diagnosis</span>
                </div>

                <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between">
                  <span className="text-xs text-primary-muted">Problem Pattern:</span>
                  <span className="text-xs font-medium text-status-critical-text">Foundation Misalignment</span>
                </div>

                <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between">
                  <span className="text-xs text-primary-muted">Context:</span>
                  <span className="text-xs font-medium text-status-info-text">Post-maintenance vibration</span>
                </div>

                <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between">
                  <span className="text-xs text-primary-muted">Experience Level:</span>
                  <span className="text-xs font-medium text-status-success-text">Expert (34 Years)</span>
                </div>

                <div className="p-3.5 rounded-control bg-surface border border-surface-border flex items-center justify-between">
                  <span className="text-xs text-primary-muted">Extraction Confidence:</span>
                  <span className="text-xs font-medium text-primary">92%</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      runProcessingPipeline();
                      setActivePage('processing');
                    }}
                    className="w-full py-3 rounded-control bg-accent text-white shadow-glow-accent hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(255,112,67,0.16)] transition-all font-medium text-xs shadow-soft-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Proceed to Full AI Pipeline</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 space-y-3 text-primary-muted">
                <Brain size={36} className="text-accent/50" />
                <p className="text-xs text-primary-muted">
                  Click "Analyze Expert Answer" to run real-time Tacit Knowledge entity detection.
                </p>
              </div>
            )}
          </GlassCard>
        </div>
      )}

      {/* OTHER TABS: DRAG & DROP UPLOAD */}
      {activeTab !== 'interview' && (
        <GlassCard variant="default" className="p-8 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 mx-auto rounded-control bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shadow-soft-sm">
              <Upload size={24} />
            </div>

            <div>
              <h3 className="text-lg font-medium font-sans text-primary">Drag & Drop Legacy Files Here</h3>
              <p className="text-xs text-primary-muted mt-1">
                Upload historical audio logs, maintenance videos, manuals, or engineering blueprints.
              </p>
            </div>

            {/* Drop Zone Box */}
            <label className="block p-8 border-2 border-dashed border-surface-border hover:border-accent rounded-control bg-surface cursor-pointer transition-all">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept=".mp3,.wav,.mp4,.pdf,.docx,.txt,.jpg,.png"
              />
              <span className="text-xs font-sans text-primary block font-medium mb-1">
                Click to Select Files or Drop Here
              </span>
              <span className="text-[11px] font-sans text-primary-light block">
                Supported Formats: MP3, WAV, MP4, PDF, DOCX, TXT, JPG, PNG
              </span>
            </label>

            {fileUploadedState && (
              <div className="p-3.5 rounded-full bg-status-success/40 border border-status-success-text/30 text-status-success-text text-xs font-sans flex items-center justify-center gap-2">
                <CheckCircle2 size={16} />
                <span>File received successfully! Ready for AI Processing pipeline.</span>
              </div>
            )}

            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  runProcessingPipeline();
                  setActivePage('processing');
                }}
                className="px-4 py-2 rounded-control text-sm bg-accent text-white shadow-glow-accent hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(255,112,67,0.16)] transition-all font-medium text-xs shadow-soft-sm flex items-center gap-2 transition-all"
              >
                <Sparkles size={14} />
                <span>Start AI Processing Pipeline</span>
              </button>
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
};
