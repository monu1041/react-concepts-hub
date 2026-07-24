var e=`import { useEffect, useRef, useId } from "react";\r
\r
import { useTabsContext } from "../../context/TabsContext";\r
\r
function TabsTrigger({ children, value }) {\r
  const {\r
    activeTab,\r
    setActiveTab,\r
\r
    registerTrigger,\r
    unregisterTrigger,\r
\r
    triggerRefs,\r
  } = useTabsContext();\r
\r
  const ref = useRef(null);\r
  const id = useId();\r
  const tabId = \`tab-\${id}\`;\r
  const panelId = \`panel-\${id}\`;\r
  const isActive = activeTab === value;\r
\r
  useEffect(() => {\r
    registerTrigger({\r
      value,\r
      ref: ref.current,\r
    });\r
    return () => {\r
      unregisterTrigger(value);\r
    };\r
  }, []);\r
\r
  function handleClick() {\r
    setActiveTab(value);\r
  }\r
\r
  function handleKeyDown(event) {\r
    const triggers = triggerRefs.current;\r
    const currentIndex = triggers.findIndex((item) => item.value === value);\r
    if (currentIndex === -1) return;\r
    let nextIndex;\r
\r
    switch (event.key) {\r
      case "ArrowRight":\r
        event.preventDefault();\r
        nextIndex = (currentIndex + 1) % triggers.length;\r
        break;\r
\r
      case "ArrowLeft":\r
        event.preventDefault();\r
        nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;\r
        break;\r
\r
      case "Home":\r
        event.preventDefault();\r
        nextIndex = 0;\r
        break;\r
\r
      case "End":\r
        event.preventDefault();\r
        nextIndex = triggers.length - 1;\r
        break;\r
\r
      default:\r
        return;\r
    }\r
    const nextTrigger = triggers[nextIndex];\r
    nextTrigger.ref.focus();\r
    setActiveTab(nextTrigger.value);\r
  }\r
\r
  return (\r
    <button\r
      ref={ref}\r
      id={tabId}\r
      type="button"\r
      role="tab"\r
      aria-controls={panelId}\r
      aria-selected={isActive}\r
      tabIndex={isActive ? 0 : -1}\r
      className={\`tabs-trigger \${isActive ? "active" : ""}\`}\r
      onClick={handleClick}\r
      onKeyDown={handleKeyDown}\r
    >\r
      {children}\r
    </button>\r
  );\r
}\r
\r
export default TabsTrigger;\r
`;export{e as default};