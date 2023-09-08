import { BaseState } from "../../../types/base-state.type";
import { UserDto } from "./user-dto.type";

export interface ProductState extends BaseState {
  user: UserDto | null;
  pending: {
    user: boolean;
  };
  errors: {
    user: string | null;
  };
}
