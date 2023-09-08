import { PaymentMethods } from "../../../enums/payment-methods.enum";

export interface OrderDto {
  userId: string;
  total: number;
  address: object;
  paymentMethod: PaymentMethods;
}
