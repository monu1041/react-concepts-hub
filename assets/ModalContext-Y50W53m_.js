var e=`import { createContext, useContext } from "react";\r
\r
const ModalContext = createContext(null);\r
\r
export function useModalContext(){\r
    const context = useContext(ModalContext);\r
    if(!context){\r
        throw new Error(\r
            "Modal components must be used inside <Modal>"\r
        );\r
    }\r
    return context;\r
}\r
\r
export default ModalContext;`;export{e as default};