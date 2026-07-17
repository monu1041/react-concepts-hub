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

  // 💡 README Loader: Find if any readme exists in this specific topic folder
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
        
        // 💡 EXCLUSION FIX: Skip explicit exclusions AND skip README.md so it doesn't show in code tabs!
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
    loadComponent,
    loadReadme,
    loadFiles
  };
});