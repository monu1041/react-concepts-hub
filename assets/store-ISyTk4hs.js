var e=`import { configureStore } from "@reduxjs/toolkit";\r
import cartReducer from "./features/cart/cartSlice";\r
\r
export const store = configureStore({\r
  reducer: {\r
    cart: cartReducer,\r
  },\r
});`;export{e as default};