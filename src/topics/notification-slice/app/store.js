import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "../features/notifications/notificationSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
  },
});