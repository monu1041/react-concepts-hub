# React Testing and Best Practices

A React interview assignment project demonstrating modern React development practices including:

- Component design
- Form handling and validation
- React Testing Library
- Vitest testing
- Accessibility best practices
- Custom hooks
- State management improvements
- Clean code principles

---

# Overview

This project contains three main exercises:

1. Login Form
2. Accessible Modal
3. Dashboard Refactoring

The goal is to demonstrate how to build React applications that are:

- Maintainable
- Testable
- Accessible
- Easy to extend

---

# Tech Stack

| Technology | Purpose |
|---|---|
| React | UI library |
| Vite | Build tool |
| Vitest | Test runner |
| React Testing Library | Component testing |
| JavaScript ES6+ | Programming language |

---

# Project Structure

react-testing-and-best-practices/

├── package.json

├── vite.config.js

├── README.md

├── src/

│

│   ├── App.jsx

│   ├── main.jsx

│   ├── setupTests.js

│

│   ├── components/

│   │   ├── LoginForm.jsx

│   │   ├── Modal.jsx

│   │   ├── Dashboard.jsx

│   │   ├── SearchBar.jsx

│   │   └── UserCard.jsx

│

│   ├── hooks/

│   │   ├── useForm.js

│   │   └── useUsers.js

│

│   └── utils/

│       └── validation.js

│

└── tests/

├── LoginForm.test.jsx

├── Modal.test.jsx

└── Dashboard.test.jsx

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd react-testing-and-best-practices
```

Install dependencies:

```bash
npm install
```

---

# Running the Application

Start the development server:

```bash
npm run dev
```

Application will run on:

```text
http://localhost:5173
```

---

# Running Tests

Run all tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

Generate coverage report:

```bash
npm run coverage
```

---

# Assignment Details

# 1. Login Form

## Purpose

Demonstrates:

- Controlled React components
- Form state management
- Validation logic
- Error handling
- User interaction testing

## Features

The form contains:

- Email input
- Password input
- Login button

## Validation Rules

### Email

- Required
- Must be a valid email format

### Password

- Required
- Minimum 6 characters

## Flow

```text
User enters information

        ↓

useForm manages input state

        ↓

validateLogin checks rules

        ↓

Errors displayed

        ↓

Successful submission
```

---

# 2. Accessible Modal

## Purpose

Demonstrates accessibility and keyboard support.

## Features

The modal supports:

- Open and close actions
- Escape key handling
- Keyboard navigation
- Focus management
- ARIA attributes

## Accessibility Implementation

The modal uses:

```html
role="dialog"
aria-modal="true"
aria-labelledby="modal-title"
```

This helps assistive technologies understand the purpose of the element.

## Keyboard Support

```text
ActionResultOpen buttonOpens modalEscape keyCloses modalClose buttonCloses modalTab navigationMoves through controls
```

---

# 3. Dashboard Refactoring

## Purpose

Demonstrates improving component structure.

Before refactoring:

```text
Dashboard.jsx

- Fetch users
- Manage loading
- Filter users
- Render cards
- Handle search
```

After refactoring:

```text
Dashboard.jsx

      |
      |
      ├── useUsers()
      |
      ├── SearchBar
      |
      └── UserCard
```

---

# Custom Hooks

## useUsers()

Responsible for:

- Loading user data
- Managing loading state
- Separating data logic from UI

Example:

```js
const {
  users,
  loading
} = useUsers();
```

---

## useForm()

Responsible for:

- Managing form values
- Handling input changes
- Running validation
- Managing errors

Example:

```js
const {
  values,
  errors,
  handleChange,
  handleSubmit
} = useForm();
```

---

# Testing Strategy

This project follows the React Testing Library philosophy:

> Test the application the way users interact with it.

Tests avoid checking implementation details.

---

# Login Form Tests

Covered scenarios:

### Rendering

Checks:

- Email input exists
- Password input exists
- Login button exists

### Validation

Checks:

- Required field messages
- Invalid input handling

### Submission

Checks:

- Valid input allows submission

---

# Modal Tests

Covered scenarios:

### Rendering

Checks:

- Modal appears when opened

### Closing

Checks:

- Close button works
- Escape key closes modal

### Accessibility

Checks:

- Dialog role exists

---

# Dashboard Tests

Covered scenarios:

### Loading State

Checks:

```text
Loading users...
```

appears initially.

### Data Rendering

Checks:

Users appear after loading.

### Search

Checks:

Filtering works correctly.

---

# React Best Practices Used

## 1. Component Separation

Components have single responsibilities.

Example:

```text
Dashboard

does not know

how UserCard displays data
```

---

## 2. Custom Hooks

Reusable logic is extracted.

Instead of:

```js
useEffect(() => {
  fetchUsers();
}, []);
```

inside components:

```js
const {
 users,
 loading
} = useUsers();
```

---

## 3. Derived State

Avoid storing values that can be calculated.

Bad:

```js
const [filteredUsers, setFilteredUsers] = useState([]);
```

Good:

```js
const filteredUsers =
 users.filter(...)
```

---

## 4. Stable React Keys

Lists use stable IDs:

Good:

```jsx
<UserCard
 key={user.id}
/>
```

Avoid:

```jsx
key={index}
```

because changing list order can create incorrect component state.

---

## 5. Accessibility

Implemented:

- Semantic HTML
- Proper labels
- Keyboard support
- ARIA attributes
- Accessible roles

---

# Testing Philosophy

## What should be tested?

Test:

- User interactions
- Visible UI changes
- Form behavior
- Error states
- Loading states

Avoid testing:

- Component internal state
- Private functions
- Implementation details

---

# Why React Testing Library?

React Testing Library encourages testing from the user's perspective.

Instead of:

```text
Check component state
```

we test:

```text
User clicks button
User sees result
```

This creates more reliable tests.

---

# Why Mock APIs?

Real APIs should generally not be used in unit/integration tests because they:

- Slow down tests
- Depend on network availability
- Create unpredictable results

Recommended approach:

- Mock external services
- Keep tests deterministic

For larger applications:

```text
React Component

      ↓

API Request

      ↓

MSW intercepts request

      ↓

Mock response
```

---

# Possible Improvements

For a production application, this project could be extended with:

- MSW API mocking
- Real authentication API
- React Router
- TypeScript
- React Query
- Error boundaries
- Complete modal focus trapping
- Form submission loading state
- ESLint
- Prettier
- CI/CD pipeline
