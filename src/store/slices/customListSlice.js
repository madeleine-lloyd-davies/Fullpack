import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const customListSlice = createSlice({
  name: "customList",
  initialState: {
    toDo: [],
    complete: [],
    inactive: [],
  },
  reducers: {
    addCustomCat: (state, action) => {
      state.toDo.push(action.payload);
    },
  },
});

export const selectCustomList = (state) => state.customListSlice;
export default customListSlice.reducer;
export const { addCustomCat } = customListSlice.actions;
