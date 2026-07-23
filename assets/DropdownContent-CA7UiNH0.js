var e=`import {\r
    useEffect,\r
    useRef\r
} from "react";\r
\r
\r
import {\r
    useDropdownContext\r
}\r
from "../../context/DropdownContext";\r
\r
\r
\r
function DropdownContent({\r
\r
    children\r
\r
}) {\r
\r
\r
    const {\r
\r
        open,\r
\r
        closeMenu,\r
\r
        itemRefs\r
\r
    } =\r
    useDropdownContext();\r
\r
\r
\r
\r
    const contentRef =\r
        useRef(null);\r
\r
\r
\r
\r
\r
    function focusItem(index) {\r
\r
\r
        const items =\r
            itemRefs.current;\r
\r
\r
\r
        if (!items.length) {\r
\r
            return;\r
\r
        }\r
\r
\r
\r
        items[index]\r
            ?.ref\r
            ?.focus();\r
\r
    }\r
\r
\r
\r
\r
\r
    function handleKeyDown(event) {\r
\r
\r
        const items =\r
            itemRefs.current;\r
\r
\r
\r
        const currentIndex =\r
            items.findIndex(\r
\r
                item =>\r
\r
                    item.ref ===\r
                    document.activeElement\r
\r
            );\r
\r
\r
\r
\r
\r
        switch(event.key) {\r
\r
\r
\r
            case "ArrowDown":\r
\r
                event.preventDefault();\r
\r
\r
                focusItem(\r
\r
                    currentIndex + 1 >= items.length\r
\r
                        ? 0\r
\r
                        :\r
\r
                        currentIndex + 1\r
\r
                );\r
\r
                break;\r
\r
\r
\r
\r
\r
            case "ArrowUp":\r
\r
                event.preventDefault();\r
\r
\r
                focusItem(\r
\r
                    currentIndex - 1 < 0\r
\r
                        ? items.length - 1\r
\r
                        :\r
\r
                        currentIndex - 1\r
\r
                );\r
\r
                break;\r
\r
\r
\r
\r
\r
            case "Home":\r
\r
                event.preventDefault();\r
\r
                focusItem(0);\r
\r
                break;\r
\r
\r
\r
\r
\r
            case "End":\r
\r
                event.preventDefault();\r
\r
                focusItem(\r
                    items.length - 1\r
                );\r
\r
                break;\r
\r
\r
\r
\r
\r
            case "Escape":\r
\r
                closeMenu();\r
\r
                break;\r
\r
\r
\r
            default:\r
\r
                break;\r
\r
        }\r
\r
    }\r
\r
\r
\r
\r
\r
\r
\r
    useEffect(() => {\r
\r
\r
        if (open) {\r
\r
            document.addEventListener(\r
                "keydown",\r
                handleKeyDown\r
            );\r
\r
        }\r
\r
\r
\r
        return () => {\r
\r
            document.removeEventListener(\r
                "keydown",\r
                handleKeyDown\r
            );\r
\r
        };\r
\r
\r
    }, [open]);\r
\r
\r
\r
\r
\r
\r
\r
    useEffect(() => {\r
\r
\r
        if (open) {\r
\r
            focusItem(0);\r
\r
        }\r
\r
\r
    }, [open]);\r
\r
\r
\r
\r
\r
\r
\r
\r
    useEffect(() => {\r
\r
\r
        function handleOutsideClick(event) {\r
\r
\r
            if (\r
\r
                contentRef.current\r
\r
                &&\r
\r
                !contentRef.current.contains(\r
                    event.target\r
                )\r
\r
            ) {\r
\r
                closeMenu();\r
\r
            }\r
\r
\r
        }\r
\r
\r
\r
        if(open){\r
\r
            document.addEventListener(\r
                "mousedown",\r
                handleOutsideClick\r
            );\r
\r
        }\r
\r
\r
\r
        return () => {\r
\r
            document.removeEventListener(\r
                "mousedown",\r
                handleOutsideClick\r
            );\r
\r
        };\r
\r
\r
    }, [open]);\r
\r
\r
\r
\r
\r
\r
\r
    if (!open) {\r
\r
        return null;\r
\r
    }\r
\r
\r
\r
\r
\r
\r
    return (\r
\r
        <div\r
\r
            ref={\r
                contentRef\r
            }\r
\r
\r
            className="dropdown-content"\r
\r
\r
            role="menu"\r
\r
        >\r
\r
            {children}\r
\r
\r
        </div>\r
\r
    );\r
\r
}\r
\r
\r
\r
export default DropdownContent;`;export{e as default};