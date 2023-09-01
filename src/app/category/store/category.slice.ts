import { createSlice } from "@reduxjs/toolkit";

import { CategoryState } from "../types/products-state.type";
import { getColors, getProducts, getSizes } from "./category.actions";
import { ProductCategories } from "../../../enums/product-categories.enum";

const initialState: CategoryState = {
  products: [],
  filter: {
    category: null,
    type: null,
    colors: [],
    sizes: [],
  },
  pending: {
    products: false,
  },
  errors: {
    products: null,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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

    // // ============ GET COLORS ============ //
    // builder
    //   .addCase(getColors.pending, (state) => {
    //     state.pending.colors = true;
    //     state.errors.colors = null;
    //   })
    //   .addCase(getColors.fulfilled, (state, { payload }) => {
    //     state.pending.colors = false;
    //     state.colors = payload.map((colorObject) => colorObject.color);
    //   })
    //   .addCase(getColors.rejected, (state, action: any & { payload: any }) => {
    //     state.pending.colors = false;
    //     state.errors.colors = action.payload.message;
    //   });

    // // ============ GET SIZES ============ //
    // builder
    //   .addCase(getSizes.pending, (state) => {
    //     state.pending.sizes = true;
    //     state.errors.sizes = null;
    //   })
    //   .addCase(getSizes.fulfilled, (state, { payload }) => {
    //     state.pending.sizes = false;
    //     state.sizes = payload.map((sizeObject) => sizeObject.size);
    //   })
    //   .addCase(getSizes.rejected, (state, action: any & { payload: any }) => {
    //     state.pending.sizes = false;
    //     state.errors.sizes = action.payload.message;
    //   });

    // // ============ GET PRODUCTS BY SIZES ============ //

    // builder
    //   .addCase(getProductsBySizes.pending, (state) => {
    //     state.pending.products = true;
    //     state.errors.products = null;
    //   })
    //   .addCase(getProductsBySizes.fulfilled, (state, { payload }) => {
    //     state.pending.products = false;
    //     state.products = payload;
    //   })
    //   .addCase(
    //     getProductsBySizes.rejected,
    //     (state, action: any & { payload: any }) => {
    //       state.pending.products = false;
    //       state.errors.products = action.payload.message;
    //     },
    //   );
  },
});

export const { setCategory, setColors, setSizes, setType } =
  productsSlice.actions;
