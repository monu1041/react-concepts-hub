var e=`const TOTAL_ITEMS = 250;\r
const PAGE_SIZE = 20;\r
\r
function createItems(start, end) {\r
  return Array.from(\r
    { length: end - start },\r
    (_, index) => {\r
      const id = start + index + 1;\r
\r
      return {\r
        id,\r
        name: \`Item \${id}\`,\r
        description: \`This is the description for item \${id}.\`\r
      };\r
    }\r
  );\r
}\r
\r
export function fetchItems(page) {\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      const start = (page - 1) * PAGE_SIZE;\r
      const end = Math.min(\r
        start + PAGE_SIZE,\r
        TOTAL_ITEMS\r
      );\r
\r
      const items = createItems(start, end);\r
\r
      resolve({\r
        items,\r
        hasMore: end < TOTAL_ITEMS\r
      });\r
    }, 700);\r
  });\r
}`;export{e as default};