import { ProductCategories } from "../../../enums/product-categories.enum";
import { ProductColors } from "../../../enums/product-colors.enum";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { ProductTypes } from "../../../enums/product-types.enum";
import { BaseState } from "../../../types/base-state.type";
import { ColorDto } from "./color-dto.type";
import { Filter } from "./filter.type";
import { ProductDto } from "./product-dto.type";
import { SizeDto } from "./size-dto.type";

export interface CategoryState extends BaseState {
  category: string;
  products: ProductDto[];
  colors: ProductColors[];
  sizes: ProductSizes[];
  filter: Filter;
  pending: {
    products: boolean;
    colors: boolean;
    sizes: boolean;
  };
  errors: {
    products: string | null;
    colors: string | null;
    sizes: string | null;
  };
}
