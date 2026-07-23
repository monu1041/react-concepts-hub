import "./App.css";

import AuthProvider from "./auth/AuthProvider";
import useAuth from "./auth/useAuth";

import Tabs from "./components/Tabs";
import Modal from "./components/Modal";
import Dropdown from "./components/Dropdown";

function Playground() {
    const {
        user,
        login,
        logout,
        loading,
    } = useAuth();

    function handleLogin() {
        login(
            "john@example.com",
            "password123"
        );
    }

    function handleMenuSelect(value) {
        console.log("Selected:", value);
    }

    return (
        <div className="advanced-react-patterns">

            <h1>
                Advanced React Patterns
            </h1>

            {/* ---------------- Tabs ---------------- */}

            <section>

                <h2>
                    Tabs
                </h2>

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
                        Welcome to the Profile tab.
                    </Tabs.Content>

                    <Tabs.Content value="settings">
                        Welcome to the Settings tab.
                    </Tabs.Content>

                </Tabs>

            </section>

            {/* ---------------- Modal ---------------- */}

            <section>

                <h2>
                    Headless Modal
                </h2>

                <Modal>

                    <Modal.Trigger>
                        Open Modal
                    </Modal.Trigger>


                    <Modal.Content>

                        <Modal.Header>
                            Delete Account?
                        </Modal.Header>


                        <Modal.Body>
                            This action cannot be undone.
                        </Modal.Body>


                        <Modal.Footer>

                            <Modal.Close>
                                Cancel
                            </Modal.Close>


                            <button>
                                Confirm
                            </button>


                        </Modal.Footer>


                    </Modal.Content>

                </Modal>

            </section>

            {/* ---------------- Dropdown ---------------- */}

            <section>

                <h2>
                    Dropdown
                </h2>

                <Dropdown>

                    <Dropdown.Trigger>
                        Actions
                    </Dropdown.Trigger>

                    <Dropdown.Content>

                        <Dropdown.Item
                            value="edit"
                            onSelect={handleMenuSelect}
                        >
                            Edit
                        </Dropdown.Item>

                        <Dropdown.Item
                            value="delete"
                            onSelect={handleMenuSelect}
                        >
                            Delete
                        </Dropdown.Item>

                        <Dropdown.Item
                            value="logout"
                            onSelect={handleMenuSelect}
                        >
                            Logout
                        </Dropdown.Item>

                    </Dropdown.Content>

                </Dropdown>

            </section>

            {/* ---------------- Authentication ---------------- */}

            <section>

                <h2>
                    Authentication Hook
                </h2>

                {user ? (

                    <>

                        <p>
                            Welcome <strong>{user.name}</strong>
                        </p>

                        <button
                            onClick={logout}
                        >
                            Logout
                        </button>

                    </>

                ) : (

                    <button
                        disabled={loading}
                        onClick={handleLogin}
                    >
                        {
                            loading
                                ? "Logging in..."
                                : "Login"
                        }
                    </button>

                )}

            </section>

        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Playground />
        </AuthProvider>
    );
}

export default App;