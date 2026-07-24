var e=`import { useModalContext } from "../../context/ModalContext";\r
\r
function ModalTrigger({ children }) {\r
\r
    const { setOpen } = useModalContext();\r
    return (\r
        <button\r
            type="button"\r
            onClick={() =>\r
                setOpen(true)\r
            }\r
        >\r
            {children}\r
        </button>\r
    );\r
}\r
\r
\r
export default ModalTrigger;`;export{e as default};