import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsSlice } from "./app/category/store/category.slice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): any => useDispatch<AppDispatch>();
