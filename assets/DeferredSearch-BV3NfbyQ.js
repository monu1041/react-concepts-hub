var e=`// components/DeferredSearch.jsx\r
\r
import {\r
  useDeferredValue,\r
  useMemo,\r
  useState,\r
} from "react";\r
\r
import ProductList from "./ProductList";\r
import { generateProducts } from "../data/generateProducts";\r
\r
const products = generateProducts();\r
\r
const DeferredSearch = () => {\r
  const [search, setSearch] = useState("");\r
\r
  const deferredSearch =\r
    useDeferredValue(search);\r
\r
  const filteredProducts = useMemo(() => {\r
    return products.filter((product) =>\r
      product.name\r
        .toLowerCase()\r
        .includes(\r
          deferredSearch.toLowerCase()\r
        )\r
    );\r
  }, [deferredSearch]);\r
\r
  return (\r
    <div className="section">\r
      <h2>Search using useDeferredValue</h2>\r
\r
      <input\r
        value={search}\r
        onChange={(e) =>\r
          setSearch(e.target.value)\r
        }\r
        placeholder="Search..."\r
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
export default DeferredSearch;`;export{e as default};