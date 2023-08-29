import { Stack, Box, Typography, styled } from "@mui/material";
import React from "react";
import l from "../../../lang/l";

const TextBox = styled("p")(() => ({
  width: "50%",
}));

interface Product {
  name: string;
  img: string;
  price: string;
  description: string;
}

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
}): JSX.Element => {
  return (
    <Stack spacing={4} justifyContent={"center"} alignItems={"center"}>
      <Box>
        <Typography variant="t1">{l("productDescription.title")}</Typography>
      </Box>
      <TextBox>
        <Typography variant="t7">{product.description}</Typography>
      </TextBox>
    </Stack>
  );
};

export default ProductDescription;
