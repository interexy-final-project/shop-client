import React from "react";
import Box from "@mui/material/Box";
import productImg from "../../../assets/images/product-details-mock.png";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import l from "../../../lang/l";

const StyledImage = styled("img")({
  flexShrink: 1,
  maxWidth: "100%",
  height: "500px",
  objectFit: "cover",
  flex: 1,
});

const SliderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightgray.main,
}));

const ProductSlider: React.FC = () => {
  return (
    <Stack direction="row" justifyContent={"flex-end"}>
      <SliderBox>{l("slider.title")}</SliderBox>
      <Box>
        <StyledImage src={productImg} alt="Product img" />
      </Box>
    </Stack>
  );
};

export default ProductSlider;
