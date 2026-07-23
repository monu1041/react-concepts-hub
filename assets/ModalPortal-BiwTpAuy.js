var e=`import {\r
    createPortal\r
}\r
from "react-dom";\r
\r
\r
\r
const PORTAL_ID =\r
"advanced-react-patterns-modal-root";\r
\r
\r
\r
function getContainer(){\r
\r
\r
    let element =\r
        document.getElementById(\r
            PORTAL_ID\r
        );\r
\r
\r
\r
    if(!element){\r
\r
\r
        element =\r
            document.createElement(\r
                "div"\r
            );\r
\r
\r
        element.id =\r
            PORTAL_ID;\r
\r
\r
        document.body.appendChild(\r
            element\r
        );\r
\r
    }\r
\r
\r
    return element;\r
\r
}\r
\r
\r
\r
\r
\r
function ModalPortal({\r
\r
    children\r
\r
}) {\r
\r
\r
    return createPortal(\r
\r
        children,\r
\r
        getContainer()\r
\r
    );\r
\r
}\r
\r
\r
export default ModalPortal;`;export{e as default};