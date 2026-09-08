const TOTAL_ITEMS = 250;
const PAGE_SIZE = 20;

function createItems(start, end) {
  return Array.from(
    { length: end - start },
    (_, index) => {
      const id = start + index + 1;

      return {
        id,
        name: `Item ${id}`,
        description: `This is the description for item ${id}.`
      };
    }
  );
}

export function fetchItems(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      const end = Math.min(
        start + PAGE_SIZE,
        TOTAL_ITEMS
      );

      const items = createItems(start, end);

      resolve({
        items,
        hasMore: end < TOTAL_ITEMS
      });
    }, 700);
  });
}