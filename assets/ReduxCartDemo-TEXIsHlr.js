var e=`// src/topics/01-redux-cart/ReduxCartDemo.jsx\r
import React, { useState } from 'react';\r
\r
export default function ReduxCartDemo() {\r
  const [items, setItems] = useState([]);\r
\r
  return (\r
    <div style={{ padding: '20px', border: '1px dashed #ccc', borderRadius: '8px' }}>\r
      <h3>🛒 Redux Mini-Cart Mock-up</h3>\r
      <p>Items in cart: {items.length}</p>\r
      <button onClick={() => setItems([...items, 'Item'])}>Add Mock Item</button>\r
      <button onClick={() => setItems([])} style={{ marginLeft: '10px' }}>Clear</button>\r
    </div>\r
  );\r
}`;export{e as default};