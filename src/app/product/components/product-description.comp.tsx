import { Stack, Box, Typography, styled } from "@mui/material";
import React from "react";
import { ProductDto } from "../../../types/product-dto.type";
import { useTranslation } from "react-i18next";

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
  product: ProductDto | null;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Stack spacing={4} justifyContent={"center"} alignItems={"center"}>
      <Box>
        <Typography variant="t1">{t("productDescription.title")}</Typography>
      </Box>
      <TextBox>
        <Typography variant="t7">{product?.description}</Typography>
      </TextBox>
    </Stack>
  );
};

export default ProductDescription;
