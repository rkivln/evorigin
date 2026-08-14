import React, { useState } from 'react';
import { useDemo } from '../../context/useDemo';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import type { GraphNode } from '../../types';
import {
  Share2,
  ZoomIn,
  ZoomOut,
  Filter,
  Search,
  Bot
} from 'lucide-react';

export const LegacyGraphView: React.FC = () => {
  const {
    nodes,
    edges,
    selectedNode,
    setSelectedNode,
    sendUserChatMessage,
    setActivePage
  } = useDemo();

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryColors: Record<string, string> = {
    person: '#3B6488',      // soft denim blue
    skill: '#D4B012',       // muted warm yellow
    decision: '#55703C',    // soft sage green
    event: '#7C638A',       // soft lavender
    problem: '#8A4D47',     // soft terracotta
    solution: '#4A7C59',    // forest green
    organization: '#777770' // warm slate gray
  };

  const filteredNodes = nodes.filter(node => {
    const matchesCategory = filterCategory === 'all' || node.category === filterCategory;
    const matchesSearch = node.label.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAskAboutNode = (node: GraphNode) => {
    const query = `Explain how '${node.label}' (${node.category}) is connected across the Universal Legacy Graph and what evidence supports it.`;
    sendUserChatMessage(query);
    setActivePage('assistant');
  };

  return (
    <div className="space-y-6 pb-12">
      <SectionHeader
        number="04"
        tag="SEMANTIC GRAPH"
        title="Universal Legacy Graph"
        subtitle="Multi-dimensional graph visualization linking People, Skills, Events, Decisions, Problems, Solutions, and Evidence across decades."
        action={
          <div className="flex items-center gap-2">
            <Badge variant="gold">8 Core Entity Types</Badge>
            <Badge variant="cyan">Cypher Graph Engine</Badge>
          </div>
        }
      />

      {/* Filter & Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-control bg-surface/90 border border-surface-border shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-sans text-primary-muted flex items-center gap-1.5 mr-2">
            <Filter size={14} className="text-primary" /> Filter Category:
          </span>
          {['all', 'person', 'skill', 'decision', 'event', 'problem', 'solution'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-control text-xs font-sans capitalize transition-all ${
                filterCategory === cat
                  ? 'bg-surface-subtle text-primary font-medium shadow-sm'
                  : 'bg-surface/80 text-primary-muted hover:text-primary border border-surface-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Zoom Buttons */}
          <div className="flex items-center gap-1 bg-surface p-1 rounded-control border border-surface-border">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 1.5))}
              className="p-1 text-primary-muted hover:text-primary"
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
            <span className="text-[10px] font-sans text-primary-muted px-1 font-medium">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.7))}
              className="p-1 text-primary-muted hover:text-primary"
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>
          </div>

          {/* Node Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search graph nodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface border border-surface-border text-xs text-primary rounded-control px-3.5 py-1.5 pl-8 focus:outline-none focus:border-accent/40 w-48 shadow-sm"
            />
            <Search size={14} className="absolute left-3 top-2 text-primary-light" />
          </div>
        </div>
      </div>

      {/* Main Interactive Graph Canvas + Right Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Graph SVG Canvas */}
        <div className="lg:col-span-2 relative h-[560px] rounded-[28px] bg-surface border border-surface-border overflow-hidden shadow-sm">
          {/* Legend Overlay */}
          <div className="absolute top-4 left-4 z-10 bg-surface/90 border border-surface-border p-3.5 rounded-control backdrop-blur-md space-y-1.5 shadow-sm">
            <span className="text-[10px] font-sans uppercase tracking-wider text-primary-muted block mb-1 font-medium">
              Entity Legend
            </span>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-sans">
              <span className="flex items-center gap-1.5 text-status-info-text">
                <span className="w-2.5 h-2.5 rounded-control bg-secondary"></span> Person
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <span className="w-2.5 h-2.5 rounded-control bg-status-warning-text"></span> Skill
              </span>
              <span className="flex items-center gap-1.5 text-status-success-text">
                <span className="w-2.5 h-2.5 rounded-control bg-status-success-text"></span> Decision
              </span>
              <span className="flex items-center gap-1.5 text-accent">
                <span className="w-2.5 h-2.5 rounded-control bg-accent"></span> Event
              </span>
              <span className="flex items-center gap-1.5 text-status-critical-text">
                <span className="w-2.5 h-2.5 rounded-control bg-status-critical-text"></span> Problem
              </span>
            </div>
          </div>

          {/* SVG Canvas Visualization */}
          <svg
            className="w-full h-full cursor-grab active:cursor-grabbing"
            viewBox="0 0 900 600"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          >
            {/* Draw Graph Edges / Lines */}
            {edges.map(edge => {
              const srcNode = nodes.find(n => n.id === edge.source);
              const tgtNode = nodes.find(n => n.id === edge.target);
              if (!srcNode || !tgtNode) return null;

              const isHighlighted = selectedNode && (selectedNode.id === srcNode.id || selectedNode.id === tgtNode.id);

              return (
                <g key={edge.id}>
                  <line
                    x1={srcNode.x}
                    y1={srcNode.y}
                    x2={tgtNode.x}
                    y2={tgtNode.y}
                    stroke={isHighlighted ? '#252525' : 'rgba(244, 233, 208, 0.10)'}
                    strokeWidth={isHighlighted ? 2.5 : 1.5}
                    strokeDasharray={edge.label === 'MENTORING' ? '4 4' : undefined}
                  />
                  {/* Relationship Text Label */}
                  <text
                    x={(srcNode.x + tgtNode.x) / 2}
                    y={(srcNode.y + tgtNode.y) / 2 - 4}
                    fill={isHighlighted ? '#252525' : 'rgba(244, 233, 208, 0.3)'}
                    fontSize="9"
                    fontFamily="Inter, sans-serif"
                    textAnchor="middle"
                  >
                    {edge.label}
                  </text>
                </g>
              );
            })}

            {/* Draw Graph Nodes */}
            {filteredNodes.map(node => {
              const isSelected = selectedNode?.id === node.id;
              const nodeColor = categoryColors[node.category] || '#B89B5E';

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setSelectedNode(node)}
                  className="cursor-pointer group"
                >
                  {/* Selection Ring Glow */}
                  {isSelected && (
                    <circle
                      r="32"
                      fill="none"
                      stroke={nodeColor}
                      strokeWidth="2"
                      className="animate-ping opacity-40"
                    />
                  )}

                  {/* Outer Outer Circle */}
                  <circle
                    r={isSelected ? 26 : 22}
                    fill="#11110E"
                    stroke={isSelected ? nodeColor : 'rgba(244, 233, 208, 0.10)'}
                    strokeWidth={isSelected ? 3 : 1.5}
                    className="transition-all hover:stroke-[#B89B5E]"
                  />

                  {/* Inner Node Color Badge */}
                  <circle
                    r="12"
                    fill={nodeColor}
                    fillOpacity={0.9}
                  />

                  {/* Text Label Below Node */}
                  <text
                    y="38"
                    textAnchor="middle"
                    fill={isSelected ? '#252525' : '#A8A29E'}
                    fontSize="11"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    fontFamily="Inter, sans-serif"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right Col: GRAPH NODE DETAIL PANEL */}
        <GlassCard variant="gold" className="lg:col-span-1 space-y-5 flex flex-col justify-between">
          {selectedNode ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <span className="text-[10px] font-sans text-primary-muted uppercase tracking-widest font-medium">
                  Node Inspector
                </span>
                <Badge variant="gold">{selectedNode.category.toUpperCase()}</Badge>
              </div>

              <div>
                <h3 className="text-lg font-medium font-sans text-primary">{selectedNode.label}</h3>
                <p className="text-xs text-primary-muted mt-1 leading-relaxed">{selectedNode.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                <div className="p-3.5 rounded-control bg-surface/90 border border-surface-border">
                  <span className="text-primary-muted text-[10px] block">Legacy Value</span>
                  <span className="text-status-success-text text-base font-medium">{selectedNode.legacyValue} / 100</span>
                </div>
                <div className="p-3.5 rounded-control bg-surface/90 border border-surface-border">
                  <span className="text-primary-muted text-[10px] block">Legacy Loss Risk</span>
                  <span className="text-status-critical-text text-base font-medium">{selectedNode.legacyRisk} / 100</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-sans">
                <div className="flex justify-between p-2.5 rounded-control bg-surface/80 border border-surface-border">
                  <span className="text-primary-muted">Origin / Provenance:</span>
                  <span className="text-primary font-medium">{selectedNode.origin || 'Tacit AI Pipeline'}</span>
                </div>

                <div className="flex justify-between p-2.5 rounded-control bg-surface/80 border border-surface-border">
                  <span className="text-primary-muted">Knowledge Holders:</span>
                  <span className="text-primary font-medium">{selectedNode.holderCount || 1} Experts</span>
                </div>

                <div className="flex justify-between p-2.5 rounded-control bg-surface/80 border border-surface-border">
                  <span className="text-primary-muted">Evidence Sources:</span>
                  <span className="text-status-info-text font-medium">{selectedNode.evidenceCount || 6} Sources</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-sans uppercase text-primary-muted block font-medium">Related Graph Connections</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.relatedIds.map(relId => {
                    const relNode = nodes.find(n => n.id === relId);
                    return relNode ? (
                      <span
                        key={relId}
                        onClick={() => setSelectedNode(relNode)}
                        className="text-[10px] font-sans px-2.5 py-1 rounded-control bg-surface/90 text-primary border border-surface-border cursor-pointer hover:border-accent/40 transition-all"
                      >
                        {relNode.label}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleAskAboutNode(selectedNode)}
                  className="w-full py-3 rounded-control bg-surface-soft hover:bg-surface-subtle text-primary font-medium text-xs shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Bot size={16} className="text-accent" />
                  <span>Ask EVORIGEN About This Node</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3 text-primary-muted">
              <Share2 size={36} className="text-primary-light" />
              <p className="text-xs">Click any node on the graph canvas to inspect detailed provenance & scores.</p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

