import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SizeSelector from "./size-selector.comp";
import ColorSelector from "./color-selector.comp";
import { ProductDto } from "../../../types/product-dto.type";
import { useTranslation } from "react-i18next";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { ProductColors } from "../../../enums/product-colors.enum";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { addToCart } from "../../cart/store/cart.actions";
import { userDetailsSelector } from "../../user/store/user.selectors";
import useDecodeToken from "../../../utils/decode-token";

const Item = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(4.5),
  paddingTop: theme.spacing(2.2),
}));

interface ProductConfigurationProps {
  product: ProductDto | null;
}

const ProductConfiguration: React.FC<ProductConfigurationProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  const availableSizes = product?.sizes ?? null;
  const availableColors = product?.colors ?? null;
  const [selectedSize, setSelectedSize] = useState<ProductSizes | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColors | null>(
    null,
  );

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
  const decodedToken = useDecodeToken();
  const userId = decodedToken?.id;
  const productId = "f2ed637b-b0b6-43a0-8367-d913918ff080";
  const products = useSelector((state: RootState) => state.cart.cartItems);
  const user = useSelector(userDetailsSelector);

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
          <Typography variant="t9">{product?.category}</Typography>
          <Typography variant="t9">{product?.type}</Typography>
        </Breadcrumbs>
        <Grid></Grid>
      </Item>
      <Item>
        <Typography variant="t1">{product?.name}</Typography>
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
          <Button
            disableTouchRipple={true}
            variant="shop-price-button"
          >{`${product?.price}$`}</Button>
        </Stack>
      </Item>
    </Stack>
  );
};

export default ProductConfiguration;
