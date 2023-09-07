import { createSlice } from "@reduxjs/toolkit";

import { addToCart } from "./cart.actions";
import { deleteCartItem, getCartItems, updateCartItem } from "./cart.actions";
import { CartState } from "../types/cart-state.type";
import { CartItemDto } from "../types/cart-item-dto.type";

const initialState: CartState = {
  cartItems: [],
  pending: {
    cartItems: false,
  },
  errors: {
    cartItems: null,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // ============ GET CART ITEMS ============ //
      .addCase(getCartItems.pending, (state) => {
        state.pending.cartItems = true;
        state.errors.cartItems = null;
      })
      .addCase(getCartItems.fulfilled, (state, { payload }) => {
        state.pending.cartItems = false;
        console.log(payload, "payload");
        state.cartItems = payload;
      })
      .addCase(
        getCartItems.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.cartItems = false;
          state.errors.cartItems = action.payload.message;
        },
      );

    builder
      // ============ UPDATE CART ITEM ============ //
      .addCase(updateCartItem.pending, (state) => {
        state.pending.cartItems = true;
        state.errors.cartItems = null;
      })
      .addCase(updateCartItem.fulfilled, (state, { payload }) => {
        state.pending.cartItems = false;
        const updatedCartItem = payload;
        const newCartItems: CartItemDto[] = state.cartItems.map((c) => {
          return c.id === updatedCartItem.id ? updatedCartItem : c;
        });
        state.cartItems = newCartItems;
      })
      .addCase(
        updateCartItem.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.cartItems = false;
          state.errors.cartItems = action.payload.message;
        },
      );
    builder
      // ============ DELETE CART ITEM ============ //
      .addCase(deleteCartItem.pending, (state) => {
        state.pending.cartItems = true;
        state.errors.cartItems = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, { payload }) => {
        state.pending.cartItems = false;
        const deletedCartItem = payload;
        const newCartItems: CartItemDto[] = state.cartItems.filter(
          (c) => c.id != deletedCartItem.id,
        );
        state.cartItems = newCartItems;
        state.cartItems = newCartItems;
      })
      .addCase(
        deleteCartItem.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.cartItems = false;
          state.errors.cartItems = action.payload.message;
        },
      );
    builder
      // ============ ADD ITEM TO CART ============ //

      .addCase(addToCart.pending, (state) => {
        state.pending.cartItems = true;
        state.errors.cartItems = null;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.pending.cartItems = false;
        state.cartItems = payload;
      })
      .addCase(addToCart.rejected, (state, action: any & { payload: any }) => {
        state.pending.cartItems = false;
        state.errors.cartItems = action.payload.message;
      });
  },
});
export const { setProducts } = cartSlice.actions;
