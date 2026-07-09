// src/topics/01-redux-cart/ReduxCartDemo.jsx
import React, { useState } from 'react';

export default function ReduxCartDemo() {
  const [items, setItems] = useState([]);

  return (
    <div style={{ padding: '20px', border: '1px dashed #ccc', borderRadius: '8px' }}>
      <h3>🛒 Redux Mini-Cart Mock-up</h3>
      <p>Items in cart: {items.length}</p>
      <button onClick={() => setItems([...items, 'Item'])}>Add Mock Item</button>
      <button onClick={() => setItems([])} style={{ marginLeft: '10px' }}>Clear</button>
    </div>
  );
}