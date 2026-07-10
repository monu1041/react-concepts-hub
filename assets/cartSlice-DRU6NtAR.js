var e=`import { createSlice } from "@reduxjs/toolkit";\r
\r
const initialState = {\r
  items: [ { id: 4, name: "Alienware", price: 500000, quantity: 1 } ],\r
};\r
\r
const cartSlice = createSlice({\r
  name: "cart",\r
  initialState,\r
\r
  reducers: {\r
    addItem(state, action) {\r
      const product = action.payload;\r
\r
      const existingItem = state.items.find(\r
        (item) => item.id === product.id\r
      );\r
\r
      if (existingItem) {\r
        existingItem.quantity += 1;\r
      } else {\r
        state.items.push({\r
          ...product,\r
          quantity: 1,\r
        });\r
      }\r
    },\r
\r
    removeItem(state, action) {\r
      const id = action.payload;\r
\r
      state.items = state.items.filter((item) => item.id !== id);\r
    },\r
\r
    incrementQuantity(state, action) {\r
      const id = action.payload;\r
\r
      const itemToIncrement = state.items.find((item) => item.id === id);\r
      itemToIncrement.quantity += 1;\r
    },\r
    decrementQuantity(state, action) {\r
      const id = action.payload;\r
\r
      const itemToIncrement = state.items.find((item) => item.id === id);\r
      if(itemToIncrement.quantity > 1) {\r
        itemToIncrement.quantity -= 1;\r
      } else {\r
        state.items = state.items.filter((item) => item.id !== id);\r
      }\r
    }\r
  },\r
});\r
\r
export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;\r
\r
export default cartSlice.reducer;`;export{e as default};