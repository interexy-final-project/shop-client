import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../components/product-card.comp";
import { ProductDto } from "../../category/types/product-dto.type";
interface SimilarProductsProps {
  products: ProductDto[];
}
const SimilarProducts: React.FC<SimilarProductsProps> = ({
  products,
}): JSX.Element => {
  return (
    <Grid
      direction="row"
      justifyContent="center"
      spacing={4}
      flexWrap={"wrap"}
      container
    >
      {products.map((product) => (
        <Grid item key={product.name}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SimilarProducts;
