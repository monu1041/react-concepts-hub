var e=`import { createContext, useContext } from "react";\r
\r
const DropdownContext = createContext(null);\r
\r
export function useDropdownContext() {\r
    const context = useContext( DropdownContext );\r
\r
    if (!context) {\r
        throw new Error(\r
            "Dropdown components must be used inside Dropdown"\r
        );\r
    }\r
    return context;\r
}\r
\r
export default DropdownContext;`;export{e as default};