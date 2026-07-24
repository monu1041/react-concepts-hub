import { useEffect, useRef } from "react";
import { useDropdownContext } from "../../context/DropdownContext";

function DropdownContent({ children }) {
    const { open, closeMenu, itemRefs } = useDropdownContext();

    const contentRef = useRef(null);

    function focusItem(index) {
        const items = itemRefs.current;
        if (!items.length) {
            return;
        }
        items[index]
            ?.ref
            ?.focus();
    }

    function handleKeyDown(event) {
        const items =
            itemRefs.current;

        const currentIndex =
            items.findIndex(
                item =>
                    item.ref ===
                    document.activeElement
            );

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                focusItem(
                    currentIndex + 1 >= items.length
                        ? 0
                        :
                        currentIndex + 1
                );
                break;

            case "ArrowUp":
                event.preventDefault();
                focusItem(
                    currentIndex - 1 < 0
                        ? items.length - 1
                        :
                        currentIndex - 1
                );
                break;

            case "Home":
                event.preventDefault();
                focusItem(0);
                break;

            case "End":
                event.preventDefault();
                focusItem(
                    items.length - 1
                );
                break;

            case "Escape":
                closeMenu();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (open) {
            document.addEventListener(
                "keydown",
                handleKeyDown
            );
        }

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [open]);

    useEffect(() => {
        if (open) {
            focusItem(0);
        }
    }, [open]);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (contentRef.current && !contentRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        }

        if (open) {
            document.addEventListener(
                "mousedown",
                handleOutsideClick
            );
        }

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, [open]);

    if (!open) {
        return null;
    }

    return (
        <div
            ref={contentRef}
            className="dropdown-content"
            role="menu"
        >
            {children}
        </div>
    );
}

export default DropdownContent;