import { RootState } from "../../../store";

export const addressSelector = (state: RootState) => state.checkout.address;
export const pendingSelector = (state: RootState) => state.checkout.pending;
export const orderErrorsSelector = (state: RootState) =>
  state.checkout.errors.order;
export const orderFailed = (state: RootState) => state.checkout.orderFailed;
