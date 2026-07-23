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
    const {\r
        user,\r
        login,\r
        logout,\r
        loading,\r
    } = useAuth();\r
\r
    function handleLogin() {\r
        login(\r
            "john@example.com",\r
            "password123"\r
        );\r
    }\r
\r
    function handleMenuSelect(value) {\r
        console.log("Selected:", value);\r
    }\r
\r
    return (\r
        <div className="advanced-react-patterns">\r
\r
            <h1>\r
                Advanced React Patterns\r
            </h1>\r
\r
            {/* ---------------- Tabs ---------------- */}\r
\r
            <section>\r
\r
                <h2>\r
                    Tabs\r
                </h2>\r
\r
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
                    <Tabs.Content value="profile">\r
                        Welcome to the Profile tab.\r
                    </Tabs.Content>\r
\r
                    <Tabs.Content value="settings">\r
                        Welcome to the Settings tab.\r
                    </Tabs.Content>\r
\r
                </Tabs>\r
\r
            </section>\r
\r
            {/* ---------------- Modal ---------------- */}\r
\r
            <section>\r
\r
                <h2>\r
                    Headless Modal\r
                </h2>\r
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
                        <Modal.Header>\r
                            Delete Account?\r
                        </Modal.Header>\r
\r
\r
                        <Modal.Body>\r
                            This action cannot be undone.\r
                        </Modal.Body>\r
\r
\r
                        <Modal.Footer>\r
\r
                            <Modal.Close>\r
                                Cancel\r
                            </Modal.Close>\r
\r
\r
                            <button>\r
                                Confirm\r
                            </button>\r
\r
\r
                        </Modal.Footer>\r
\r
\r
                    </Modal.Content>\r
\r
                </Modal>\r
\r
            </section>\r
\r
            {/* ---------------- Dropdown ---------------- */}\r
\r
            <section>\r
\r
                <h2>\r
                    Dropdown\r
                </h2>\r
\r
                <Dropdown>\r
\r
                    <Dropdown.Trigger>\r
                        Actions\r
                    </Dropdown.Trigger>\r
\r
                    <Dropdown.Content>\r
\r
                        <Dropdown.Item\r
                            value="edit"\r
                            onSelect={handleMenuSelect}\r
                        >\r
                            Edit\r
                        </Dropdown.Item>\r
\r
                        <Dropdown.Item\r
                            value="delete"\r
                            onSelect={handleMenuSelect}\r
                        >\r
                            Delete\r
                        </Dropdown.Item>\r
\r
                        <Dropdown.Item\r
                            value="logout"\r
                            onSelect={handleMenuSelect}\r
                        >\r
                            Logout\r
                        </Dropdown.Item>\r
\r
                    </Dropdown.Content>\r
\r
                </Dropdown>\r
\r
            </section>\r
\r
            {/* ---------------- Authentication ---------------- */}\r
\r
            <section>\r
\r
                <h2>\r
                    Authentication Hook\r
                </h2>\r
\r
                {user ? (\r
\r
                    <>\r
\r
                        <p>\r
                            Welcome <strong>{user.name}</strong>\r
                        </p>\r
\r
                        <button\r
                            onClick={logout}\r
                        >\r
                            Logout\r
                        </button>\r
\r
                    </>\r
\r
                ) : (\r
\r
                    <button\r
                        disabled={loading}\r
                        onClick={handleLogin}\r
                    >\r
                        {\r
                            loading\r
                                ? "Logging in..."\r
                                : "Login"\r
                        }\r
                    </button>\r
\r
                )}\r
\r
            </section>\r
\r
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
export default App;`;export{e as default};