import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [ { id: 4, name: "Alienware", price: 500000, quantity: 1 } ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeItem(state, action) {
      const id = action.payload;

      state.items = state.items.filter((item) => item.id !== id);
    },

    incrementQuantity(state, action) {
      const id = action.payload;

      const itemToIncrement = state.items.find((item) => item.id === id);
      itemToIncrement.quantity += 1;
    },
    decrementQuantity(state, action) {
      const id = action.payload;

      const itemToIncrement = state.items.find((item) => item.id === id);
      if(itemToIncrement.quantity > 1) {
        itemToIncrement.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    }
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;