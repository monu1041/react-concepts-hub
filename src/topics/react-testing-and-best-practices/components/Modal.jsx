import { useEffect, useRef } from "react";

function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current.focus();

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <h2 id="modal-title">
          {title}
        </h2>

        {children}

        <button
          ref={closeButtonRef}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;