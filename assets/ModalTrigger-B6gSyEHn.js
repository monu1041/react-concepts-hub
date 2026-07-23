var e=`import {\r
    useModalContext\r
}\r
from "../../context/ModalContext";\r
\r
\r
\r
function ModalTrigger({\r
\r
    children\r
\r
}) {\r
\r
\r
    const {\r
        setOpen\r
    }\r
    =\r
    useModalContext();\r
\r
\r
\r
    return (\r
\r
        <button\r
\r
            type="button"\r
\r
            \r
\r
            onClick={() =>\r
                setOpen(true)\r
            }\r
\r
        >\r
\r
            {children}\r
\r
        </button>\r
\r
    );\r
\r
}\r
\r
\r
export default ModalTrigger;`;export{e as default};