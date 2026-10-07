var e=`# React UI Patterns Demo\r
\r
This demo is a small React application built to showcase common UI patterns used in real-world frontend apps. It focuses on practical, reusable patterns that help developers structure components, manage state, and improve user experience without overcomplicating the code.\r
\r
The project demonstrates:\r
\r
- Controlled and uncontrolled modal behavior\r
- Toast notification system with context and timers\r
- Infinite scroll with loading and lazy data fetching patterns\r
- Focus management and accessibility-minded component design\r
- State orchestration patterns for reusable UI primitives\r
\r
---\r
\r
## Overview\r
\r
The app is organized as a teaching-style demo where each pattern is separated into a self-contained section. Instead of just showing isolated examples, it explains the core idea behind each pattern and demonstrates how the pieces fit together in a UI.\r
\r
The app has three major patterns:\r
\r
1. Modal pattern\r
2. Toast notification pattern\r
3. Infinite scroll pattern\r
\r
---\r
\r
## Pattern 1: Modal\r
\r
The modal section demonstrates both a controlled modal and an uncontrolled modal.\r
\r
### Controlled modal\r
\r
The parent component owns the modal visibility state and passes it down as a prop. This pattern is useful when the parent needs to coordinate modal behavior across multiple elements or app states.\r
\r
### Uncontrolled modal\r
\r
The modal manages its own open/close state internally. This is useful when the component is a standalone UI element and does not need to be controlled externally.\r
\r
### Key concepts covered\r
\r
- Props-driven state control\r
- Portal usage for rendering above the app tree\r
- Focus handling and dialog behavior\r
- Reusable component composition\r
\r
---\r
\r
## Pattern 2: Toast System\r
\r
The toast implementation demonstrates a notification system built with React context, a provider, and a custom hook.\r
\r
### What it does\r
\r
- Shows success, error, warning, and info notifications\r
- Automatically removes messages after a timeout\r
- Keeps the notification logic separate from presentation\r
- Allows components anywhere in the app to trigger toast messages\r
\r
### Key concepts covered\r
\r
- Context API for global event communication\r
- Provider pattern for app-wide state\r
- Timer-driven cleanup\r
- Message queue and dismissal handling\r
\r
This is a common pattern for non-blocking alerts such as save confirmations, validation errors, and system status messages.\r
\r
---\r
\r
## Pattern 3: Infinite Scroll\r
\r
The infinite scroll example simulates loading additional content as the user reaches the end of a list.\r
\r
### What it does\r
\r
- Observes scroll position using an intersection strategy\r
- Loads more items as a user nears the bottom\r
- Keeps the UI responsive with incremental rendering\r
- Helps mimic modern feed and content-list behaviors\r
\r
### Key concepts covered\r
\r
- IntersectionObserver\r
- Lazy loading patterns\r
- Async data fetching in UI\r
- Scroll-driven interactions\r
\r
---\r
\r
## Project Structure\r
\r
\`\`\`bash\r
src/\r
├── topics/\r
│   └── react-ui-patterns-demo/\r
│       ├── App.jsx\r
│       ├── components/\r
│       │   ├── InfiniteScroll/\r
│       │   ├── Modal/\r
│       │   └── Toast/\r
│       ├── hooks/\r
│       ├── styles/\r
│       ├── utils/\r
│       └── README.md\r
\`\`\`\r
\r
---\r
\r
## Tech Stack\r
\r
- React\r
- Vite\r
- JavaScript\r
- CSS modules / component-scoped styling\r
\r
---\r
\r
## How to Run\r
\r
From the project root:\r
\r
\`\`\`bash\r
npm install\r
npm run dev\r
\`\`\`\r
\r
Then open the local Vite URL in the browser, typically:\r
\r
\`\`\`bash\r
http://localhost:5173\r
\`\`\`\r
\r
---\r
\r
## Why This Demo Matters\r
\r
This project is useful for interview prep, UI architecture learning, and component design practice. It demonstrates how small reusable patterns can be combined to build polished interfaces without introducing unnecessary complexity.\r
\r
By looking at these patterns together, you can see how React applications often separate responsibilities into:\r
\r
- state ownership\r
- reusable behavior\r
- UI rendering\r
- side effects and cleanup\r
\r
---\r
\r
## Learning Goals\r
\r
This demo helps developers understand:\r
\r
- when to use controlled vs uncontrolled components\r
- how context can manage app-wide notifications\r
- how to build scroll-driven loading experiences\r
- how reusable UI patterns reduce repetition and improve maintainability\r
\r
---\r
\r
## Suggested Next Steps\r
\r
You can extend this project by adding:\r
\r
- keyboard shortcuts for modal dismissal\r
- stacked toast notifications\r
- skeleton loading states for infinite scroll\r
- a search/filter component using the same pattern ideas\r
\r
This makes the project a good foundation for building more advanced, production-ready UI systems.\r
`;export{e as default};