var e=`import {\r
    createContext,\r
    useContext\r
} from "react";\r
\r
\r
const DropdownContext =\r
    createContext(null);\r
\r
\r
\r
export function useDropdownContext() {\r
\r
    const context =\r
        useContext(\r
            DropdownContext\r
        );\r
\r
\r
    if (!context) {\r
\r
        throw new Error(\r
            "Dropdown components must be used inside Dropdown"\r
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
\r
export default DropdownContext;`;export{e as default};