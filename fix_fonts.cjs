const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /bg-\[var\(--surface-dark\)\]/g, to: 'bg-white' },
  { from: /bg-\[#1A1E29\]/g, to: 'bg-cyan-50' },
  { from: /border-\[#698CA8\]\/30/g, to: 'border-cyan-200' },
  { from: /bg-\[#261A1C\]/g, to: 'bg-rose-50' },
  { from: /border-\[#D17A82\]\/30/g, to: 'border-rose-200' }
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
