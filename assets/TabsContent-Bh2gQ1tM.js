var e=`import { useTabsContext } from "../../context/TabsContext";\r
\r
function TabsContent({\r
    children,\r
    value,\r
    keepMounted = false,\r
}) {\r
    const { activeTab } = useTabsContext();\r
\r
    const isActive = activeTab === value;\r
\r
    // Remove inactive content from the DOM\r
    if (!keepMounted && !isActive) {\r
        return null;\r
    }\r
\r
    return (\r
        <div\r
            role="tabpanel"\r
            hidden={!isActive}\r
            className="tabs-content"\r
        >\r
            {children}\r
        </div>\r
    );\r
}\r
\r
export default TabsContent;`;export{e as default};