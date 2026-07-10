var e=`// src/topics/01-redux-cart/ShoppingCartRedux.jsx\r
import React from "react";\r
import { Provider } from "react-redux";\r
import { store } from "./store";\r
import ProductList from "./components/ProductList";\r
import Cart from "./components/Cart";\r
\r
export default function ShoppingCartRedux() {\r
  return (\r
    <Provider store={store}>\r
      <div className="redux-demo-wrapper">\r
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Redux Toolkit Shopping Cart</h2>\r
        <ProductList />\r
        <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #e2e8f0' }} />\r
        <Cart />\r
      </div>\r
    </Provider>\r
  );\r
}`;export{e as default};