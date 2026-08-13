const fs = require('fs');

function removeImports(file, importsToRemove) {
  let content = fs.readFileSync(file, 'utf8');
  for (const imp of importsToRemove) {
    const regex = new RegExp(`\\b${imp}\\b,?`, 'g');
    content = content.replace(regex, '');
  }
  // cleanup dangling commas
  content = content.replace(/,\s*}/g, ' }');
  fs.writeFileSync(file, content);
}

removeImports('src/components/layout/Sidebar.tsx', ['Sun', 'Moon']);
removeImports('src/components/layout/Topbar.tsx', ['Sun', 'Moon']);
removeImports('src/components/views/SettingsView.tsx', ['Palette', 'Sun', 'Moon']);
removeImports('src/context/DemoContext.tsx', ['useEffect']);
