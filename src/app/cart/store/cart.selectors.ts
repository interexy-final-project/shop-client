import { type RootState } from "../../../store";
import { CartItemDto } from "../types/cart-item-dto.type";
export const cartItemsSelector = (state: RootState): CartItemDto[] =>
  state.cart.cartItems;

export const selectCart = (state: RootState) => state.cart;
