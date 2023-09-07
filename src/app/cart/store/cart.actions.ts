import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "../../../repository";
import { CartItemDto } from "../types/cart-item-dto.type";
import { ProductDto } from "../../category/types/product-dto.type";

export const getCartItems = createAsyncThunk<CartItemDto[], string>(
  "GET/cart items",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/cart/user/${userId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const getProducts = createAsyncThunk<ProductDto[], string[]>(
  "GET/products",
  async (productIds, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/products/byIds`, {
        params: productIds,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const updateCartItem = createAsyncThunk<
  CartItemDto,
  Partial<CartItemDto>
>("PUT/cartitem", async (updatedCartItem, { rejectWithValue }) => {
  try {
    const response = await repository.put(
      `/cart/${updatedCartItem.id}`,
      updatedCartItem,
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

export const deleteCartItem = createAsyncThunk<CartItemDto, string>(
  "DELETE/cartitem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await repository.delete(`/cart/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
