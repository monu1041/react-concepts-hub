var e=`// src/topics/01-redux-cart/cartSlice.js\r
import { createSlice } from '@reduxjs/toolkit';\r
\r
const cartSlice = createSlice({\r
  name: 'cart',\r
  initialState: { items: [], total: 0 },\r
  reducers: {\r
    addItem: (state, action) => {\r
      state.items.push(action.payload);\r
    },\r
    clearCart: (state) => {\r
      state.items = [];\r
    }\r
  }\r
});\r
\r
export const { addItem, clearCart } = cartSlice.actions;\r
export default cartSlice.reducer;`;export{e as default};