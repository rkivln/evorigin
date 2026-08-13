import type { GraphNode, GraphEdge, KnowledgeItem, RiskItem, JudgeStep } from '../types';

export const EXPERT_PROFILE = {
  name: "Dr. Arun Kumar",
  title: "Senior Manufacturing & Vibration Engineering Specialist",
  experienceYears: 34,
  organization: "Bharat Heavy Precision Engineering",
  status: "Retiring in 45 Days",
  knowledgeItemsCount: 247,
  recordedSessions: 18,
  skillsIdentified: 42,
  criticalKnowledgeItems: 13,
  legacyRiskScore: 78,
  legacyValueScore: 94,
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
};

export const INITIAL_GRAPH_NODES: GraphNode[] = [
  {
    id: 'node-arun',
    label: 'Dr. Arun Kumar',
    category: 'person',
    x: 400,
    y: 260,
    legacyValue: 98,
    legacyRisk: 88,
    holderCount: 1,
    evidenceCount: 18,
    origin: 'BHPE Industrial Specialist (34 yrs)',
    description: 'Lead engineer with 34 years of undocumented practical intuition in precision CNC machining & vibration acoustics.',
    relatedIds: ['node-vibe-diag', 'node-cnc-maint', 'node-foundation-align', 'node-priya']
  },
  {
    id: 'node-vibe-diag',
    label: 'Industrial Vibration Diagnosis',
    category: 'skill',
    x: 230,
    y: 150,
    legacyValue: 94,
    legacyRisk: 78,
    holderCount: 2,
    evidenceCount: 12,
    origin: 'Tacit Knowledge Engine Extraction',
    description: 'Ability to differentiate structural foundation shift harmonics from localized bearing race pitting without tear-down.',
    relatedIds: ['node-arun', 'node-bearing-failure', 'node-foundation-align']
  },
  {
    id: 'node-foundation-align',
    label: 'Foundation Misalignment Pattern',
    category: 'decision',
    x: 580,
    y: 140,
    legacyValue: 96,
    legacyRisk: 84,
    holderCount: 1,
    evidenceCount: 7,
    origin: 'Interview — 14:32 (Dr. Arun)',
    description: 'Rule of thumb: Check anchor pad thermal expansion torque before replacing expensive high-speed spindle bearings.',
    relatedIds: ['node-arun', 'node-cnc-maint', 'node-downtime-reduction']
  },
  {
    id: 'node-cnc-maint',
    label: 'CNC Heavy Axis Maintenance',
    category: 'event',
    x: 620,
    y: 350,
    legacyValue: 90,
    legacyRisk: 64,
    holderCount: 3,
    evidenceCount: 24,
    origin: 'Shop Floor Incident Archives 2019',
    description: 'Major overhaul procedure developed post-2019 power surge anomaly.',
    relatedIds: ['node-arun', 'node-downtime-reduction', 'node-priya']
  },
  {
    id: 'node-bearing-failure',
    label: 'Bearing Failure Misdiagnosis',
    category: 'problem',
    x: 180,
    y: 330,
    legacyValue: 88,
    legacyRisk: 72,
    holderCount: 2,
    evidenceCount: 9,
    origin: 'Maintenance Report #4092',
    description: 'Recurring issue where maintenance technicians swapped multi-stage bearings 4 times unnecessarily.',
    relatedIds: ['node-vibe-diag', 'node-foundation-align']
  },
  {
    id: 'node-downtime-reduction',
    label: '$1.4M Annual Downtime Saved',
    category: 'solution',
    x: 420,
    y: 450,
    legacyValue: 99,
    legacyRisk: 45,
    holderCount: 4,
    evidenceCount: 15,
    origin: 'Operational Cost Audit 2024',
    description: 'Quantified savings achieved by deploying Arun\'s preliminary diagnostic sequence prior to mechanical teardown.',
    relatedIds: ['node-foundation-align', 'node-cnc-maint']
  },
  {
    id: 'node-priya',
    label: 'Priya Sharma (Successor)',
    category: 'person',
    x: 750,
    y: 260,
    legacyValue: 74,
    legacyRisk: 30,
    holderCount: 1,
    evidenceCount: 5,
    origin: 'Junior Maintenance Engineer (2 yrs)',
    description: 'Designated successor actively undergoing EVORIGEN Knowledge Transfer module.',
    relatedIds: ['node-arun', 'node-cnc-maint']
  },
  {
    id: 'node-ceramic-firing',
    label: 'Traditional Ceramic Thermal Control',
    category: 'skill',
    x: 120,
    y: 480,
    legacyValue: 91,
    legacyRisk: 91,
    holderCount: 1,
    evidenceCount: 4,
    origin: 'Kumbhar Pottery Heritage Trust',
    description: 'Kiln damper adjustment based on smoke color gradients and flame pitch harmonics.',
    relatedIds: []
  }
];

export const INITIAL_GRAPH_EDGES: GraphEdge[] = [
  { id: 'e1', source: 'node-arun', target: 'node-vibe-diag', label: 'HAS_SKILL' },
  { id: 'e2', source: 'node-vibe-diag', target: 'node-bearing-failure', label: 'PREVENTS' },
  { id: 'e3', source: 'node-arun', target: 'node-foundation-align', label: 'ESTABLISHED_RULE' },
  { id: 'e4', source: 'node-foundation-align', target: 'node-cnc-maint', label: 'APPLIED_IN' },
  { id: 'e5', source: 'node-foundation-align', target: 'node-downtime-reduction', label: 'DELIVERED_VALUE' },
  { id: 'e6', source: 'node-arun', target: 'node-priya', label: 'MENTORING' },
  { id: 'e7', source: 'node-priya', target: 'node-cnc-maint', label: 'TRAINING_ON' },
  { id: 'e8', source: 'node-cnc-maint', target: 'node-downtime-reduction', label: 'RESULTED_IN' },
];

export const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  {
    id: 'kn-01',
    title: 'CNC Foundation Misalignment vs Bearing Failure Acoustic Pattern',
    category: 'Diagnostic Decision',
    domain: 'Industrial',
    expert: 'Dr. Arun Kumar',
    expertRole: 'Senior Manufacturing Engineer',
    date: '2026-03-14',
    legacyValueScore: 96,
    legacyRiskScore: 84,
    summary: 'When 2nd-order harmonic vibration spikes post-maintenance, do not immediately tear down spindle bearings. First inspect foundation pad thermal expansion torque.',
    sourceType: 'Interview',
    sourceTimestamp: '14:32',
    tags: ['CNC', 'Vibration Analysis', 'Spindle Maintenance', 'Diagnostic Rule'],
    evidenceSources: ['Recorded Interview Session #4', 'Maintenance Logbook 2021-Q3', 'Spindle Vibration Dataset #09'],
    keyDecisionPattern: 'Check foundation alignment before replacing bearings.'
  },
  {
    id: 'kn-02',
    title: 'High-Temperature Kiln Thermal Gradient Control by Flame Harmonics',
    category: 'Cultural Craft & Metallurgy',
    domain: 'Cultural',
    expert: 'Master Mastercraftsman Ramanathan',
    expertRole: 'Heritage Potter & Metal Artisan',
    date: '2026-02-10',
    legacyValueScore: 91,
    legacyRiskScore: 91,
    summary: 'Adjusting kiln airflow dampers by listening to low-frequency pitch alterations inside the furnace stack, maintaining exact 1150°C without pyrometers.',
    sourceType: 'Video',
    sourceTimestamp: '08:15',
    tags: ['Pottery', 'Endangered Craft', 'Thermal Intuition', 'Heritage'],
    evidenceSources: ['Field Documentation Video #12', 'Audio Frequency Spectral Analysis'],
    keyDecisionPattern: 'Modulate chimney damper when flame note drops from G-sharp to F-natural.'
  },
  {
    id: 'kn-03',
    title: 'Post-Cyclone Estuary Silt Evacuation Navigation Routes',
    category: 'Disaster Resilience',
    domain: 'Disaster',
    expert: 'Captain K. Varghese',
    expertRole: 'Coastal Maritime Disaster Advisor',
    date: '2025-11-04',
    legacyValueScore: 95,
    legacyRiskScore: 68,
    summary: 'Emergency evacuation shallow-draft boat paths through shifted sandbars following Category 4 storm surges in the Bay of Bengal delta.',
    sourceType: 'Document',
    tags: ['Disaster Recovery', 'Maritime', 'Emergency Route', 'Community Memory'],
    evidenceSources: ['Emergency Relief Log 2020', 'Bathymetric Survey Annotations'],
    keyDecisionPattern: 'Navigate sandbar cutouts via the eastern mangrove tree line markers.'
  },
  {
    id: 'kn-04',
    title: 'Family Financial Risk Hedging & Land Preservation Principle',
    category: 'Generational Life Wisdom',
    domain: 'Family',
    expert: 'Late Savitri Ammal',
    expertRole: 'Family Matriarch & Agrarian Manager',
    date: '2024-09-18',
    legacyValueScore: 89,
    legacyRiskScore: 52,
    summary: 'Core agrarian financial principle: Never mortgage primary ancestral farmland for short-term liquidity; use gold-backed emergency lines during drought cycles.',
    sourceType: 'Audio',
    sourceTimestamp: '22:10',
    tags: ['Family Heritage', 'Financial Resilience', 'Values', 'Agriculture'],
    evidenceSources: ['Oral History Cassette Tape #03', 'Family Accounting Ledger 1982'],
    keyDecisionPattern: 'Maintain 18 months of grain & gold reserves before capital expansion.'
  }
];

export const RISK_ITEMS: RiskItem[] = [
  {
    id: 'rk-01',
    title: 'CNC Foundation Misalignment Diagnostic Intuition',
    category: 'Industrial Precision Machining',
    riskScore: 78,
    riskLevel: 'High',
    expertHoldersCount: 2,
    expertNames: ['Dr. Arun Kumar', 'S. Natarajan (Retiring)'],
    reason: 'Only 2 engineers hold 34 years of empirical acoustic vibration pattern recognition.',
    lossImpact: 'Estimated $450,000 annual waste in premature spindle bearing replacement and unneeded downtime.',
    preservationAction: 'Complete EVORIGEN Tacit Knowledge Interview & deploy interactive simulator to Priya Sharma.'
  },
  {
    id: 'rk-02',
    title: 'Traditional Terracotta Glaze Firing Acoustics',
    category: 'Intangible Cultural Heritage',
    riskScore: 91,
    riskLevel: 'Critical',
    expertHoldersCount: 1,
    expertNames: ['Master Ramanathan (Age 79)'],
    reason: 'Single active knowledge holder globally with undocumented auditory thermal sensing techniques.',
    lossImpact: 'Permanent extinction of 300-year-old eco-friendly pottery firing technique.',
    preservationAction: 'High-definition multi-channel acoustic and thermal sensor capture session scheduled.'
  },
  {
    id: 'rk-03',
    title: 'Turbine Emergency Bypass Manual Override Logic',
    category: 'Power Plant Operations',
    riskScore: 64,
    riskLevel: 'Medium',
    expertHoldersCount: 3,
    expertNames: ['V. Sundaram', 'M. Deshmukh', 'A. Gupta'],
    reason: 'Manual override procedure is documented in paper manuals, but operator decision reasoning under pressure is unwritten.',
    lossImpact: 'Increased risk of catastrophic trip during grid frequency fluctuations.',
    preservationAction: 'RAG scenario indexing & simulation test for shift operators.'
  }
];

export const JUDGE_STEPS: JudgeStep[] = [
  {
    stepIndex: 1,
    title: "1. The Core Problem & Solution",
    pageId: "landing",
    description: "Welcome to EVORIGEN! Traditional systems archive static documents & files. EVORIGEN preserves tacit knowledge, decisions, and capabilities so future generations can reuse them.",
    highlightText: "Explore the Past → Present → Future generational knowledge transfer timeline."
  },
  {
    stepIndex: 2,
    title: "2. Capture Expert Knowledge",
    pageId: "capture",
    description: "Dr. Arun Kumar (34-year Senior Manufacturing Engineer) is retiring. We capture his oral interviews, video recordings, and incident logs using AI Interview Mode.",
    highlightText: "Try uploading a file or running the interactive AI interview prompt."
  },
  {
    stepIndex: 3,
    title: "3. Tacit AI Processing Pipeline",
    pageId: "processing",
    description: "EVORIGEN's multi-stage NLP & Audio pipeline extracts entities, decisions, skills, and relationships from raw unstructured audio/video.",
    highlightText: "Observe the 9-stage verified extraction pipeline producing structured knowledge cards."
  },
  {
    stepIndex: 4,
    title: "4. Universal Legacy Graph",
    pageId: "graph",
    description: "Knowledge items are linked into a multi-dimensional semantic graph connecting People → Skills → Decisions → Problems → Solutions.",
    highlightText: "Click on 'Industrial Vibration Diagnosis' node to inspect proof & source evidence panel."
  },
  {
    stepIndex: 5,
    title: "5. Searchable RAG Knowledge Library",
    pageId: "library",
    description: "Every captured insight is indexed in Vector DB + RAG engine for instant contextual retrieval across decades.",
    highlightText: "Try searching: 'How did Arun diagnose CNC spindle vibration?'"
  },
  {
    stepIndex: 6,
    title: "6. EVORIGEN AI Assistant (Conversational RAG)",
    pageId: "assistant",
    description: "Ask natural language questions. The AI responds with exact citations, timestamp provenance, confidence scores, and source evidence.",
    highlightText: "Inspect the source transparency cards beneath the AI answer."
  },
  {
    stepIndex: 7,
    title: "7. Legacy Risk Analysis",
    pageId: "risk",
    description: "The system calculates risk scores for skills based on expert retirement timelines and holder concentration.",
    highlightText: "Notice 'CNC Troubleshooting' has a 78/100 risk score because only 2 experts hold the knowledge."
  },
  {
    stepIndex: 8,
    title: "8. Future Impact Simulator",
    pageId: "simulator",
    description: "Simulate 5 to 50-year organizational outcomes. Compare Scenario A (Do nothing) vs Scenario B (EVORIGEN Preservation) vs Scenario C (Preserve + Train Next Gen).",
    highlightText: "Adjust the time horizon slider to 25 years and click 'Run Simulation'."
  },
  {
    stepIndex: 9,
    title: "9. Knowledge Transfer & Learning",
    pageId: "transfer",
    description: "Turn tacit experience into interactive learning modules. Junior engineer Priya Sharma uses Dr. Arun's module to master diagnostic steps.",
    highlightText: "Explore the diagnostic checklist & practice scenario quiz."
  },
  {
    stepIndex: 10,
    title: "10. Impact & Architecture",
    pageId: "architecture",
    description: "Review the full system stack (Frontend React, Node/Express API, FastAPI AI Service, Vector Search, Knowledge Graph DB, PostgreSQL).",
    highlightText: "EVORIGEN preserves the capability to build the future!"
  }
];

export const TECHNICAL_STACK = [
  { layer: "Frontend Layer", tech: "React 18 + Vite + TypeScript + Tailwind CSS", desc: "Ultra-responsive dark glass UI with Framer Motion animations & SVG interactive canvas graph." },
  { layer: "Backend Gateway", tech: "Node.js + Express API + REST/GraphQL", desc: "Handles authentication, metadata orchestration, RBAC security, and job queue management." },
  { layer: "AI & NLP Engine", tech: "Python / FastAPI + Whisper + Spacy + LangChain", desc: "Audio transcription, entity extraction, skill detection, and decision pattern taxonomy parsing." },
  { layer: "Retrieval (RAG)", tech: "Vector DB (Qdrant / Milvus / Pinecone) + Hybrid Search", desc: "Dense vector embeddings + Sparse BM25 retrieval for sub-second semantic search with timestamp citations." },
  { layer: "Knowledge Graph", tech: "Neo4j / Memgraph + Cypher Queries", desc: "Stores Universal Legacy Graph connections (People, Skills, Events, Decisions, Problems, Solutions)." },
  { layer: "Relational DB", tech: "PostgreSQL + Prisma ORM", desc: "Persistent store for user profiles, access control lists, audit logs, and simulation parameters." }
];

export const API_ENDPOINTS = [
  { method: "POST", path: "/api/v1/legacy/capture", desc: "Upload unstructured audio/video/document legacy source files." },
  { method: "POST", path: "/api/v1/knowledge/process", desc: "Trigger 9-stage Tacit Knowledge Extraction Pipeline." },
  { method: "GET", path: "/api/v1/graph/nodes", desc: "Query Universal Legacy Graph nodes & edges filtered by category/domain." },
  { method: "POST", path: "/api/v1/chat/query", desc: "Execute RAG contextual query with source provenance and confidence score." },
  { method: "POST", path: "/api/v1/simulation/run", desc: "Run multi-variable Future Impact Simulation across 5-50 year time horizons." },
  { method: "GET", path: "/api/v1/analytics/risk-matrix", desc: "Retrieve organizational Legacy Risk Score breakdown & critical skill gaps." }
];

export const DB_SCHEMA_TABLES = [
  { name: "Users", fields: ["id (UUID)", "name", "email", "role", "organization_id", "created_at"] },
  { name: "LegacyProfiles", fields: ["id (UUID)", "user_id", "expert_title", "years_experience", "legacy_value_score", "legacy_risk_score"] },
  { name: "KnowledgeItems", fields: ["id (UUID)", "title", "category", "domain", "summary", "decision_pattern", "source_url", "source_timestamp"] },
  { name: "GraphNodes", fields: ["id (UUID)", "label", "category", "legacy_value", "legacy_risk", "holder_count", "metadata (JSONB)"] },
  { name: "GraphEdges", fields: ["id (UUID)", "source_node_id", "target_node_id", "relationship_type", "weight"] },
  { name: "AuditLogs", fields: ["id (UUID)", "user_id", "action", "resource_id", "ip_address", "timestamp"] },
];
