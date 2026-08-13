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

    // Charts tooltip background and border
    content = content.replace(/backgroundColor: '#F8F7F2'/g, "backgroundColor: '#161612'");
    content = content.replace(/borderColor: '#E5E5DE'/g, "borderColor: 'rgba(244, 233, 208, 0.10)'");
    content = content.replace(/color: '#252525'/g, "color: '#F4E9D0'");
    content = content.replace(/color: '#F8F7F2'/g, "color: '#F4E9D0'"); // Just in case
    content = content.replace(/wrapperStyle={{ fontSize: '12px', color: '#252525' }}/g, "wrapperStyle={{ fontSize: '12px', color: '#F4E9D0' }}");

    // Charts grids and strokes
    content = content.replace(/stroke="#E5E5DE"/g, 'stroke="rgba(244, 233, 208, 0.10)"');
    content = content.replace(/stroke="#252525"/g, 'stroke="#B89B5E"');
    
    // Sliders and inputs
    content = content.replace(/accent-\[#252525\]/g, 'accent-accent');
    content = content.replace(/focus:border-\[#252525\]/g, 'focus:border-accent/40');
    content = content.replace(/hover:border-\[#252525\]/g, 'hover:border-accent/40');
    content = content.replace(/placeholder-\[#777770\]/g, 'placeholder-[#A8A29E]');
    
    // SVG texts and strokes in Graph
    content = content.replace(/: '#D5D5CE'/g, ": 'rgba(244, 233, 208, 0.10)'");
    content = content.replace(/: '#888880'/g, ": 'rgba(244, 233, 208, 0.3)'");
    content = content.replace(/: '#555550'/g, ": '#A8A29E'");
    content = content.replace(/: '#252525'/g, ": '#B89B5E'");
    content = content.replace(/\|\| '#252525'/g, "|| '#B89B5E'");

    // Any missing fill='#F6D84A' in radar chart
    content = content.replace(/fill="#F6D84A"/g, 'fill="#B89B5E"');
    
    if (original !== content) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed hex colors', filePath);
    }
  }
});
