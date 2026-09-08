import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { fetchItems } from "./mockApi";

export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const scrollContainerRef = useRef(null);
  const initialLoadRef = useRef(false);

  const loadPage = useCallback(async (pageNumber) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchItems(pageNumber);

      setItems((currentItems) => {
        if (pageNumber === 1) {
          return response.items;
        }

        return [
          ...currentItems,
          ...response.items
        ];
      });

      setPage(pageNumber);
      setHasMore(response.hasMore);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  /*
   * Initial page load.
   *
   * The ref prevents duplicate requests when React
   * Strict Mode runs the effect more than once.
   */
  useEffect(() => {
    if (initialLoadRef.current) {
      return;
    }

    initialLoadRef.current = true;

    loadPage(1);
  }, [loadPage]);

  const handleLoadMore = useCallback(() => {
    if (loading || !hasMore) {
      return;
    }

    loadPage(page + 1);
  }, [
    loading,
    hasMore,
    page,
    loadPage
  ]);

  const sentinelRef = useInfiniteScroll({
    onLoadMore: handleLoadMore,
    hasMore,
    loading,
    rootRef: scrollContainerRef
  });

  return (
    <section className="infinite-scroll">
      <div
        ref={scrollContainerRef}
        className="infinite-scroll__list"
      >
        {items.map((item) => (
          <article
            key={item.id}
            className="infinite-scroll__item"
          >
            <strong>
              {item.name}
            </strong>

            <p>
              {item.description}
            </p>
          </article>
        ))}

        {loading && (
          <p className="infinite-scroll__status">
            Loading...
          </p>
        )}

        {error && (
          <div className="infinite-scroll__error">
            <p>{error}</p>

            <button
              type="button"
              onClick={() => loadPage(page + 1)}
            >
              Retry
            </button>
          </div>
        )}

        {!hasMore && !loading && items.length > 0 && (
          <p className="infinite-scroll__status">
            No more items.
          </p>
        )}

        {/* IntersectionObserver watches this element */}
        <div
          ref={sentinelRef}
          className="infinite-scroll__sentinel"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}