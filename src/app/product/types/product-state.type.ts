import { BaseState } from "../../../types/base-state.type";
import { ProductDto } from "../../../types/product-dto.type";

export interface ProductState extends BaseState {
  product: ProductDto | null;
  pending: {
    product: boolean;
  };
  errors: {
    product: string | null;
  };
}
