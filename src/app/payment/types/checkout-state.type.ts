import { BaseState } from "../../../types/base-state.type";
import { CartItemDto } from "../../cart/types/cart-item-dto.type";
import { ShippingAddressDto } from "./address-dto.type";

export interface CheckoutState {
  address: ShippingAddressDto | null;
  orderFailed: boolean;
  pending: {
    address: boolean;
    cartItems: boolean;
    order: boolean;
  };
  errors: {
    address: string | null;
    cartItems: string | null;
    order: string | null;
  };
}
