var e=`import {\r
  useMemo,\r
  useState,\r
  useTransition,\r
} from "react";\r
\r
import ProductList from "./ProductList";\r
import { products } from "../data/products";\r
\r
\r
const TransitionSearch = () => {\r
\r
  const [search, setSearch] =\r
    useState("");\r
\r
  const [query, setQuery] =\r
    useState("");\r
\r
\r
  const [\r
    isPending,\r
    startTransition\r
  ] = useTransition();\r
\r
\r
\r
  const filteredProducts = useMemo(() => {\r
\r
    return products.filter((product) =>\r
      product.name\r
        .toLowerCase()\r
        .includes(\r
          query.toLowerCase()\r
        )\r
    );\r
\r
  }, [query]);\r
\r
\r
\r
  const handleChange = (e) => {\r
\r
    const value = e.target.value;\r
\r
\r
    // Immediate update\r
    setSearch(value);\r
\r
\r
    // Low priority update\r
    startTransition(() => {\r
\r
      setQuery(value);\r
\r
    });\r
\r
  };\r
\r
\r
\r
  return (\r
\r
    <div className="section">\r
\r
      <h2>\r
        🟢 useTransition Search\r
      </h2>\r
\r
\r
      <input\r
        value={search}\r
        onChange={handleChange}\r
        placeholder="Search 500000 products..."\r
      />\r
\r
\r
      {\r
        isPending &&\r
        <p>\r
          Filtering...\r
        </p>\r
      }\r
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
export default TransitionSearch;`;export{e as default};