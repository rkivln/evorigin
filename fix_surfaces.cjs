const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /bg-white/g, to: 'bg-surface' },
  { from: /bg-cyan-50/g, to: 'bg-surface-subtle' },
  { from: /border-cyan-200/g, to: 'border-status-info-text/30' },
  { from: /bg-rose-50/g, to: 'bg-surface-subtle' },
  { from: /border-rose-200/g, to: 'border-status-critical-text/30' },
  { from: /text-\[#252525\]/g, to: 'text-primary' }, // catch any hardcoded texts
  { from: /hover:bg-yellow-500/g, to: 'hover:brightness-110' },
  { from: /text-white/g, to: 'text-background' } // text-white inside buttons (which have bg-accent #B89B5E) should be text-background (#0B0B09) so it is dark on light brass
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const replacement of replacements) {
        content = content.replace(replacement.from, replacement.to);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
