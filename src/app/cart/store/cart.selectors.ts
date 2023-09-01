import { type RootState } from "../../../store";
import { type ICartSliceState } from "../types/cart.types";
export const selectCart = (state: RootState): ICartSliceState =>
  state.cartSlice;
