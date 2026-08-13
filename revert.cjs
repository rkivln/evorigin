const fs = require('fs');
const path = require('path');

const replacements = [
  // Surfaces
  { from: /#141218/g, to: 'var(--surface-dark)' }, // Wait, let's use tailwind classes
  { from: /bg-\[#141218\]/g, to: 'bg-surface' },
  { from: /bg-\[#18161C\]/g, to: 'bg-surface-soft' },
  { from: /bg-\[#201D24\]/g, to: 'bg-surface-subtle' },
  { from: /bg-\[#28242E\]/g, to: 'bg-surface-subtle' },
  { from: /bg-\[#09080B\]/g, to: 'bg-background' },
  { from: /bg-\[#060609\]/g, to: 'bg-background' },
  { from: /bg-\[#0D0C11\]/g, to: 'bg-background' },
  // Text
  { from: /text-\[#F3F0F5\]/g, to: 'text-primary' },
  { from: /text-\[#9B96A2\]/g, to: 'text-primary-muted' },
  { from: /text-\[#6F6A76\]/g, to: 'text-primary-light' },
  { from: /placeholder-\[#6F6A76\]/g, to: 'placeholder-primary-light' },
  // Accents (Purple -> Yellow)
  { from: /text-\[#A66BC4\]/g, to: 'text-accent' },
  { from: /text-\[#C07BE5\]/g, to: 'text-accent-soft' },
  { from: /bg-\[#A66BC4\]/g, to: 'bg-accent' },
  { from: /bg-\[#955AB3\]/g, to: 'bg-yellow-500' },
  { from: /border-\[#A66BC4\]/g, to: 'border-accent' },
  { from: /accent-\[#A66BC4\]/g, to: 'accent-yellow-400' },
  // Transparency combinations for purple (approximate)
  { from: /bg-\[#A66BC4\]\/20/g, to: 'bg-accent/20' },
  { from: /bg-\[rgba\(166,107,196,0\.[0-9]+\)\]/g, to: 'bg-accent/20' },
  { from: /border-\[rgba\(166,107,196,0\.[0-9]+\)\]/g, to: 'border-accent/30' },
  { from: /shadow-\[0_0_[0-9]+px_rgba\(166,107,196,0\.[0-9]+\)\]/g, to: 'shadow-soft-sm' },
  // Status Colors
  { from: /text-\[#7FBF9A\]/g, to: 'text-status-success-text' },
  { from: /text-\[#8CC9A5\]/g, to: 'text-status-success-text' },
  { from: /bg-\[#7FBF9A\]/g, to: 'bg-status-success' },
  { from: /bg-\[rgba\(127,191,154,0\.[0-9]+\)\]/g, to: 'bg-status-success/40' },
  { from: /border-\[rgba\(127,191,154,0\.[0-9]+\)\]/g, to: 'border-status-success-text/30' },
  
  { from: /text-\[#D4A85C\]/g, to: 'text-status-warning-text' },
  { from: /bg-\[#D4A85C\]/g, to: 'bg-status-warning' },
  
  { from: /text-\[#D17A82\]/g, to: 'text-status-critical-text' },
  { from: /text-\[#DA8A91\]/g, to: 'text-status-critical-text' },
  { from: /bg-\[#D17A82\]/g, to: 'bg-status-critical' },
  { from: /bg-\[rgba\(209,122,130,0\.[0-9]+\)\]/g, to: 'bg-status-critical/40' },
  { from: /border-\[rgba\(209,122,130,0\.[0-9]+\)\]/g, to: 'border-status-critical-text/30' },
  
  { from: /text-\[#95B8D8\]/g, to: 'text-status-info-text' },
  { from: /bg-\[rgba\(105,140,168,0\.[0-9]+\)\]/g, to: 'bg-status-info/40' },
  { from: /border-\[rgba\(105,140,168,0\.[0-9]+\)\]/g, to: 'border-status-info-text/30' },
  
  // Borders
  { from: /border-white\/10/g, to: 'border-surface-border' },
  { from: /border-white\/20/g, to: 'border-surface-border' },
  { from: /border-white\/\[0\.0[0-9]+\]/g, to: 'border-surface-border' },
  { from: /bg-white\/10/g, to: 'bg-black/5' },
  { from: /bg-white\/20/g, to: 'bg-black/10' },
  { from: /bg-white\/\[0\.0[0-9]+\]/g, to: 'bg-black/5' },
  { from: /shadow-\[0_[0-9]+px_[0-9]+px_rgba\(0,0,0,0\.[0-9]+\)\]/g, to: 'shadow-card' },
  { from: /shadow-\[0_[0-9]+px_[0-9]+px_rgba\(0,0,0,0\.[0-9]+\),0_0_[0-9]+px_rgba\(166,107,196,0\.[0-9]+\)\]/g, to: 'shadow-floating' }
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
