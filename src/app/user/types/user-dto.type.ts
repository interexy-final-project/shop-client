import { UserStatuses } from "../enums/user-statuses.enum";

export interface UserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  status: UserStatuses;
}
