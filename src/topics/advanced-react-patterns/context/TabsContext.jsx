import { createContext, useContext } from "react";

/**
 * Context used by all Tabs compound components.
 */
const TabsContext = createContext(null);

/**
 * Custom hook for consuming the Tabs context.
 * Throws an error if used outside <Tabs>.
 */
export function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs>.");
  }

  return context;
}

export default TabsContext;
