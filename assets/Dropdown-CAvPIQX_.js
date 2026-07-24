var e=`import { useMemo, useRef } from "react";\r
import "./dropdown.css";\r
import DropdownContext from "../../context/DropdownContext";\r
import useDropdown from "./useDropdown";\r
\r
function Dropdown({\r
    children,\r
    open,\r
    defaultOpen = false,\r
    onOpenChange\r
}) {\r
    const dropdown =\r
        useDropdown({\r
            open,\r
            defaultOpen,\r
            onOpenChange\r
        });\r
\r
    const itemRefs =\r
        useRef([]);\r
\r
    function registerItem(item) {\r
        const exists =\r
            itemRefs.current.some(\r
                existing =>\r
                    existing.value === item.value\r
            );\r
\r
        if (!exists) {\r
            itemRefs.current.push(\r
                item\r
            );\r
        }\r
    }\r
\r
    function unregisterItem(value) {\r
        itemRefs.current =\r
            itemRefs.current.filter(\r
                item =>\r
                    item.value !== value\r
            );\r
    }\r
\r
    const contextValue =\r
        useMemo(\r
            () => ({\r
                ...dropdown,\r
                itemRefs,\r
                registerItem,\r
                unregisterItem\r
            }),\r
            [\r
                dropdown.open\r
            ]\r
        );\r
\r
    return (\r
        <DropdownContext.Provider\r
            value={ contextValue }\r
        >\r
            <div className="dropdown">\r
                {children}\r
            </div>\r
        </DropdownContext.Provider>\r
    );\r
}\r
\r
export default Dropdown;`;export{e as default};