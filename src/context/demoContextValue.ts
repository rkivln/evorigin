import { createContext } from 'react';
import type { PageId, GraphNode, GraphEdge, ChatMessage, JudgeStep } from '../types';

export interface DemoContextType {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  judgeModeActive: boolean;
  setJudgeModeActive: (active: boolean) => void;
  currentJudgeStep: number;
  judgeStepData: JudgeStep;
  startJudgeDemo: () => void;
  nextJudgeStep: () => void;
  prevJudgeStep: () => void;
  exitJudgeDemo: () => void;
  resetDemo: () => void;
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedNode: GraphNode | null;
  setSelectedNode: (node: GraphNode | null) => void;
  chatMessages: ChatMessage[];
  sendUserChatMessage: (text: string) => void;
  isProcessingPipeline: boolean;
  runProcessingPipeline: () => void;
  processingProgress: number;
  pipelineCompleted: boolean;
  uploadedFilesCount: number;
  addUploadedFile: () => void;
}

export const DemoContext = createContext<DemoContextType | undefined>(undefined);
