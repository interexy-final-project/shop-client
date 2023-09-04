import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem } from "../types/cart.types";
import { ProductDto } from "../../category/types/product-dto.type";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cartItem: ProductDto, { rejectWithValue }) => {
    try {
      const response = await fetch("/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Что-то пошло не так");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
