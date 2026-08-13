const fs = require('fs');
const path = require('path');

const files = [
  'src/components/layout/Sidebar.tsx',
  'src/components/layout/Topbar.tsx',
  'src/components/views/SettingsView.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove destructured variables from useDemo
  content = content.replace(/themeMode,\s*toggleThemeMode,?\s*/g, '');
  content = content.replace(/themeMode,\s*setThemeMode,?\s*/g, '');
  
  // Remove the toggle buttons block from SettingsView
  if (file.includes('SettingsView.tsx')) {
    content = content.replace(/\{\/\* Theme Preference Banner \*\/\}(.|\n)*?(?=<div className="grid grid-cols-1 md:grid-cols-2 gap-6">)/, '');
  }
  
  // Remove buttons from Sidebar and Topbar
  if (file.includes('Sidebar.tsx')) {
     content = content.replace(/<button\s+onClick=\{toggleThemeMode\}(.|\n)*?<\/button>/g, '');
  }
  if (file.includes('Topbar.tsx')) {
     content = content.replace(/<button\s+onClick=\{toggleThemeMode\}(.|\n)*?<\/button>/g, '');
  }
  
  fs.writeFileSync(file, content);
}
