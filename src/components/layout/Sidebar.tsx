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
  Flame,
  Globe
} from 'lucide-react';

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
    { id: 'landing', label: 'Website & Platform', icon: Globe, badge: 'Public' },
    { id: 'dashboard', label: 'Overview Dashboard', icon: LayoutDashboard, badge: 'Live' },
    { id: 'capture', label: 'Legacy Capture', icon: Mic, badge: 'AI' },
    { id: 'processing', label: 'Knowledge Processing', icon: Cpu },
    { id: 'graph', label: 'Universal Legacy Gra..', icon: Share2, badge: 'Nodes' },
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
      className={`fixed top-0 left-0 bottom-0 z-40 bg-white/90 backdrop-blur-md border-r border-brand-border transition-all duration-300 flex flex-col ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-brand-border">
        {!collapsed && (
          <button 
            onClick={() => setActivePage('landing')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-control bg-[#FF4D00] flex items-center justify-center text-white shadow-glow-orange font-bold text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="font-sans font-extrabold text-base tracking-wider text-brand-black block leading-none">
                EVORIGEN
              </span>
              <span className="text-[10px] font-sans text-[#FF4D00] tracking-wider uppercase block mt-1 font-semibold">
                Legacy Intelligence
              </span>
            </div>
          </button>
        )}

        {collapsed && (
          <button 
            onClick={() => setActivePage('landing')}
            className="mx-auto w-8 h-8 rounded-control bg-[#FF4D00] flex items-center justify-center text-white font-bold text-sm"
          >
            E
          </button>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 text-brand-muted hover:text-brand-black rounded-control hover:bg-brand-soft transition-colors"
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
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-pill bg-[#FF4D00] text-white shadow-glow-orange hover:bg-[#E03E00] transition-all font-semibold text-xs ${
              collapsed ? 'px-0 rounded-control' : ''
            }`}
            title="Start Guided Judge Demonstration"
          >
            <Sparkles size={14} className="text-white" />
            {!collapsed && <span>START DEMO TOUR</span>}
          </button>
        </div>

        <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-muted px-3 py-1">
          {!collapsed && "Platform Navigation"}
        </div>

        {mainNav.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 py-2 rounded-control text-[11px] font-semibold tracking-wide transition-all group ${collapsed ? "justify-center px-0" : "justify-start px-3"} ${
                isActive
                  ? 'bg-[#FFF0EB] text-[#FF4D00] shadow-2xs font-bold border-l-2 border-[#FF4D00]'
                  : 'text-brand-muted hover:text-brand-black hover:bg-brand-soft border border-transparent'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={16}
                className={isActive ? 'text-[#FF4D00]' : 'text-brand-muted group-hover:text-[#FF4D00]'}
              />
              {!collapsed && (
                <span className="flex-1 text-left truncate">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span
                  className={`text-[9px] font-mono font-medium px-1.5 py-0.5 border rounded-pill ${
                    isActive
                      ? 'bg-orange-100 text-[#FF4D00] border-orange-200'
                      : 'bg-brand-soft border border-brand-border text-brand-muted'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="pt-3 text-[10px] font-sans font-bold uppercase tracking-widest text-brand-muted px-3 py-1">
          {!collapsed && "Developer & Architecture"}
        </div>

        {devNav.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 py-2 rounded-control text-[11px] font-semibold tracking-wide transition-all group ${collapsed ? "justify-center px-0" : "justify-start px-3"} ${
                isActive
                  ? 'bg-orange-50 text-[#FF4D00] border border-[#FF4D00] font-bold'
                  : 'text-brand-muted hover:text-brand-black hover:bg-brand-soft border border-transparent'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={16}
                className={isActive ? 'text-[#FF4D00]' : 'text-brand-muted group-hover:text-brand-black'}
              />
              {!collapsed && (
                <span className="flex-1 text-left truncate">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Profile Status */}
      <div className="p-3 border-t border-brand-border bg-brand-soft/60 space-y-2">
        {!collapsed && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 overflow-hidden flex items-center justify-center font-bold text-[#FF4D00] text-xs">
                EI
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-brand-black truncate">EVORIGEN Workspace</p>
                <p className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  PLATFORM ONLINE
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
