var e=`import {\r
  useEffect,\r
  useRef\r
} from "react";\r
\r
import { createPortal } from "react-dom";\r
\r
import useFocusTrap from "../../hooks/useFocusTrap";\r
\r
export default function Modal({\r
  isOpen,\r
  onClose,\r
  title,\r
  children\r
}) {\r
  const modalRef = useRef(null);\r
  const previousActiveElementRef = useRef(null);\r
\r
  useFocusTrap(modalRef, isOpen);\r
\r
  useEffect(() => {\r
    if (!isOpen) {\r
      return undefined;\r
    }\r
\r
    previousActiveElementRef.current =\r
      document.activeElement;\r
\r
    const handleKeyDown = (event) => {\r
      if (event.key === "Escape") {\r
        onClose();\r
      }\r
    };\r
\r
    document.addEventListener(\r
      "keydown",\r
      handleKeyDown\r
    );\r
\r
    const originalOverflow =\r
      document.body.style.overflow;\r
\r
    document.body.style.overflow = "hidden";\r
\r
    return () => {\r
      document.removeEventListener(\r
        "keydown",\r
        handleKeyDown\r
      );\r
\r
      document.body.style.overflow = originalOverflow;\r
\r
      previousActiveElementRef.current?.focus?.();\r
    };\r
  }, [isOpen, onClose]);\r
\r
  if (!isOpen) {\r
    return null;\r
  }\r
\r
  const handleBackdropClick = (event) => {\r
    if (event.target === event.currentTarget) {\r
      onClose();\r
    }\r
  };\r
\r
  return createPortal(\r
    <div\r
      className="modal-backdrop"\r
      onMouseDown={handleBackdropClick}\r
    >\r
      <div\r
        ref={modalRef}\r
        className="modal"\r
        role="dialog"\r
        aria-modal="true"\r
        aria-labelledby="modal-title"\r
        tabIndex="-1"\r
      >\r
        <div className="modal-header">\r
          <h2 id="modal-title">{title}</h2>\r
\r
          <button\r
            className="modal-close-button"\r
            onClick={onClose}\r
            aria-label="Close modal"\r
          >\r
            ×\r
          </button>\r
        </div>\r
\r
        <div className="modal-body">\r
          {children}\r
        </div>\r
      </div>\r
    </div>,\r
    document.body\r
  );\r
}`;export{e as default};