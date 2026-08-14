import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

export const KnowledgeTransferView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const learningSteps = [
    {
      title: "1. Recognizing Abnormal Vibration Harmonics",
      desc: "Dr. Arun's primary rule: Distinguish 1st-order rotational imbalance from 2nd-order foundation pad resonance.",
      details: "Inspect sensor spectral peaks between 120Hz and 240Hz before ordering spindle removal."
    },
    {
      title: "2. Empirical Diagnostic Sequence",
      desc: "Step-by-step procedure developed over 34 years at Bharat Heavy Precision Engineering.",
      details: "1. Mount accelerometer on bedplate pad. 2. Verify expansion bolt torque. 3. Inspect lubricant viscosity."
    },
    {
      title: "3. Common Costly Mistakes to Avoid",
      desc: "Replacing high-speed ceramic bearing races unnecessarily ($45,000 per spindle).",
      details: "82% of reported post-maintenance vibration spikes stem from bedplate thermal growth, NOT bearing wear."
    },
    {
      title: "4. Practical Case Study & Quiz",
      desc: "Test your understanding on a real 2021 CNC spindle anomaly scenario.",
      details: "Practice scenario based on actual incident #4092."
    }
  ];

  const quizOptions = [
    "Immediately order a new $45,000 ceramic spindle bearing replacement.",
    "Check foundation anchor expansion pad alignment and bolt torque harmonics first.",
    "Increase spindle speed to bypass the vibration resonant frequency.",
    "Shut down the entire manufacturing line for 3 days for teardown."
  ];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="10"
        tag="CAPABILITY TRANSFER"
        title="Turn Experience into Learning"
        subtitle="Transform raw expert intuition into structured interactive training modules for junior engineers and future successors."
      />

      {/* Visual Transformation Banner */}
      <GlassCard variant="gold" className="p-6 text-center space-y-4">
        <Badge variant="gold">Generational Transfer Flow</Badge>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-sans">
          <div className="p-3.5 rounded-control bg-surface border border-surface-border text-primary font-medium shadow-sm">
            Expert Knowledge (Dr. Arun — 34 yrs)
          </div>
          <ArrowRight size={18} className="text-primary rotate-90 sm:rotate-0 shrink-0" />
          <div className="p-3.5 rounded-control bg-accent/20 border border-accent/30 text-primary font-medium shadow-sm">
            AI-Generated Learning Path
          </div>
          <ArrowRight size={18} className="text-primary rotate-90 sm:rotate-0 shrink-0" />
          <div className="p-3.5 rounded-control bg-surface border border-surface-border text-status-info-text font-medium shadow-sm">
            Future Learner (Priya Sharma — Successor)
          </div>
        </div>
      </GlassCard>

      {/* Active Module: CNC Vibration Diagnosis Expert Module */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Col: Step Navigation */}
        <GlassCard variant="default" className="space-y-4">
          <div className="flex items-center gap-2 border-b border-surface-border pb-3">
            <GraduationCap size={18} className="text-primary" />
            <h3 className="text-sm font-medium font-sans text-primary">Module Curriculum</h3>
          </div>

          <div className="space-y-2">
            {learningSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveStep(idx);
                  setQuizSubmitted(false);
                  setSelectedQuizOption(null);
                }}
                className={`w-full text-left p-3.5 rounded-control border transition-all ${
                  activeStep === idx
                    ? 'bg-surface-soft border-surface-border text-primary shadow-sm'
                    : 'bg-[rgba(255,255,255,0.035)] border border-[rgba(255,255,255,0.08)] text-[#EDEDEF] hover:bg-[rgba(255,255,255,0.05)] hover:-translate-y-[1px] transition-all'
                }`}
              >
                <div className="text-xs font-medium font-sans">{step.title}</div>
                <div className={`text-[11px] font-sans truncate mt-1 ${activeStep === idx ? 'text-primary' : 'text-primary-muted'}`}>
                  {step.desc}
                </div>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Right 2 Cols: Active Step Content & Interactive Quiz */}
        <GlassCard variant="cyan" className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-[#C8DCF1]/80 pb-3">
            <span className="text-xs font-sans text-status-info-text uppercase font-medium">
              Active Module Step {activeStep + 1} of 4
            </span>
            <Badge variant="cyan">Dr. Arun Masterclass</Badge>
          </div>

          <div>
            <h3 className="text-xl font-medium font-sans text-primary">
              {learningSteps[activeStep].title}
            </h3>
            <p className="text-sm text-primary-muted mt-2 leading-relaxed font-sans">
              {learningSteps[activeStep].desc}
            </p>
          </div>

          <div className="p-4 rounded-control bg-surface border border-surface-border space-y-2 text-xs font-sans shadow-sm">
            <div className="flex items-center gap-2 text-status-warning-text font-medium">
              <Lightbulb size={16} />
              <span>Tacit Intuition Guideline</span>
            </div>
            <p className="text-primary leading-relaxed">
              {learningSteps[activeStep].details}
            </p>
          </div>

          {/* Interactive Quiz Scenario on Step 4 */}
          {activeStep === 3 && (
            <div className="p-5 rounded-control bg-surface border border-accent/30 space-y-4 shadow-sm animate-in fade-in">
              <div className="flex items-center gap-2 text-primary font-medium text-xs">
                <HelpCircle size={16} className="text-status-info-text" />
                <span>Practice Scenario Quiz: CNC Vibration Anomaly</span>
              </div>

              <p className="text-xs text-primary leading-relaxed">
                You are junior engineer Priya. Post-maintenance CNC axis #4 exhibits 2nd-order acoustic vibration. What is your first action based on Arun's legacy?
              </p>

              <div className="space-y-2">
                {quizOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedQuizOption(idx)}
                    className={`w-full text-left p-3.5 rounded-control border text-xs font-sans transition-all ${
                      selectedQuizOption === idx
                        ? 'bg-accent/10 border-accent/30 text-primary font-medium shadow-sm'
                        : 'bg-surface border-surface-border text-primary-muted hover:bg-surface hover:text-primary'
                    }`}
                  >
                    {idx + 1}. {opt}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={selectedQuizOption === null}
                  className={`px-5 py-2.5 rounded-control font-medium text-xs transition-all ${
                    selectedQuizOption !== null
                      ? 'bg-surface-soft hover:bg-surface-subtle text-primary shadow-sm'
                      : 'bg-surface-subtle opacity-50 text-primary-muted cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>

                {quizSubmitted && selectedQuizOption === 1 && (
                  <div className="text-xs font-sans text-status-success-text flex items-center gap-1.5 font-medium">
                    <CheckCircle2 size={16} /> Correct! Saved $45,000 & 3 days downtime.
                  </div>
                )}
                {quizSubmitted && selectedQuizOption !== 1 && selectedQuizOption !== null && (
                  <div className="text-xs font-sans text-status-critical-text flex items-center gap-1.5 font-medium">
                    Review rule #2: Foundation pad alignment check precedes bearing replacement.
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t border-[#C8DCF1]/80">
            <button
              onClick={() => {
                setActiveStep(prev => Math.max(prev - 1, 0));
                setQuizSubmitted(false);
                setSelectedQuizOption(null);
              }}
              disabled={activeStep === 0}
              className="px-4 py-2 rounded-control bg-surface border border-surface-border text-primary hover:bg-surface-soft text-xs font-medium disabled:opacity-40"
            >
              Previous Section
            </button>

            <button
              onClick={() => {
                setActiveStep(prev => Math.min(prev + 1, 3));
                setQuizSubmitted(false);
                setSelectedQuizOption(null);
              }}
              disabled={activeStep === 3}
              className="px-5 py-2 rounded-control bg-surface-soft hover:bg-surface-subtle text-primary font-medium text-xs disabled:opacity-40 shadow-sm"
            >
              Next Section
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
