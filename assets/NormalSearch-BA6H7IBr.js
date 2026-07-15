var e=`import { useMemo, useState } from "react";\r
\r
import ProductList from "./ProductList";\r
import { products } from "../data/products";\r
\r
\r
const NormalSearch = () => {\r
\r
  const [search, setSearch] = useState("");\r
\r
\r
  const filteredProducts = useMemo(() => {\r
\r
    return products.filter((product) =>\r
      product.name\r
        .toLowerCase()\r
        .includes(\r
          search.toLowerCase()\r
        )\r
    );\r
\r
  }, [search]);\r
\r
\r
\r
  return (\r
\r
    <div className="section">\r
\r
      <h2>\r
        🔴 Normal Search\r
      </h2>\r
\r
\r
      <input\r
        value={search}\r
        onChange={(e) =>\r
          setSearch(e.target.value)\r
        }\r
        placeholder="Search 500000 products..."\r
      />\r
\r
\r
      <p>\r
        Results:\r
        <strong>\r
          {" "}\r
          {filteredProducts.length}\r
        </strong>\r
      </p>\r
\r
\r
      <ProductList\r
        products={filteredProducts}\r
      />\r
\r
    </div>\r
\r
  );\r
};\r
\r
\r
export default NormalSearch;`;export{e as default};