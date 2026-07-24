var e=`import { useMemo, useRef, useState } from "react";\r
import TabsContext from "../../context/TabsContext";\r
\r
function Tabs({ children, defaultValue, value, onValueChange }) {\r
  const [internalValue, setInternalValue] = useState(defaultValue);\r
\r
  const isControlled = value !== undefined;\r
\r
  const activeTab = isControlled ? value : internalValue;\r
\r
  /**\r
   * Stores all trigger button elements.\r
   */\r
  const triggerRefs = useRef([]);\r
\r
  function registerTrigger(element) {\r
    if (!element) return;\r
\r
    if (!triggerRefs.current.includes(element)) {\r
      triggerRefs.current.push(element);\r
    }\r
  }\r
\r
  function unregisterTrigger(element) {\r
    triggerRefs.current = triggerRefs.current.filter(\r
      (item) => item !== element,\r
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
    [activeTab],\r
  );\r
\r
  return (\r
    <TabsContext.Provider value={contextValue}>\r
      <div className="tabs">{children}</div>\r
    </TabsContext.Provider>\r
  );\r
}\r
\r
export default Tabs;\r
`;export{e as default};