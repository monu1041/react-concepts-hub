var e=`import {\r
    useModalContext\r
}\r
from "../../context/ModalContext";\r
\r
\r
\r
function ModalClose({\r
\r
    children\r
\r
}) {\r
\r
\r
    const {\r
        close\r
    }\r
    =\r
    useModalContext();\r
\r
\r
\r
\r
    return (\r
\r
        <button\r
\r
            type="button"\r
\r
            className="modal-close"\r
\r
            onClick={close}\r
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
\r
export default ModalClose;`;export{e as default};