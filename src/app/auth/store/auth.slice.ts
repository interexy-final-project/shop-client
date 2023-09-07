import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, changePassword, resetPassword } from "./auth.actions";

const initialState = {
  userId: "",
  resetToken: "",
  pending: false,
  errors: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.pending = true;
        state.errors = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.errors = null;
        state.userId = payload.id;
      })
      .addCase(signUp.rejected, (state, action: any & { payload: any }) => {
        state.pending = false;
        state.errors = action.payload.message;
      })
      .addCase(signIn.pending, (state) => {
        state.pending = true;
        state.errors = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.errors = null;
        state.userId = payload.id;
      })
      .addCase(signIn.rejected, (state, action: any & { payload: any }) => {
        state.pending = false;
        state.errors = action.payload.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.pending = true;
        state.errors = null;
      })
      .addCase(changePassword.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.errors = null;
        state.userId = payload.id;
      })
      .addCase(
        changePassword.rejected,
        (state, action: any & { payload: any }) => {
          state.pending = false;
          state.errors = action.payload.message;
        },
      )
      .addCase(resetPassword.pending, (state) => {
        state.pending = true;
        state.errors = null;
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.errors = null;
        state.resetToken = payload;
      })
      .addCase(
        resetPassword.rejected,
        (state, action: any & { payload: any }) => {
          state.pending = false;
          state.errors = action.payload.message;
        },
      );
  },
});
