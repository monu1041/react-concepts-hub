import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="container">
      <section>
        <h2>1. Login Form</h2>
        <LoginForm />
      </section>

      <hr />

      <section>
        <h2>2. Accessible Modal</h2>

        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Dummy Modal"
        >
          <p>
            This modal supports keyboard navigation,
            focus management, and Escape to close.
          </p>
        </Modal>
      </section>

      <hr />

      <section>
        <h2>3. Dashboard</h2>
        <Dashboard />
      </section>
    </main>
  );
}

export default App;