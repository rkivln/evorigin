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

    content = content.replace(/rounded-\[20px\]/g, 'rounded-[24px]');
    
    // Check if we have rounded-2xl or rounded-3xl and replace them maybe?
    // Let's replace 'rounded-2xl' with 'rounded-[24px]' for consistency with the new pill styles on cards if needed, but let's stick to replacing rounded-[20px] for now.
    
    if (original !== content) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed radii', filePath);
    }
  }
});
