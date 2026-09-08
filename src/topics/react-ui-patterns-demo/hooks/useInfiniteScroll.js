import {
  useEffect,
  useRef
} from "react";

export default function useInfiniteScroll({
  onLoadMore,
  hasMore,
  loading,
  rootRef,
  rootMargin = "100px",
  threshold = 0
}) {
  const sentinelRef = useRef(null);
  const onLoadMoreRef = useRef(onLoadMore);

  // Always keep the latest callback.
  useEffect(() => {
    onLoadMoreRef.current = onLoadMore;
  }, [onLoadMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const root = rootRef?.current;

    if (!sentinel || !root || !hasMore || loading) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (
          firstEntry.isIntersecting &&
          hasMore &&
          !loading
        ) {
          onLoadMoreRef.current();
        }
      },
      {
        root,
        rootMargin,
        threshold
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [
    hasMore,
    loading,
    rootRef,
    rootMargin,
    threshold
  ]);

  return sentinelRef;
}