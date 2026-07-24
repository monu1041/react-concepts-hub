import { useEffect, useRef } from "react";
import { useDropdownContext } from "../../context/DropdownContext";

function DropdownItem({ children, value, onSelect, }) {

    const { registerItem, unregisterItem, closeMenu, } = useDropdownContext();
    const itemRef = useRef(null);

    useEffect(() => {
        registerItem({
            value,
            ref: itemRef.current,
        });
        return () => {
            unregisterItem(value);
        };
    }, [value]);

    function handleClick() {
        onSelect?.(value);
        closeMenu();
    }

    function handleKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClick();
        }
    }

    return (
        <div
            ref={itemRef}
            className="dropdown-item"
            role="menuitem"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            {children}
        </div>
    );
}

export default DropdownItem;