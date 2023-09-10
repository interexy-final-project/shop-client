import { createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "../types/checkout-state.type";
import { createOrder, getAddress } from "./checkout.actions";

const initialState: CheckoutState = {
  address: null,
  orderFailed: false,
  pending: {
    address: false,
    cartItems: false,
    order: false,
  },
  errors: {
    address: null,
    cartItems: null,
    order: null,
  },
};

export const checkoutSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ============ GET ADDRESS ============ //
      .addCase(getAddress.pending, (state) => {
        state.pending.address = true;
        state.errors.address = null;
      })
      .addCase(getAddress.fulfilled, (state, { payload }) => {
        state.pending.address = false;
        state.address = payload;
        state.orderFailed = false;
      })
      .addCase(getAddress.rejected, (state, action: any & { payload: any }) => {
        state.pending.address = false;
        state.errors.address = action.payload.message;
        state.orderFailed = true;
      });

    builder
      // ============ CREATE ORDER ============ //
      .addCase(createOrder.pending, (state) => {
        state.pending.order = true;
        state.errors.order = null;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.pending.order = false;
      })
      .addCase(
        createOrder.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.order = true;
          state.errors.order = action.error.message;
        },
      );
  },
});
