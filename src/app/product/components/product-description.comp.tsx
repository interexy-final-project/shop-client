import { Stack, Box, Typography, styled } from "@mui/material";
import React from "react";
import { ProductDto } from "../../../types/product-dto.type";
import { useTranslation } from "react-i18next";

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
    <Stack
      spacing={4}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Typography variant="t1">{t("productDescription.title")}</Typography>
      </Box>
      <Typography variant="t7" alignContent={"center"}>
        {product?.description}
      </Typography>
    </Stack>
  );
};

export default ProductDescription;
