var e=`import { useState } from "react";\r
\r
import Modal from "./components/Modal/Modal";\r
import UncontrolledModal from "./components/Modal/UncontrolledModal";\r
\r
import { ToastProvider } from "./components/Toast/ToastProvider";\r
import { useToast } from "./components/Toast/useToast";\r
\r
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";\r
\r
import "./components/Modal/modal.css";\r
import "./components/Toast/toast.css";\r
import "./components/InfiniteScroll/infiniteScroll.css";\r
\r
function ToastDemo() {\r
  const { showToast } = useToast();\r
\r
  return (\r
    <section className="demo-section">\r
      <div className="section-heading">\r
        <div>\r
          <span className="section-label">Pattern 2</span>\r
          <h2>Toast System</h2>\r
        </div>\r
\r
        <p>\r
          Context API + Portal + timers + automatic cleanup.\r
        </p>\r
      </div>\r
\r
      <div className="button-row">\r
        <button\r
          className="button button-success"\r
          onClick={() =>\r
            showToast({\r
              type: "success",\r
              message: "Operation completed successfully."\r
            })\r
          }\r
        >\r
          Success Toast\r
        </button>\r
\r
        <button\r
          className="button button-error"\r
          onClick={() =>\r
            showToast({\r
              type: "error",\r
              message: "Something went wrong."\r
            })\r
          }\r
        >\r
          Error Toast\r
        </button>\r
\r
        <button\r
          className="button button-warning"\r
          onClick={() =>\r
            showToast({\r
              type: "warning",\r
              message: "This action requires your attention."\r
            })\r
          }\r
        >\r
          Warning Toast\r
        </button>\r
\r
        <button\r
          className="button button-info"\r
          onClick={() =>\r
            showToast({\r
              type: "info",\r
              message: "This is an informational message."\r
            })\r
          }\r
        >\r
          Info Toast\r
        </button>\r
      </div>\r
    </section>\r
  );\r
}\r
\r
function AppContent() {\r
  const [controlledModalOpen, setControlledModalOpen] =\r
    useState(false);\r
\r
  return (\r
    <main className="app">\r
      <header className="hero">\r
        <div className="hero-content">\r
          <span className="eyebrow">React Interview Preparation</span>\r
\r
          <h1>React UI Patterns Demo</h1>\r
\r
          <p>\r
            A small multi-file React application demonstrating\r
            reusable UI patterns and important React concepts.\r
          </p>\r
        </div>\r
      </header>\r
\r
      <div className="container">\r
        {/* ------------------------------------------------ */}\r
        {/* MODAL */}\r
        {/* ------------------------------------------------ */}\r
\r
        <section className="demo-section">\r
          <div className="section-heading">\r
            <div>\r
              <span className="section-label">Pattern 1</span>\r
              <h2>Modal</h2>\r
            </div>\r
\r
            <p>\r
              Controlled component, uncontrolled component,\r
              Portal and focus management.\r
            </p>\r
          </div>\r
\r
          <div className="demo-card">\r
            <div>\r
              <h3>Controlled Modal</h3>\r
\r
              <p>\r
                The parent owns the <code>isOpen</code> state.\r
              </p>\r
            </div>\r
\r
            <button\r
              className="button button-primary"\r
              onClick={() => setControlledModalOpen(true)}\r
            >\r
              Open Controlled Modal\r
            </button>\r
          </div>\r
\r
          <div className="demo-card">\r
            <div>\r
              <h3>Uncontrolled Modal</h3>\r
\r
              <p>\r
                The component internally manages its open/close\r
                state.\r
              </p>\r
            </div>\r
\r
            <UncontrolledModal />\r
          </div>\r
\r
          <Modal\r
            isOpen={controlledModalOpen}\r
            onClose={() => setControlledModalOpen(false)}\r
            title="Controlled Modal"\r
          >\r
            <p>\r
              This modal is controlled by the parent component.\r
            </p>\r
\r
            <p>\r
              The parent decides whether the modal is open by\r
              passing the <code>isOpen</code> prop.\r
            </p>\r
\r
            <div className="modal-example-box">\r
              <strong>Interview concept:</strong>\r
\r
              <span>\r
                Controlled components receive their state from\r
                their parent.\r
              </span>\r
            </div>\r
\r
            <div className="modal-actions">\r
              <button\r
                className="button button-primary"\r
                onClick={() => setControlledModalOpen(false)}\r
              >\r
                Close\r
              </button>\r
            </div>\r
          </Modal>\r
        </section>\r
\r
        {/* ------------------------------------------------ */}\r
        {/* TOAST */}\r
        {/* ------------------------------------------------ */}\r
\r
        <ToastDemo />\r
\r
        {/* ------------------------------------------------ */}\r
        {/* INFINITE SCROLL */}\r
        {/* ------------------------------------------------ */}\r
\r
        <section className="demo-section">\r
          <div className="section-heading">\r
            <div>\r
              <span className="section-label">Pattern 3</span>\r
              <h2>Infinite Scroll</h2>\r
            </div>\r
\r
            <p>\r
              IntersectionObserver + asynchronous API +\r
              virtualization.\r
            </p>\r
          </div>\r
\r
          <InfiniteScroll />\r
        </section>\r
      </div>\r
    </main>\r
  );\r
}\r
\r
export default function App() {\r
  return (\r
    <ToastProvider>\r
      <AppContent />\r
    </ToastProvider>\r
  );\r
}`;export{e as default};