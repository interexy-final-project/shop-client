import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type CartItem, type ICartSliceState } from "../types/cart.types";
import { calcTotalPrice, getCartFromDb } from "../../../utils/calcTotalPrice";
import { addToCart } from "./cart.actions";

const initialState: ICartSliceState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        //спинер
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(addToCart.rejected, (state, action) => {
        console.error(
          "Произошла ошибка при добавлении товара:",
          action.payload,
        );
      });
  },
});

export default cartSlice.reducer;

//DELETE FROM HERE//

// addItem(state, action: PayloadAction<CartItem>) {
//   const findItem = state.items.find((obj) => {
//     return (
//       obj.id === action.payload.id &&
//       obj.size === action.payload.size &&
//       obj.color === action.payload.color
//     );
//   });
//   if (findItem) {
//     findItem.count++;
//   } else {
//     state.items.push({ ...action.payload, count: 1 });
//   }

//   state.totalPrice = calcTotalPrice(state.items);
// },
// minusItem(state, action: PayloadAction<CartItem>) {
//   const findItem = state.items.find((obj) => {
//     return (
//       obj.id === action.payload.id &&
//       obj.color === action.payload.color &&
//       obj.size === action.payload.size
//     );
//   });
//   if (findItem) {
//     findItem.count--;
//     state.totalPrice -= findItem.price;
//   }
// },
// removeItem(state, action: PayloadAction<CartItem>) {
//   const findItem = state.items.find((obj) => {
//     return (
//       obj.id === action.payload.id &&
//       obj.size === action.payload.size &&
//       obj.color === action.payload.color
//     );
//   });
//   if (findItem) {
//     state.totalPrice -= findItem.price * findItem.count;
//   }
//   state.items = state.items.filter((obj) => {
//     return (
//       obj.id !== action.payload.id ||
//       obj.size !== action.payload.size ||
//       obj.color !== action.payload.color
//     );
//   });
// },
