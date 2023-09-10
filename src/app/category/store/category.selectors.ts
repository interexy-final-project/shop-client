import { RootState } from "../../../store";

export const productsSelector = (state: RootState) => state.products.products;
export const colorsSelector = (state: RootState) =>
  state.products.filter.colors;
export const sizesSelector = (state: RootState) => state.products.filter.sizes;
export const filterSelector = (state: RootState) => state.products.filter;
export const pageSelector = (state: RootState) => state.products.filter.page;
export const countSelector = (state: RootState) => state.products.filter.count;
export const numberOfProductsSelector = (state: RootState) =>
  state.products.numberOfProducts;

export const productsByCategorySelector = (state: RootState) =>
  state.products.category;
