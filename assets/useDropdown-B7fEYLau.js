var e=`import {\r
    useState\r
} from "react";\r
\r
\r
\r
function useDropdown({\r
\r
    defaultOpen = false,\r
\r
    open: controlledOpen,\r
\r
    onOpenChange\r
\r
}) {\r
\r
\r
    const [\r
        internalOpen,\r
        setInternalOpen\r
    ] = useState(defaultOpen);\r
\r
\r
\r
    const isControlled =\r
        controlledOpen !== undefined;\r
\r
\r
\r
    const open =\r
        isControlled\r
            ? controlledOpen\r
            : internalOpen;\r
\r
\r
\r
\r
\r
    function setOpen(value) {\r
\r
\r
        if (!isControlled) {\r
\r
            setInternalOpen(value);\r
\r
        }\r
\r
\r
        onOpenChange?.(\r
            value\r
        );\r
\r
    }\r
\r
\r
\r
\r
\r
    function toggle() {\r
\r
        setOpen(\r
            !open\r
        );\r
\r
    }\r
\r
\r
\r
\r
\r
    function openMenu() {\r
\r
        setOpen(true);\r
\r
    }\r
\r
\r
\r
\r
\r
    function closeMenu() {\r
\r
        setOpen(false);\r
\r
    }\r
\r
\r
\r
\r
\r
    return {\r
\r
        open,\r
\r
        setOpen,\r
\r
        toggle,\r
\r
        openMenu,\r
\r
        closeMenu\r
\r
    };\r
\r
}\r
\r
\r
\r
export default useDropdown;`;export{e as default};