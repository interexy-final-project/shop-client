import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./user.actions";
import { ProductState } from "../types/user-state.type";

const initialState: ProductState = {
  user: null,
  pending: {
    user: false,
  },
  errors: {
    user: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.pending.user = true;
        state.errors.user = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.pending.user = false;
        state.errors.user = null;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state, action: any & { payload: any }) => {
        state.pending.user = false;
        state.errors.user = action.payload.message;
      });
  },
});
