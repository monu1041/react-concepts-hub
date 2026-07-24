var e=`import { useTabsContext } from "../../context/TabsContext";\r
\r
function TabsContent({ children, value, keepMounted = false }) {\r
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
    <div role="tabpanel" hidden={!isActive} className="tabs-content">\r
      {children}\r
    </div>\r
  );\r
}\r
\r
export default TabsContent;\r
`;export{e as default};