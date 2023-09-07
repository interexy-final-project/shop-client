import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SizeSelector from "./size-selector.comp";
import ColorSelector from "./color-selector.comp";
import { ProductDto } from "../../category/types/product-dto.type";
import { useTranslation } from "react-i18next";

const Item = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(4.5),
  paddingTop: theme.spacing(2.2),
}));

interface ProductConfigurationProps {
  product: ProductDto;
}

const ProductConfiguration: React.FC<ProductConfigurationProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  const availableSizes = ["XS", "S", "M", "L", "XL"];
  const availableColors = ["red", "green", "black", "orange"];
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSizeSelection = (size: ProductSizes): void => {
    setSelectedSize(size);
    console.log("size", size);
  };

  const handleColorSelection = (color: ProductColors): void => {
    setSelectedColor(color);
    console.log("color", color);
  };

  // const handleProductSelection = (product: ProductDto): void => {
  //   setSelectedProduct(product);
  // };

  const dispatch = useDispatch<AppDispatch>();
  const userId = "7706ed94-76f4-40ee-90de-751b6bcc2741";
  const productId = "87e331e0-0b1c-403a-a7da-729226dd2b5c";
  const size = "";
  const color = "";

  const products = useSelector((state: RootState) => state.cart.cartItems);

  console.log(products);

  const handleAddToCart = async () => {
    try {
      if (selectedSize && selectedColor) {
        const cartItem = {
          productId,
          size: selectedSize,
          color: selectedColor,
          userId,
          quantity: 1,
        };

        dispatch(addToCart(cartItem));
      } else {
        console.log("Please select a product, size, and color.");
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <Stack spacing={2}>
      <Item>
        <Breadcrumbs aria-label="breadCrumbs" separator={<ChevronRightIcon />}>
          <Typography variant="t9">Shop</Typography>
          <Typography variant="t9">Woman</Typography>
          <Typography variant="t9">Top</Typography>
        </Breadcrumbs>
        <Grid></Grid>
      </Item>
      <Item>
        <Typography variant="t1">
          Raven hoodie with black colored design
        </Typography>
      </Item>
      <Item>
        <SizeSelector
          availableSizes={availableSizes}
          selectedSize={selectedSize}
          onSelectSize={handleSizeSelection}
        />
      </Item>
      <Item>
        <ColorSelector
          availableColors={availableColors}
          selectedColor={selectedColor}
          onSelectColor={handleColorSelection}
        />
      </Item>
      <Item>
        <Stack direction="row" spacing={4}>
          <Button
            onClick={handleAddToCart}
            variant="shop-add-to-card"
            startIcon={<AddShoppingCartIcon />}
          >
            {t("productConfiguration.add")}
          </Button>
          <Button variant="shop-price-button">
            {" "}
            {t("productConfiguration.price")}
          </Button>
        </Stack>
      </Item>
    </Stack>
  );
};

export default ProductConfiguration;
