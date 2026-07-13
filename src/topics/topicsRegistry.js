// src/topics/topicsRegistry.js
import { topicsData } from './topicsData';

// 1. Scan filesystem paths via glob bundles
const componentModules = import.meta.glob('./**/*.jsx');
const rawFileModules = import.meta.glob('./**/*', { query: '?raw' });

// 2. Map and enrich the static configuration with dynamic loader functions
export const topics = topicsData.map(topic => {
  const folderPath = `./${topic.id}`;
  const componentPath = `${folderPath}/${topic.entryFile}`;

  // Initialize placeholder loaders
  let loadComponent = () => Promise.resolve({ default: () => null });
  
  if (componentModules[componentPath]) {
    loadComponent = componentModules[componentPath];
  }

  const loadFiles = async () => {
    const matchedFiles = [];
    const exclusions = topic.excludeFiles || [];

    for (const [filePath, loadRawString] of Object.entries(rawFileModules)) {
      if (filePath.startsWith(folderPath)) {
        const fileName = filePath.replace(`${folderPath}/`, '').replace('?raw', '');
        
        if (exclusions.includes(fileName)) {
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

  // Return the newly compiled portfolio topic item
  return {
    ...topic,
    loadComponent,
    loadFiles
  };
});