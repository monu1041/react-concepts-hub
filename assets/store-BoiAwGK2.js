var e=`import { configureStore } from "@reduxjs/toolkit";\r
import notificationReducer from "../features/notifications/notificationSlice";\r
\r
export const store = configureStore({\r
  reducer: {\r
    notification: notificationReducer,\r
  },\r
});`;export{e as default};