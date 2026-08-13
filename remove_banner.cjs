const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("import { DemoModeBanner } from './components/layout/DemoModeBanner';\n", "");
content = content.replace("      {/* Top Persistent Banner */}\n      <DemoModeBanner />\n", "");

fs.writeFileSync(file, content);
console.log('Removed DemoModeBanner');
