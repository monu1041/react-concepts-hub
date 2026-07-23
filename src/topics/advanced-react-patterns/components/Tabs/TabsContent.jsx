import { useTabsContext } from "../../context/TabsContext";

function TabsContent({
    children,
    value,
    keepMounted = false,
}) {
    const { activeTab } = useTabsContext();

    const isActive = activeTab === value;

    // Remove inactive content from the DOM
    if (!keepMounted && !isActive) {
        return null;
    }

    return (
        <div
            role="tabpanel"
            hidden={!isActive}
            className="tabs-content"
        >
            {children}
        </div>
    );
}

export default TabsContent;