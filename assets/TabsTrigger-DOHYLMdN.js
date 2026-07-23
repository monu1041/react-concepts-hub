var e=`import {\r
    useEffect,\r
    useRef,\r
    useId,\r
} from "react";\r
\r
import {\r
    useTabsContext\r
} from "../../context/TabsContext";\r
\r
\r
function TabsTrigger({\r
    children,\r
    value,\r
}) {\r
\r
\r
    const {\r
        activeTab,\r
        setActiveTab,\r
\r
        registerTrigger,\r
        unregisterTrigger,\r
\r
        triggerRefs,\r
\r
    } = useTabsContext();\r
\r
\r
    const ref = useRef(null);\r
\r
\r
    const id = useId();\r
\r
\r
    const tabId =\r
        \`tab-\${id}\`;\r
\r
\r
    const panelId =\r
        \`panel-\${id}\`;\r
\r
\r
\r
    const isActive =\r
        activeTab === value;\r
\r
\r
\r
    useEffect(() => {\r
\r
        registerTrigger({\r
            value,\r
            ref: ref.current,\r
        });\r
\r
\r
        return () => {\r
\r
            unregisterTrigger(value);\r
\r
        };\r
\r
\r
    }, []);\r
\r
\r
\r
    function handleClick() {\r
\r
        setActiveTab(value);\r
\r
    }\r
\r
\r
\r
    function handleKeyDown(event) {\r
\r
\r
        const triggers =\r
            triggerRefs.current;\r
\r
\r
\r
        const currentIndex =\r
            triggers.findIndex(\r
                item =>\r
                    item.value === value\r
            );\r
\r
\r
\r
        if (currentIndex === -1)\r
            return;\r
\r
\r
\r
        let nextIndex;\r
\r
\r
\r
        switch(event.key) {\r
\r
\r
            case "ArrowRight":\r
\r
                event.preventDefault();\r
\r
                nextIndex =\r
                    (\r
                        currentIndex + 1\r
                    )\r
                    %\r
                    triggers.length;\r
\r
                break;\r
\r
\r
\r
            case "ArrowLeft":\r
\r
                event.preventDefault();\r
\r
                nextIndex =\r
                    (\r
                        currentIndex -\r
                        1 +\r
                        triggers.length\r
                    )\r
                    %\r
                    triggers.length;\r
\r
                break;\r
\r
\r
\r
            case "Home":\r
\r
                event.preventDefault();\r
\r
                nextIndex = 0;\r
\r
                break;\r
\r
\r
\r
            case "End":\r
\r
                event.preventDefault();\r
\r
                nextIndex =\r
                    triggers.length - 1;\r
\r
                break;\r
\r
\r
\r
            default:\r
\r
                return;\r
\r
        }\r
\r
\r
\r
        const nextTrigger =\r
            triggers[nextIndex];\r
\r
\r
\r
        nextTrigger.ref.focus();\r
\r
\r
        setActiveTab(\r
            nextTrigger.value\r
        );\r
\r
    }\r
\r
\r
\r
    return (\r
\r
        <button\r
\r
            ref={ref}\r
\r
            id={tabId}\r
\r
            type="button"\r
\r
            role="tab"\r
\r
\r
            aria-controls={panelId}\r
\r
\r
            aria-selected={\r
                isActive\r
            }\r
\r
\r
            tabIndex={\r
                isActive\r
                    ? 0\r
                    : -1\r
            }\r
\r
\r
            className={\r
                \`tabs-trigger \${\r
                    isActive\r
                    ? "active"\r
                    : ""\r
                }\`\r
            }\r
\r
\r
            onClick={\r
                handleClick\r
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
        </button>\r
\r
    );\r
\r
}\r
\r
\r
export default TabsTrigger;`;export{e as default};