import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "../../../repository";
import { ProductDto } from "../../../types/product-dto.type";

export const getProduct = createAsyncThunk<ProductDto, string>(
  "GET/product",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/products/product/${productId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getJeansProduct = createAsyncThunk<ProductDto, string>(
  "GET/jeans product",
  async (productId, { rejectWithValue }) => {
    try {
      console.log("2nd");
      const response = await repository.get(`/jeans-type/${productId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getShirtProduct = createAsyncThunk<ProductDto, string>(
  "GET/shirt product",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/shirts/${productId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getTShirtProduct = createAsyncThunk<ProductDto, string>(
  "GET/t-shirt product",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/t-shirt-type/${productId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
