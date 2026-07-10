var e=`import { useDispatch, useSelector } from "react-redux";\r
import { removeItem, incrementQuantity, decrementQuantity } from "../features/cart/cartSlice";\r
\r
function Cart() {\r
  const dispatch = useDispatch();\r
\r
  const items = useSelector((state) => state.cart.items);\r
\r
  return (\r
    <>\r
      <h2>Cart</h2>\r
\r
      {items.length === 0 && <p>Cart is empty</p>}\r
\r
      {items.map((item) => (\r
        <div key={item.id}>\r
          <span>\r
            {item.name} × {item.quantity} - ₹{item.price * item.quantity}\r
          </span>\r
\r
          <button\r
            onClick={() => dispatch(removeItem(item.id))}\r
          >\r
            Remove\r
          </button>\r
          \r
          <button \r
           onClick={() => dispatch(incrementQuantity(item.id))}\r
          > \r
            +\r
          </button>\r
          <button\r
            onClick={() => dispatch(decrementQuantity(item.id))}\r
          >\r
            -\r
          </button>\r
        </div>\r
      ))}\r
\r
      <h3>\r
        Total Items:{" "}\r
        {items.reduce(\r
          (total, item) => total + item.quantity,\r
          0\r
        )}\r
      </h3>\r
      <h3>\r
        Total Price: ₹\r
        { items.reduce((total, item) => total + (item.price * item.quantity), 0) }\r
      </h3>\r
    </>\r
  );\r
  \r
}\r
\r
export default Cart;`;export{e as default};