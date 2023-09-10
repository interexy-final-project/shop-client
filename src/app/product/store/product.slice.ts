import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types/product-state.type";
import { getProduct } from "./product.actions";

const initialState: ProductState = {
  product: null,
  pending: {
    product: false,
  },
  errors: {
    product: null,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ============ GET PRODUCT ============ //
      .addCase(getProduct.pending, (state) => {
        state.pending.product = true;
        state.errors.product = null;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.pending.product = false;
        state.product = payload;
      })
      .addCase(getProduct.rejected, (state, action: any & { payload: any }) => {
        state.pending.product = false;
        state.errors.product = action.payload.message;
      });
  },
});
