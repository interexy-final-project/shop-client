import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./product-card.comp";

interface Product {
  name: string;
  img: string;
  price: string;
  description: string;
}

interface SimilarProductsProps {
  products: Product[];
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
