var e=`import { useEffect } from "react";\r
\r
const ICONS = {\r
  success: "✓",\r
  error: "!",\r
  warning: "⚠",\r
  info: "i"\r
};\r
\r
export default function Toast({\r
  toast,\r
  onRemove\r
}) {\r
  const {\r
    id,\r
    type,\r
    message,\r
    duration\r
  } = toast;\r
\r
  useEffect(() => {\r
    if (!duration || duration <= 0) {\r
      return undefined;\r
    }\r
\r
    const timerId = window.setTimeout(() => {\r
      onRemove(id);\r
    }, duration);\r
\r
    return () => {\r
      window.clearTimeout(timerId);\r
    };\r
  }, [id, duration, onRemove]);\r
\r
  return (\r
    <div\r
      className={\`toast toast-\${type}\`}\r
      role={\r
        type === "error"\r
          ? "alert"\r
          : "status"\r
      }\r
    >\r
      <div className={\`toast-icon toast-icon-\${type}\`}>\r
        {ICONS[type]}\r
      </div>\r
\r
      <div className="toast-message">\r
        {message}\r
      </div>\r
\r
      <button\r
        className="toast-close"\r
        onClick={() => onRemove(id)}\r
        aria-label="Dismiss notification"\r
      >\r
        ×\r
      </button>\r
    </div>\r
  );\r
}`;export{e as default};