var e=`// features/products/productSlice.js\r
\r
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";\r
import { fetchProductsAPI } from "./productAPI";\r
\r
// Async Thunk\r
export const fetchProducts = createAsyncThunk(\r
  "products/fetchProducts",\r
  async (_, thunkAPI) => {\r
    try {\r
      const data = await fetchProductsAPI();\r
      return data;\r
    } catch (error) {\r
      return thunkAPI.rejectWithValue(error.message);\r
    }\r
  }\r
);\r
\r
const initialState = {\r
  products: [],\r
  loading: false,\r
  error: null,\r
};\r
\r
const productSlice = createSlice({\r
  name: "products",\r
  initialState,\r
  reducers: {},\r
\r
  extraReducers: (builder) => {\r
    builder\r
\r
      // Pending\r
      .addCase(fetchProducts.pending, (state) => {\r
        state.loading = true;\r
        state.error = null;\r
      })\r
\r
      // Fulfilled\r
      .addCase(fetchProducts.fulfilled, (state, action) => {\r
        state.loading = false;\r
        state.products = action.payload;\r
      })\r
\r
      // Rejected\r
      .addCase(fetchProducts.rejected, (state, action) => {\r
        state.loading = false;\r
        state.error = action.payload;\r
      });\r
  },\r
});\r
\r
export default productSlice.reducer;`;export{e as default};