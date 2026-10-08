var e=`# React UI Patterns Demo\r
\r
This demo is a small React application built to showcase common UI patterns used in real-world frontend apps. It focuses on practical, reusable patterns that help developers structure components, manage state, handle side effects, and improve user experience without overcomplicating the code.\r
\r
The project demonstrates:\r
\r
* Controlled and uncontrolled modal behavior\r
* Toast notification system with context, timers, deduplication, and automatic cleanup\r
* Infinite scroll with IntersectionObserver and asynchronous data fetching\r
* Virtualized list rendering\r
* Focus management and accessibility-minded component design\r
* State orchestration patterns for reusable UI primitives\r
* Component-level styling using scoped CSS class naming\r
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
The parent component owns the modal visibility state and passes it down as a prop. This pattern is useful when the parent needs to coordinate modal behavior across multiple elements or application states.\r
\r
### Uncontrolled modal\r
\r
The component internally manages its own open/close state. This is useful when the component is a standalone UI element and does not need to be controlled externally.\r
\r
### Key concepts covered\r
\r
* Controlled vs uncontrolled component design\r
* Props-driven state control\r
* Portal usage with \`createPortal\`\r
* Escape-key dismissal\r
* Click-outside dismissal\r
* Body scroll locking\r
* Focus management\r
* Focus trapping\r
* Focus restoration\r
* Dialog accessibility attributes\r
* Reusable component composition\r
\r
The modal uses a portal so that the dialog is rendered outside the normal component DOM hierarchy. This helps avoid layout and stacking-context problems that can occur when dialogs are deeply nested in the application.\r
\r
---\r
\r
## Pattern 2: Toast System\r
\r
The toast implementation demonstrates a reusable notification system built with React Context, a provider, a custom hook, portals, and timer-based cleanup.\r
\r
### What it does\r
\r
* Shows success, error, warning, and info notifications\r
* Automatically removes messages after a timeout\r
* Allows components anywhere in the application to trigger notifications\r
* Limits the number of visible toasts to 3\r
* Consolidates duplicate notifications\r
* Tracks how many times the same notification occurs\r
* Resets the dismissal timer when a duplicate notification arrives\r
* Removes the oldest toast when a new unique toast arrives while the limit is reached\r
* Allows users to manually dismiss notifications\r
\r
For example, if the same error occurs repeatedly:\r
\r
\`\`\`text\r
Network error\r
Network error\r
Network error\r
\`\`\`\r
\r
the system displays a single notification with a count:\r
\r
\`\`\`text\r
Network error ×3\r
\`\`\`\r
\r
Instead of allowing repeated messages to fill the screen.\r
\r
### Key concepts covered\r
\r
* Context API\r
* Provider pattern\r
* Custom hooks\r
* Global notification state\r
* Portal rendering\r
* Timer-driven cleanup\r
* Duplicate notification handling\r
* State transformation with functional updates\r
* Maximum visible notification limits\r
* Automatic and manual dismissal\r
* Side-effect cleanup\r
\r
The notification logic is kept inside the \`ToastProvider\`, while \`ToastContainer\` and \`Toast\` are responsible primarily for rendering the notifications.\r
\r
This separation keeps state management, notification rules, presentation, and side effects easier to understand and maintain.\r
\r
---\r
\r
## Pattern 3: Infinite Scroll\r
\r
The infinite scroll example simulates loading additional content as the user reaches the end of a scrollable list.\r
\r
### What it does\r
\r
* Uses \`IntersectionObserver\` to detect when the user reaches the end of the list\r
* Loads additional items through an asynchronous mock API\r
* Appends newly loaded items to the existing list\r
* Displays loading and error states\r
* Supports retrying failed requests\r
* Uses a dedicated scrollable container instead of requiring the entire page to scroll\r
* Uses a sentinel element to trigger loading more data\r
* Demonstrates virtualization for efficiently rendering large lists\r
\r
The mock API simulates network latency and paginated data so the behavior is similar to a real asynchronous data source.\r
\r
### Key concepts covered\r
\r
* \`IntersectionObserver\`\r
* Sentinel-based infinite scrolling\r
* Custom hooks\r
* Async data fetching\r
* Pagination\r
* Loading and error states\r
* Retry handling\r
* Scroll container management\r
* Virtualized rendering\r
* Cleanup of observers\r
* Reusable behavior extraction\r
\r
The IntersectionObserver logic is extracted into a reusable \`useInfiniteScroll\` hook, keeping the component focused on rendering and managing the data state.\r
\r
---\r
\r
## Project Structure\r
\r
\`\`\`text\r
react-ui-patterns-demo/\r
├── src/\r
│   ├── components/\r
│   │   ├── InfiniteScroll/\r
│   │   │   ├── InfiniteScroll.jsx\r
│   │   │   ├── VirtualizedList.jsx\r
│   │   │   ├── infiniteScroll.css\r
│   │   │   └── mockApi.js\r
│   │   │\r
│   │   ├── Modal/\r
│   │   │   ├── Modal.jsx\r
│   │   │   ├── UncontrolledModal.jsx\r
│   │   │   └── modal.css\r
│   │   │\r
│   │   └── Toast/\r
│   │       ├── Toast.jsx\r
│   │       ├── ToastContainer.jsx\r
│   │       ├── ToastProvider.jsx\r
│   │       ├── ToastContext.js\r
│   │       ├── useToast.js\r
│   │       └── toast.css\r
│   │\r
│   ├── hooks/\r
│   │   ├── useFocusTrap.js\r
│   │   └── useInfiniteScroll.js\r
│   │\r
│   ├── styles/\r
│   │   └── global.css\r
│   │\r
│   ├── utils/\r
│   │   └── generateId.js\r
│   │\r
│   ├── App.jsx\r
│   \r
│\r
└── README.md\r
\`\`\`\r
\r
---\r
\r
## Tech Stack\r
\r
* React\r
* Vite\r
* JavaScript\r
* CSS\r
* Browser APIs\r
\r
  * \`IntersectionObserver\`\r
  * \`createPortal\`\r
  * Keyboard events\r
* React Hooks\r
\r
  * \`useState\`\r
  * \`useEffect\`\r
  * \`useRef\`\r
  * \`useCallback\`\r
  * \`useMemo\`\r
  * \`useContext\`\r
\r
The project uses regular CSS files with component-level class naming rather than CSS Modules. This keeps the styling simple while reducing the chance of generic class-name conflicts.\r
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
\`\`\`text\r
http://localhost:5173\r
\`\`\`\r
\r
---\r
\r
## Why This Demo Matters\r
\r
This project is useful for interview preparation, UI architecture learning, and component design practice.\r
\r
It demonstrates how small reusable patterns can be combined to build practical frontend functionality without introducing unnecessary complexity.\r
\r
By looking at these patterns together, you can see how React applications often separate responsibilities into:\r
\r
* State ownership\r
* Reusable behavior\r
* UI rendering\r
* Side effects\r
* Event handling\r
* Async operations\r
* Cleanup\r
* Accessibility\r
* Component composition\r
\r
The project also demonstrates an important React principle:\r
\r
> Keep components responsible for the behavior they own, while extracting reusable logic into hooks and shared providers when appropriate.\r
\r
---\r
\r
## Learning Goals\r
\r
This demo helps developers understand:\r
\r
* When to use controlled vs uncontrolled components\r
* How portals can be used for overlays and notifications\r
* How focus management improves modal accessibility\r
* How Context can manage application-wide notification behavior\r
* How custom hooks can extract reusable behavior\r
* How to manage timers and cleanup with \`useEffect\`\r
* How to prevent repeated notifications from overwhelming the UI\r
* How IntersectionObserver can replace manual scroll-event handling\r
* How asynchronous pagination works in an infinite-scroll UI\r
* How virtualization can improve rendering performance\r
* How separating state, behavior, and presentation improves maintainability\r
* How component-level CSS naming can keep styles isolated without CSS Modules\r
\r
---\r
\r
## Suggested Next Steps\r
\r
You can extend this project by adding:\r
\r
* Modal focus restoration demonstrations\r
* Animated toast exit transitions\r
* Toast pause-on-hover behavior\r
* Toast queueing for notifications beyond the visible limit\r
* Skeleton loading states for infinite scroll\r
* Request cancellation using \`AbortController\`\r
* Search and filtering for the infinite-scroll list\r
* Real API integration instead of the mock API\r
* More advanced virtualization strategies\r
* Error boundaries around individual demo sections\r
\r
This makes the project a good foundation for building more advanced, production-ready UI systems and practicing common React interview scenarios.\r
`;export{e as default};