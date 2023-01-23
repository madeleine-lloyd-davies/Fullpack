import { configureStore } from "@reduxjs/toolkit";
import packListReducer from "./slices/packListSlice";
import customListReducer from "./slices/customListSlice";

const store = configureStore({
  reducer: {
    packList: packListReducer,
    customList: customListReducer,
  },
});

export default store;
