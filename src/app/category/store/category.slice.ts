import { createSlice } from "@reduxjs/toolkit";

import { CategoryState } from "../types/products-state.type";
import {
  getColors,
  getProducts,
  getProductsByCategory,
  getSizes,
} from "./category.actions";
import { ProductCategories } from "../../../enums/product-categories.enum";

const initialState: CategoryState = {
  category: "",
  products: [],
  colors: [],
  sizes: [],
  filter: {
    category: null,
    type: null,
    colors: [],
    sizes: [],
    isPriceAsc: false,
  },
  pending: {
    products: false,
    colors: false,
    sizes: false,
  },
  errors: {
    products: null,
    colors: null,
    sizes: null,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPrice(state, action) {
      state.filter.isPriceAsc = action.payload;
      console.log(action.payload);
    },
    setCategory(state, action) {
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload,
        },
      };
    },
    setType(state, action) {
      return {
        ...state,
        filter: {
          ...state.filter,
          type: action.payload,
        },
      };
    },
    setSizes(state, action) {
      return {
        ...state,
        filter: {
          ...state.filter,
          sizes: action.payload,
        },
      };
    },
    setColors(state, action) {
      return {
        ...state,
        filter: {
          ...state.filter,
          colors: action.payload,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // ============ GET PRODUCTS ============ //
      .addCase(getProducts.pending, (state) => {
        state.pending.products = true;
        state.errors.products = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.pending.products = false;
        state.products = payload;
      })
      .addCase(
        getProducts.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.products = false;
          state.errors.products = action.payload.message;
        },
      );

    // ============ GET COLORS ============ //
    builder
      .addCase(getColors.pending, (state) => {
        state.pending.colors = true;
        state.errors.colors = null;
      })
      .addCase(getColors.fulfilled, (state, { payload }) => {
        state.pending.colors = false;
        state.colors = payload.map((colorObject) => colorObject.color);
      })
      .addCase(getColors.rejected, (state, action: any & { payload: any }) => {
        state.pending.colors = false;
        state.errors.colors = action.payload.message;
      });

    // ============ GET SIZES ============ //
    builder
      .addCase(getSizes.pending, (state) => {
        state.pending.sizes = true;
        state.errors.sizes = null;
      })
      .addCase(getSizes.fulfilled, (state, { payload }) => {
        state.pending.sizes = false;
        state.sizes = payload.map((sizeObject) => sizeObject.size);
      })
      .addCase(getSizes.rejected, (state, action: any & { payload: any }) => {
        state.pending.sizes = false;
        state.errors.sizes = action.payload.message;
      });

    // ============ GET PRODUCTS BY CATEGORY ============ //
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.pending.products = true;
        state.errors.products = null;
      })
      .addCase(getProductsByCategory.fulfilled, (state, { payload }) => {
        state.pending.products = false;
        state.products = payload;
      })
      .addCase(
        getProductsByCategory.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.products = false;
          state.errors.products = action.payload.message;
        },
      );
  },
});

export const { setCategory, setColors, setSizes, setType, setPrice } =
  productsSlice.actions;
