import { faker } from "@faker-js/faker";
import { TreeNode } from "../types/tree-node.type";
import { Product } from "../types/product.type";

export interface ProductListParams {
  type?: string;
  kind?: string;
}

export function fetchProducts(params: ProductListParams) {
  console.log("Called backend with params:", params);
  const mockProducts: Product[] = faker.datatype
    .array(5)
    .map((_: any, index: any) => ({
      id: index + 1, // Incrementing id
      name: faker.commerce.productName(),
      img: faker.image.nature(), // Generating a mock image path
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
    }));

  return new Promise<Product[]>((resolve) =>
    setTimeout(() => resolve(mockProducts), 500),
  );
}
