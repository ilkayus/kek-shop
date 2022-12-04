import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/commonData/dataSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
