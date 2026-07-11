var e=`// app/store.js\r
\r
import { configureStore } from "@reduxjs/toolkit";\r
import productReducer from "./features/products/productSlice";\r
\r
export const store = configureStore({\r
  reducer: {\r
    products: productReducer,\r
  },\r
});`;export{e as default};