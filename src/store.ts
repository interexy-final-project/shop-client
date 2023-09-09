import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsSlice } from "./app/category/store/category.slice";
import { cartSlice } from "./app/cart/store/cart.slice";
import { checkoutSlice } from "./app/payment/store/checkout.slice";
import { authSlice } from "./app/auth/store/auth.slice";
import { userSlice } from "./app/user/store/user.slice";
import { productSlice } from "./app/product/store/product.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    checkout: checkoutSlice.reducer,
    product: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): any => useDispatch<AppDispatch>();
