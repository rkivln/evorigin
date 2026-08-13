const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const scrollbarCss = `
/* Custom Scrollbar for Dark Theme */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
}
`;

if (!css.includes('::-webkit-scrollbar')) {
  fs.writeFileSync('src/index.css', css + '\n' + scrollbarCss);
}
