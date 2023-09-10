import { Stack, Box, Typography, styled, Button } from "@mui/material";
import React from "react";
import { ProductDto } from "../../types/product-dto.type";
import { RoutesEnum } from "../../routes.enum";
import { Navigate, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${RoutesEnum.PRODUCT.replace("/:productId", "")}/${product?.id}`);
    console.log(`${RoutesEnum.PRODUCT}/${product?.id}`);
  };

  return (
    <Stack key={product?.name}>
      <Box>
        <ProductImage
          src={product?.image}
          alt={product?.name}
          onClick={handleClick}
        />
      </Box>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="t8">{product?.name}</Typography>
          </Box>
          <Box>
            <Button
              onClick={handleClick}
              variant="shop-price-button-similar-bar"
            >
              {`${product?.price}$`}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductCard;
