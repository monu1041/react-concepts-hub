var e=`import { createSlice } from "@reduxjs/toolkit";\r
\r
const initialState = {\r
  message: "",\r
  type: "",\r
  visible: false,\r
};\r
\r
const notificationSlice = createSlice({\r
  name: "notification",\r
\r
  initialState,\r
\r
  reducers: {\r
    showNotification: (state, action) => {\r
      state.message = action.payload.message;\r
      state.type = action.payload.type;\r
      state.visible = true;\r
    },\r
\r
    hideNotification: (state) => {\r
      state.message = "";\r
      state.type = "";\r
      state.visible = false;\r
    },\r
  },\r
});\r
\r
export const {\r
  showNotification,\r
  hideNotification,\r
} = notificationSlice.actions;\r
\r
export default notificationSlice.reducer;`;export{e as default};