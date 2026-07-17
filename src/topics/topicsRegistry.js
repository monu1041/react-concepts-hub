// src/topics/topicsRegistry.js
import { topicsData } from './topicsData';

// 1. Scan filesystem paths via glob bundles
const componentModules = import.meta.glob('./**/*.jsx');
const rawFileModules = import.meta.glob('./**/*', { query: '?raw' });

// 2. Map and enrich static configuration with dynamic loader functions
export const topics = topicsData.map(topic => {
  const folderPath = `./${topic.id}`;
  const componentPath = `${folderPath}/${topic.entryFile}`;

  // UI Component Loader
  let loadComponent = () => Promise.resolve({ default: () => null });
  if (componentModules[componentPath]) {
    loadComponent = componentModules[componentPath];
  }

  // 💡 README Discovery & Loader: Case-insensitive check for README.md
  const readmePathKey = Object.keys(rawFileModules).find(
    path => path.startsWith(folderPath) && path.toLowerCase().endsWith('readme.md')
  );
  
  const loadReadme = readmePathKey 
    ? async () => {
        const module = await rawFileModules[readmePathKey]();
        return module.default;
      }
    : async () => null;

  // Source Code Files Loader
  const loadFiles = async () => {
    const matchedFiles = [];
    const exclusions = topic.excludeFiles || [];

    for (const [filePath, loadRawString] of Object.entries(rawFileModules)) {
      if (filePath.startsWith(folderPath)) {
        const fileName = filePath.replace(`${folderPath}/`, '').replace('?raw', '');
        
        // Skip explicitly excluded files AND skip README.md so it only appears in the dedicated tab
        if (exclusions.includes(fileName) || fileName.toLowerCase() === 'readme.md') {
          continue;
        }

        const module = await loadRawString();
        matchedFiles.push({
          name: fileName,
          code: module.default
        });
      }
    }
    return matchedFiles.sort((a, b) => a.name.localeCompare(b.name));
  };

  return {
    ...topic,
    hasReadme: Boolean(readmePathKey), // 👈 Exposes true/false automatically for conditional UI rendering!
    loadComponent,
    loadReadme,
    loadFiles
  };
});