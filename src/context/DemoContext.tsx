import React, { useState } from 'react';
import type { PageId, GraphNode, GraphEdge, ChatMessage } from '../types';
import { INITIAL_GRAPH_NODES, INITIAL_GRAPH_EDGES, JUDGE_STEPS } from '../data/mockData';
import { DemoContext } from './demoContextValue';

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<PageId>('landing');
  const [judgeModeActive, setJudgeModeActive] = useState<boolean>(false);
  const [currentJudgeStep, setCurrentJudgeStep] = useState<number>(1);

  const [nodes, setNodes] = useState<GraphNode[]>(INITIAL_GRAPH_NODES);
  const [edges, setEdges] = useState<GraphEdge[]>(INITIAL_GRAPH_EDGES);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(INITIAL_GRAPH_NODES[1]);
  
  const [uploadedFilesCount, setUploadedFilesCount] = useState<number>(1);
  const [isProcessingPipeline, setIsProcessingPipeline] = useState<boolean>(false);
  const [processingProgress, setProcessingProgress] = useState<number>(0);
  const [pipelineCompleted, setPipelineCompleted] = useState<boolean>(true);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: 'Greetings. I am EVORIGEN Legacy AI. Ask any question about preserved human experience, industrial decisions, or generational skills across the Universal Legacy Graph.',
      timestamp: '10:00 AM'
    },
    {
      id: 'm2',
      sender: 'user',
      text: 'How did Arun diagnose CNC spindle vibration during maintenance?',
      timestamp: '10:01 AM'
    },
    {
      id: 'm3',
      sender: 'ai',
      text: 'Based on Dr. Arun\'s recorded interview (Session #4, 14:32) and Maintenance Log #4092, his recommended diagnostic sequence is to analyze acoustic vibration harmonics first to rule out foundation thermal expansion alignment before replacing high-speed spindle bearings. This rule saved $1.4M in unnecessary component replacement.',
      timestamp: '10:01 AM',
      confidence: 'High',
      evidenceCount: 3,
      sources: [
        { title: 'Arun Interview Session #4', timestamp: '14:32' },
        { title: 'CNC Spindle Maintenance Report #4092' },
        { title: 'Foundation Thermal Expansion Guide 2021' }
      ],
      relatedNodeIds: ['node-arun', 'node-vibe-diag', 'node-foundation-align']
    }
  ]);

  const judgeStepData = JUDGE_STEPS.find(s => s.stepIndex === currentJudgeStep) || JUDGE_STEPS[0];

  const startJudgeDemo = () => {
    setJudgeModeActive(true);
    setCurrentJudgeStep(1);
    setActivePage('landing');
  };

  const nextJudgeStep = () => {
    if (currentJudgeStep < JUDGE_STEPS.length) {
      const nextStepNum = currentJudgeStep + 1;
      setCurrentJudgeStep(nextStepNum);
      const targetStep = JUDGE_STEPS.find(s => s.stepIndex === nextStepNum);
      if (targetStep) {
        setActivePage(targetStep.pageId);
      }
    } else {
      setJudgeModeActive(false);
    }
  };

  const prevJudgeStep = () => {
    if (currentJudgeStep > 1) {
      const prevStepNum = currentJudgeStep - 1;
      setCurrentJudgeStep(prevStepNum);
      const targetStep = JUDGE_STEPS.find(s => s.stepIndex === prevStepNum);
      if (targetStep) {
        setActivePage(targetStep.pageId);
      }
    }
  };

  const exitJudgeDemo = () => {
    setJudgeModeActive(false);
  };

  const resetDemo = () => {
    setNodes(INITIAL_GRAPH_NODES);
    setEdges(INITIAL_GRAPH_EDGES);
    setSelectedNode(INITIAL_GRAPH_NODES[1]);
    setUploadedFilesCount(1);
    setIsProcessingPipeline(false);
    setProcessingProgress(0);
    setPipelineCompleted(true);
    setJudgeModeActive(false);
    setCurrentJudgeStep(1);
    setActivePage('landing');
  };

  const addUploadedFile = () => {
    setUploadedFilesCount(prev => prev + 1);
  };

  const runProcessingPipeline = () => {
    setIsProcessingPipeline(true);
    setProcessingProgress(0);
    setPipelineCompleted(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 12;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setIsProcessingPipeline(false);
        setPipelineCompleted(true);
      }
      setProcessingProgress(current);
    }, 400);
  };

  const sendUserChatMessage = (query: string) => {
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let aiText = "EVORIGEN Vector Search + RAG query processed across 1,248 indexed knowledge nodes.";
      let sources: Array<{ title: string; timestamp?: string }> = [
        { title: "Universal Legacy Knowledge Store" },
        { title: "Dr. Arun Empirical Logbook 2021" }
      ];
      let confidence: 'High' | 'Medium' | 'Verifiable' = 'High';

      const q = query.toLowerCase();
      if (q.includes('arun') || q.includes('vibration') || q.includes('cnc')) {
        aiText = "According to Dr. Arun's 34-year empirical dataset, CNC vibration diagnosis requires assessing foundation anchor bolt torque harmonics prior to replacing spindle bearings. In 82% of reported cases, foundation alignment drift was the root cause.";
        sources = [
          { title: "Arun Interview Session #4", timestamp: "14:32" },
          { title: "Maintenance Incident Log #4092" },
          { title: "BHPE Spindle Vibration Audit" }
        ];
      } else if (q.includes('risk') || q.includes('losing') || q.includes('lose')) {
        aiText = "The highest risk knowledge item is 'Traditional Terracotta Glaze Firing Acoustics' (Risk: 91/100, 1 holder remaining) followed by 'CNC Foundation Misalignment Diagnosis' (Risk: 78/100, 2 active holders remaining). Immediate knowledge transfer is recommended.";
        sources = [
          { title: "EVORIGEN Legacy Risk Assessment Matrix 2026" },
          { title: "Organization HR Succession Audit" }
        ];
      } else if (q.includes('grandmother') || q.includes('family') || q.includes('financial')) {
        aiText = "Based on preserved family oral history from Late Savitri Ammal (1982 Cassette Tape #03): 'Never mortgage primary ancestral farmland for short-term liquidity; utilize gold-backed emergency credit lines during agrarian drought cycles.'";
        sources = [
          { title: "Savitri Ammal Oral Archive Tape #03", timestamp: "22:10" },
          { title: "Family Agrarian Ledger 1982" }
        ];
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        confidence,
        evidenceCount: sources.length,
        sources,
        relatedNodeIds: ['node-arun', 'node-vibe-diag']
      };

      setChatMessages(prev => [...prev, aiMsg]);
    }, 700);
  };

  return (
    <DemoContext.Provider
      value={{
        activePage,
        setActivePage,
        judgeModeActive,
        setJudgeModeActive,
        currentJudgeStep,
        judgeStepData,
        startJudgeDemo,
        nextJudgeStep,
        prevJudgeStep,
        exitJudgeDemo,
        resetDemo,
        nodes,
        edges,
        selectedNode,
        setSelectedNode,
        chatMessages,
        sendUserChatMessage,
        isProcessingPipeline,
        runProcessingPipeline,
        processingProgress,
        pipelineCompleted,
        uploadedFilesCount,
        addUploadedFile }}
    >
      {children}
    </DemoContext.Provider>
  );
};
