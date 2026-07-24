import { useMemo, useRef, useState } from "react";
import TabsContext from "../../context/TabsContext";

function Tabs({ children, defaultValue, value, onValueChange }) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;

  const activeTab = isControlled ? value : internalValue;

  /**
   * Stores all trigger button elements.
   */
  const triggerRefs = useRef([]);

  function registerTrigger(element) {
    if (!element) return;

    if (!triggerRefs.current.includes(element)) {
      triggerRefs.current.push(element);
    }
  }

  function unregisterTrigger(element) {
    triggerRefs.current = triggerRefs.current.filter(
      (item) => item !== element,
    );
  }

  function setActiveTab(nextValue) {
    if (isControlled) {
      onValueChange?.(nextValue);
    } else {
      setInternalValue(nextValue);
    }
  }

  const contextValue = useMemo(
    () => ({
      activeTab,
      setActiveTab,

      triggerRefs,
      registerTrigger,
      unregisterTrigger,
    }),
    [activeTab],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

export default Tabs;
