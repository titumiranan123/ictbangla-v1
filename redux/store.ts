import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import cartReducer from "./cartSlice"
import uploadSlice from "./uploadSlice"
const store = configureStore({
  reducer: {
    course: courseReducer,
    items: cartReducer,
    upload:uploadSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
