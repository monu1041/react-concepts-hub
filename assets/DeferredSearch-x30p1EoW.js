var e=`import {\r
  useDeferredValue,\r
  useMemo,\r
  useState,\r
} from "react";\r
\r
import ProductList from "./ProductList";\r
import { products } from "../data/products";\r
\r
\r
const DeferredSearch = () => {\r
\r
  const [search, setSearch] =\r
    useState("");\r
\r
\r
  const deferredSearch =\r
    useDeferredValue(search);\r
\r
\r
\r
  const filteredProducts = useMemo(() => {\r
\r
    return products.filter((product) =>\r
      product.name\r
        .toLowerCase()\r
        .includes(\r
          deferredSearch.toLowerCase()\r
        )\r
    );\r
\r
  }, [deferredSearch]);\r
\r
\r
\r
  return (\r
\r
    <div className="section">\r
\r
      <h2>\r
        🔵 useDeferredValue Search\r
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
        Current:\r
        <strong>\r
          {" "}\r
          {search}\r
        </strong>\r
      </p>\r
\r
\r
      <p>\r
        Deferred:\r
        <strong>\r
          {" "}\r
          {deferredSearch}\r
        </strong>\r
      </p>\r
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
\r
    </div>\r
\r
  );\r
};\r
\r
\r
export default DeferredSearch;`;export{e as default};