var e=`import {\r
    useDropdownContext\r
}\r
from "../../context/DropdownContext";\r
\r
\r
\r
function DropdownTrigger({\r
\r
    children\r
\r
}) {\r
\r
\r
    const {\r
\r
        open,\r
\r
        toggle\r
\r
    } =\r
    useDropdownContext();\r
\r
\r
\r
\r
\r
\r
    function handleKeyDown(event) {\r
\r
\r
        if (\r
\r
            event.key === "Enter"\r
\r
            ||\r
\r
            event.key === " "\r
\r
            ||\r
\r
            event.key === "ArrowDown"\r
\r
        ) {\r
\r
\r
            event.preventDefault();\r
\r
\r
            toggle();\r
\r
        }\r
\r
\r
    }\r
\r
\r
\r
\r
\r
    return (\r
\r
        <button\r
\r
            type="button"\r
\r
            className="dropdown-trigger"\r
\r
\r
            aria-haspopup="menu"\r
\r
\r
            aria-expanded={\r
                open\r
            }\r
\r
\r
            onClick={\r
                toggle\r
            }\r
\r
\r
            onKeyDown={\r
                handleKeyDown\r
            }\r
\r
        >\r
\r
            {children}\r
\r
\r
        </button>\r
\r
    );\r
\r
}\r
\r
\r
\r
export default DropdownTrigger;`;export{e as default};