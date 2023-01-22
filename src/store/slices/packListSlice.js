import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const packListSlice = createSlice({
  name: "packList",
  initialState: { toDo: [], complete: [], inactive: [] },
  //note: packData is an array of category objects--{name:, description:}
  //that will be the initial to do array on basic to do pages
  reducers: {
    completeToDo: (state, action) => {
      //1. action.payload should represent one object that is currently in the toDo array
      //2. remove it from toDo array
      state.toDo = state.toDo.filter((obj) => obj.name !== action.payload.name);
      //3. push it to complete array
      state.complete.push(action.payload);
    },
  },
});

export const selectPackList = (state) => state.packList;
export default packListSlice.reducer;
