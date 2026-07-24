var e=`import { createPortal } from "react-dom";\r
\r
const PORTAL_ID = "advanced-react-patterns-modal-root";\r
\r
function getContainer(){\r
    let element =\r
        document.getElementById(\r
            PORTAL_ID\r
        );\r
\r
    if(!element){\r
        element = document.createElement("div");\r
        element.id = PORTAL_ID;\r
        document.body.appendChild(element);\r
    }\r
    return element;\r
}\r
function ModalPortal({\r
    children\r
}) {\r
    return createPortal(children,getContainer());\r
}\r
\r
export default ModalPortal;`;export{e as default};