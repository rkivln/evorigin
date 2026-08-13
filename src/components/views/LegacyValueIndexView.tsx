import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { Sliders } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

export const LegacyValueIndexView: React.FC = () => {
  const [weights, setWeights] = useState({
    w1: 0.25, // Relevance
    w2: 0.25, // Uniqueness
    w3: 0.20, // Cross-generational
    w4: 0.15, // Transferability
    w5: 0.15, // Preservation priority
  });

  const rawScores = {
    relevance: 92,
    uniqueness: 97,
    crossGen: 95,
    transferability: 89,
    preservationPriority: 96,
  };

  const calculatedLVS = Math.round(
    weights.w1 * rawScores.relevance +
    weights.w2 * rawScores.uniqueness +
    weights.w3 * rawScores.crossGen +
    weights.w4 * rawScores.transferability +
    weights.w5 * rawScores.preservationPriority
  );

  const radarData = [
    { subject: 'Relevance (R)', value: rawScores.relevance, fullMark: 100 },
    { subject: 'Uniqueness (U)', value: rawScores.uniqueness, fullMark: 100 },
    { subject: 'Cross-Gen (C)', value: rawScores.crossGen, fullMark: 100 },
    { subject: 'Transferability (T)', value: rawScores.transferability, fullMark: 100 },
    { subject: 'Preservation (S)', value: rawScores.preservationPriority, fullMark: 100 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="08"
        tag="PROTOTYPE RESEARCH MODEL"
        title="Legacy Value Index (LVS)"
        subtitle="Quantitative mathematical model measuring the multi-dimensional future value of tacit human capability."
      />

      {/* Formula & Overall Score Header */}
      <GlassCard variant="gold" className="p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-6">
          <div>
            <Badge variant="gold">Conceptual Mathematical Formula</Badge>
            <h3 className="text-lg font-medium font-sans text-primary mt-2">
              LVS = w₁R + w₂U + w₃C + w₄T + w₅S
            </h3>
            <p className="text-xs text-primary-muted mt-1 leading-relaxed">
              Where R = Relevance, U = Uniqueness, C = Cross-Generational Usefulness, T = Transferability, S = Preservation Priority.
            </p>
          </div>

          <div className="text-center sm:text-right bg-surface/90 p-4 rounded-2xl border border-surface-border shadow-sm">
            <span className="text-[10px] font-sans text-primary-muted uppercase tracking-widest block font-medium">
              Computed LVS Score
            </span>
            <span className="text-3xl font-medium font-sans text-primary">
              {calculatedLVS} <span className="text-base text-primary-muted">/ 100</span>
            </span>
            <p className="text-[10px] font-sans text-status-success-text mt-1 font-medium">● Exceptional Value</p>
          </div>
        </div>

        {/* Sliders & Radar Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Interactive Weight Sliders */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium font-sans text-primary flex items-center gap-2">
              <Sliders size={16} className="text-primary" />
              Adjust Formula Weightings (Judge Simulator)
            </h4>

            <div className="space-y-3 font-sans text-xs">
              <div>
                <div className="flex justify-between text-primary-muted mb-1">
                  <span>Relevance (w₁ = {weights.w1.toFixed(2)})</span>
                  <span className="text-primary font-medium">{rawScores.relevance} / 100</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.50"
                  step="0.05"
                  value={weights.w1}
                  onChange={(e) => setWeights({ ...weights, w1: parseFloat(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>

              <div>
                <div className="flex justify-between text-primary-muted mb-1">
                  <span>Uniqueness (w₂ = {weights.w2.toFixed(2)})</span>
                  <span className="text-primary font-medium">{rawScores.uniqueness} / 100</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.50"
                  step="0.05"
                  value={weights.w2}
                  onChange={(e) => setWeights({ ...weights, w2: parseFloat(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>

              <div>
                <div className="flex justify-between text-primary-muted mb-1">
                  <span>Cross-Generational (w₃ = {weights.w3.toFixed(2)})</span>
                  <span className="text-primary font-medium">{rawScores.crossGen} / 100</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.50"
                  step="0.05"
                  value={weights.w3}
                  onChange={(e) => setWeights({ ...weights, w3: parseFloat(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>

              <div>
                <div className="flex justify-between text-primary-muted mb-1">
                  <span>Transferability (w₄ = {weights.w4.toFixed(2)})</span>
                  <span className="text-primary font-medium">{rawScores.transferability} / 100</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.50"
                  step="0.05"
                  value={weights.w4}
                  onChange={(e) => setWeights({ ...weights, w4: parseFloat(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>
            </div>
          </div>

          {/* Right: Radar Chart */}
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(244, 233, 208, 0.10)" />
                <PolarAngleAxis dataKey="subject" stroke="#777770" fontSize={10} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#777770" fontSize={10} />
                <Radar name="Dr. Arun Legacy Score" dataKey="value" stroke="#B89B5E" fill="#B89B5E" fillOpacity={0.5} />
                <Tooltip contentStyle={{ backgroundColor: '#161612', borderColor: 'rgba(244, 233, 208, 0.10)', color: '#F4E9D0', borderRadius: '12px', fontSize: '12px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

