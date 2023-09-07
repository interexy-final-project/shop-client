import React from "react";
import Box from "@mui/material/Box";
import productImg from "../../../assets/images/product-details-mock.png";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

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

const ProductSlider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" justifyContent={"flex-end"}>
      <SliderBox>{t("slider.title")}</SliderBox>
      <Box>
        <StyledImage src={productImg} alt="Product img" />
      </Box>
    </Stack>
  );
};

export default ProductSlider;
