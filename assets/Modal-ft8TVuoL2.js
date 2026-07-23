var e=`import {\r
    useEffect,\r
    useMemo\r
} from "react";\r
\r
\r
import ModalContext\r
from "../../context/ModalContext";\r
\r
\r
import useControllableState\r
from "./useControllableState";\r
\r
import "./modal.css";\r
\r
\r
\r
function Modal({\r
\r
    children,\r
\r
    open,\r
\r
    defaultOpen = false,\r
\r
    onOpenChange,\r
\r
}) {\r
\r
\r
    const [\r
        isOpen,\r
        setIsOpen\r
    ] =\r
    useControllableState({\r
\r
        value: open,\r
\r
        defaultValue: defaultOpen,\r
\r
        onChange:onOpenChange\r
\r
    });\r
\r
\r
\r
\r
\r
    useEffect(() => {\r
\r
\r
        function handleEscape(event){\r
\r
\r
            if(\r
                event.key === "Escape"\r
                &&\r
                isOpen\r
            ){\r
\r
                setIsOpen(false);\r
\r
            }\r
\r
        }\r
\r
\r
        document.addEventListener(\r
            "keydown",\r
            handleEscape\r
        );\r
\r
\r
        return () => {\r
\r
            document.removeEventListener(\r
                "keydown",\r
                handleEscape\r
            );\r
\r
        };\r
\r
\r
    },[isOpen]);\r
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
        if(isOpen){\r
\r
            document.body.style.overflow =\r
                "hidden";\r
\r
        }\r
\r
\r
        return () => {\r
\r
            document.body.style.overflow =\r
                "";\r
\r
        };\r
\r
\r
    },[isOpen]);\r
\r
\r
\r
\r
\r
\r
\r
    const contextValue =\r
    useMemo(()=>({\r
\r
        open:isOpen,\r
\r
        setOpen:setIsOpen,\r
\r
        close(){\r
\r
            setIsOpen(false);\r
\r
        }\r
\r
\r
    }),[isOpen]);\r
\r
\r
\r
\r
\r
\r
\r
    return (\r
\r
        <ModalContext.Provider\r
\r
            value={contextValue}\r
\r
        >\r
\r
            {children}\r
\r
        </ModalContext.Provider>\r
\r
    );\r
\r
}\r
\r
\r
export default Modal;`;export{e as default};