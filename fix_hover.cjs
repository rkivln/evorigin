const fs = require('fs');
const files = [
  'src/components/layout/Sidebar.tsx',
  'src/components/layout/Topbar.tsx',
  'src/components/layout/JudgeDemoGuide.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace hover:bg-black/5 and bg-black/5 with appropriate values for dark theme
    content = content.replace(/hover:bg-black\/5/g, 'hover:bg-surface-subtle');
    
    // Fix badges and other stuff
    // 'bg-black/5 text-primary-muted' (for inactive badge) -> 'bg-surface-subtle text-primary-muted'
    content = content.replace(/bg-black\/5 text-primary-muted/g, 'bg-surface-subtle border border-surface-border text-primary-muted');
    
    // 'bg-black/5 hover:bg-black/10' in JudgeDemoGuide -> 'bg-surface-soft hover:bg-surface-subtle border border-surface-border'
    content = content.replace(/bg-black\/5 hover:bg-black\/10/g, 'bg-surface-soft hover:bg-surface-subtle border border-surface-border');
    
    // 'w-2 bg-black/10' in JudgeDemoGuide -> 'w-2 bg-surface-border'
    content = content.replace(/w-2 bg-black\/10/g, 'w-2 bg-surface-border');
    
    // 'w-full h-1.5 bg-black/5' -> 'w-full h-1.5 bg-surface-subtle'
    content = content.replace(/bg-black\/5 rounded-full/g, 'bg-surface-subtle rounded-full');

    fs.writeFileSync(file, content);
    console.log('Fixed hovers', file);
  }
});
