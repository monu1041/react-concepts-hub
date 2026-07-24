import { useEffect, useRef } from "react";
import { useModalContext } from "../../context/ModalContext";
import ModalPortal from "./ModalPortal";

function ModalContent({ children }) {

    const { open, close } =   useModalContext();
    const contentRef = useRef(null);
    
    useEffect(() => {
        if (open) {
            contentRef.current?.focus();
        }
    }, [open]);

    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            close();
        }
    }

    if (!open) {
        return null;
    }

    return (
        <ModalPortal>
            <div
                className="modal-overlay"
                onMouseDown={
                    handleOverlayClick
                }
            >
                <div
                    ref={contentRef}
                    className="modal-content"
                    role="dialog"
                    aria-modal="true"
                    tabIndex="-1"
                >
                    {children}
                </div>
            </div>
        </ModalPortal>
    );
}

export default ModalContent;