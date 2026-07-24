var e=`import { useEffect, useRef } from "react";\r
import { useDropdownContext } from "../../context/DropdownContext";\r
\r
function DropdownItem({ children, value, onSelect, }) {\r
\r
    const { registerItem, unregisterItem, closeMenu, } = useDropdownContext();\r
    const itemRef = useRef(null);\r
\r
    useEffect(() => {\r
        registerItem({\r
            value,\r
            ref: itemRef.current,\r
        });\r
        return () => {\r
            unregisterItem(value);\r
        };\r
    }, [value]);\r
\r
    function handleClick() {\r
        onSelect?.(value);\r
        closeMenu();\r
    }\r
\r
    function handleKeyDown(event) {\r
        if (event.key === "Enter" || event.key === " ") {\r
            event.preventDefault();\r
            handleClick();\r
        }\r
    }\r
\r
    return (\r
        <div\r
            ref={itemRef}\r
            className="dropdown-item"\r
            role="menuitem"\r
            tabIndex={0}\r
            onClick={handleClick}\r
            onKeyDown={handleKeyDown}\r
        >\r
            {children}\r
        </div>\r
    );\r
}\r
\r
export default DropdownItem;`;export{e as default};