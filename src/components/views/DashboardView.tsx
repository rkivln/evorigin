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
    { name: 'Industrial Maintenance', value: 45, color: '#2457FF' },
    { name: 'Cultural & Crafts', value: 20, color: '#10B981' },
    { name: 'Disaster Recovery', value: 15, color: '#0EA5E9' },
    { name: 'Family Wisdom', value: 12, color: '#8B5CF6' },
    { name: 'Operational Logic', value: 8, color: '#F59E0B' },
  ];

  const riskDistribution = [
    { level: 'Critical (>85)', count: 8, color: '#EF4444' },
    { level: 'High (70-85)', count: 17, color: '#F59E0B' },
    { level: 'Medium (40-70)', count: 34, color: '#2457FF' },
    { level: 'Low (<40)', count: 27, color: '#10B981' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="01"
        tag="ANALYTICS"
        title="Legacy Intelligence Dashboard"
        subtitle="Real-time analytical view of preserved organizational tacit knowledge, risk exposure, and Universal Legacy Graph expansion."
        action={
          <button
            onClick={() => setActivePage('capture')}
            className="px-5 py-2.5 rounded-pill bg-brand-blue text-white font-bold hover:bg-brand-royal transition-all text-xs flex items-center gap-2 shadow-sm"
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
            <GlassCard key={idx} variant={idx === 1 ? "glow-yellow" : "default"} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-muted">{m.label}</span>
                <div className="p-2 rounded-control bg-blue-50 text-brand-blue">
                  <Icon size={18} />
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold font-sans text-brand-black tracking-tight">
                {m.value}
              </div>
              <p className="text-xs font-semibold text-brand-muted">{m.change}</p>
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
              <h3 className="text-base font-bold text-brand-black">Knowledge Preservation Growth</h3>
              <p className="text-xs text-brand-muted font-medium">Captured Knowledge Items vs Graph Connections</p>
            </div>
            <Badge variant="blue">Real-time Stream</Badge>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorItems" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2457FF" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#2457FF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorNodes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E9EDF3" />
                <XAxis dataKey="month" stroke="#667085" fontSize={11} tickLine={false} />
                <YAxis stroke="#667085" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E9EDF3', borderRadius: '12px', fontSize: '12px', color: '#0B0D12', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="items" name="Knowledge Items" stroke="#2457FF" strokeWidth={2.5} fillOpacity={1} fill="url(#colorItems)" />
                <Area type="monotone" dataKey="graphNodes" name="Graph Connections" stroke="#10B981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorNodes)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Skills by Domain Category */}
        <GlassCard variant="default" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-brand-black">Skills Distribution by Domain</h3>
              <p className="text-xs text-brand-muted font-medium">Categorized Tacit Knowledge Breakdown</p>
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
                  contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E9EDF3', borderRadius: '12px', fontSize: '12px', color: '#0B0D12', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
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
            <h3 className="text-base font-bold text-brand-black">Legacy Risk Matrix</h3>
            <Badge variant="rose">Priority Alert</Badge>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskDistribution} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E9EDF3" />
                <XAxis type="number" stroke="#667085" fontSize={11} tickLine={false} />
                <YAxis dataKey="level" type="category" stroke="#667085" fontSize={10} width={90} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E9EDF3', borderRadius: '12px', fontSize: '12px', color: '#0B0D12', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="count" fill="#EF4444" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Critical Skills Action Table */}
        <GlassCard variant="default" className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-brand-black">High Priority Preservation Targets</h3>
              <p className="text-xs text-brand-muted font-medium">Skills facing imminent loss due to expert retirement</p>
            </div>
            <button
              onClick={() => setActivePage('risk')}
              className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1"
            >
              <span>View All Risk Scores</span>
              <ArrowUpRight size={12} />
            </button>
          </div>

          <div className="space-y-2 overflow-x-auto">
            <div className="p-4 rounded-control bg-brand-soft border border-brand-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <div>
                  <h4 className="font-bold text-brand-black">CNC Foundation Misalignment Diagnosis</h4>
                  <p className="text-[11px] text-brand-muted font-medium">Expert: Dr. Arun Kumar (34 yrs) • 2 active holders remaining</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-sans text-rose-700 font-bold text-xs bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-pill">Risk: 78 / 100</span>
                <p className="text-[10px] text-brand-muted font-medium mt-1">Interview Recorded</p>
              </div>
            </div>

            <div className="p-4 rounded-control bg-brand-soft border border-brand-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <div>
                  <h4 className="font-bold text-brand-black">Traditional Ceramic Glaze Flame Acoustics</h4>
                  <p className="text-[11px] text-brand-muted font-medium">Expert: Master Ramanathan (79 yrs) • 1 active holder remaining</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-sans text-rose-700 font-bold text-xs bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-pill">Risk: 91 / 100</span>
                <p className="text-[10px] text-brand-muted font-medium mt-1">Capture Pending</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
