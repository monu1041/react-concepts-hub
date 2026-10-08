# React UI Patterns Demo

This demo is a small React application built to showcase common UI patterns used in real-world frontend apps. It focuses on practical, reusable patterns that help developers structure components, manage state, handle side effects, and improve user experience without overcomplicating the code.

The project demonstrates:

* Controlled and uncontrolled modal behavior
* Toast notification system with context, timers, deduplication, and automatic cleanup
* Infinite scroll with IntersectionObserver and asynchronous data fetching
* Virtualized list rendering
* Focus management and accessibility-minded component design
* State orchestration patterns for reusable UI primitives
* Component-level styling using scoped CSS class naming

---

## Overview

The app is organized as a teaching-style demo where each pattern is separated into a self-contained section. Instead of just showing isolated examples, it explains the core idea behind each pattern and demonstrates how the pieces fit together in a UI.

The app has three major patterns:

1. Modal pattern
2. Toast notification pattern
3. Infinite scroll pattern

---

## Pattern 1: Modal

The modal section demonstrates both a controlled modal and an uncontrolled modal.

### Controlled modal

The parent component owns the modal visibility state and passes it down as a prop. This pattern is useful when the parent needs to coordinate modal behavior across multiple elements or application states.

### Uncontrolled modal

The component internally manages its own open/close state. This is useful when the component is a standalone UI element and does not need to be controlled externally.

### Key concepts covered

* Controlled vs uncontrolled component design
* Props-driven state control
* Portal usage with `createPortal`
* Escape-key dismissal
* Click-outside dismissal
* Body scroll locking
* Focus management
* Focus trapping
* Focus restoration
* Dialog accessibility attributes
* Reusable component composition

The modal uses a portal so that the dialog is rendered outside the normal component DOM hierarchy. This helps avoid layout and stacking-context problems that can occur when dialogs are deeply nested in the application.

---

## Pattern 2: Toast System

The toast implementation demonstrates a reusable notification system built with React Context, a provider, a custom hook, portals, and timer-based cleanup.

### What it does

* Shows success, error, warning, and info notifications
* Automatically removes messages after a timeout
* Allows components anywhere in the application to trigger notifications
* Limits the number of visible toasts to 3
* Consolidates duplicate notifications
* Tracks how many times the same notification occurs
* Resets the dismissal timer when a duplicate notification arrives
* Removes the oldest toast when a new unique toast arrives while the limit is reached
* Allows users to manually dismiss notifications

For example, if the same error occurs repeatedly:

```text
Network error
Network error
Network error
```

the system displays a single notification with a count:

```text
Network error ×3
```

Instead of allowing repeated messages to fill the screen.

### Key concepts covered

* Context API
* Provider pattern
* Custom hooks
* Global notification state
* Portal rendering
* Timer-driven cleanup
* Duplicate notification handling
* State transformation with functional updates
* Maximum visible notification limits
* Automatic and manual dismissal
* Side-effect cleanup

The notification logic is kept inside the `ToastProvider`, while `ToastContainer` and `Toast` are responsible primarily for rendering the notifications.

This separation keeps state management, notification rules, presentation, and side effects easier to understand and maintain.

---

## Pattern 3: Infinite Scroll

The infinite scroll example simulates loading additional content as the user reaches the end of a scrollable list.

### What it does

* Uses `IntersectionObserver` to detect when the user reaches the end of the list
* Loads additional items through an asynchronous mock API
* Appends newly loaded items to the existing list
* Displays loading and error states
* Supports retrying failed requests
* Uses a dedicated scrollable container instead of requiring the entire page to scroll
* Uses a sentinel element to trigger loading more data
* Demonstrates virtualization for efficiently rendering large lists

The mock API simulates network latency and paginated data so the behavior is similar to a real asynchronous data source.

### Key concepts covered

* `IntersectionObserver`
* Sentinel-based infinite scrolling
* Custom hooks
* Async data fetching
* Pagination
* Loading and error states
* Retry handling
* Scroll container management
* Virtualized rendering
* Cleanup of observers
* Reusable behavior extraction

The IntersectionObserver logic is extracted into a reusable `useInfiniteScroll` hook, keeping the component focused on rendering and managing the data state.

---

## Project Structure

```text
react-ui-patterns-demo/
├── src/
│   ├── components/
│   │   ├── InfiniteScroll/
│   │   │   ├── InfiniteScroll.jsx
│   │   │   ├── VirtualizedList.jsx
│   │   │   ├── infiniteScroll.css
│   │   │   └── mockApi.js
│   │   │
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   ├── UncontrolledModal.jsx
│   │   │   └── modal.css
│   │   │
│   │   └── Toast/
│   │       ├── Toast.jsx
│   │       ├── ToastContainer.jsx
│   │       ├── ToastProvider.jsx
│   │       ├── ToastContext.js
│   │       ├── useToast.js
│   │       └── toast.css
│   │
│   ├── hooks/
│   │   ├── useFocusTrap.js
│   │   └── useInfiniteScroll.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   └── generateId.js
│   │
│   ├── App.jsx
│   
│
└── README.md
```

---

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* Browser APIs

  * `IntersectionObserver`
  * `createPortal`
  * Keyboard events
* React Hooks

  * `useState`
  * `useEffect`
  * `useRef`
  * `useCallback`
  * `useMemo`
  * `useContext`

The project uses regular CSS files with component-level class naming rather than CSS Modules. This keeps the styling simple while reducing the chance of generic class-name conflicts.

---

## How to Run

From the project root:

```bash
npm install
npm run dev
```

Then open the local Vite URL in the browser, typically:

```text
http://localhost:5173
```

---

## Why This Demo Matters

This project is useful for interview preparation, UI architecture learning, and component design practice.

It demonstrates how small reusable patterns can be combined to build practical frontend functionality without introducing unnecessary complexity.

By looking at these patterns together, you can see how React applications often separate responsibilities into:

* State ownership
* Reusable behavior
* UI rendering
* Side effects
* Event handling
* Async operations
* Cleanup
* Accessibility
* Component composition

The project also demonstrates an important React principle:

> Keep components responsible for the behavior they own, while extracting reusable logic into hooks and shared providers when appropriate.

---

## Learning Goals

This demo helps developers understand:

* When to use controlled vs uncontrolled components
* How portals can be used for overlays and notifications
* How focus management improves modal accessibility
* How Context can manage application-wide notification behavior
* How custom hooks can extract reusable behavior
* How to manage timers and cleanup with `useEffect`
* How to prevent repeated notifications from overwhelming the UI
* How IntersectionObserver can replace manual scroll-event handling
* How asynchronous pagination works in an infinite-scroll UI
* How virtualization can improve rendering performance
* How separating state, behavior, and presentation improves maintainability
* How component-level CSS naming can keep styles isolated without CSS Modules

---

## Suggested Next Steps

You can extend this project by adding:

* Modal focus restoration demonstrations
* Animated toast exit transitions
* Toast pause-on-hover behavior
* Toast queueing for notifications beyond the visible limit
* Skeleton loading states for infinite scroll
* Request cancellation using `AbortController`
* Search and filtering for the infinite-scroll list
* Real API integration instead of the mock API
* More advanced virtualization strategies
* Error boundaries around individual demo sections

This makes the project a good foundation for building more advanced, production-ready UI systems and practicing common React interview scenarios.
