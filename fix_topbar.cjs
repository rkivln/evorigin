const fs = require('fs');
const file = 'src/components/layout/Topbar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<header className="h-16 bg-surface\/90 backdrop-blur-md border-b border-surface-border sticky top-0 z-30 px-4 sm:px-6 flex items-center justify-between gap-4">/g,
  '<div className="sticky top-4 z-30 px-4 sm:px-6 pb-2">\n      <header className="h-16 bg-surface/80 backdrop-blur-xl border border-surface-border rounded-[24px] shadow-soft-sm px-4 sm:px-6 flex items-center justify-between gap-4">'
);

// We need to add the closing div at the end of Topbar return statement
content = content.replace(
  /    <\/header>\n  \);/g,
  '    </header>\n    </div>\n  );'
);

// Update search input bar in the header
content = content.replace(
  /className="w-full h-9 flex items-center gap-2.5 px-4 rounded-full bg-surface-soft border border-surface-border hover:border-accent\/50 text-primary-muted text-xs cursor-pointer transition-all shadow-sm group"/g,
  'className="w-full h-10 flex items-center gap-3 px-4 rounded-full bg-surface border border-surface-border hover:border-accent/40 text-primary-muted text-xs cursor-pointer transition-all shadow-sm hover:shadow-card group"'
);

// Update notifications drawer for better UX
content = content.replace(
  /className="absolute right-0 mt-2 w-80 bg-surface-soft border border-surface-border rounded-\[18px\] shadow-card p-4 space-y-3 z-50"/g,
  'className="absolute right-0 mt-3 w-80 sm:w-96 bg-surface border border-surface-border rounded-[24px] shadow-floating p-5 space-y-4 z-50"'
);

content = content.replace(
  /className="p-3 rounded-xl bg-surface border border-surface-border space-y-1"/g,
  'className="p-3.5 rounded-[16px] bg-surface-soft border border-surface-border space-y-1.5 hover:border-accent/30 transition-colors cursor-default"'
);

content = content.replace(
  /className="flex items-center justify-between border-b border-surface-border pb-2"/g,
  'className="flex items-center justify-between border-b border-surface-border pb-3 mb-1"'
);

fs.writeFileSync(file, content);
