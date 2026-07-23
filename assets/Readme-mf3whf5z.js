var e=`# Advanced React Patterns\r
\r
A hands-on React project demonstrating advanced component architecture patterns used in modern React libraries and production applications.\r
\r
This project focuses on building reusable, scalable, and accessible components using patterns like Compound Components, Headless Components, Custom Hooks, Context API, and Controlled/Uncontrolled component design.\r
\r
---\r
\r
## 🚀 Features\r
\r
### 1. Tabs Component\r
\r
Pattern:\r
\r
- Compound Components\r
- Context API\r
- Keyboard Navigation\r
- Controlled & Uncontrolled State\r
\r
Example API:\r
\r
\`\`\`jsx\r
<Tabs defaultValue="profile">\r
\r
  <Tabs.List>\r
\r
    <Tabs.Trigger value="profile">\r
      Profile\r
    </Tabs.Trigger>\r
\r
    <Tabs.Trigger value="settings">\r
      Settings\r
    </Tabs.Trigger>\r
\r
  </Tabs.List>\r
\r
\r
  <Tabs.Content value="profile">\r
    Profile Content\r
  </Tabs.Content>\r
\r
</Tabs>\r
\r
Features:\r
\r
Shared state between tabs\r
Keyboard navigation\r
Accessible tab roles\r
Reusable API design\r
2. Headless Modal Component\r
\r
Pattern:\r
\r
Headless Components\r
Compound Components\r
Controlled Components\r
Uncontrolled Components\r
React Portal\r
Accessibility\r
\r
Example:\r
\r
<Modal>\r
\r
  <Modal.Trigger>\r
    Open Modal\r
  </Modal.Trigger>\r
\r
\r
  <Modal.Content>\r
\r
    <h2>\r
      Delete Account\r
    </h2>\r
\r
  </Modal.Content>\r
\r
</Modal>\r
\r
Features:\r
\r
Logic separated from presentation\r
Escape key handling\r
Outside click detection\r
Focus management\r
Custom styling support\r
3. Dropdown Component\r
\r
Pattern:\r
\r
Compound Components\r
Custom Hooks\r
Context API\r
Accessibility\r
Keyboard Navigation\r
\r
Example:\r
\r
<Dropdown>\r
\r
  <Dropdown.Trigger>\r
    Actions\r
  </Dropdown.Trigger>\r
\r
\r
  <Dropdown.Content>\r
\r
    <Dropdown.Item value="edit">\r
      Edit\r
    </Dropdown.Item>\r
\r
\r
    <Dropdown.Item value="delete">\r
      Delete\r
    </Dropdown.Item>\r
\r
  </Dropdown.Content>\r
\r
</Dropdown>\r
\r
Features:\r
\r
Open/close state management\r
Keyboard navigation\r
Focus management\r
Escape handling\r
Menu accessibility roles\r
\r
Supported keys:\r
\r
Key	Action\r
Arrow Down	Next item\r
Arrow Up	Previous item\r
Home	First item\r
End	Last item\r
Escape	Close menu\r
4. Authentication Hook\r
\r
Pattern:\r
\r
Context Provider Pattern\r
Custom Hooks\r
Protected Routes\r
\r
Usage:\r
\r
const {\r
  user,\r
  login,\r
  logout\r
} = useAuth();\r
\r
Features:\r
\r
Centralized authentication state\r
Login/logout handling\r
Loading state\r
Protected route pattern\r
\r
Example:\r
\r
<ProtectedRoute>\r
\r
  <Dashboard />\r
\r
</ProtectedRoute>\r
🧠 React Patterns Covered\r
Pattern	Usage\r
Composition	Building flexible components\r
Compound Components	Tabs, Modal, Dropdown\r
Context API	Shared component state\r
Custom Hooks	Reusable logic\r
Headless Components	Modal architecture\r
Controlled Components	External state management\r
Uncontrolled Components	Internal state management\r
React Portal	Modal rendering\r
Accessibility	Keyboard and ARIA support\r
Provider Pattern	Authentication\r
📂 Project Structure\r
src\r
│\r
├── components\r
│\r
│   ├── Tabs\r
│   │   ├── Tabs.jsx\r
│   │   ├── TabsList.jsx\r
│   │   ├── TabsTrigger.jsx\r
│   │   ├── TabsContent.jsx\r
│   │   └── tabs.css\r
│   │\r
│   ├── Modal\r
│   │   ├── Modal.jsx\r
│   │   ├── ModalTrigger.jsx\r
│   │   ├── ModalContent.jsx\r
│   │   └── modal.css\r
│   │\r
│   └── Dropdown\r
│       ├── Dropdown.jsx\r
│       ├── DropdownTrigger.jsx\r
│       ├── DropdownContent.jsx\r
│       ├── DropdownItem.jsx\r
│       ├── useDropdown.js\r
│       └── dropdown.css\r
│\r
├── auth\r
│   ├── AuthContext.jsx\r
│   ├── AuthProvider.jsx\r
│   ├── useAuth.js\r
│   └── ProtectedRoute.jsx\r
│\r
├── App.jsx\r
├── App.css\r
└── main.jsx\r
🎯 Why These Patterns Matter\r
Compound Components\r
\r
Instead of passing many props:\r
\r
<Component\r
  open={open}\r
  setOpen={setOpen}\r
  items={items}\r
/>\r
\r
we create a declarative API:\r
\r
<Component>\r
\r
  <Component.Trigger />\r
\r
  <Component.Content />\r
\r
</Component>\r
\r
Benefits:\r
\r
Better readability\r
Easier composition\r
Cleaner APIs\r
Headless Components\r
\r
Headless components provide:\r
\r
Logic\r
State management\r
Accessibility\r
\r
but no styling.\r
\r
Example:\r
\r
const {\r
  open,\r
  toggle\r
} = useDropdown();\r
\r
The developer decides:\r
\r
UI\r
CSS\r
Design\r
\r
Benefits:\r
\r
Highly reusable\r
Design-system friendly\r
Framework flexibility\r
Custom Hooks\r
\r
Instead of:\r
\r
withAuth(Component)\r
\r
Modern React uses:\r
\r
const user = useAuth();\r
\r
Benefits:\r
\r
No wrapper components\r
Easier debugging\r
Better composition\r
Reusable business logic\r
🎨 Styling Approach\r
\r
All components use scoped CSS:\r
\r
.advanced-react-patterns {\r
    ...\r
}\r
\r
This prevents component styles from leaking globally.\r
\r
🛠 Installation\r
\r
Clone the project:\r
\r
git clone <repository-url>\r
\r
Install dependencies:\r
\r
npm install\r
\r
Run development server:\r
\r
npm run dev\r
📚 Learning Goals\r
\r
After completing this project you should understand:\r
\r
How React component libraries are designed\r
How Radix UI and Headless UI approach component architecture\r
How to separate logic from presentation\r
How to build reusable APIs\r
How to manage complex component state\r
🔥 Inspired By\r
Radix UI\r
Headless UI\r
React Aria\r
Modern Design System Architecture\r
Author\r
\r
Built as a practical exploration of advanced React architecture patterns.`;export{e as default};