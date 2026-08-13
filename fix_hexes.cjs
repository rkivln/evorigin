const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /text-\[#252525\]/g, to: 'text-primary' },
  { from: /text-\[#777770\]/g, to: 'text-primary-muted' },
  { from: /text-\[#A3A39A\]/g, to: 'text-primary-light' },
  { from: /text-\[#55703C\]/g, to: 'text-status-success-text' },
  { from: /text-\[#8A4D47\]/g, to: 'text-status-critical-text' },
  { from: /text-\[#3B6488\]/g, to: 'text-status-info-text' },
  { from: /text-\[#7C638A\]/g, to: 'text-accent' },
  { from: /text-\[#F6D84A\]/g, to: 'text-accent' },
  { from: /text-\[#F8F7F2\]/g, to: 'text-primary' },
  { from: /bg-\[#252525\]/g, to: 'bg-surface-subtle' },
  { from: /bg-\[#292929\]/g, to: 'bg-surface-soft' },
  { from: /hover:bg-\[#3D3D3D\]/g, to: 'hover:bg-surface-subtle' },
  { from: /bg-\[#F8F7F2\]/g, to: 'bg-surface' },
  { from: /border-\[#252525\]\/\[0\.0[0-9]+\]/g, to: 'border-surface-border' },
  { from: /border-\[#292929\]/g, to: 'border-surface-border' },
  { from: /text-\[#555550\]/g, to: 'text-primary-muted' },
  { from: /hover:bg-\[#F4F3EE\]/g, to: 'hover:bg-surface-soft' },
  { from: /text-\[#D5D3CC\]/g, to: 'text-primary' },
  { from: /text-\[#79631B\]/g, to: 'text-status-warning-text' },
  { from: /bg-\[#E8E7E2\]/g, to: 'bg-surface-subtle opacity-50' },
  { from: /text-\[#A09E96\]/g, to: 'text-primary-muted' }
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
