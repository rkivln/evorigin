const fs = require('fs');
let file = 'src/components/layout/Sidebar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace "EV" with "E" in a stylish font
content = content.replace(
  /<div className="w-8 h-8 rounded-xl bg-surface-subtle border border-accent\/40 flex items-center justify-center text-accent font-medium text-xs shadow-soft-sm">\s*EV\s*<\/div>/g,
  '<div className="w-8 h-8 rounded-xl bg-surface-subtle border border-accent/40 flex items-center justify-center text-accent font-serif text-lg font-bold italic shadow-soft-sm">\n              E\n            </div>'
);

content = content.replace(
  /<button \s*onClick=\{\(\) => setActivePage\('landing'\)\}\s*className="mx-auto w-8 h-8 rounded-xl bg-surface-subtle border border-accent\/40 flex items-center justify-center text-accent font-medium text-xs shadow-soft-sm"\s*>\s*EV\s*<\/button>/g,
  `<button \n            onClick={() => setActivePage('landing')}\n            className="mx-auto w-8 h-8 rounded-xl bg-surface-subtle border border-accent/40 flex items-center justify-center text-accent font-serif text-lg font-bold italic shadow-soft-sm"\n          >\n            E\n          </button>`
);

// Fix button padding and alignment for mainNav
content = content.replace(
  /className=\{`w-full flex items-center gap-3 px-3 py-2 rounded-full text-xs font-medium transition-all group \$\{/g,
  'className={`w-full flex items-center gap-3 py-2 rounded-full text-xs font-medium transition-all group ${collapsed ? "justify-center px-0" : "justify-start px-3"} ${'
);

// Fix "EV" logo for collapsed button edge case where whitespace differs slightly
content = content.replace(
  /className="mx-auto w-8 h-8 rounded-xl bg-surface-subtle border border-accent\/40 flex items-center justify-center text-accent font-medium text-xs shadow-soft-sm"(\s*)>(\s*)EV(\s*)<\/button>/,
  'className="mx-auto w-8 h-8 rounded-xl bg-surface-subtle border border-accent/40 flex items-center justify-center text-accent font-serif text-lg font-bold italic shadow-soft-sm"$1>$2E$3</button>'
);


fs.writeFileSync(file, content);
console.log('Fixed Sidebar');
