import { useEffect, useMemo } from "react";
import ModalContext from "../../context/ModalContext";
import useControllableState from "./useControllableState";
import "./modal.css";

function Modal({ children, open, defaultOpen = false, onOpenChange, }) {
    const [isOpen, setIsOpen] = useControllableState({
        value: open,
        defaultValue: defaultOpen,
        onChange: onOpenChange
    });

    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape" && isOpen
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow =
                "hidden";
        }
        return () => {
            document.body.style.overflow =
                "";
        };
    }, [isOpen]);

    const contextValue = useMemo(() => ({
        open: isOpen,
        setOpen: setIsOpen,
        close() {
            setIsOpen(false);
        }
    }), [isOpen]);

    return (
        <ModalContext.Provider value={contextValue} >
            {children}
        </ModalContext.Provider>
    );
}

export default Modal;