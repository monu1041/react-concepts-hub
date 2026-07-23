# Advanced React Patterns

A hands-on React project demonstrating advanced component architecture patterns used in modern React libraries and production applications.

This project focuses on building reusable, scalable, and accessible components using patterns like Compound Components, Headless Components, Custom Hooks, Context API, and Controlled/Uncontrolled component design.

---

## 🚀 Features

### 1. Tabs Component

Pattern:

- Compound Components
- Context API
- Keyboard Navigation
- Controlled & Uncontrolled State

Example API:

```jsx
<Tabs defaultValue="profile">

  <Tabs.List>

    <Tabs.Trigger value="profile">
      Profile
    </Tabs.Trigger>

    <Tabs.Trigger value="settings">
      Settings
    </Tabs.Trigger>

  </Tabs.List>


  <Tabs.Content value="profile">
    Profile Content
  </Tabs.Content>

</Tabs>

Features:

Shared state between tabs
Keyboard navigation
Accessible tab roles
Reusable API design
2. Headless Modal Component

Pattern:

Headless Components
Compound Components
Controlled Components
Uncontrolled Components
React Portal
Accessibility

Example:

<Modal>

  <Modal.Trigger>
    Open Modal
  </Modal.Trigger>


  <Modal.Content>

    <h2>
      Delete Account
    </h2>

  </Modal.Content>

</Modal>

Features:

Logic separated from presentation
Escape key handling
Outside click detection
Focus management
Custom styling support
3. Dropdown Component

Pattern:

Compound Components
Custom Hooks
Context API
Accessibility
Keyboard Navigation

Example:

<Dropdown>

  <Dropdown.Trigger>
    Actions
  </Dropdown.Trigger>


  <Dropdown.Content>

    <Dropdown.Item value="edit">
      Edit
    </Dropdown.Item>


    <Dropdown.Item value="delete">
      Delete
    </Dropdown.Item>

  </Dropdown.Content>

</Dropdown>

Features:

Open/close state management
Keyboard navigation
Focus management
Escape handling
Menu accessibility roles

Supported keys:

Key	Action
Arrow Down	Next item
Arrow Up	Previous item
Home	First item
End	Last item
Escape	Close menu
4. Authentication Hook

Pattern:

Context Provider Pattern
Custom Hooks
Protected Routes

Usage:

const {
  user,
  login,
  logout
} = useAuth();

Features:

Centralized authentication state
Login/logout handling
Loading state
Protected route pattern

Example:

<ProtectedRoute>

  <Dashboard />

</ProtectedRoute>
🧠 React Patterns Covered
Pattern	Usage
Composition	Building flexible components
Compound Components	Tabs, Modal, Dropdown
Context API	Shared component state
Custom Hooks	Reusable logic
Headless Components	Modal architecture
Controlled Components	External state management
Uncontrolled Components	Internal state management
React Portal	Modal rendering
Accessibility	Keyboard and ARIA support
Provider Pattern	Authentication
📂 Project Structure
src
│
├── components
│
│   ├── Tabs
│   │   ├── Tabs.jsx
│   │   ├── TabsList.jsx
│   │   ├── TabsTrigger.jsx
│   │   ├── TabsContent.jsx
│   │   └── tabs.css
│   │
│   ├── Modal
│   │   ├── Modal.jsx
│   │   ├── ModalTrigger.jsx
│   │   ├── ModalContent.jsx
│   │   └── modal.css
│   │
│   └── Dropdown
│       ├── Dropdown.jsx
│       ├── DropdownTrigger.jsx
│       ├── DropdownContent.jsx
│       ├── DropdownItem.jsx
│       ├── useDropdown.js
│       └── dropdown.css
│
├── auth
│   ├── AuthContext.jsx
│   ├── AuthProvider.jsx
│   ├── useAuth.js
│   └── ProtectedRoute.jsx
│
├── App.jsx
├── App.css
└── main.jsx
🎯 Why These Patterns Matter
Compound Components

Instead of passing many props:

<Component
  open={open}
  setOpen={setOpen}
  items={items}
/>

we create a declarative API:

<Component>

  <Component.Trigger />

  <Component.Content />

</Component>

Benefits:

Better readability
Easier composition
Cleaner APIs
Headless Components

Headless components provide:

Logic
State management
Accessibility

but no styling.

Example:

const {
  open,
  toggle
} = useDropdown();

The developer decides:

UI
CSS
Design

Benefits:

Highly reusable
Design-system friendly
Framework flexibility
Custom Hooks

Instead of:

withAuth(Component)

Modern React uses:

const user = useAuth();

Benefits:

No wrapper components
Easier debugging
Better composition
Reusable business logic
🎨 Styling Approach

All components use scoped CSS:

.advanced-react-patterns {
    ...
}

This prevents component styles from leaking globally.

🛠 Installation

Clone the project:

git clone <repository-url>

Install dependencies:

npm install

Run development server:

npm run dev
📚 Learning Goals

After completing this project you should understand:

How React component libraries are designed
How Radix UI and Headless UI approach component architecture
How to separate logic from presentation
How to build reusable APIs
How to manage complex component state
🔥 Inspired By
Radix UI
Headless UI
React Aria
Modern Design System Architecture
Author

Built as a practical exploration of advanced React architecture patterns.