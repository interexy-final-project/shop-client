import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useAppDispatch } from "../../../store";
// import { addItem, minusItem, removeItem } from "../store/cart.slice";
import { CartItem } from "../types/cart.types";

import ItemImage from "../../../assets/imgs/item.png";
import { theme } from "../../../assets/themes";

type TCartItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  size: string;
  color: string;
  price: number;
  subtotal: number;

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
}) => {
  const dispatch = useAppDispatch();

  // const onCLickPlus = () => {
  //   dispatch(addItem({ id, color, size } as CartItem));
  // };

  // const onClickMinus = () => {
  //   dispatch(minusItem({ id, color, size } as CartItem));
  // };

  // const onCLickRemove = () => {
  //   if (window.confirm("Are you sure you want to delete this item?")) {
  //     dispatch(removeItem({ id, color, size } as CartItem));
  //   }
  // };

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
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6"> {count}</Typography>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Stack>

        <Typography variant="h6">${subtotal} </Typography>

        <IconButton color="primary">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
