var e=`// features/products/ProductList.jsx\r
\r
import { useEffect } from "react";\r
import { useDispatch, useSelector } from "react-redux";\r
import { fetchProducts } from "./productSlice";\r
\r
const ProductList = () => {\r
  const dispatch = useDispatch();\r
\r
  const { products, loading, error } = useSelector(\r
    (state) => state.products\r
  );\r
\r
  useEffect(() => {\r
    dispatch(fetchProducts());\r
  }, [dispatch]);\r
\r
  if (loading) {\r
    return <h2>Loading products...</h2>;\r
  }\r
\r
  if (error) {\r
    return <h2>Error: {error}</h2>;\r
  }\r
\r
  return (\r
    <div>\r
      <h1>Products</h1>\r
\r
      {products.map((product) => (\r
        <div\r
          key={product.id}\r
          style={{\r
            border: "1px solid gray",\r
            margin: "10px",\r
            padding: "10px",\r
          }}\r
        >\r
          <img\r
            src={product.image}\r
            alt={product.title}\r
            width="100"\r
          />\r
\r
          <h3>{product.title}</h3>\r
\r
          <p>\${product.price}</p>\r
        </div>\r
      ))}\r
    </div>\r
  );\r
};\r
\r
export default ProductList;`;export{e as default};