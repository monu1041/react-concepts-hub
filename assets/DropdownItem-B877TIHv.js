var e=`import {\r
    useEffect,\r
    useRef\r
} from "react";\r
\r
import {\r
    useDropdownContext\r
} from "../../context/DropdownContext";\r
\r
function DropdownItem({\r
\r
    children,\r
\r
    value,\r
\r
    onSelect,\r
\r
}) {\r
\r
    const {\r
\r
        registerItem,\r
\r
        unregisterItem,\r
\r
        closeMenu,\r
\r
    } = useDropdownContext();\r
\r
    const itemRef =\r
        useRef(null);\r
\r
    useEffect(() => {\r
\r
        registerItem({\r
\r
            value,\r
\r
            ref: itemRef.current,\r
\r
        });\r
\r
        return () => {\r
\r
            unregisterItem(value);\r
\r
        };\r
\r
    }, [value]);\r
\r
\r
\r
    function handleClick() {\r
\r
        onSelect?.(value);\r
\r
        closeMenu();\r
\r
    }\r
\r
\r
\r
    function handleKeyDown(event) {\r
\r
        if (\r
            event.key === "Enter" ||\r
            event.key === " "\r
        ) {\r
\r
            event.preventDefault();\r
\r
            handleClick();\r
\r
        }\r
\r
    }\r
\r
\r
\r
    return (\r
\r
        <div\r
\r
            ref={itemRef}\r
\r
            className="dropdown-item"\r
\r
            role="menuitem"\r
\r
            tabIndex={0}\r
\r
            onClick={handleClick}\r
\r
            onKeyDown={handleKeyDown}\r
\r
        >\r
\r
            {children}\r
\r
        </div>\r
\r
    );\r
\r
}\r
\r
export default DropdownItem;`;export{e as default};