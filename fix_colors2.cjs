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

    content = content.replace(/bg-\[#E5F2D8\] border border-\[#C2E0A8\]\/80/g, 'bg-status-success/10 border border-status-success-text/30');
    content = content.replace(/bg-\[#E5F2D8\] border border-\[#C2E0A8\]/g, 'bg-status-success/10 border border-status-success-text/30 text-status-success-text');
    content = content.replace(/bg-\[#1E293B\]/g, 'bg-surface-subtle');
    content = content.replace(/bg-\[#EEF5FC\] border border-\[#C8DCF1\]/g, 'bg-status-info/10 border border-status-info-text/30');
    content = content.replace(/bg-\[#FAF0F0\] border border-\[#F6D8D5\]/g, 'bg-status-critical/10 border border-status-critical-text/30');

    if (original !== content) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed more colors', filePath);
    }
  }
});
