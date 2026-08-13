export type PageId =
  | 'landing'
  | 'dashboard'
  | 'capture'
  | 'processing'
  | 'graph'
  | 'library'
  | 'assistant'
  | 'risk'
  | 'value-index'
  | 'simulator'
  | 'transfer'
  | 'multidomain'
  | 'organization'
  | 'status'
  | 'settings'
  | 'architecture'
  | 'api'
  | 'database';

export interface GraphNode {
  id: string;
  label: string;
  category: 'person' | 'skill' | 'event' | 'decision' | 'problem' | 'solution' | 'organization' | 'artifact' | 'location' | 'document';
  x: number;
  y: number;
  legacyValue: number;
  legacyRisk: number;
  holderCount?: number;
  evidenceCount?: number;
  origin?: string;
  description?: string;
  relatedIds: string[];
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label: string;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  domain: 'Industrial' | 'Cultural' | 'Family' | 'Disaster' | 'Education' | 'Environmental';
  expert: string;
  expertRole: string;
  date: string;
  legacyValueScore: number;
  legacyRiskScore: number;
  summary: string;
  sourceType: 'Audio' | 'Video' | 'Document' | 'Interview' | 'Sensor';
  sourceTimestamp?: string;
  tags: string[];
  evidenceSources: string[];
  keyDecisionPattern?: string;
}

export interface RiskItem {
  id: string;
  title: string;
  category: string;
  riskScore: number;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  expertHoldersCount: number;
  expertNames: string[];
  reason: string;
  lossImpact: string;
  preservationAction: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  sources?: Array<{ title: string; timestamp?: string }>;
  confidence?: 'High' | 'Medium' | 'Verifiable';
  evidenceCount?: number;
  relatedNodeIds?: string[];
}

export interface SimulationParams {
  decision: string;
  timeHorizonYears: number;
  knowledgeRetention: number;
  budgetAllocation: number;
  workforceScale: number;
  activeScenario: 'A' | 'B' | 'C';
}

export interface JudgeStep {
  stepIndex: number;
  title: string;
  pageId: PageId;
  description: string;
  highlightText: string;
  actionText?: string;
}
