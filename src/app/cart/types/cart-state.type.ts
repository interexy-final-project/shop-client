import { BaseState } from "../../../types/base-state.type";
import { ProductDto } from "../../../types/product-dto.type";
import { CartItemDto } from "./cart-item-dto.type";

export interface CartState extends BaseState {
  cartItems: CartItemDto[];
  pending: {
    cartItems: boolean;
  };
  errors: {
    cartItems: string | null;
  };
}
