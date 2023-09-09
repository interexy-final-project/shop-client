import { RootState } from "../../../store";

export const userSelector = (state: RootState) => state.user;
export const userDetailsSelector = (state: RootState) => state.user.user;
