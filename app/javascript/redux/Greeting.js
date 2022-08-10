import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk("greeting/fetchGreeting", async () => {
  const { data } = await axios.get("/api/v1/messages");
  return data;
});

export const greetingSlice = createSlice({
    name: "greeting",
    initialState: {
        value: "",
    },
    reducers: {},
    extraReducers: {
        [fetchGreeting.fulfilled]: (state, action) => {
            state.value = action.payload;
        }
    }
});

export default greetingSlice.reducer;