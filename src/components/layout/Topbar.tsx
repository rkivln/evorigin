import React, { useState } from 'react';
import { useDemo } from '../../context/useDemo';
import { Search, Bell, RefreshCw, X, ArrowRight, Sparkles } from 'lucide-react';

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
    <div className="sticky top-0 z-30 px-4 sm:px-6 pt-3 pb-2 bg-white/80 backdrop-blur-md border-b border-brand-border">
      <header className="h-12 flex items-center justify-between gap-4">
        {/* Search Input Bar - Integrated Pill Design */}
        <div className="relative flex-1 max-w-xl">
          <div
            onClick={() => setSearchOpen(true)}
            className="w-full h-9 flex items-center gap-3 px-4 rounded-pill bg-brand-soft border border-brand-border hover:border-[#FF4D00] text-brand-muted text-xs cursor-pointer transition-all group"
          >
            <Search size={14} className="text-brand-muted group-hover:text-[#FF4D00] transition-colors" />
            <span className="flex-1 truncate text-brand-muted group-hover:text-brand-black transition-colors font-medium">
              Search organizational memory, skills, processes...
            </span>
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-sans font-semibold text-brand-muted bg-white rounded-pill border border-brand-border shadow-2xs">
              Ctrl K
            </kbd>
          </div>

          {/* Quick Search Modal Overlay */}
          {searchOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
              <div className="w-full max-w-2xl bg-white border border-brand-border rounded-card shadow-floating overflow-hidden">
                <form onSubmit={handleSearchSubmit} className="p-4 border-b border-brand-border flex items-center gap-3">
                  <Search size={18} className="text-[#FF4D00]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask EVORIGEN anything e.g. 'CNC vibration diagnostic sequence'..."
                    className="flex-1 bg-transparent text-sm text-brand-black placeholder-brand-muted focus:outline-none font-medium"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="p-1.5 text-brand-muted hover:text-brand-black rounded-full hover:bg-brand-soft transition-colors"
                  >
                    <X size={18} />
                  </button>
                </form>

                <div className="p-5 space-y-3 max-h-96 overflow-y-auto">
                  <p className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-muted">
                    Suggested Contextual Queries (RAG Vector Index)
                  </p>
                  <div className="space-y-2">
                    {quickSearchSuggestions.map((query, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectSuggestion(query)}
                        className="w-full text-left p-3 rounded-control bg-brand-soft hover:bg-orange-50/60 border border-brand-border hover:border-orange-200 text-xs font-semibold text-brand-black flex items-center justify-between group transition-all"
                      >
                        <span>{query}</span>
                        <ArrowRight size={14} className="text-brand-muted group-hover:text-[#FF4D00] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-brand-soft border-t border-brand-border flex items-center justify-between text-[11px] font-sans text-brand-muted font-medium">
                  <span>EVORIGEN Hybrid Vector Search</span>
                  <span>Press ESC to close</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Controls & System Status */}
        <div className="flex items-center gap-3">
          {/* System Status Pill */}
          <button
            onClick={() => setActivePage('status')}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-pill bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-all text-xs font-bold"
            title="Inspect Technical Infrastructure"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px]">SYSTEM ONLINE</span>
          </button>

          {/* Judge Demo Quick Action */}
          <button
            onClick={startJudgeDemo}
            className="flex items-center gap-2 px-4 py-1.5 rounded-pill bg-[#FF4D00] text-white hover:bg-[#E03E00] transition-all text-xs font-bold shadow-sm group"
          >
            <Sparkles size={13} />
            <span>JUDGE TOUR</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Reset Demo Button */}
          <button
            onClick={resetDemo}
            className="p-1.5 text-brand-muted hover:text-brand-black hover:bg-brand-soft rounded-full transition-colors"
            title="Reset Prototype State"
          >
            <RefreshCw size={16} />
          </button>

          {/* Notifications Icon */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1.5 text-brand-muted hover:text-brand-black hover:bg-brand-soft rounded-full relative transition-colors"
              title="System Alerts & Graph Updates"
            >
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FF4D00]"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white border border-brand-border rounded-card shadow-floating p-5 space-y-4 z-50">
                <div className="flex items-center justify-between border-b border-brand-border pb-3">
                  <span className="text-xs font-bold text-brand-black">System Activity & Alerts</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-pill bg-orange-50 text-[#FF4D00] border border-orange-200">3 New</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-control bg-rose-50/50 border border-rose-200 space-y-1">
                    <div className="flex justify-between font-bold text-rose-700">
                      <span>Critical Skill Warning</span>
                      <span className="text-[10px] text-brand-muted">10m ago</span>
                    </div>
                    <p className="text-brand-muted text-[11px]">
                      CNC Vibration Diagnosis has 1 active expert remaining (Dr. Arun).
                    </p>
                  </div>
                  <div className="p-3 rounded-control bg-orange-50/50 border border-orange-200 space-y-1">
                    <div className="flex justify-between font-bold text-[#FF4D00]">
                      <span>Universal Legacy Graph</span>
                      <span className="text-[10px] text-brand-muted">1h ago</span>
                    </div>
                    <p className="text-brand-muted text-[11px]">
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
