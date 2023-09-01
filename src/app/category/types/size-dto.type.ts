import { ProductSizes } from "../../../enums/product-sizes.enum";
import { UUIDDto } from "../../../types/uuid-dto.type";

export interface SizeDto extends UUIDDto {
  size: ProductSizes;
}
