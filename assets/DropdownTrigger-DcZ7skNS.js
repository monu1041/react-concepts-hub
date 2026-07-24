var e=`import { useDropdownContext } from "../../context/DropdownContext";\r
\r
function DropdownTrigger({ children }) {\r
    const { open, toggle } = useDropdownContext();\r
\r
    function handleKeyDown(event) {\r
        if (\r
            event.key === "Enter"\r
            ||\r
            event.key === " "\r
            ||\r
            event.key === "ArrowDown"\r
        ) {\r
            event.preventDefault();\r
            toggle();\r
        }\r
    }\r
\r
    return (\r
        <button\r
            type="button"\r
            className="dropdown-trigger"\r
            aria-haspopup="menu"\r
            aria-expanded={ open }\r
            onClick={ toggle\r
            }\r
\r
            onKeyDown={\r
                handleKeyDown\r
            }\r
        >\r
            {children}\r
        </button>\r
    );\r
}\r
\r
export default DropdownTrigger;`;export{e as default};