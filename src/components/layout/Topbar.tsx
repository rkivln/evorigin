import React, { useState } from 'react';
import { useDemo } from '../../context/useDemo';
import { Search, Bell, Sparkles, RefreshCw, X, ArrowRight } from 'lucide-react';

export const Topbar: React.FC = () => {
  const { setActivePage, sendUserChatMessage, resetDemo, startJudgeDemo } = useDemo();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const quickSearchSuggestions = [
    "How did Arun diagnose CNC spindle vibration?",
    "What knowledge is most at risk in manufacturing?",
    "Show family agrarian financial hedging principles",
    "List critical skills with single knowledge holders",
    "Run 25-year future scenario for expert retirement"
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    sendUserChatMessage(searchQuery);
    setActivePage('assistant');
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleSelectSuggestion = (query: string) => {
    sendUserChatMessage(query);
    setActivePage('assistant');
    setSearchOpen(false);
  };

  return (
    <div className="sticky top-4 z-30 px-4 sm:px-6 pb-2">
      <header className="h-16 bg-surface/80 backdrop-blur-xl border border-surface-border rounded-[24px] shadow-soft-sm px-4 sm:px-6 flex items-center justify-between gap-4">
      {/* Search Input Bar - Integrated Pill Design */}
      <div className="relative flex-1 max-w-xl">
        <div
          onClick={() => setSearchOpen(true)}
          className="w-full h-10 flex items-center gap-3 px-4 rounded-full bg-surface border border-surface-border hover:border-accent/40 text-primary-muted text-xs cursor-pointer transition-all shadow-sm hover:shadow-card group"
        >
          <Search size={15} className="text-primary-muted group-hover:text-accent transition-colors" />
          <span className="flex-1 truncate text-primary-muted group-hover:text-primary transition-colors">
            Search generations of knowledge, skills, decisions...
          </span>
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-sans text-primary-light bg-surface-subtle rounded-full border border-surface-border">
            Ctrl K
          </kbd>
        </div>

        {/* Quick Search Modal Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-surface-soft border border-surface-border rounded-[24px] shadow-card overflow-hidden">
              <form onSubmit={handleSearchSubmit} className="p-4 border-b border-surface-border flex items-center gap-3">
                <Search size={18} className="text-accent" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask EVORIGEN anything e.g. 'CNC vibration diagnostic sequence'..."
                  className="flex-1 bg-transparent text-sm text-primary placeholder-primary-light focus:outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-1.5 text-primary-muted hover:text-primary rounded-full hover:bg-surface-subtle transition-colors"
                >
                  <X size={18} />
                </button>
              </form>

              <div className="p-5 space-y-3 max-h-96 overflow-y-auto">
                <p className="text-[11px] font-sans font-medium uppercase tracking-wider text-primary-light">
                  Suggested Contextual Queries (RAG Vector Index)
                </p>
                <div className="space-y-2">
                  {quickSearchSuggestions.map((query, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectSuggestion(query)}
                      className="w-full text-left p-3 rounded-xl bg-surface hover:bg-surface-subtle border border-surface-border text-xs text-primary flex items-center justify-between group transition-all"
                    >
                      <span>{query}</span>
                      <ArrowRight size={14} className="text-primary-light group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-surface border-t border-surface-border flex items-center justify-between text-[11px] font-sans text-primary-light">
                <span>Vector DB + Hybrid RAG Retrieval</span>
                <span>Press ESC to close</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Controls & System Status */}
      <div className="flex items-center gap-2.5">
        {/* System Status Pill */}
        <button
          onClick={() => setActivePage('status')}
          className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-status-success/40 border border-status-success-text/30 hover:bg-status-success/40 text-status-success-text text-xs font-sans transition-all"
          title="Inspect Technical Infrastructure"
        >
          <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
          <span className="font-medium text-[11px] tracking-wide">SYSTEM ONLINE</span>
        </button>

        {/* Theme Switcher Button */}
        

        {/* Judge Demo Quick Action */}
        <button
          onClick={startJudgeDemo}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent hover:brightness-110 text-background text-xs font-medium transition-all shadow-soft-sm hover:shadow-soft-sm"
        >
          <Sparkles size={14} />
          <span>Judge Tour</span>
        </button>

        {/* Reset Demo Button */}
        <button
          onClick={resetDemo}
          className="p-2 text-primary-muted hover:text-primary hover:bg-surface-subtle rounded-full transition-colors"
          title="Reset Prototype State"
        >
          <RefreshCw size={16} />
        </button>

        {/* Notifications Icon & Drawer */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 text-primary-muted hover:text-primary hover:bg-surface-subtle rounded-full relative transition-colors"
            title="System Alerts & Graph Updates"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-surface border border-surface-border rounded-[24px] shadow-floating p-5 space-y-4 z-50">
              <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-1">
                <span className="text-xs font-medium text-primary">System Activity & Alerts</span>
                <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-full bg-accent/20 text-accent-soft">3 New</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-[16px] bg-surface-soft border border-surface-border space-y-1.5 hover:border-accent/30 transition-colors cursor-default">
                  <div className="flex justify-between font-medium text-status-critical-text">
                    <span>Critical Skill Warning</span>
                    <span className="text-[10px] text-primary-light">10m ago</span>
                  </div>
                  <p className="text-primary-muted text-[11px]">
                    CNC Vibration Diagnosis has 1 active expert remaining (Dr. Arun).
                  </p>
                </div>
                <div className="p-3.5 rounded-[16px] bg-surface-soft border border-surface-border space-y-1.5 hover:border-accent/30 transition-colors cursor-default">
                  <div className="flex justify-between font-medium text-accent">
                    <span>Universal Legacy Graph</span>
                    <span className="text-[10px] text-primary-light">1h ago</span>
                  </div>
                  <p className="text-primary-muted text-[11px]">
                    Added 18 new entity nodes from Dr. Arun Interview Session #4.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
    </div>
  );
};
