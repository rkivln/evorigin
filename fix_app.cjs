const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<div className="min-h-screen bg-\[#AEB3C0\] text-\[#252525\] flex flex-col font-sans selection:bg-\[#F6D84A\] selection:text-\[#252525\]">/,
  '<div className="min-h-screen bg-background text-primary flex flex-col font-sans selection:bg-accent selection:text-background">'
);

fs.writeFileSync(file, content);
