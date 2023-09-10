import { Stack, Box, Typography, styled, Button } from "@mui/material";
import React from "react";
import { ProductDto } from "../../../types/product-dto.type";

interface ProductCardProps {
  product: ProductDto | null;
}

const ProductImage = styled("img")(() => ({
  flexShrink: 1,
  width: "282px",
  height: "370px",
  flex: 1,
  borderRadius: "12px",
}));

const ProductCard: React.FC<ProductCardProps> = ({ product }): JSX.Element => {
  return (
    <Stack key={product?.name}>
      <Box>
        <ProductImage src={product?.image} alt={product?.name} />
      </Box>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="t8">{product?.name}</Typography>
          </Box>
          <Box>
            <Button variant="shop-price-button-similar-bar">
              {product?.price}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductCard;
