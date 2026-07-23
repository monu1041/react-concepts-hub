var e=`import {\r
    createContext,\r
    useContext\r
} from "react";\r
\r
\r
const ModalContext =\r
    createContext(null);\r
\r
\r
\r
export function useModalContext(){\r
\r
    const context =\r
        useContext(ModalContext);\r
\r
\r
    if(!context){\r
\r
        throw new Error(\r
            "Modal components must be used inside <Modal>"\r
        );\r
\r
    }\r
\r
\r
    return context;\r
\r
}\r
\r
\r
export default ModalContext;`;export{e as default};