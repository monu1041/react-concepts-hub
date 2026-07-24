var e=`import { useEffect, useMemo } from "react";\r
import ModalContext from "../../context/ModalContext";\r
import useControllableState from "./useControllableState";\r
import "./modal.css";\r
\r
function Modal({ children, open, defaultOpen = false, onOpenChange, }) {\r
    const [isOpen, setIsOpen] = useControllableState({\r
        value: open,\r
        defaultValue: defaultOpen,\r
        onChange: onOpenChange\r
    });\r
\r
    useEffect(() => {\r
        function handleEscape(event) {\r
            if (event.key === "Escape" && isOpen\r
            ) {\r
                setIsOpen(false);\r
            }\r
        }\r
\r
        document.addEventListener(\r
            "keydown",\r
            handleEscape\r
        );\r
\r
        return () => {\r
            document.removeEventListener(\r
                "keydown",\r
                handleEscape\r
            );\r
        };\r
    }, [isOpen]);\r
\r
    useEffect(() => {\r
        if (isOpen) {\r
            document.body.style.overflow =\r
                "hidden";\r
        }\r
        return () => {\r
            document.body.style.overflow =\r
                "";\r
        };\r
    }, [isOpen]);\r
\r
    const contextValue = useMemo(() => ({\r
        open: isOpen,\r
        setOpen: setIsOpen,\r
        close() {\r
            setIsOpen(false);\r
        }\r
    }), [isOpen]);\r
\r
    return (\r
        <ModalContext.Provider value={contextValue} >\r
            {children}\r
        </ModalContext.Provider>\r
    );\r
}\r
\r
export default Modal;`;export{e as default};