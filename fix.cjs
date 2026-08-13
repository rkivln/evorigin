const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'src/context/DemoContext.tsx');
let content = fs.readFileSync(p, 'utf8');
content = content.replace(/useEffect\(\(\) => \{\s+\} else \{\s+\}\s+\};\s+\};\s+const \[nodes/m, 'const [nodes');
fs.writeFileSync(p, content);
