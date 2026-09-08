import { useState } from "react";

import Modal from "./components/Modal/Modal";
import UncontrolledModal from "./components/Modal/UncontrolledModal";

import { ToastProvider } from "./components/Toast/ToastProvider";
import { useToast } from "./components/Toast/useToast";

import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";

import "./components/Modal/modal.css";
import "./components/Toast/toast.css";
import "./components/InfiniteScroll/infiniteScroll.css";

function ToastDemo() {
  const { showToast } = useToast();

  return (
    <section className="demo-section">
      <div className="section-heading">
        <div>
          <span className="section-label">Pattern 2</span>
          <h2>Toast System</h2>
        </div>

        <p>
          Context API + Portal + timers + automatic cleanup.
        </p>
      </div>

      <div className="button-row">
        <button
          className="button button-success"
          onClick={() =>
            showToast({
              type: "success",
              message: "Operation completed successfully."
            })
          }
        >
          Success Toast
        </button>

        <button
          className="button button-error"
          onClick={() =>
            showToast({
              type: "error",
              message: "Something went wrong."
            })
          }
        >
          Error Toast
        </button>

        <button
          className="button button-warning"
          onClick={() =>
            showToast({
              type: "warning",
              message: "This action requires your attention."
            })
          }
        >
          Warning Toast
        </button>

        <button
          className="button button-info"
          onClick={() =>
            showToast({
              type: "info",
              message: "This is an informational message."
            })
          }
        >
          Info Toast
        </button>
      </div>
    </section>
  );
}

function AppContent() {
  const [controlledModalOpen, setControlledModalOpen] =
    useState(false);

  return (
    <main className="app">
      <header className="hero">
        <div className="hero-content">
          <span className="eyebrow">React Interview Preparation</span>

          <h1>React UI Patterns Demo</h1>

          <p>
            A small multi-file React application demonstrating
            reusable UI patterns and important React concepts.
          </p>
        </div>
      </header>

      <div className="container">
        {/* ------------------------------------------------ */}
        {/* MODAL */}
        {/* ------------------------------------------------ */}

        <section className="demo-section">
          <div className="section-heading">
            <div>
              <span className="section-label">Pattern 1</span>
              <h2>Modal</h2>
            </div>

            <p>
              Controlled component, uncontrolled component,
              Portal and focus management.
            </p>
          </div>

          <div className="demo-card">
            <div>
              <h3>Controlled Modal</h3>

              <p>
                The parent owns the <code>isOpen</code> state.
              </p>
            </div>

            <button
              className="button button-primary"
              onClick={() => setControlledModalOpen(true)}
            >
              Open Controlled Modal
            </button>
          </div>

          <div className="demo-card">
            <div>
              <h3>Uncontrolled Modal</h3>

              <p>
                The component internally manages its open/close
                state.
              </p>
            </div>

            <UncontrolledModal />
          </div>

          <Modal
            isOpen={controlledModalOpen}
            onClose={() => setControlledModalOpen(false)}
            title="Controlled Modal"
          >
            <p>
              This modal is controlled by the parent component.
            </p>

            <p>
              The parent decides whether the modal is open by
              passing the <code>isOpen</code> prop.
            </p>

            <div className="modal-example-box">
              <strong>Interview concept:</strong>

              <span>
                Controlled components receive their state from
                their parent.
              </span>
            </div>

            <div className="modal-actions">
              <button
                className="button button-primary"
                onClick={() => setControlledModalOpen(false)}
              >
                Close
              </button>
            </div>
          </Modal>
        </section>

        {/* ------------------------------------------------ */}
        {/* TOAST */}
        {/* ------------------------------------------------ */}

        <ToastDemo />

        {/* ------------------------------------------------ */}
        {/* INFINITE SCROLL */}
        {/* ------------------------------------------------ */}

        <section className="demo-section">
          <div className="section-heading">
            <div>
              <span className="section-label">Pattern 3</span>
              <h2>Infinite Scroll</h2>
            </div>

            <p>
              IntersectionObserver + asynchronous API +
              virtualization.
            </p>
          </div>

          <InfiniteScroll />
        </section>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}