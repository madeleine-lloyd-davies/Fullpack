import { configureStore } from "@reduxjs/toolkit";
import packListReducer from "./slices/packListSlice";
import customListReducer from "./slices/customListSlice";
import customSingleCatReducer from "./slices/customSingleCatSlice";

const store = configureStore({
  reducer: {
    packList: packListReducer,
    customList: customListReducer,
    customSingleCat: customSingleCatReducer,
  },
});

export default store;
