import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useCallback, useMemo, useState } from "react";
import { AppDispatch, useAppDispatch } from "../../../store";
import { CartItem } from "../types/cart.types";
import { useDebouncedCallback } from "use-debounce";
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
  subtotal,
  count,
  cartItemId,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(count);

  const handleAddItem = () => {
    setItemQuantity((prevState: number) => prevState + 1);
    update();
  };

  // const debouncedUpdate = useMemo(
  //   () =>
  //     debounce(() => {
  //       dispatch(
  //         updateCartItem({
  //           id: cartItemId,
  //           quantity: itemQuantity,
  //         }),
  //       );
  //     }, 2000),
  //   [handleAddItem],
  // );

  const update = useDebouncedCallback(
    () =>
      dispatch(
        updateCartItem({
          id: cartItemId,
          quantity: itemQuantity,
        }),
      ),
    1000,
  );

  const handleMinusItem = () => {
    setItemQuantity((prevState: number) => prevState - 1);
    update();
  };

  const handleDeleteItem = () => {
    dispatch(deleteCartItem(cartItemId));
  };

  return (
    <Stack
      component="div"
      direction="row"
      display="flex"
      justifyContent="space-between"
      width="100%"
      sx={{
        p: 6,
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
          <Typography variant="label">Color: {color} </Typography>
          <Typography variant="label">Size: {size} </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        direction="row"
        spacing={18}
      >
        <Typography variant="h6">$ {price}</Typography>

        <Stack direction="row" alignItems="center">
          <IconButton disabled={count <= 1} onClick={() => handleMinusItem()}>
            <RemoveIcon />
          </IconButton>

          <Typography variant="h6">{itemQuantity}</Typography>
          <IconButton onClick={() => handleAddItem()}>
            <AddIcon />
          </IconButton>
        </Stack>

        <Typography variant="h6">${subtotal} </Typography>

        <IconButton color="primary" onClick={handleDeleteItem}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
