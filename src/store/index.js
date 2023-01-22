import { configureStore } from "@reduxjs/toolkit";
import packListReducer from "./slices/packListSlice";

const store = configureStore({
  reducer: {
    packList: packListReducer,
  },
});

export default store;
