var e=`import {\r
  useCallback,\r
  useEffect,\r
  useRef,\r
  useState\r
} from "react";\r
\r
const ITEM_HEIGHT = 82;\r
const OVERSCAN = 5;\r
\r
export default function VirtualizedList({\r
  items,\r
  renderItem,\r
  height = 500\r
}) {\r
  const containerRef = useRef(null);\r
\r
  const [scrollTop, setScrollTop] =\r
    useState(0);\r
\r
  const handleScroll = useCallback(\r
    (event) => {\r
      setScrollTop(event.currentTarget.scrollTop);\r
    },\r
    []\r
  );\r
\r
  useEffect(() => {\r
    const container = containerRef.current;\r
\r
    if (!container) {\r
      return undefined;\r
    }\r
\r
    container.addEventListener(\r
      "scroll",\r
      handleScroll,\r
      { passive: true }\r
    );\r
\r
    return () => {\r
      container.removeEventListener(\r
        "scroll",\r
        handleScroll\r
      );\r
    };\r
  }, [handleScroll]);\r
\r
  const totalHeight =\r
    items.length * ITEM_HEIGHT;\r
\r
  const visibleCount =\r
    Math.ceil(height / ITEM_HEIGHT);\r
\r
  const firstVisibleIndex = Math.floor(\r
    scrollTop / ITEM_HEIGHT\r
  );\r
\r
  const startIndex = Math.max(\r
    0,\r
    firstVisibleIndex - OVERSCAN\r
  );\r
\r
  const endIndex = Math.min(\r
    items.length,\r
    firstVisibleIndex +\r
      visibleCount +\r
      OVERSCAN\r
  );\r
\r
  const visibleItems = items.slice(\r
    startIndex,\r
    endIndex\r
  );\r
\r
  return (\r
    <div\r
      ref={containerRef}\r
      className="virtualized-list"\r
      style={{ height }}\r
    >\r
      <div\r
        className="virtualized-list-spacer"\r
        style={{\r
          height: totalHeight\r
        }}\r
      >\r
        {visibleItems.map((item, offset) => {\r
          const index =\r
            startIndex + offset;\r
\r
          return (\r
            <div\r
              key={item.id}\r
              className="virtualized-item"\r
              style={{\r
                position: "absolute",\r
                top: index * ITEM_HEIGHT,\r
                left: 0,\r
                right: 0,\r
                height: ITEM_HEIGHT\r
              }}\r
            >\r
              {renderItem(item)}\r
            </div>\r
          );\r
        })}\r
      </div>\r
    </div>\r
  );\r
}`;export{e as default};