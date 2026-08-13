import React from 'react';
import { useDemo } from '../../context/useDemo';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import {
  BookOpen,
  ShieldAlert,
  Users,
  AlertTriangle,
  Sliders,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const DashboardView: React.FC = () => {
  const { setActivePage } = useDemo();

  const metrics = [
    { label: "Total Knowledge Items", value: "1,248", icon: BookOpen, change: "+14% this month" },
    { label: "Critical Knowledge", value: "86", icon: ShieldAlert, change: "Requires preservation" },
    { label: "Knowledge Holders", value: "42", icon: Users, change: "Across 6 departments" },
    { label: "Skills at Risk", value: "17", icon: AlertTriangle, change: "High loss priority" },
    { label: "Legacy Value Index", value: "87", icon: Sliders, change: "High organizational value" },
    { label: "Preservation Coverage", value: "72%", icon: CheckCircle2, change: "+8% vs Q3 baseline" },
  ];

  const growthData = [
    { month: 'Jan', items: 340, graphNodes: 580 },
    { month: 'Feb', items: 490, graphNodes: 820 },
    { month: 'Mar', items: 620, graphNodes: 1100 },
    { month: 'Apr', items: 780, graphNodes: 1450 },
    { month: 'May', items: 980, graphNodes: 1890 },
    { month: 'Jun', items: 1248, graphNodes: 2410 },
  ];

  const categoryData = [
    { name: 'Industrial Maintenance', value: 45, color: '#A66BC4' },
    { name: 'Cultural & Crafts', value: 20, color: '#C07BE5' },
    { name: 'Disaster Recovery', value: 15, color: '#7FBF9A' },
    { name: 'Family Wisdom', value: 12, color: '#D4A85C' },
    { name: 'Operational Logic', value: 8, color: '#9B96A2' },
  ];

  const riskDistribution = [
    { level: 'Critical (>85)', count: 8, color: '#D17A82' },
    { level: 'High (70-85)', count: 17, color: '#D4A85C' },
    { level: 'Medium (40-70)', count: 34, color: '#A66BC4' },
    { level: 'Low (<40)', count: 27, color: '#7FBF9A' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="01"
        tag="DEMO DATA"
        title="Legacy Intelligence Dashboard"
        subtitle="Real-time analytical view of preserved organizational tacit knowledge, risk exposure, and Universal Legacy Graph expansion."
        action={
          <button
            onClick={() => setActivePage('capture')}
            className="px-5 py-2.5 rounded-full bg-accent hover:brightness-110 text-background font-medium text-xs flex items-center gap-2 shadow-soft-sm transition-all"
          >
            <span>Capture New Legacy</span>
            <ArrowUpRight size={14} />
          </button>
        }
      />

      {/* 6 Key Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <GlassCard key={idx} variant={idx === 1 ? "gold" : "default"} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary-muted">{m.label}</span>
                <div className="p-2 rounded-xl bg-surface border border-surface-border text-accent">
                  <Icon size={18} />
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-medium font-sans text-primary tracking-tight">
                {m.value}
              </div>
              <p className="text-[11px] font-medium text-primary-light">{m.change}</p>
            </GlassCard>
          );
        })}
      </div>

      {/* Recharts Data Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Knowledge Growth Over Time */}
        <GlassCard variant="default" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium font-sans text-primary">Knowledge Preservation Growth</h3>
              <p className="text-xs text-primary-muted">Captured Knowledge Items vs Graph Connections</p>
            </div>
            <Badge variant="gold">Real-time Stream</Badge>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.045)" />
                <XAxis dataKey="month" stroke="#6F6A76" fontSize={11} tickLine={false} />
                <YAxis stroke="#6F6A76" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18161C', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', fontSize: '12px', color: '#F3F0F5', boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
                />
                <Area type="monotone" dataKey="items" name="Knowledge Items" stroke="#A66BC4" strokeWidth={2} fillOpacity={0.14} fill="#A66BC4" />
                <Area type="monotone" dataKey="graphNodes" name="Graph Connections" stroke="#C07BE5" strokeWidth={2} fillOpacity={0.22} fill="#C07BE5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Skills by Domain Category */}
        <GlassCard variant="default" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium font-sans text-primary">Skills Distribution by Domain</h3>
              <p className="text-xs text-primary-muted">Categorized Tacit Knowledge Breakdown</p>
            </div>
            <Badge variant="cyan">Multi-Domain</Badge>
          </div>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                  label={(entry: any) => `${entry.name} ${(entry.percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#18161C', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', fontSize: '12px', color: '#F3F0F5', boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      {/* Risk Distribution & Immediate Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard variant="rose" className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium font-sans text-primary">Legacy Risk Matrix</h3>
            <Badge variant="rose">Priority Alert</Badge>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskDistribution} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.045)" />
                <XAxis type="number" stroke="#6F6A76" fontSize={11} tickLine={false} />
                <YAxis dataKey="level" type="category" stroke="#6F6A76" fontSize={10} width={90} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18161C', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', fontSize: '12px', color: '#F3F0F5', boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
                />
                <Bar dataKey="count" fill="#D17A82" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Critical Skills Action Table */}
        <GlassCard variant="default" className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium font-sans text-primary">High Priority Preservation Targets</h3>
              <p className="text-xs text-primary-muted">Skills facing imminent loss due to expert retirement</p>
            </div>
            <button
              onClick={() => setActivePage('risk')}
              className="text-xs font-medium text-accent hover:underline flex items-center gap-1"
            >
              <span>View All Risk Scores</span>
              <ArrowUpRight size={12} />
            </button>
          </div>

          <div className="space-y-2 overflow-x-auto">
            <div className="p-4 rounded-xl bg-surface border border-surface-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-status-critical"></span>
                <div>
                  <h4 className="font-medium text-primary">CNC Foundation Misalignment Diagnosis</h4>
                  <p className="text-[11px] text-primary-muted">Expert: Dr. Arun Kumar (34 yrs) • 2 active holders remaining</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-sans text-status-critical-text font-medium text-xs bg-status-critical/40 border border-status-critical-text/30 px-2.5 py-0.5 rounded-full">Risk: 78 / 100</span>
                <p className="text-[10px] text-primary-light mt-1">Interview Recorded</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-surface-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-status-critical"></span>
                <div>
                  <h4 className="font-medium text-primary">Traditional Ceramic Glaze Flame Acoustics</h4>
                  <p className="text-[11px] text-primary-muted">Expert: Master Ramanathan (79 yrs) • 1 active holder remaining</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-sans text-status-critical-text font-medium text-xs bg-status-critical/40 border border-status-critical-text/30 px-2.5 py-0.5 rounded-full">Risk: 91 / 100</span>
                <p className="text-[10px] text-primary-light mt-1">Capture Pending</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
