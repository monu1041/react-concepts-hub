var e=`// components/NormalSearch.jsx\r
\r
import { useMemo, useState } from "react";\r
import ProductList from "./ProductList";\r
import { generateProducts } from "../data/generateProducts";\r
\r
const products = generateProducts();\r
\r
const NormalSearch = () => {\r
  const [search, setSearch] = useState("");\r
\r
  const filteredProducts = useMemo(() => {\r
    return products.filter((product) =>\r
      product.name\r
        .toLowerCase()\r
        .includes(search.toLowerCase())\r
    );\r
  }, [search]);\r
\r
  return (\r
    <div className="section">\r
      <h2>Normal Search</h2>\r
\r
      <input\r
        type="text"\r
        placeholder="Search products..."\r
        value={search}\r
        onChange={(e) => setSearch(e.target.value)}\r
      />\r
\r
      <p>\r
        Showing {filteredProducts.length} products\r
      </p>\r
\r
      <ProductList products={filteredProducts} />\r
    </div>\r
  );\r
};\r
\r
export default NormalSearch;`;export{e as default};