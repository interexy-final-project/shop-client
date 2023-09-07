import { type RootState } from "../../../store";
import { ProductDto } from "../../category/types/product-dto.type";
import { CartItemDto } from "../types/cart-item-dto.type";
import { CartState } from "../types/cart-state.type";
export const cartItemsSelector = (state: RootState): CartItemDto[] =>
  state.cart.cartItems;

export const selectCart = (state: RootState) => state.cart;
