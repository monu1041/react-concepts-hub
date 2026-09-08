import { useState } from "react";

import Modal from "./Modal";

export default function UncontrolledModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="button button-primary"
        onClick={() => setIsOpen(true)}
      >
        Open Uncontrolled Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Uncontrolled Modal"
      >
        <p>
          The state for this modal lives inside
          <code>UncontrolledModal</code>.
        </p>

        <p>
          The parent does not need to know whether this
          modal is currently open.
        </p>

        <div className="modal-example-box">
          <strong>Interview concept:</strong>

          <span>
            Encapsulated state can make reusable components
            easier to consume.
          </span>
        </div>

        <div className="modal-actions">
          <button
            className="button button-primary"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}