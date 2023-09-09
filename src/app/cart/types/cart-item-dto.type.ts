import { ProductColors } from "../../../enums/product-colors.enum";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { UUIDDto } from "../../../types/uuid-dto.type";
import { ProductDto } from "../../../types/product-dto.type";
export interface CartItemDto extends UUIDDto {
  userId: string;

  productId: string;

  quantity: number;
  color: ProductColors;
  size: ProductSizes;
  product: ProductDto;
}
