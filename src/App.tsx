import React from 'react';
import { DemoProvider } from './context/DemoContext';
import { useDemo } from './context/useDemo';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { JudgeDemoGuide } from './components/layout/JudgeDemoGuide';

import { LandingPage } from './components/views/LandingPage';
import { DashboardView } from './components/views/DashboardView';
import { LegacyCaptureView } from './components/views/LegacyCaptureView';
import { AiProcessingView } from './components/views/AiProcessingView';
import { LegacyGraphView } from './components/views/LegacyGraphView';
import { KnowledgeLibraryView } from './components/views/KnowledgeLibraryView';
import { AiAssistantView } from './components/views/AiAssistantView';
import { RiskAnalysisView } from './components/views/RiskAnalysisView';
import { LegacyValueIndexView } from './components/views/LegacyValueIndexView';
import { FutureSimulatorView } from './components/views/FutureSimulatorView';
import { KnowledgeTransferView } from './components/views/KnowledgeTransferView';
import { MultiDomainView } from './components/views/MultiDomainView';
import { OrganizationView } from './components/views/OrganizationView';
import { SystemStatusView } from './components/views/SystemStatusView';
import { SettingsView } from './components/views/SettingsView';
import { TechArchitectureView } from './components/views/TechArchitectureView';
import { ApiDeveloperView } from './components/views/ApiDeveloperView';
import { DatabaseSchemaView } from './components/views/DatabaseSchemaView';

const MainContent: React.FC = () => {
  const { activePage } = useDemo();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const renderView = () => {
    switch (activePage) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <DashboardView />;
      case 'capture':
        return <LegacyCaptureView />;
      case 'processing':
        return <AiProcessingView />;
      case 'graph':
        return <LegacyGraphView />;
      case 'library':
        return <KnowledgeLibraryView />;
      case 'assistant':
        return <AiAssistantView />;
      case 'risk':
        return <RiskAnalysisView />;
      case 'value-index':
        return <LegacyValueIndexView />;
      case 'simulator':
        return <FutureSimulatorView />;
      case 'transfer':
        return <KnowledgeTransferView />;
      case 'multidomain':
        return <MultiDomainView />;
      case 'organization':
        return <OrganizationView />;
      case 'status':
        return <SystemStatusView />;
      case 'settings':
        return <SettingsView />;
      case 'architecture':
        return <TechArchitectureView />;
      case 'api':
        return <ApiDeveloperView />;
      case 'database':
        return <DatabaseSchemaView />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-primary flex flex-col font-sans selection:bg-accent selection:text-background">

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

        {/* Right Main Body */}
        <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarCollapsed ? "pl-16" : "pl-16 md:pl-64"}`}>
          <Topbar />
          <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
            {renderView()}
          </main>
        </div>
      </div>

      {/* Floating Judge Demo Tour Guide Overlay */}
      <JudgeDemoGuide />
    </div>
  );
};

export default function App() {
  return (
    <DemoProvider>
      <MainContent />
    </DemoProvider>
  );
}
