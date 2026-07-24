import { useState } from "react";

function useDropdown({
    defaultOpen = false,
    open: controlledOpen,
    onOpenChange
}) {

    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open =
        isControlled
            ? controlledOpen
            : internalOpen;

    function setOpen(value) {
        if (!isControlled) {
            setInternalOpen(value);
        }
        onOpenChange?.(
            value
        );
    }

    function toggle() {
        setOpen(
            !open
        );
    }

    function openMenu() {
        setOpen(true);
    }

    function closeMenu() {
        setOpen(false);
    }

    return {
        open,
        setOpen,
        toggle,
        openMenu,
        closeMenu
    };
}

export default useDropdown;