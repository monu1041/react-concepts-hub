var e=`import { useState } from "react";\r
import LoginForm from "./components/LoginForm";\r
import Modal from "./components/Modal";\r
import Dashboard from "./components/Dashboard";\r
import "./App.css";\r
\r
function App() {\r
  const [isOpen, setIsOpen] = useState(false);\r
\r
  return (\r
    <main className="container">\r
      <section>\r
        <h2>1. Login Form</h2>\r
        <LoginForm />\r
      </section>\r
\r
      <hr />\r
\r
      <section>\r
        <h2>2. Accessible Modal</h2>\r
\r
        <button onClick={() => setIsOpen(true)}>\r
          Open Modal\r
        </button>\r
\r
        <Modal\r
          isOpen={isOpen}\r
          onClose={() => setIsOpen(false)}\r
          title="Dummy Modal"\r
        >\r
          <p>\r
            This modal supports keyboard navigation,\r
            focus management, and Escape to close.\r
          </p>\r
        </Modal>\r
      </section>\r
\r
      <hr />\r
\r
      <section>\r
        <h2>3. Dashboard</h2>\r
        <Dashboard />\r
      </section>\r
    </main>\r
  );\r
}\r
\r
export default App;`;export{e as default};