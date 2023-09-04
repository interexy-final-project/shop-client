import { Action, AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ProductDto } from "../types/product-dto.type";
import repository from "../../../repository";
import { productsSlice } from "./category.slice";
import { ColorDto } from "../types/color-dto.type";
import { ProductColors } from "../../../enums/product-colors.enum";
import { SizeDto } from "../types/size-dto.type";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { Filter } from "../types/filter.type";

export const getProducts = createAsyncThunk<ProductDto[], Filter>(
  "GET/products",
  async (filter, { rejectWithValue }) => {
    try {
      const response = await repository.get("/products/byFilters", {
        params: filter,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
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
      return rejectWithValue(error);
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
      return rejectWithValue(error);
    }
  },
);
