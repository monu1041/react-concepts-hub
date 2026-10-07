var e=`\r
import { useEffect } from "react";\r
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
    duration,\r
    count,\r
    timerVersion\r
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
  }, [\r
    id,\r
    duration,\r
    timerVersion,\r
    onRemove\r
  ]);\r
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
      <div\r
        className={\`toast-icon toast-icon-\${type}\`}\r
      >\r
        {ICONS[type]}\r
      </div>\r
\r
      <div className="toast-message">\r
        {message}\r
\r
        {count > 1 && (\r
          <span className="toast-count">\r
            ×{count}\r
          </span>\r
        )}\r
      </div>\r
\r
      <button\r
        type="button"\r
        className="toast-close"\r
        onClick={() => onRemove(id)}\r
        aria-label="Dismiss notification"\r
      >\r
        ×\r
      </button>\r
    </div>\r
  );\r
}\r
`;export{e as default};