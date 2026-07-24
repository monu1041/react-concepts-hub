var e=`import "./App.css";\r
\r
import AuthProvider from "./auth/AuthProvider";\r
import useAuth from "./auth/useAuth";\r
\r
import Tabs from "./components/Tabs";\r
import Modal from "./components/Modal";\r
import Dropdown from "./components/Dropdown";\r
\r
function Playground() {\r
  const { user, login, logout, loading } = useAuth();\r
\r
  function handleLogin() {\r
    login("john@example.com", "password123");\r
  }\r
\r
  function handleMenuSelect(value) {\r
    console.log("Selected:", value);\r
  }\r
\r
  return (\r
    <div className="advanced-react-patterns">\r
      <h1>Advanced React Patterns</h1>\r
\r
      {/* ---------------- Tabs ---------------- */}\r
\r
      <section>\r
        <h2>Tabs</h2>\r
\r
        <Tabs defaultValue="profile">\r
          <Tabs.List>\r
            <Tabs.Trigger value="profile">Profile</Tabs.Trigger>\r
\r
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>\r
          </Tabs.List>\r
\r
          <Tabs.Content value="profile">\r
            Welcome to the Profile tab.\r
          </Tabs.Content>\r
\r
          <Tabs.Content value="settings">\r
            Welcome to the Settings tab.\r
          </Tabs.Content>\r
        </Tabs>\r
      </section>\r
\r
      {/* ---------------- Modal ---------------- */}\r
\r
      <section>\r
        <h2>Headless Modal</h2>\r
\r
        <Modal>\r
          <Modal.Trigger>Open Modal</Modal.Trigger>\r
\r
          <Modal.Content>\r
            <Modal.Header>Delete Account?</Modal.Header>\r
\r
            <Modal.Body>This action cannot be undone.</Modal.Body>\r
\r
            <Modal.Footer>\r
              <Modal.Close>Cancel</Modal.Close>\r
\r
              <button>Confirm</button>\r
            </Modal.Footer>\r
          </Modal.Content>\r
        </Modal>\r
      </section>\r
\r
      {/* ---------------- Dropdown ---------------- */}\r
\r
      <section>\r
        <h2>Dropdown</h2>\r
\r
        <Dropdown>\r
          <Dropdown.Trigger>Actions</Dropdown.Trigger>\r
\r
          <Dropdown.Content>\r
            <Dropdown.Item value="edit" onSelect={handleMenuSelect}>\r
              Edit\r
            </Dropdown.Item>\r
\r
            <Dropdown.Item value="delete" onSelect={handleMenuSelect}>\r
              Delete\r
            </Dropdown.Item>\r
\r
            <Dropdown.Item value="logout" onSelect={handleMenuSelect}>\r
              Logout\r
            </Dropdown.Item>\r
          </Dropdown.Content>\r
        </Dropdown>\r
      </section>\r
\r
      {/* ---------------- Authentication ---------------- */}\r
\r
      <section>\r
        <h2>Authentication Hook</h2>\r
\r
        {user ? (\r
          <>\r
            <p>\r
              Welcome <strong>{user.name}</strong>\r
            </p>\r
\r
            <button onClick={logout}>Logout</button>\r
          </>\r
        ) : (\r
          <button disabled={loading} onClick={handleLogin}>\r
            {loading ? "Logging in..." : "Login"}\r
          </button>\r
        )}\r
      </section>\r
    </div>\r
  );\r
}\r
\r
function App() {\r
  return (\r
    <AuthProvider>\r
      <Playground />\r
    </AuthProvider>\r
  );\r
}\r
\r
export default App;\r
`;export{e as default};