var e=`import { useDispatch } from "react-redux";\r
import { addItem } from "../features/cart/cartSlice";\r
\r
const products = [\r
  { id: 1, name: "Laptop", price: 50000 },\r
  { id: 2, name: "Phone", price: 30000 },\r
  { id: 3, name: "Mouse", price: 1000 },\r
];\r
\r
function ProductList() {\r
  const dispatch = useDispatch();\r
\r
  return (\r
    <>\r
      <h2>Products</h2>\r
\r
      {products.map((product) => (\r
        <div key={product.id}>\r
          <span>\r
            {product.name} - ₹{product.price}\r
          </span>\r
\r
          <button\r
            onClick={() => dispatch(addItem(product))}\r
          >\r
            Add\r
          </button>\r
        </div>\r
      ))}\r
    </>\r
  );\r
}\r
\r
export default ProductList;`;export{e as default};