var e=`import { useState } from "react";\r
\r
function useModal( defaultOpen = false ) {\r
    const [ open, setOpen ] = useState(defaultOpen);\r
\r
    function openModal(){\r
        setOpen(true);\r
    }\r
\r
    function closeModal(){\r
        setOpen(false);\r
    }\r
\r
    function toggleModal(){\r
        setOpen(\r
            previous =>\r
                !previous\r
        );\r
    }\r
\r
    return {\r
        open,\r
        setOpen,\r
        openModal,\r
        closeModal,\r
        toggleModal,\r
    };\r
}\r
\r
export default useModal;`;export{e as default};