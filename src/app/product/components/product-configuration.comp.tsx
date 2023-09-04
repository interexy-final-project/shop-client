import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SizeSelector from "./size-selector.comp";
import ColorSelector from "./color-selector.comp";
import l from "../../../lang/l";
import { ProductDto } from "../../category/types/product-dto.type";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/store/cart.actions";
import { AppDispatch } from "../../../store";

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
  const availableSizes = ["XS", "S", "M", "L", "XL"];
  const availableColors = ["red", "green", "black", "orange"];
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSizeSelection = (size: string): void => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color: string): void => {
    setSelectedColor(color);
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
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
            {l("productConfiguration.add")}
          </Button>
          <Button variant="shop-price-button">
            {" "}
            {l("productConfiguration.price")}
          </Button>
        </Stack>
      </Item>
    </Stack>
  );
};

export default ProductConfiguration;
