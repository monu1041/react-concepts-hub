// src/topics/topicsRegistry.js

// 1. Scan all files for component mounting
const componentModules = import.meta.glob('./**/*.jsx');

// 2. Scan all files for raw text rendering
const rawFileModules = import.meta.glob('./**/*', { query: '?raw' });

export const topics = [
  {
    id: '01-redux-cart', // 👈 Folder name doubles as the ID
    title: 'Redux Shopping Cart',
    category: 'State Management',
    description: 'A multi-file Redux setup managing global cart state.',
    entryFile: 'ReduxCartDemo.jsx', // Explicitly declare which file runs the UI
    excludeFiles: ['secretConfig.js'] // Skip specific files from source code view
  },
  {
    id: 'shopping-cart-redux', // 👈 Folder name matches exactly
    title: 'Redux Shopping Cart v2',
    category: 'State Management',
    description: 'A complete Redux Toolkit architecture.',
    entryFile: 'ShoppingCartRedux.jsx'
  }
];

// 3. The Automation Engine
topics.forEach(topic => {
  const folderPath = `./${topic.id}`;

  // Find and attach the main execution UI component
  const componentPath = `${folderPath}/${topic.entryFile}`;
  if (componentModules[componentPath]) {
    topic.loadComponent = componentModules[componentPath];
  }

  // Gather ALL files inside this topic folder/sub-folders for source code view
  topic.loadFiles = async () => {
    const matchedFiles = [];
    const exclusions = topic.excludeFiles || [];

    for (const [filePath, loadRawString] of Object.entries(rawFileModules)) {
      // Ensure the file is inside this specific topic folder
      if (filePath.startsWith(folderPath)) {
        // Extract the clean relative path (e.g., "components/Cart.jsx" or "store.js")
        const fileName = filePath.replace(`${folderPath}/`, '').replace('?raw', '');
        
        // Skip if the file is explicitly excluded
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

    // Sort alphabetically so files look organized in tabs
    return matchedFiles.sort((a, b) => a.name.localeCompare(b.name));
  };
});