import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsSlice } from "./app/category/store/category.slice";
import { cartSlice } from "./app/cart/store/cart.slice";
import { checkoutSlice } from "./app/payment/store/checkout.slice";
import { authSlice } from "./app/auth/store/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): any => useDispatch<AppDispatch>();
