var e=`import { createContext, useContext } from "react";\r
\r
/**\r
 * Context used by all Tabs compound components.\r
 */\r
const TabsContext = createContext(null);\r
\r
/**\r
 * Custom hook for consuming the Tabs context.\r
 * Throws an error if used outside <Tabs>.\r
 */\r
export function useTabsContext() {\r
  const context = useContext(TabsContext);\r
\r
  if (!context) {\r
    throw new Error("Tabs components must be used inside <Tabs>.");\r
  }\r
\r
  return context;\r
}\r
\r
export default TabsContext;\r
`;export{e as default};