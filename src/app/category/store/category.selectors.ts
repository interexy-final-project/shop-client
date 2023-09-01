import { RootState } from "../../../store";

export const productsSelector = (state: RootState) => state.products.products;
export const colorsSelector = (state: RootState) =>
  state.products.filter.colors;
export const sizesSelector = (state: RootState) => state.products.filter.sizes;
export const filterSelector = (state: RootState) => state.products.filter;
