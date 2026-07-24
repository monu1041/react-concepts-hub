var e=`import { useState } from "react";\r
\r
function useDropdown({\r
    defaultOpen = false,\r
    open: controlledOpen,\r
    onOpenChange\r
}) {\r
\r
    const [internalOpen, setInternalOpen] = useState(defaultOpen);\r
    const isControlled = controlledOpen !== undefined;\r
    const open =\r
        isControlled\r
            ? controlledOpen\r
            : internalOpen;\r
\r
    function setOpen(value) {\r
        if (!isControlled) {\r
            setInternalOpen(value);\r
        }\r
        onOpenChange?.(\r
            value\r
        );\r
    }\r
\r
    function toggle() {\r
        setOpen(\r
            !open\r
        );\r
    }\r
\r
    function openMenu() {\r
        setOpen(true);\r
    }\r
\r
    function closeMenu() {\r
        setOpen(false);\r
    }\r
\r
    return {\r
        open,\r
        setOpen,\r
        toggle,\r
        openMenu,\r
        closeMenu\r
    };\r
}\r
\r
export default useDropdown;`;export{e as default};