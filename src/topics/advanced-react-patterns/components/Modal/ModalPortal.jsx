import { createPortal } from "react-dom";

const PORTAL_ID = "advanced-react-patterns-modal-root";

function getContainer(){
    let element =
        document.getElementById(
            PORTAL_ID
        );

    if(!element){
        element = document.createElement("div");
        element.id = PORTAL_ID;
        document.body.appendChild(element);
    }
    return element;
}
function ModalPortal({
    children
}) {
    return createPortal(children,getContainer());
}

export default ModalPortal;