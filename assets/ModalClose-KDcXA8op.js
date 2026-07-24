var e=`import { useModalContext } from "../../context/ModalContext";\r
\r
function ModalClose({ children }) {\r
    const { close } = useModalContext();\r
\r
    return (\r
        <button\r
            type="button"\r
            className="modal-close"\r
            onClick={close}\r
        >\r
            {children}\r
        </button>\r
    );\r
}\r
\r
export default ModalClose;`;export{e as default};