var e=`import {\r
    useMemo,\r
    useRef\r
} from "react";\r
\r
\r
import "./dropdown.css";\r
\r
\r
import DropdownContext\r
from "../../context/DropdownContext";\r
\r
\r
import useDropdown\r
from "./useDropdown";\r
\r
\r
\r
function Dropdown({\r
\r
    children,\r
\r
    open,\r
\r
    defaultOpen = false,\r
\r
    onOpenChange\r
\r
}) {\r
\r
\r
    const dropdown =\r
        useDropdown({\r
\r
            open,\r
\r
            defaultOpen,\r
\r
            onOpenChange\r
\r
        });\r
\r
\r
\r
\r
\r
    const itemRefs =\r
        useRef([]);\r
\r
\r
\r
\r
\r
    function registerItem(item) {\r
\r
\r
        const exists =\r
            itemRefs.current.some(\r
\r
                existing =>\r
                    existing.value === item.value\r
\r
            );\r
\r
\r
\r
        if (!exists) {\r
\r
            itemRefs.current.push(\r
                item\r
            );\r
\r
        }\r
\r
    }\r
\r
\r
\r
\r
\r
    function unregisterItem(value) {\r
\r
\r
        itemRefs.current =\r
            itemRefs.current.filter(\r
\r
                item =>\r
                    item.value !== value\r
\r
            );\r
\r
    }\r
\r
\r
\r
\r
\r
    const contextValue =\r
\r
        useMemo(\r
\r
            () => ({\r
\r
                ...dropdown,\r
\r
                itemRefs,\r
\r
                registerItem,\r
\r
                unregisterItem\r
\r
            }),\r
\r
            [\r
                dropdown.open\r
            ]\r
\r
        );\r
\r
\r
\r
\r
\r
\r
    return (\r
\r
        <DropdownContext.Provider\r
\r
            value={\r
                contextValue\r
            }\r
\r
        >\r
\r
            <div className="dropdown">\r
\r
                {children}\r
\r
            </div>\r
\r
\r
        </DropdownContext.Provider>\r
\r
    );\r
\r
}\r
\r
\r
\r
export default Dropdown;`;export{e as default};