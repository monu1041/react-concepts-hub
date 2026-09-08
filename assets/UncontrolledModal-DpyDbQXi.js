var e=`import { useState } from "react";\r
\r
import Modal from "./Modal";\r
\r
export default function UncontrolledModal() {\r
  const [isOpen, setIsOpen] = useState(false);\r
\r
  return (\r
    <>\r
      <button\r
        className="button button-primary"\r
        onClick={() => setIsOpen(true)}\r
      >\r
        Open Uncontrolled Modal\r
      </button>\r
\r
      <Modal\r
        isOpen={isOpen}\r
        onClose={() => setIsOpen(false)}\r
        title="Uncontrolled Modal"\r
      >\r
        <p>\r
          The state for this modal lives inside\r
          <code>UncontrolledModal</code>.\r
        </p>\r
\r
        <p>\r
          The parent does not need to know whether this\r
          modal is currently open.\r
        </p>\r
\r
        <div className="modal-example-box">\r
          <strong>Interview concept:</strong>\r
\r
          <span>\r
            Encapsulated state can make reusable components\r
            easier to consume.\r
          </span>\r
        </div>\r
\r
        <div className="modal-actions">\r
          <button\r
            className="button button-primary"\r
            onClick={() => setIsOpen(false)}\r
          >\r
            Close\r
          </button>\r
        </div>\r
      </Modal>\r
    </>\r
  );\r
}`;export{e as default};