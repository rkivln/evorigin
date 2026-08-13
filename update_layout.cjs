const fs = require('fs');

// 1. Update Sidebar.tsx
let sidebarContent = fs.readFileSync('src/components/layout/Sidebar.tsx', 'utf8');

sidebarContent = sidebarContent.replace(
  /export const Sidebar: React\.FC = \(\) => {/g,
  'export const Sidebar: React.FC<{collapsed: boolean, setCollapsed: (c: boolean) => void}> = ({ collapsed, setCollapsed }) => {'
);
sidebarContent = sidebarContent.replace(
  /  const \[collapsed, setCollapsed\] = useState\(false\);\n/g,
  ''
);

fs.writeFileSync('src/components/layout/Sidebar.tsx', sidebarContent);

// 2. Update App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf8');

appContent = appContent.replace(
  /const { activePage } = useDemo\(\);/g,
  'const { activePage } = useDemo();\n  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);'
);

appContent = appContent.replace(
  /<Sidebar \/>/g,
  '<Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />'
);

appContent = appContent.replace(
  /<div className="flex-1 flex flex-col min-w-0 pl-16 md:pl-64 transition-all duration-300">/g,
  '<div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarCollapsed ? "pl-16" : "pl-16 md:pl-64"}`}>'
);

fs.writeFileSync('src/App.tsx', appContent);
