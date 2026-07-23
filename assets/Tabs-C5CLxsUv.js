var e=`import { useMemo, useRef, useState } from "react";\r
import TabsContext from "../../context/TabsContext";\r
\r
function Tabs({\r
    children,\r
    defaultValue,\r
    value,\r
    onValueChange,\r
}) {\r
    const [internalValue, setInternalValue] =\r
        useState(defaultValue);\r
\r
    const isControlled =\r
        value !== undefined;\r
\r
    const activeTab =\r
        isControlled\r
            ? value\r
            : internalValue;\r
\r
    /**\r
     * Stores all trigger button elements.\r
     */\r
    const triggerRefs = useRef([]);\r
\r
    function registerTrigger(element) {\r
        if (!element) return;\r
\r
        if (\r
            !triggerRefs.current.includes(element)\r
        ) {\r
            triggerRefs.current.push(element);\r
        }\r
    }\r
\r
    function unregisterTrigger(element) {\r
        triggerRefs.current =\r
            triggerRefs.current.filter(\r
                (item) => item !== element\r
            );\r
    }\r
\r
    function setActiveTab(nextValue) {\r
        if (isControlled) {\r
            onValueChange?.(nextValue);\r
        } else {\r
            setInternalValue(nextValue);\r
        }\r
    }\r
\r
    const contextValue = useMemo(\r
        () => ({\r
            activeTab,\r
            setActiveTab,\r
\r
            triggerRefs,\r
            registerTrigger,\r
            unregisterTrigger,\r
        }),\r
        [activeTab]\r
    );\r
\r
    return (\r
        <TabsContext.Provider\r
            value={contextValue}\r
        >\r
            <div className="tabs">\r
                {children}\r
            </div>\r
        </TabsContext.Provider>\r
    );\r
}\r
\r
export default Tabs;`;export{e as default};