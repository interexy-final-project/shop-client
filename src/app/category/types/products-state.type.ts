import { ProductCategories } from "../../../enums/product-categories.enum";
import { ProductColors } from "../../../enums/product-colors.enum";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { ProductTypes } from "../../../enums/product-types.enum";
import { BaseState } from "../../../types/base-state.type";
import { ColorDto } from "./color-dto.type";
import { Filter } from "./filter.type";
import { ProductDto } from "./product-dto.type";

export interface CategoryState extends BaseState {
  products: ProductDto[];
  filter: Filter;
  pending: {
    products: boolean;
  };
  errors: {
    products: string | null;
  };
}
