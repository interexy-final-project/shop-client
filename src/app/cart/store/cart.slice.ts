import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type CartItem, type ICartSliceState } from "../types/cart.types";
import { calcTotalPrice, getCartFromDb } from "../../../utils/calcTotalPrice";
import {
  deleteCartItem,
  getCartItems,
  getProducts,
  updateCartItem,
} from "./cart.actions";
import { CartState } from "../types/cart-state.type";
import { CartItemDto } from "../types/cart-item-dto.type";

const { items, totalPrice } = getCartFromDb();

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
    resetCartItems(state) {
      state.cartItems = [];
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
      })
      .addCase(
        deleteCartItem.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.cartItems = false;
          state.errors.cartItems = action.payload.message;
        },
      );
  },
});

export const { resetCartItems } = cartSlice.actions;
