var e=`import {\r
  useCallback,\r
  useMemo,\r
  useState\r
} from "react";\r
\r
import ToastContext from "./ToastContext";\r
\r
import { createPortal } from "react-dom";\r
\r
import ToastContainer from "./ToastContainer";\r
import { generateId } from "../../utils/generateId";\r
\r
const DEFAULT_DURATION = 4000;\r
\r
export function ToastProvider({ children }) {\r
  const [toasts, setToasts] = useState([]);\r
\r
  const removeToast = useCallback((id) => {\r
    setToasts((currentToasts) =>\r
      currentToasts.filter((toast) => toast.id !== id)\r
    );\r
  }, []);\r
\r
  const showToast = useCallback(\r
    ({\r
      message,\r
      type = "info",\r
      duration = DEFAULT_DURATION\r
    }) => {\r
      const id = generateId("toast");\r
\r
      setToasts((currentToasts) => [\r
        ...currentToasts,\r
        {\r
          id,\r
          message,\r
          type,\r
          duration\r
        }\r
      ]);\r
\r
      return id;\r
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
    <ToastContext.Provider value={contextValue}>\r
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