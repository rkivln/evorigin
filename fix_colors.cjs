const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('src/components/views', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/bg-\[#FAF6DF\]/g, 'bg-accent/10');
    content = content.replace(/border-\[#F6D84A\]/g, 'border-accent/30');
    content = content.replace(/bg-\[#FFF1B8\]/g, 'bg-accent/20');
    content = content.replace(/bg-\[#F6D84A\] hover:bg-\[#FFF1A8\]/g, 'bg-accent hover:brightness-110');
    content = content.replace(/bg-\[#FAF6DF\] hover:bg-\[#FFF1A8\]/g, 'bg-accent/10 hover:bg-accent/20');
    content = content.replace(/border-\[#F6D84A\]\/60/g, 'border-accent/30');
    content = content.replace(/bg-slate-200 text-primary-muted/g, 'bg-surface-subtle text-primary-muted opacity-50');
    content = content.replace(/hover:bg-slate-50/g, 'hover:bg-surface-subtle');
    
    // Some manual fixes for text colors inside these boxes:
    // When changing bg to dark accent, we might need text-accent or text-primary instead of hard dark texts if there were any, but standard is text-primary so it should be fine.
    
    if (original !== content) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
