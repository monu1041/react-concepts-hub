var e=`import { useEffect, useRef } from "react";\r
import { useModalContext } from "../../context/ModalContext";\r
import ModalPortal from "./ModalPortal";\r
\r
function ModalContent({ children }) {\r
\r
    const { open, close } =   useModalContext();\r
    const contentRef = useRef(null);\r
    \r
    useEffect(() => {\r
        if (open) {\r
            contentRef.current?.focus();\r
        }\r
    }, [open]);\r
\r
    function handleOverlayClick(event) {\r
        if (event.target === event.currentTarget) {\r
            close();\r
        }\r
    }\r
\r
    if (!open) {\r
        return null;\r
    }\r
\r
    return (\r
        <ModalPortal>\r
            <div\r
                className="modal-overlay"\r
                onMouseDown={\r
                    handleOverlayClick\r
                }\r
            >\r
                <div\r
                    ref={contentRef}\r
                    className="modal-content"\r
                    role="dialog"\r
                    aria-modal="true"\r
                    tabIndex="-1"\r
                >\r
                    {children}\r
                </div>\r
            </div>\r
        </ModalPortal>\r
    );\r
}\r
\r
export default ModalContent;`;export{e as default};