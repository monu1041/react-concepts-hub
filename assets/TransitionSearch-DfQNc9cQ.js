var e=`// components/TransitionSearch.jsx\r
\r
import {\r
  useMemo,\r
  useState,\r
  useTransition,\r
} from "react";\r
\r
import ProductList from "./ProductList";\r
import Spinner from "./Spinner";\r
import { generateProducts } from "../data/generateProducts";\r
\r
const products = generateProducts();\r
\r
const TransitionSearch = () => {\r
  const [search, setSearch] = useState("");\r
\r
  const [query, setQuery] = useState("");\r
\r
  const [isPending, startTransition] =\r
    useTransition();\r
\r
  const filteredProducts = useMemo(() => {\r
    return products.filter((product) =>\r
      product.name\r
        .toLowerCase()\r
        .includes(query.toLowerCase())\r
    );\r
  }, [query]);\r
\r
  const handleChange = (e) => {\r
    const value = e.target.value;\r
\r
    // Urgent\r
    setSearch(value);\r
\r
    // Non-Urgent\r
    startTransition(() => {\r
      setQuery(value);\r
    });\r
  };\r
\r
  return (\r
    <div className="section">\r
      <h2>Search using useTransition</h2>\r
\r
      <input\r
        value={search}\r
        onChange={handleChange}\r
        placeholder="Search..."\r
      />\r
\r
      {isPending && <Spinner />}\r
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
export default TransitionSearch;`;export{e as default};