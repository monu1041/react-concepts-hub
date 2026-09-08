var e=`import {\r
  useCallback,\r
  useEffect,\r
  useRef,\r
  useState\r
} from "react";\r
\r
import useInfiniteScroll from "../../hooks/useInfiniteScroll";\r
import { fetchItems } from "./mockApi";\r
\r
export default function InfiniteScroll() {\r
  const [items, setItems] = useState([]);\r
  const [page, setPage] = useState(0);\r
  const [loading, setLoading] = useState(false);\r
  const [error, setError] = useState(null);\r
  const [hasMore, setHasMore] = useState(true);\r
\r
  const scrollContainerRef = useRef(null);\r
  const initialLoadRef = useRef(false);\r
\r
  const loadPage = useCallback(async (pageNumber) => {\r
    setLoading(true);\r
    setError(null);\r
\r
    try {\r
      const response = await fetchItems(pageNumber);\r
\r
      setItems((currentItems) => {\r
        if (pageNumber === 1) {\r
          return response.items;\r
        }\r
\r
        return [\r
          ...currentItems,\r
          ...response.items\r
        ];\r
      });\r
\r
      setPage(pageNumber);\r
      setHasMore(response.hasMore);\r
    } catch (requestError) {\r
      setError(requestError.message);\r
    } finally {\r
      setLoading(false);\r
    }\r
  }, []);\r
\r
  /*\r
   * Initial page load.\r
   *\r
   * The ref prevents duplicate requests when React\r
   * Strict Mode runs the effect more than once.\r
   */\r
  useEffect(() => {\r
    if (initialLoadRef.current) {\r
      return;\r
    }\r
\r
    initialLoadRef.current = true;\r
\r
    loadPage(1);\r
  }, [loadPage]);\r
\r
  const handleLoadMore = useCallback(() => {\r
    if (loading || !hasMore) {\r
      return;\r
    }\r
\r
    loadPage(page + 1);\r
  }, [\r
    loading,\r
    hasMore,\r
    page,\r
    loadPage\r
  ]);\r
\r
  const sentinelRef = useInfiniteScroll({\r
    onLoadMore: handleLoadMore,\r
    hasMore,\r
    loading,\r
    rootRef: scrollContainerRef\r
  });\r
\r
  return (\r
    <section className="infinite-scroll">\r
      <div\r
        ref={scrollContainerRef}\r
        className="infinite-scroll__list"\r
      >\r
        {items.map((item) => (\r
          <article\r
            key={item.id}\r
            className="infinite-scroll__item"\r
          >\r
            <strong>\r
              {item.name}\r
            </strong>\r
\r
            <p>\r
              {item.description}\r
            </p>\r
          </article>\r
        ))}\r
\r
        {loading && (\r
          <p className="infinite-scroll__status">\r
            Loading...\r
          </p>\r
        )}\r
\r
        {error && (\r
          <div className="infinite-scroll__error">\r
            <p>{error}</p>\r
\r
            <button\r
              type="button"\r
              onClick={() => loadPage(page + 1)}\r
            >\r
              Retry\r
            </button>\r
          </div>\r
        )}\r
\r
        {!hasMore && !loading && items.length > 0 && (\r
          <p className="infinite-scroll__status">\r
            No more items.\r
          </p>\r
        )}\r
\r
        {/* IntersectionObserver watches this element */}\r
        <div\r
          ref={sentinelRef}\r
          className="infinite-scroll__sentinel"\r
          aria-hidden="true"\r
        />\r
      </div>\r
    </section>\r
  );\r
}`;export{e as default};