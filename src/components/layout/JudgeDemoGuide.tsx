import React from 'react';
import { useDemo } from '../../context/useDemo';
import { Sparkles, ChevronRight, ChevronLeft, X, CheckCircle2 } from 'lucide-react';

export const JudgeDemoGuide: React.FC = () => {
  const {
    judgeModeActive,
    currentJudgeStep,
    judgeStepData,
    nextJudgeStep,
    prevJudgeStep,
    exitJudgeDemo
  } = useDemo();

  if (!judgeModeActive) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4 animate-in slide-in-from-bottom-6 duration-300">
      <div className="bg-surface-soft border border-accent/40 rounded-[20px] shadow-floating p-5 text-primary backdrop-blur-md">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-accent text-background">
              <Sparkles size={14} />
            </div>
            <div>
              <span className="font-sans font-medium text-accent-soft text-sm tracking-wide">
                JUDGE DEMONSTRATION TOUR
              </span>
              <span className="text-[11px] font-sans text-primary-muted ml-2">
                Step {currentJudgeStep} of 10
              </span>
            </div>
          </div>

          <button
            onClick={exitJudgeDemo}
            className="p-1.5 text-primary-muted hover:text-primary rounded-full hover:bg-surface-subtle transition-colors"
            title="Exit Judge Tour"
          >
            <X size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-surface-subtle rounded-full mb-3 overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 shadow-soft-sm"
            style={{ width: `${(currentJudgeStep / 10) * 100}%` }}
          />
        </div>

        {/* Step Title & Content */}
        <div className="space-y-1.5 mb-4">
          <h4 className="text-base font-medium text-primary font-sans flex items-center gap-2">
            {judgeStepData.title}
          </h4>
          <p className="text-xs text-primary-muted leading-relaxed">
            {judgeStepData.description}
          </p>
          <div className="mt-2.5 p-3 rounded-xl bg-accent/20 border border-accent/30 flex items-start gap-2.5 text-xs text-accent-soft">
            <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
            <span>{judgeStepData.highlightText}</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-surface-border">
          <button
            onClick={prevJudgeStep}
            disabled={currentJudgeStep === 1}
            className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              currentJudgeStep === 1
                ? 'opacity-40 text-primary-light cursor-not-allowed'
                : 'bg-surface-soft hover:bg-surface-subtle border border-surface-border text-primary'
            }`}
          >
            <ChevronLeft size={14} />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i + 1 === currentJudgeStep
                    ? 'w-5 bg-accent'
                    : i + 1 < currentJudgeStep
                    ? 'w-2 bg-accent/50'
                    : 'w-2 bg-surface-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextJudgeStep}
            className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-accent hover:brightness-110 text-background font-medium text-xs shadow-soft-sm transition-all"
          >
            <span>{currentJudgeStep === 10 ? 'Finish Tour' : 'Next Step'}</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
