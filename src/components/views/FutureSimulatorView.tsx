import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import {
  Play,
  Sliders
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export const FutureSimulatorView: React.FC = () => {
  const [selectedDecision, setSelectedDecision] = useState<string>(
    "Replace experienced maintenance team with automated process"
  );
  const [timeHorizon, setTimeHorizon] = useState<number>(25);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [hasSimulated, setHasSimulated] = useState<boolean>(true);

  const scenarioData = [
    { year: 'Year 1', scenarioA: 85, scenarioB: 92, scenarioC: 96 },
    { year: 'Year 5', scenarioA: 68, scenarioB: 88, scenarioC: 95 },
    { year: 'Year 10', scenarioA: 45, scenarioB: 84, scenarioC: 94 },
    { year: 'Year 25', scenarioA: 22, scenarioB: 80, scenarioC: 92 },
    { year: 'Year 50', scenarioA: 10, scenarioB: 78, scenarioC: 90 },
  ];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setHasSimulated(false);
    setTimeout(() => {
      setIsSimulating(false);
      setHasSimulated(true);
    }, 700);
  };

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="09"
        tag="DECISION FORWARD"
        title="Future Impact Simulator"
        subtitle="Explore how today's decisions shape tomorrow's legacy. Model long-term organizational capabilities across 5 to 50-year horizons."
      />

      {/* Simulator Input Controls */}
      <GlassCard variant="gold" className="p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-surface-border pb-3">
          <h3 className="text-base font-medium font-sans text-primary flex items-center gap-2">
            <Sliders size={18} className="text-primary" />
            Simulation Parameters & Decision Input
          </h3>
          <Badge variant="gold">Generational Modeling</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Decision Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-sans text-primary-muted">Selected Decision Scenario</label>
            <select
              value={selectedDecision}
              onChange={(e) => setSelectedDecision(e.target.value)}
              className="w-full bg-surface border border-surface-border focus:border-accent/40 rounded-control p-3 text-xs text-primary focus:outline-none font-sans shadow-sm"
            >
              <option value="Replace experienced maintenance team with automated process">
                Replace experienced maintenance team with automated process
              </option>
              <option value="Retire Senior Vibration Specialist without tacit knowledge capture">
                Retire Senior Specialist (Dr. Arun) without knowledge capture
              </option>
              <option value="Deploy EVORIGEN Tacit AI + Successor Apprenticeship Program">
                Deploy EVORIGEN Tacit AI + Successor Apprenticeship Program
              </option>
            </select>
          </div>

          {/* Time Horizon Slider */}
          <div className="space-y-2 font-sans text-xs">
            <div className="flex justify-between text-primary-muted">
              <span>Time Horizon Projection</span>
              <span className="text-primary font-medium">{timeHorizon} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={timeHorizon}
              onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-[10px] text-primary-muted">
              <span>5 Years</span>
              <span>10 Years</span>
              <span>25 Years</span>
              <span>50 Years</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] font-sans text-primary-muted">
            ⚠️ Prototype scenario modelling. Results are illustrative and not guaranteed predictions.
          </span>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className={`px-6 py-2.5 rounded-control font-medium text-xs flex items-center gap-2 transition-all ${
              isSimulating
                ? 'bg-surface-subtle text-primary-muted opacity-50 cursor-not-allowed'
                : 'bg-surface-soft hover:bg-surface-subtle text-primary shadow-sm'
            }`}
          >
            <Play size={14} className={`text-accent ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Running Simulation Engine...' : 'Run Simulation'}</span>
          </button>
        </div>
      </GlassCard>

      {/* SIMULATION RESULT TIMELINE & CHARTS */}
      {hasSimulated && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Animated Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <GlassCard variant="default" className="space-y-2">
              <span className="text-xs font-sans text-status-success-text font-medium">Year 1</span>
              <h4 className="text-sm font-medium text-primary font-sans">Short-term Efficiency</h4>
              <span className="text-2xl font-medium font-sans text-status-success-text">+12%</span>
              <p className="text-[11px] text-primary-muted">Immediate cost reduction from initial headcount shift.</p>
            </GlassCard>

            <GlassCard variant="default" className="space-y-2">
              <span className="text-xs font-sans text-primary font-medium">Year 5</span>
              <h4 className="text-sm font-medium text-primary font-sans">Knowledge Transfer Decay</h4>
              <span className="text-2xl font-medium font-sans text-status-critical-text">-8%</span>
              <p className="text-[11px] text-primary-muted">Tacit diagnostic intuition begins fading from shop floor.</p>
            </GlassCard>

            <GlassCard variant="default" className="space-y-2">
              <span className="text-xs font-sans text-status-critical-text font-medium">Year 10</span>
              <h4 className="text-sm font-medium text-primary font-sans">Expertise Dependency Risk</h4>
              <span className="text-2xl font-medium font-sans text-status-critical-text">+23%</span>
              <p className="text-[11px] text-primary-muted">High failure rate during non-standard CNC vibration anomalies.</p>
            </GlassCard>

            <GlassCard variant="rose" className="space-y-2">
              <span className="text-xs font-sans text-status-critical-text font-medium">Year 25</span>
              <h4 className="text-sm font-medium text-primary font-sans">Reconstruction Difficulty</h4>
              <span className="text-xl font-medium font-sans text-status-critical-text">CRITICAL / HIGH</span>
              <p className="text-[11px] text-status-critical-text">Rebuilding lost 34-year intuition requires multi-million dollar R&D.</p>
            </GlassCard>
          </div>

          {/* Scenario Comparison Chart */}
          <GlassCard variant="cyan" className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium font-sans text-primary">Scenario Capability Comparison</h3>
                <p className="text-xs text-primary-muted">Long-term Capability Retention across 3 Strategic Approaches</p>
              </div>
              <Badge variant="cyan">3 Scenario Model</Badge>
            </div>

            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scenarioData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(244, 233, 208, 0.10)" />
                  <XAxis dataKey="year" stroke="#777770" fontSize={11} />
                  <YAxis stroke="#777770" fontSize={11} domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: '#161612', borderColor: 'rgba(244, 233, 208, 0.10)', color: '#F4E9D0', borderRadius: '12px', fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px', color: '#F4E9D0' }} />
                  <Line type="monotone" dataKey="scenarioA" name="Scenario A: Do Nothing" stroke="#8A4D47" strokeWidth={2} />
                  <Line type="monotone" dataKey="scenarioB" name="Scenario B: Preserve Expert Knowledge" stroke="#3B6488" strokeWidth={2} />
                  <Line type="monotone" dataKey="scenarioC" name="Scenario C: Preserve + Train Next Gen" stroke="#B89B5E" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

