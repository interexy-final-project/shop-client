import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductDto } from "../../../types/product-dto.type";
import repository from "../../../repository";
import { ColorDto } from "../types/color-dto.type";
import { SizeDto } from "../types/size-dto.type";
import { Filter } from "../types/filter.type";

export const getProducts = createAsyncThunk<
  { products: ProductDto[]; count: number },
  Filter
>("GET/products", async (filter, { rejectWithValue }) => {
  try {
    const response = await repository.get("/products/byFilters", {
      params: filter,
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const getProductsByCategory = createAsyncThunk<ProductDto[], string>(
  "GET/category/:categoryId",
  async (category, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/products/${category}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getColors = createAsyncThunk<ColorDto[]>(
  "GET/colors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await repository.get("/fetch-properties/getColors");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getSizes = createAsyncThunk<SizeDto[]>(
  "GET/sizes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await repository.get("/fetch-properties/getSizes");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
