import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useCallback, useMemo } from "react";
import { AppDispatch, useAppDispatch } from "../../../store";
import { CartItem } from "../types/cart.types";
import debounce from "lodash.debounce";
import ItemImage from "../../../assets/imgs/item.png";
import { theme } from "../../../assets/themes";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { ProductColors } from "../../../enums/product-colors.enum";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../store/cart.actions";

type TCartItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  size: ProductSizes;
  color: ProductColors;
  price: number;
  shipping: string;
  subtotal: number;
  cartItemId: string;

  count: number;
};

export const CartItemBlock: React.FC<TCartItemProps> = ({
  id,
  imageUrl,
  title,
  size,
  color,
  price,
  shipping,
  subtotal,
  count,
  cartItemId,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      updateCartItem({
        id: cartItemId,
        quantity: count + 1,
      }),
    );
  };

  const handleMinusItem = () => {
    dispatch(
      updateCartItem({
        id: cartItemId,
        quantity: count - 1,
      }),
    );
  };

  const handleDeleteItem = () => {
    dispatch(deleteCartItem(cartItemId));
  };

  const debouncedAddItemHandler = useMemo(
    () => debounce(handleAddItem, 300),
    [handleAddItem],
  );

  const debouncedMinusItemHandler = useMemo(
    () => debounce(handleMinusItem, 300),
    [handleMinusItem],
  );
  return (
    <Stack
      component="div"
      direction="row"
      sx={{
        p: 6,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={3}>
        <Box
          component="img"
          src={imageUrl}
          alt="product-image"
          width="105px"
          height="120px"
        />

        <Stack>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="label">Color: {color}</Typography>
          <Typography variant="label">Size: {size}</Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        direction="row"
        spacing={30}
      >
        <Typography variant="h6">${price}</Typography>

        <Stack direction="row" alignItems="center">
          <IconButton
            disabled={count <= 1}
            onClick={() => debouncedMinusItemHandler()}
          >
            <RemoveIcon />
          </IconButton>

          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={() => debouncedAddItemHandler()}>
            <AddIcon />
          </IconButton>
        </Stack>

        <Typography variant="h6">{shipping}</Typography>

        <Typography variant="h6">${subtotal} </Typography>

        <IconButton color="primary" onClick={handleDeleteItem}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
