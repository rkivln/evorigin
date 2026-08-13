const fs = require('fs');
let file = 'src/components/views/LegacyGraphView.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/fill="#FFFFFF"/g, 'fill="#11110E"');
content = content.replace(/stroke={isSelected \? nodeColor : '#E5E5DE'}/g, "stroke={isSelected ? nodeColor : 'rgba(244, 233, 208, 0.10)'}");
content = content.replace(/hover:stroke-\[#252525\]/g, 'hover:stroke-[#B89B5E]'); // accent color for hover

fs.writeFileSync(file, content);
console.log('Fixed Graph SVG circles');
