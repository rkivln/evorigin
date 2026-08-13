import React from 'react';
import { useDemo } from '../../context/useDemo';
import type { PageId } from '../../types';
import {
  LayoutDashboard,
  Mic,
  Cpu,
  Share2,
  Bot,
  ShieldAlert,
  Sliders,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
  Activity,
  Settings,
  Code2,
  Database,
  Layers,
  ChevronLeft,
  ChevronRight,
  Flame } from 'lucide-react';

interface NavItem {
  id: PageId;
  label: string;
  icon: React.ElementType;
  badge?: string;
  group?: string;
}

export const Sidebar: React.FC<{collapsed: boolean, setCollapsed: (c: boolean) => void}> = ({ collapsed, setCollapsed }) => {
  const { activePage, setActivePage, startJudgeDemo } = useDemo();

  const mainNav: NavItem[] = [
    { id: 'landing', label: 'Home / Hero', icon: Sparkles },
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard, badge: 'Live' },
    { id: 'capture', label: 'Legacy Capture', icon: Mic, badge: 'AI' },
    { id: 'processing', label: 'Knowledge Processing', icon: Cpu },
    { id: 'graph', label: 'Universal Legacy Graph', icon: Share2, badge: '3D' },
    { id: 'assistant', label: 'EVORIGEN AI Assistant', icon: Bot },
    { id: 'library', label: 'Knowledge Library', icon: BookOpen },
    { id: 'risk', label: 'Legacy Risk Analysis', icon: ShieldAlert },
    { id: 'value-index', label: 'Legacy Value Index', icon: Sliders },
    { id: 'simulator', label: 'Future Simulator', icon: TrendingUp },
    { id: 'transfer', label: 'Knowledge Transfer', icon: GraduationCap },
    { id: 'multidomain', label: 'Multi-Domain Impact', icon: Flame },
    { id: 'organization', label: 'Succession Intelligence', icon: Users },
    { id: 'status', label: 'System Health', icon: Activity },
    { id: 'settings', label: 'Data Ownership & Settings', icon: Settings },
  ];

  const devNav: NavItem[] = [
    { id: 'architecture', label: 'Tech Architecture', icon: Layers },
    { id: 'api', label: 'Developer API', icon: Code2 },
    { id: 'database', label: 'Database Schema', icon: Database },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-surface border-r border-surface-border shadow-card transition-all duration-300 flex flex-col ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className={`h-16 px-4 flex items-center border-b border-surface-border ${
        collapsed ? 'justify-center' : 'justify-between'
      }`}>
        {!collapsed && (
          <button 
            onClick={() => setActivePage('landing')}
            className="flex items-center text-left group"
          >
            <div>
              <span className="font-sans font-medium text-base tracking-tight text-primary block leading-none">
                EVORIGEN
              </span>
              <span className="text-[10px] font-sans text-accent tracking-wider uppercase block mt-1 font-medium">
                Legacy Intelligence
              </span>
            </div>
          </button>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 text-primary-muted hover:text-primary rounded-full hover:bg-surface-subtle transition-colors"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation Links List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
        {/* Judge Demo Quick Action */}
        <div className="mb-3 px-1">
          <button
            onClick={startJudgeDemo}
            className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-full bg-accent hover:brightness-110 text-background font-medium text-xs shadow-soft-sm transition-all ${
              collapsed ? 'px-0' : ''
            }`}
            title="Start Guided Judge Demonstration"
          >
            <Sparkles size={14} className="text-background" />
            {!collapsed && <span>START JUDGE DEMO</span>}
          </button>
        </div>

        <div className="text-[10px] font-sans font-medium uppercase tracking-wider text-primary-light px-3 py-1">
          {!collapsed && "Platform Services"}
        </div>

        {mainNav.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 py-2 rounded-full text-xs font-medium transition-all group ${collapsed ? "justify-center px-0" : "justify-start px-3"} ${
                isActive
                  ? 'bg-accent text-background shadow-soft-sm'
                  : 'text-primary-muted hover:text-primary hover:bg-surface-subtle'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={16}
                className={isActive ? 'text-background' : 'text-primary-muted group-hover:text-accent'}
              />
              {!collapsed && (
                <span className="flex-1 text-left truncate">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span
                  className={`text-[9px] font-sans font-medium px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-black/20 text-background'
                      : 'bg-surface-subtle border border-surface-border text-primary-muted'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="pt-3 text-[10px] font-sans font-medium uppercase tracking-wider text-primary-light px-3 py-1">
          {!collapsed && "Judge & Technical"}
        </div>

        {devNav.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 py-2 rounded-full text-xs font-medium transition-all group ${collapsed ? "justify-center px-0" : "justify-start px-3"} ${
                isActive
                  ? 'bg-surface-subtle text-primary border border-accent/40 shadow-soft-sm'
                  : 'text-primary-muted hover:text-primary hover:bg-surface-subtle'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={16}
                className={isActive ? 'text-accent' : 'text-primary-muted group-hover:text-primary'}
              />
              {!collapsed && (
                <span className="flex-1 text-left truncate">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Profile Status & Theme Button */}
      <div className="p-3 border-t border-surface-border bg-surface-soft space-y-2">
        {!collapsed && (
          <>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-surface-subtle border border-surface-border overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Judge Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-primary truncate">SIH 2026 Evaluator</p>
                  <p className="text-[10px] font-medium text-status-success-text flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
                    PROTOTYPE ACTIVE
                  </p>
                </div>
              </div>

              
            </div>
          </>
        )}
      </div>
    </aside>
  );
};
