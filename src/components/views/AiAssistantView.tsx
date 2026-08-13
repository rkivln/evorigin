import React, { useState } from 'react';
import { useDemo } from '../../context/useDemo';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import {
  Bot,
  Send,
  Share2,
  FileText,
  Bookmark,
  ShieldCheck
} from 'lucide-react';

export const AiAssistantView: React.FC = () => {
  const { chatMessages, sendUserChatMessage, setActivePage } = useDemo();
  const [inputText, setInputText] = useState('');
  const [savedInsights, setSavedInsights] = useState<string[]>([]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendUserChatMessage(inputText);
    setInputText('');
  };

  const handleSaveInsight = (text: string) => {
    if (!savedInsights.includes(text)) {
      setSavedInsights(prev => [...prev, text]);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <SectionHeader
        number="06"
        tag="RAG ASSISTANT"
        title="Ask the Legacy"
        subtitle="Ask natural language questions across decades of preserved human experience, decisions, and Universal Legacy Graph nodes."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Chat Window */}
        <GlassCard variant="gold" className="lg:col-span-2 h-[600px] flex flex-col justify-between p-0 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-surface-border bg-surface/90 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-primary">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="text-sm font-medium font-sans text-primary">EVORIGEN RAG Engine</h3>
                <p className="text-[10px] font-sans text-status-success-text">● 1,248 Vector Embeddings Active</p>
              </div>
            </div>
            <Badge variant="gold">Hybrid Vector + Graph Retrieval</Badge>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatMessages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Bot size={15} />
                  </div>
                )}

                <div className={`max-w-xl space-y-2 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  {/* Text Bubble */}
                  <div
                    className={`p-4 rounded-2xl text-xs leading-relaxed font-sans ${
                      msg.sender === 'user'
                        ? 'bg-surface-subtle text-primary font-medium rounded-br-none shadow-sm'
                        : 'bg-surface border border-surface-border text-primary rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* AI Response Transparency Panel */}
                  {msg.sender === 'ai' && msg.sources && (
                    <div className="p-3.5 rounded-2xl bg-surface/90 border border-surface-border text-xs space-y-2.5 shadow-sm">
                      <div className="flex items-center justify-between border-b border-surface-border pb-1.5 text-[10px] font-sans">
                        <span className="text-status-success-text font-medium flex items-center gap-1">
                          <ShieldCheck size={12} /> Confidence: {msg.confidence || 'High'}
                        </span>
                        <span className="text-status-info-text">
                          Evidence: {msg.evidenceCount || msg.sources.length} sources
                        </span>
                      </div>

                      {/* Source Citation List */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-sans text-primary-muted block font-medium">Verified Provenance:</span>
                        {msg.sources.map((src, sIdx) => (
                          <div key={sIdx} className="text-[11px] font-sans text-primary flex items-center gap-1.5 bg-surface p-2 rounded-xl border border-surface-border">
                            <FileText size={12} className="text-primary" />
                            <span>{src.title}</span>
                            {src.timestamp && (
                              <span className="text-primary-muted">({src.timestamp})</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <button
                          onClick={() => setActivePage('graph')}
                          className="px-3 py-1 rounded-full bg-surface hover:bg-surface-subtle text-status-info-text font-sans text-[10px] font-medium flex items-center gap-1 border border-surface-border"
                        >
                          <Share2 size={10} /> View Graph
                        </button>
                        <button
                          onClick={() => handleSaveInsight(msg.text)}
                          className="px-3 py-1 rounded-full bg-accent/10 hover:bg-[#FFF1A8] text-primary font-sans text-[10px] font-medium flex items-center gap-1 border border-accent/30"
                        >
                          <Bookmark size={10} /> Save Insight
                        </button>
                      </div>
                    </div>
                  )}

                  <span className="text-[10px] font-sans text-primary-muted block px-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} className="p-3 bg-surface/90 border-t border-surface-border flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask EVORIGEN across preserved expert knowledge..."
              className="flex-1 bg-surface border border-surface-border focus:border-accent/40 rounded-full px-4 py-2.5 text-xs text-primary placeholder-[#A8A29E] focus:outline-none font-sans"
            />
            <button
              type="submit"
              className="p-2.5 rounded-full bg-surface-soft hover:bg-surface-subtle text-primary font-medium shadow-sm transition-all"
            >
              <Send size={15} className="text-accent" />
            </button>
          </form>
        </GlassCard>

        {/* Right Col: Saved Insights & Predefined Queries */}
        <div className="space-y-4">
          <GlassCard variant="cyan" className="space-y-3">
            <h3 className="text-sm font-medium font-sans text-primary">Suggested Judge Questions</h3>
            <div className="space-y-2 text-xs font-sans">
              {[
                "How did Arun diagnose unusual CNC vibration?",
                "What knowledge is most at risk in our manufacturing team?",
                "Show saved agrarian financial principles from grandmother",
                "What evacuation route works during cyclone recovery?"
              ].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => sendUserChatMessage(q)}
                  className="w-full text-left p-3 rounded-2xl bg-surface/80 hover:bg-surface border border-surface-border hover:border-accent/40 text-primary transition-all text-xs font-sans leading-snug"
                >
                  "{q}"
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard variant="default" className="space-y-3">
            <h3 className="text-sm font-medium font-sans text-primary">Saved Legacy Insights</h3>
            {savedInsights.length > 0 ? (
              <div className="space-y-2">
                {savedInsights.map((insight, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-surface/80 border border-surface-border text-xs text-primary font-sans">
                    "{insight.substring(0, 90)}..."
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-primary-muted">No insights saved yet. Click 'Save Insight' on any AI response.</p>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

