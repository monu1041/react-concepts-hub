// src/topics/01-redux-cart/ShoppingCartRedux.jsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function ShoppingCartRedux() {
  return (
    <Provider store={store}>
      <div className="redux-demo-wrapper">
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Redux Toolkit Shopping Cart</h2>
        <ProductList />
        <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #e2e8f0' }} />
        <Cart />
      </div>
    </Provider>
  );
}