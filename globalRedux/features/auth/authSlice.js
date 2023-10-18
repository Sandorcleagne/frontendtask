"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenResp: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokenCheckResp: (state, action) => {
      state.tokenResp = action.payload;
    },
  },
});

export const { tokenCheckResp } = authSlice.actions;

export default authSlice.reducer;
