import {
  Stack,
  Box,
  Typography,
  styled,
  Button,
  CardMedia,
  Card,
  CardActions,
} from "@mui/material";
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
    <Box p={"1rem"}>
      <Card key={product?.name}>
        <CardMedia
          src={product?.image}
          component="img"
          height="400"
          alt={product?.name}
          onClick={handleClick}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"0 1rem"}
        >
          <Typography variant="t8" width="15rem">
            {product?.name}
          </Typography>

          <CardActions>
            <Button onClick={handleClick}>{`${product?.price}$`}</Button>
          </CardActions>
        </Stack>
      </Card>
    </Box>
  );
};

export default ProductCard;
