var e=`import { useContext } from "react";\r
\r
import ToastContext from "./ToastContext";\r
\r
export function useToast() {\r
  const context = useContext(ToastContext);\r
\r
  if (!context) {\r
    throw new Error(\r
      "useToast must be used inside ToastProvider"\r
    );\r
  }\r
\r
  return context;\r
}`;export{e as default};