import { ProductCategories } from "../../../enums/product-categories.enum";
import { ProductColors } from "../../../enums/product-colors.enum";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { ProductStatuses } from "../../../enums/product-statuses.enum";
import { ProductTypes } from "../../../enums/product-types.enum";
import { UUIDDto } from "../../../types/uuid-dto.type";
import { ColorDto } from "./color-dto.type";

export interface ProductDto extends UUIDDto {
  name: string;
  price: number;
  images: string[];

  colors: ProductColors[];

  sizes: ProductSizes[];

  status: ProductStatuses;

  type: ProductTypes;

  description: string;

  amount: number;
  category: ProductCategories;
}
