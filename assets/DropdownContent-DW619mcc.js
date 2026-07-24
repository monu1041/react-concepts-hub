var e=`import { useEffect, useRef } from "react";\r
import { useDropdownContext } from "../../context/DropdownContext";\r
\r
function DropdownContent({ children }) {\r
    const { open, closeMenu, itemRefs } = useDropdownContext();\r
\r
    const contentRef = useRef(null);\r
\r
    function focusItem(index) {\r
        const items = itemRefs.current;\r
        if (!items.length) {\r
            return;\r
        }\r
        items[index]\r
            ?.ref\r
            ?.focus();\r
    }\r
\r
    function handleKeyDown(event) {\r
        const items =\r
            itemRefs.current;\r
\r
        const currentIndex =\r
            items.findIndex(\r
                item =>\r
                    item.ref ===\r
                    document.activeElement\r
            );\r
\r
        switch (event.key) {\r
            case "ArrowDown":\r
                event.preventDefault();\r
                focusItem(\r
                    currentIndex + 1 >= items.length\r
                        ? 0\r
                        :\r
                        currentIndex + 1\r
                );\r
                break;\r
\r
            case "ArrowUp":\r
                event.preventDefault();\r
                focusItem(\r
                    currentIndex - 1 < 0\r
                        ? items.length - 1\r
                        :\r
                        currentIndex - 1\r
                );\r
                break;\r
\r
            case "Home":\r
                event.preventDefault();\r
                focusItem(0);\r
                break;\r
\r
            case "End":\r
                event.preventDefault();\r
                focusItem(\r
                    items.length - 1\r
                );\r
                break;\r
\r
            case "Escape":\r
                closeMenu();\r
                break;\r
            default:\r
                break;\r
        }\r
    }\r
\r
    useEffect(() => {\r
        if (open) {\r
            document.addEventListener(\r
                "keydown",\r
                handleKeyDown\r
            );\r
        }\r
\r
        return () => {\r
            document.removeEventListener(\r
                "keydown",\r
                handleKeyDown\r
            );\r
        };\r
    }, [open]);\r
\r
    useEffect(() => {\r
        if (open) {\r
            focusItem(0);\r
        }\r
    }, [open]);\r
\r
    useEffect(() => {\r
        function handleOutsideClick(event) {\r
            if (contentRef.current && !contentRef.current.contains(event.target)\r
            ) {\r
                closeMenu();\r
            }\r
        }\r
\r
        if (open) {\r
            document.addEventListener(\r
                "mousedown",\r
                handleOutsideClick\r
            );\r
        }\r
\r
        return () => {\r
            document.removeEventListener(\r
                "mousedown",\r
                handleOutsideClick\r
            );\r
        };\r
    }, [open]);\r
\r
    if (!open) {\r
        return null;\r
    }\r
\r
    return (\r
        <div\r
            ref={contentRef}\r
            className="dropdown-content"\r
            role="menu"\r
        >\r
            {children}\r
        </div>\r
    );\r
}\r
\r
export default DropdownContent;`;export{e as default};