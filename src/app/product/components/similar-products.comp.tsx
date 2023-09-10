import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../../components/product-card.comp";
import { ProductDto } from "../../../types/product-dto.type";
import { getProducts } from "../../category/store/category.actions";
import { AppDispatch } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../category/store/category.selectors";
import { useTranslation } from "react-i18next";
interface SimilarProductsProps {
  product: ProductDto | null;
}
const SimilarProducts: React.FC<SimilarProductsProps> = ({
  product,
}): JSX.Element => {
  const similarProducts = useSelector(productsSelector);
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    if (product?.type) {
      dispatch(getProducts({ type: product?.type, count: 10 }));
      console.log(similarProducts, "similarProducts11");
    }
  }, [product]);
  return (
    <Stack spacing={4} justifyContent={"center"} alignItems={"center"}>
      <Box>
        <Typography variant="t1">{t("similarProducts.title")}</Typography>
      </Box>
      <Stack
        direction="row"
        display={"flex"}
        justifyContent="center"
        spacing={4}
        flexWrap={"wrap"}
      >
        {similarProducts
          .filter((p) => p.id !== product?.id)
          .map((p) => (
            <Stack key={p?.name}>
              <ProductCard product={p ?? null} />
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export default SimilarProducts;
