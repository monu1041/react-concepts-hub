# Virtual DOM & List Optimization

A React (Vite) project demonstrating how React efficiently updates the UI using the Virtual DOM, proper list keys, and component memoization.

---

## Features

- Dynamic Todo List
- Add Todo
- Delete Todo
- Reorder Todo
- Compare `id` vs `index` keys
- React.memo optimization
- Large List performance testing
- Virtual DOM visualization using React DevTools

---

## Tech Stack

- React 18+
- Vite
- React.memo
- React DevTools

---

## Folder Structure

```
src/
│
├── components/
│   └── TodoItem.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# Getting Started

Clone the repository

```
git clone <repository-url>
```

Install dependencies

```
npm install
```

Run the project

```
npm run dev
```

Open

```
http://localhost:5173
```

---

# Application Flow

```
User Types Todo
        │
        ▼
Click Add Button
        │
        ▼
State Updates (useState)
        │
        ▼
React Creates New Virtual DOM
        │
        ▼
Diffing Algorithm
        │
        ▼
Only Changed Component Updates
        │
        ▼
Browser DOM Updates
```

---

# Project Workflow

### 1. Add Todo

- Enter text
- Click Add
- New todo appears

---

### 2. Delete Todo

- Click Delete
- Todo is removed

---

### 3. Reorder Todo

Click ↑

The selected todo moves upward.

---

### 4. Update Todo

Click Update

The selected todo text changes.

Observe the console.

```
Rendered: Learn React ✔
```

---

# React.memo Demonstration

TodoItem is wrapped with

```jsx
React.memo(TodoItem)
```

Without React.memo

```
Update One Todo

↓

Every TodoItem renders
```

With React.memo

```
Update One Todo

↓

Only Updated Todo renders
```

This reduces unnecessary rendering and improves performance.

---

# Key Demonstration

## Correct

```jsx
key={todo.id}
```

React correctly tracks each component.

Supports

- Delete
- Insert
- Reorder

without rendering issues.

---

## Incorrect

Replace with

```jsx
key={index}
```

Now try

- Delete middle item
- Move items
- Update items

Observe:

- Incorrect rendering
- Wrong component reuse
- Unnecessary re-renders

This demonstrates why React recommends stable keys.

---

# Large List Performance

Replace

```jsx
const initialTodos = [...]
```

with

```jsx
const initialTodos = Array.from(
    { length: 1000 },
    (_, index) => ({
        id: index,
        text: `Task ${index + 1}`,
    })
);
```

Now update one item.

Observe console logs.

---

# Virtual DOM Demonstration

Install

React Developer Tools

Open

```
React DevTools
```

Go to

```
Profiler
```

Record interaction.

Update one Todo.

Observe

- Virtual DOM comparison
- Diffing
- Reconciliation
- Minimal DOM updates

---

# Learning Outcomes

After completing this project you will understand

- Dynamic list rendering
- React state updates
- List keys
- Virtual DOM
- Diffing Algorithm
- Reconciliation
- React.memo
- Render optimization
- Performance improvements in React

---

# Future Improvements

- useCallback
- useMemo
- React Profiler API
- Windowing using react-window
- Drag and Drop Reordering
- Local Storage Persistence
- Edit Todo functionality