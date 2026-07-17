var e=`import { useEffect, useRef } from "react";\r
\r
function Modal({\r
  isOpen,\r
  onClose,\r
  title,\r
  children,\r
}) {\r
  const closeButtonRef = useRef(null);\r
\r
  useEffect(() => {\r
    if (!isOpen) return;\r
\r
    closeButtonRef.current.focus();\r
\r
    const handleEscape = (e) => {\r
      if (e.key === "Escape") {\r
        onClose();\r
      }\r
    };\r
\r
    window.addEventListener(\r
      "keydown",\r
      handleEscape\r
    );\r
\r
    return () => {\r
      window.removeEventListener(\r
        "keydown",\r
        handleEscape\r
      );\r
    };\r
  }, [isOpen, onClose]);\r
\r
  if (!isOpen) return null;\r
\r
  return (\r
    <div\r
      className="modal-overlay"\r
      onClick={onClose}\r
    >\r
      <div\r
        className="modal"\r
        role="dialog"\r
        aria-modal="true"\r
        aria-labelledby="modal-title"\r
        onClick={(e) =>\r
          e.stopPropagation()\r
        }\r
      >\r
        <h2 id="modal-title">\r
          {title}\r
        </h2>\r
\r
        {children}\r
\r
        <button\r
          ref={closeButtonRef}\r
          onClick={onClose}\r
        >\r
          Close\r
        </button>\r
      </div>\r
    </div>\r
  );\r
}\r
\r
export default Modal;`;export{e as default};