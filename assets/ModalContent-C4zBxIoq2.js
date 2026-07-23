var e=`import {\r
    useEffect,\r
    useRef\r
}\r
from "react";\r
\r
\r
import {\r
    useModalContext\r
}\r
from "../../context/ModalContext";\r
\r
\r
import ModalPortal\r
from "./ModalPortal";\r
\r
\r
\r
function ModalContent({\r
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
        close\r
\r
    }\r
    =\r
    useModalContext();\r
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
    useEffect(()=>{\r
\r
\r
        if(open){\r
\r
            contentRef.current?.focus();\r
\r
        }\r
\r
\r
    },[open]);\r
\r
\r
\r
\r
\r
\r
\r
    function handleOverlayClick(event){\r
\r
\r
        if(\r
            event.target ===\r
            event.currentTarget\r
        ){\r
\r
            close();\r
\r
        }\r
\r
    }\r
\r
\r
\r
\r
\r
    if(!open){\r
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
        <ModalPortal>\r
\r
\r
            <div\r
\r
                className="modal-overlay"\r
\r
                onMouseDown={\r
                    handleOverlayClick\r
                }\r
\r
\r
            >\r
\r
\r
                <div\r
\r
                    ref={contentRef}\r
\r
                    className="modal-content"\r
\r
                    role="dialog"\r
\r
                    aria-modal="true"\r
\r
                    tabIndex="-1"\r
\r
                >\r
\r
                    {children}\r
\r
                </div>\r
\r
\r
            </div>\r
\r
\r
        </ModalPortal>\r
\r
    );\r
\r
}\r
\r
\r
export default ModalContent;`;export{e as default};