var e=`import {\r
    useState\r
} from "react";\r
\r
\r
function useControllableState({\r
    value,\r
    defaultValue,\r
    onChange,\r
}) {\r
\r
\r
    const [\r
        internalValue,\r
        setInternalValue\r
    ] = useState(defaultValue);\r
\r
\r
\r
    const isControlled =\r
        value !== undefined;\r
\r
\r
\r
    const state =\r
        isControlled\r
            ? value\r
            : internalValue;\r
\r
\r
\r
    function setState(\r
        nextValue\r
    ) {\r
\r
\r
        if(isControlled){\r
\r
            onChange?.(\r
                nextValue\r
            );\r
\r
        }\r
        else {\r
\r
            setInternalValue(\r
                nextValue\r
            );\r
\r
            onChange?.(\r
                nextValue\r
            );\r
\r
        }\r
\r
    }\r
\r
\r
\r
    return [\r
        state,\r
        setState\r
    ];\r
\r
}\r
\r
\r
export default useControllableState;`;export{e as default};