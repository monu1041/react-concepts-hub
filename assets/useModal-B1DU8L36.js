var e=`import {\r
    useState\r
} from "react";\r
\r
\r
function useModal(\r
    defaultOpen = false\r
) {\r
\r
\r
    const [\r
        open,\r
        setOpen\r
    ] = useState(defaultOpen);\r
\r
\r
\r
\r
    function openModal(){\r
\r
        setOpen(true);\r
\r
    }\r
\r
\r
\r
    function closeModal(){\r
\r
        setOpen(false);\r
\r
    }\r
\r
\r
\r
    function toggleModal(){\r
\r
        setOpen(\r
            previous =>\r
                !previous\r
        );\r
\r
    }\r
\r
\r
\r
    return {\r
\r
        open,\r
\r
        setOpen,\r
\r
        openModal,\r
\r
        closeModal,\r
\r
        toggleModal,\r
\r
    };\r
\r
}\r
\r
\r
export default useModal;`;export{e as default};