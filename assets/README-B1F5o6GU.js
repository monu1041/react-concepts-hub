var e=`# React Testing and Best Practices\r
\r
A React interview assignment project demonstrating modern React development practices including:\r
\r
- Component design\r
- Form handling and validation\r
- React Testing Library\r
- Vitest testing\r
- Accessibility best practices\r
- Custom hooks\r
- State management improvements\r
- Clean code principles\r
\r
---\r
\r
# Overview\r
\r
This project contains three main exercises:\r
\r
1. Login Form\r
2. Accessible Modal\r
3. Dashboard Refactoring\r
\r
The goal is to demonstrate how to build React applications that are:\r
\r
- Maintainable\r
- Testable\r
- Accessible\r
- Easy to extend\r
\r
---\r
\r
# Tech Stack\r
\r
| Technology | Purpose |\r
|---|---|\r
| React | UI library |\r
| Vite | Build tool |\r
| Vitest | Test runner |\r
| React Testing Library | Component testing |\r
| JavaScript ES6+ | Programming language |\r
\r
---\r
\r
# Project Structure\r
\r
react-testing-and-best-practices/\r
\r
├── package.json\r
\r
├── vite.config.js\r
\r
├── README.md\r
\r
├── src/\r
\r
│\r
\r
│   ├── App.jsx\r
\r
│   ├── main.jsx\r
\r
│   ├── setupTests.js\r
\r
│\r
\r
│   ├── components/\r
\r
│   │   ├── LoginForm.jsx\r
\r
│   │   ├── Modal.jsx\r
\r
│   │   ├── Dashboard.jsx\r
\r
│   │   ├── SearchBar.jsx\r
\r
│   │   └── UserCard.jsx\r
\r
│\r
\r
│   ├── hooks/\r
\r
│   │   ├── useForm.js\r
\r
│   │   └── useUsers.js\r
\r
│\r
\r
│   └── utils/\r
\r
│       └── validation.js\r
\r
│\r
\r
└── tests/\r
\r
├── LoginForm.test.jsx\r
\r
├── Modal.test.jsx\r
\r
└── Dashboard.test.jsx\r
\r
---\r
\r
# Installation\r
\r
Clone the repository:\r
\r
\`\`\`bash\r
git clone <repository-url>\r
\`\`\`\r
\r
Navigate into the project:\r
\r
\`\`\`bash\r
cd react-testing-and-best-practices\r
\`\`\`\r
\r
Install dependencies:\r
\r
\`\`\`bash\r
npm install\r
\`\`\`\r
\r
---\r
\r
# Running the Application\r
\r
Start the development server:\r
\r
\`\`\`bash\r
npm run dev\r
\`\`\`\r
\r
Application will run on:\r
\r
\`\`\`text\r
http://localhost:5173\r
\`\`\`\r
\r
---\r
\r
# Running Tests\r
\r
Run all tests:\r
\r
\`\`\`bash\r
npm run test\r
\`\`\`\r
\r
Run tests with UI:\r
\r
\`\`\`bash\r
npm run test:ui\r
\`\`\`\r
\r
Generate coverage report:\r
\r
\`\`\`bash\r
npm run coverage\r
\`\`\`\r
\r
---\r
\r
# Assignment Details\r
\r
# 1. Login Form\r
\r
## Purpose\r
\r
Demonstrates:\r
\r
- Controlled React components\r
- Form state management\r
- Validation logic\r
- Error handling\r
- User interaction testing\r
\r
## Features\r
\r
The form contains:\r
\r
- Email input\r
- Password input\r
- Login button\r
\r
## Validation Rules\r
\r
### Email\r
\r
- Required\r
- Must be a valid email format\r
\r
### Password\r
\r
- Required\r
- Minimum 6 characters\r
\r
## Flow\r
\r
\`\`\`text\r
User enters information\r
\r
        ↓\r
\r
useForm manages input state\r
\r
        ↓\r
\r
validateLogin checks rules\r
\r
        ↓\r
\r
Errors displayed\r
\r
        ↓\r
\r
Successful submission\r
\`\`\`\r
\r
---\r
\r
# 2. Accessible Modal\r
\r
## Purpose\r
\r
Demonstrates accessibility and keyboard support.\r
\r
## Features\r
\r
The modal supports:\r
\r
- Open and close actions\r
- Escape key handling\r
- Keyboard navigation\r
- Focus management\r
- ARIA attributes\r
\r
## Accessibility Implementation\r
\r
The modal uses:\r
\r
\`\`\`html\r
role="dialog"\r
aria-modal="true"\r
aria-labelledby="modal-title"\r
\`\`\`\r
\r
This helps assistive technologies understand the purpose of the element.\r
\r
## Keyboard Support\r
\r
\`\`\`text\r
ActionResultOpen buttonOpens modalEscape keyCloses modalClose buttonCloses modalTab navigationMoves through controls\r
\`\`\`\r
\r
---\r
\r
# 3. Dashboard Refactoring\r
\r
## Purpose\r
\r
Demonstrates improving component structure.\r
\r
Before refactoring:\r
\r
\`\`\`text\r
Dashboard.jsx\r
\r
- Fetch users\r
- Manage loading\r
- Filter users\r
- Render cards\r
- Handle search\r
\`\`\`\r
\r
After refactoring:\r
\r
\`\`\`text\r
Dashboard.jsx\r
\r
      |\r
      |\r
      ├── useUsers()\r
      |\r
      ├── SearchBar\r
      |\r
      └── UserCard\r
\`\`\`\r
\r
---\r
\r
# Custom Hooks\r
\r
## useUsers()\r
\r
Responsible for:\r
\r
- Loading user data\r
- Managing loading state\r
- Separating data logic from UI\r
\r
Example:\r
\r
\`\`\`js\r
const {\r
  users,\r
  loading\r
} = useUsers();\r
\`\`\`\r
\r
---\r
\r
## useForm()\r
\r
Responsible for:\r
\r
- Managing form values\r
- Handling input changes\r
- Running validation\r
- Managing errors\r
\r
Example:\r
\r
\`\`\`js\r
const {\r
  values,\r
  errors,\r
  handleChange,\r
  handleSubmit\r
} = useForm();\r
\`\`\`\r
\r
---\r
\r
# Testing Strategy\r
\r
This project follows the React Testing Library philosophy:\r
\r
> Test the application the way users interact with it.\r
\r
Tests avoid checking implementation details.\r
\r
---\r
\r
# Login Form Tests\r
\r
Covered scenarios:\r
\r
### Rendering\r
\r
Checks:\r
\r
- Email input exists\r
- Password input exists\r
- Login button exists\r
\r
### Validation\r
\r
Checks:\r
\r
- Required field messages\r
- Invalid input handling\r
\r
### Submission\r
\r
Checks:\r
\r
- Valid input allows submission\r
\r
---\r
\r
# Modal Tests\r
\r
Covered scenarios:\r
\r
### Rendering\r
\r
Checks:\r
\r
- Modal appears when opened\r
\r
### Closing\r
\r
Checks:\r
\r
- Close button works\r
- Escape key closes modal\r
\r
### Accessibility\r
\r
Checks:\r
\r
- Dialog role exists\r
\r
---\r
\r
# Dashboard Tests\r
\r
Covered scenarios:\r
\r
### Loading State\r
\r
Checks:\r
\r
\`\`\`text\r
Loading users...\r
\`\`\`\r
\r
appears initially.\r
\r
### Data Rendering\r
\r
Checks:\r
\r
Users appear after loading.\r
\r
### Search\r
\r
Checks:\r
\r
Filtering works correctly.\r
\r
---\r
\r
# React Best Practices Used\r
\r
## 1. Component Separation\r
\r
Components have single responsibilities.\r
\r
Example:\r
\r
\`\`\`text\r
Dashboard\r
\r
does not know\r
\r
how UserCard displays data\r
\`\`\`\r
\r
---\r
\r
## 2. Custom Hooks\r
\r
Reusable logic is extracted.\r
\r
Instead of:\r
\r
\`\`\`js\r
useEffect(() => {\r
  fetchUsers();\r
}, []);\r
\`\`\`\r
\r
inside components:\r
\r
\`\`\`js\r
const {\r
 users,\r
 loading\r
} = useUsers();\r
\`\`\`\r
\r
---\r
\r
## 3. Derived State\r
\r
Avoid storing values that can be calculated.\r
\r
Bad:\r
\r
\`\`\`js\r
const [filteredUsers, setFilteredUsers] = useState([]);\r
\`\`\`\r
\r
Good:\r
\r
\`\`\`js\r
const filteredUsers =\r
 users.filter(...)\r
\`\`\`\r
\r
---\r
\r
## 4. Stable React Keys\r
\r
Lists use stable IDs:\r
\r
Good:\r
\r
\`\`\`jsx\r
<UserCard\r
 key={user.id}\r
/>\r
\`\`\`\r
\r
Avoid:\r
\r
\`\`\`jsx\r
key={index}\r
\`\`\`\r
\r
because changing list order can create incorrect component state.\r
\r
---\r
\r
## 5. Accessibility\r
\r
Implemented:\r
\r
- Semantic HTML\r
- Proper labels\r
- Keyboard support\r
- ARIA attributes\r
- Accessible roles\r
\r
---\r
\r
# Testing Philosophy\r
\r
## What should be tested?\r
\r
Test:\r
\r
- User interactions\r
- Visible UI changes\r
- Form behavior\r
- Error states\r
- Loading states\r
\r
Avoid testing:\r
\r
- Component internal state\r
- Private functions\r
- Implementation details\r
\r
---\r
\r
# Why React Testing Library?\r
\r
React Testing Library encourages testing from the user's perspective.\r
\r
Instead of:\r
\r
\`\`\`text\r
Check component state\r
\`\`\`\r
\r
we test:\r
\r
\`\`\`text\r
User clicks button\r
User sees result\r
\`\`\`\r
\r
This creates more reliable tests.\r
\r
---\r
\r
# Why Mock APIs?\r
\r
Real APIs should generally not be used in unit/integration tests because they:\r
\r
- Slow down tests\r
- Depend on network availability\r
- Create unpredictable results\r
\r
Recommended approach:\r
\r
- Mock external services\r
- Keep tests deterministic\r
\r
For larger applications:\r
\r
\`\`\`text\r
React Component\r
\r
      ↓\r
\r
API Request\r
\r
      ↓\r
\r
MSW intercepts request\r
\r
      ↓\r
\r
Mock response\r
\`\`\`\r
\r
---\r
\r
# Possible Improvements\r
\r
For a production application, this project could be extended with:\r
\r
- MSW API mocking\r
- Real authentication API\r
- React Router\r
- TypeScript\r
- React Query\r
- Error boundaries\r
- Complete modal focus trapping\r
- Form submission loading state\r
- ESLint\r
- Prettier\r
- CI/CD pipeline\r
`;export{e as default};