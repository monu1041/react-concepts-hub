var e=`\r
import {\r
  useCallback,\r
  useMemo,\r
  useState\r
} from "react";\r
\r
import { createPortal } from "react-dom";\r
\r
import ToastContainer from "./ToastContainer";\r
import ToastContext from "./ToastContext";\r
\r
import { generateId } from "../../utils/generateId";\r
\r
import "./toast.css";\r
\r
const DEFAULT_DURATION = 4000;\r
const MAX_TOASTS = 3;\r
\r
export function ToastProvider({\r
  children\r
}) {\r
  const [toasts, setToasts] = useState([]);\r
\r
  const removeToast = useCallback((id) => {\r
    setToasts((currentToasts) =>\r
      currentToasts.filter(\r
        (toast) => toast.id !== id\r
      )\r
    );\r
  }, []);\r
\r
  const showToast = useCallback(\r
    ({\r
      message,\r
      type = "info",\r
      duration = DEFAULT_DURATION\r
    }) => {\r
      setToasts((currentToasts) => {\r
        const existingToast = currentToasts.find(\r
          (toast) =>\r
            toast.message === message &&\r
            toast.type === type\r
        );\r
\r
        // Same toast already exists.\r
        // Increase the count and restart its timer.\r
        if (existingToast) {\r
          return currentToasts.map((toast) => {\r
            if (toast.id !== existingToast.id) {\r
              return toast;\r
            }\r
\r
            return {\r
              ...toast,\r
              count: toast.count + 1,\r
              timerVersion:\r
                toast.timerVersion + 1\r
            };\r
          });\r
        }\r
\r
        const newToast = {\r
          id: generateId("toast"),\r
          message,\r
          type,\r
          duration,\r
          count: 1,\r
          timerVersion: 0\r
        };\r
\r
        // Maximum number of visible toasts reached.\r
        // Remove the oldest toast.\r
        if (currentToasts.length >= MAX_TOASTS) {\r
          return [\r
            ...currentToasts.slice(1),\r
            newToast\r
          ];\r
        }\r
\r
        return [\r
          ...currentToasts,\r
          newToast\r
        ];\r
      });\r
    },\r
    []\r
  );\r
\r
  const contextValue = useMemo(\r
    () => ({\r
      showToast,\r
      removeToast\r
    }),\r
    [showToast, removeToast]\r
  );\r
\r
  return (\r
    <ToastContext.Provider\r
      value={contextValue}\r
    >\r
      {children}\r
\r
      {createPortal(\r
        <ToastContainer\r
          toasts={toasts}\r
          onRemove={removeToast}\r
        />,\r
        document.body\r
      )}\r
    </ToastContext.Provider>\r
  );\r
}`;export{e as default};