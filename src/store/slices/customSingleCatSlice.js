import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const customSingleCatSlice = createSlice({
  name: "customSingleCat",
  initialState: {
    name: "",
    items: [],
  },
  reducers: {
    addItemToCat: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCat: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const selectSingleCat = (state) => state.customSingleCat;
export default customSingleCatSlice.reducer;
export const { addItemToCat, removeItemFromCat } = customSingleCatSlice.actions;
