import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

const ITEM_HEIGHT = 82;
const OVERSCAN = 5;

export default function VirtualizedList({
  items,
  renderItem,
  height = 500
}) {
  const containerRef = useRef(null);

  const [scrollTop, setScrollTop] =
    useState(0);

  const handleScroll = useCallback(
    (event) => {
      setScrollTop(event.currentTarget.scrollTop);
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    container.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [handleScroll]);

  const totalHeight =
    items.length * ITEM_HEIGHT;

  const visibleCount =
    Math.ceil(height / ITEM_HEIGHT);

  const firstVisibleIndex = Math.floor(
    scrollTop / ITEM_HEIGHT
  );

  const startIndex = Math.max(
    0,
    firstVisibleIndex - OVERSCAN
  );

  const endIndex = Math.min(
    items.length,
    firstVisibleIndex +
      visibleCount +
      OVERSCAN
  );

  const visibleItems = items.slice(
    startIndex,
    endIndex
  );

  return (
    <div
      ref={containerRef}
      className="virtualized-list"
      style={{ height }}
    >
      <div
        className="virtualized-list-spacer"
        style={{
          height: totalHeight
        }}
      >
        {visibleItems.map((item, offset) => {
          const index =
            startIndex + offset;

          return (
            <div
              key={item.id}
              className="virtualized-item"
              style={{
                position: "absolute",
                top: index * ITEM_HEIGHT,
                left: 0,
                right: 0,
                height: ITEM_HEIGHT
              }}
            >
              {renderItem(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
}