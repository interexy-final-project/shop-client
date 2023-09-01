import { type RootState } from "../../../store";

export const selectCart = (state: RootState) => state.cartSlice;
