var e=`import {\r
  useEffect,\r
  useRef\r
} from "react";\r
\r
export default function useInfiniteScroll({\r
  onLoadMore,\r
  hasMore,\r
  loading,\r
  rootRef,\r
  rootMargin = "100px",\r
  threshold = 0\r
}) {\r
  const sentinelRef = useRef(null);\r
  const onLoadMoreRef = useRef(onLoadMore);\r
\r
  // Always keep the latest callback.\r
  useEffect(() => {\r
    onLoadMoreRef.current = onLoadMore;\r
  }, [onLoadMore]);\r
\r
  useEffect(() => {\r
    const sentinel = sentinelRef.current;\r
    const root = rootRef?.current;\r
\r
    if (!sentinel || !root || !hasMore || loading) {\r
      return;\r
    }\r
\r
    const observer = new IntersectionObserver(\r
      (entries) => {\r
        const firstEntry = entries[0];\r
\r
        if (\r
          firstEntry.isIntersecting &&\r
          hasMore &&\r
          !loading\r
        ) {\r
          onLoadMoreRef.current();\r
        }\r
      },\r
      {\r
        root,\r
        rootMargin,\r
        threshold\r
      }\r
    );\r
\r
    observer.observe(sentinel);\r
\r
    return () => {\r
      observer.disconnect();\r
    };\r
  }, [\r
    hasMore,\r
    loading,\r
    rootRef,\r
    rootMargin,\r
    threshold\r
  ]);\r
\r
  return sentinelRef;\r
}`;export{e as default};