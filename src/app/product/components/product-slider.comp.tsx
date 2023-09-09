import React from "react";
import Box from "@mui/material/Box";
import productImg from "../../../assets/images/product-details-mock.png";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ProductDto } from "../../../types/product-dto.type";

const StyledImage = styled("img")({
  flexShrink: 1,
  maxWidth: "100%",
  height: "500px",
  objectFit: "cover",
  flex: 1,
});

const SliderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGray.main,
}));

interface ProductSliderProps {
  product: ProductDto | null;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  product,
}: ProductSliderProps) => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" justifyContent={"flex-end"}>
      <Box>
        <StyledImage src={product?.images[0]} alt="Product img" />
      </Box>
    </Stack>
  );
};

export default ProductSlider;
