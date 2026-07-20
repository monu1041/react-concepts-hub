var e=`# Virtual DOM & List Optimization\r
\r
A React (Vite) project demonstrating how React efficiently updates the UI using the Virtual DOM, proper list keys, and component memoization.\r
\r
---\r
\r
## Features\r
\r
- Dynamic Todo List\r
- Add Todo\r
- Delete Todo\r
- Reorder Todo\r
- Compare \`id\` vs \`index\` keys\r
- React.memo optimization\r
- Large List performance testing\r
- Virtual DOM visualization using React DevTools\r
\r
---\r
\r
## Tech Stack\r
\r
- React 18+\r
- Vite\r
- React.memo\r
- React DevTools\r
\r
---\r
\r
## Folder Structure\r
\r
\`\`\`\r
src/\r
│\r
├── components/\r
│   └── TodoItem.jsx\r
│\r
├── App.jsx\r
├── App.css\r
└── main.jsx\r
\`\`\`\r
\r
---\r
\r
# Getting Started\r
\r
Clone the repository\r
\r
\`\`\`\r
git clone <repository-url>\r
\`\`\`\r
\r
Install dependencies\r
\r
\`\`\`\r
npm install\r
\`\`\`\r
\r
Run the project\r
\r
\`\`\`\r
npm run dev\r
\`\`\`\r
\r
Open\r
\r
\`\`\`\r
http://localhost:5173\r
\`\`\`\r
\r
---\r
\r
# Application Flow\r
\r
\`\`\`\r
User Types Todo\r
        │\r
        ▼\r
Click Add Button\r
        │\r
        ▼\r
State Updates (useState)\r
        │\r
        ▼\r
React Creates New Virtual DOM\r
        │\r
        ▼\r
Diffing Algorithm\r
        │\r
        ▼\r
Only Changed Component Updates\r
        │\r
        ▼\r
Browser DOM Updates\r
\`\`\`\r
\r
---\r
\r
# Project Workflow\r
\r
### 1. Add Todo\r
\r
- Enter text\r
- Click Add\r
- New todo appears\r
\r
---\r
\r
### 2. Delete Todo\r
\r
- Click Delete\r
- Todo is removed\r
\r
---\r
\r
### 3. Reorder Todo\r
\r
Click ↑\r
\r
The selected todo moves upward.\r
\r
---\r
\r
### 4. Update Todo\r
\r
Click Update\r
\r
The selected todo text changes.\r
\r
Observe the console.\r
\r
\`\`\`\r
Rendered: Learn React ✔\r
\`\`\`\r
\r
---\r
\r
# React.memo Demonstration\r
\r
TodoItem is wrapped with\r
\r
\`\`\`jsx\r
React.memo(TodoItem)\r
\`\`\`\r
\r
Without React.memo\r
\r
\`\`\`\r
Update One Todo\r
\r
↓\r
\r
Every TodoItem renders\r
\`\`\`\r
\r
With React.memo\r
\r
\`\`\`\r
Update One Todo\r
\r
↓\r
\r
Only Updated Todo renders\r
\`\`\`\r
\r
This reduces unnecessary rendering and improves performance.\r
\r
---\r
\r
# Key Demonstration\r
\r
## Correct\r
\r
\`\`\`jsx\r
key={todo.id}\r
\`\`\`\r
\r
React correctly tracks each component.\r
\r
Supports\r
\r
- Delete\r
- Insert\r
- Reorder\r
\r
without rendering issues.\r
\r
---\r
\r
## Incorrect\r
\r
Replace with\r
\r
\`\`\`jsx\r
key={index}\r
\`\`\`\r
\r
Now try\r
\r
- Delete middle item\r
- Move items\r
- Update items\r
\r
Observe:\r
\r
- Incorrect rendering\r
- Wrong component reuse\r
- Unnecessary re-renders\r
\r
This demonstrates why React recommends stable keys.\r
\r
---\r
\r
# Large List Performance\r
\r
Replace\r
\r
\`\`\`jsx\r
const initialTodos = [...]\r
\`\`\`\r
\r
with\r
\r
\`\`\`jsx\r
const initialTodos = Array.from(\r
    { length: 1000 },\r
    (_, index) => ({\r
        id: index,\r
        text: \`Task \${index + 1}\`,\r
    })\r
);\r
\`\`\`\r
\r
Now update one item.\r
\r
Observe console logs.\r
\r
---\r
\r
# Virtual DOM Demonstration\r
\r
Install\r
\r
React Developer Tools\r
\r
Open\r
\r
\`\`\`\r
React DevTools\r
\`\`\`\r
\r
Go to\r
\r
\`\`\`\r
Profiler\r
\`\`\`\r
\r
Record interaction.\r
\r
Update one Todo.\r
\r
Observe\r
\r
- Virtual DOM comparison\r
- Diffing\r
- Reconciliation\r
- Minimal DOM updates\r
\r
---\r
\r
# Learning Outcomes\r
\r
After completing this project you will understand\r
\r
- Dynamic list rendering\r
- React state updates\r
- List keys\r
- Virtual DOM\r
- Diffing Algorithm\r
- Reconciliation\r
- React.memo\r
- Render optimization\r
- Performance improvements in React\r
\r
---\r
\r
# Future Improvements\r
\r
- useCallback\r
- useMemo\r
- React Profiler API\r
- Windowing using react-window\r
- Drag and Drop Reordering\r
- Local Storage Persistence\r
- Edit Todo functionality`;export{e as default};