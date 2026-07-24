var e=`import { useState } from "react";\r
\r
function useControllableState({\r
    value,\r
    defaultValue,\r
    onChange,\r
}) {\r
    const [\r
        internalValue,\r
        setInternalValue\r
    ] = useState(defaultValue);\r
\r
    const isControlled = value !== undefined;\r
    const state = isControlled ? value : internalValue;\r
\r
    function setState( nextValue ) {\r
        if(isControlled){\r
            onChange?.( nextValue );\r
        }\r
        else {\r
            setInternalValue( nextValue );\r
            onChange?.( nextValue );\r
        }\r
    }\r
    return [ state, setState ];\r
}\r
\r
export default useControllableState;`;export{e as default};