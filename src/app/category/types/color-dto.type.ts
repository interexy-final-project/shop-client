import { ProductColors } from "../../../enums/product-colors.enum";
import { UUIDDto } from "../../../types/uuid-dto.type";

export interface ColorDto extends UUIDDto {
  color: ProductColors;
}
