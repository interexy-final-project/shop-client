import { ProductColors } from "../../../enums/product-colors.enum";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { UUIDDto } from "../../../types/uuid-dto.type";
import { ProductDto } from "../../category/types/product-dto.type";

export interface CartItem extends UUIDDto {
  size: ProductSizes;
  color: ProductColors;
  userId: string;
  productId: string;
  quantity: number;
  product: ProductDto;
}

export interface ICartSliceState {
  items: CartItem[];
}
