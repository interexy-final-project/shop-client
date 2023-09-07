import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShippingAddressDto } from "../types/address-dto.type";
import repository from "../../../repository";
import { CartItemDto } from "../../cart/types/cart-item-dto.type";
import { OrderDto } from "../types/order-dto.type";

export const getAddress = createAsyncThunk<ShippingAddressDto, string>(
  "GET/shippingAddress",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/shipping-address/${userId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue("error");
    }
  },
);

export const createOrder = createAsyncThunk<void, OrderDto>(
  "POST/createOrder",
  async (orderDetails, { rejectWithValue }) => {
    try {
      const response = await repository.post(`/order`, orderDetails);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

// export const updateCartItem = createAsyncThunk<
//   CartItemDto,
//   Partial<CartItemDto>
// >("PUT/cartitem", async (updatedCartItem, { rejectWithValue }) => {
//   try {
//     console.log(updatedCartItem);
//     const response = await repository.put(
//       `/cart/${updatedCartItem.id}`,
//       updatedCartItem,
//     );
//     return response.data;
//   } catch (error: any) {
//     return rejectWithValue(error);
//   }
// });
