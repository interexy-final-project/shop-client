import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useAppDispatch } from "../../../store";
import { addItem } from "../store/cart.slice";
import { CartItem } from "../types/cart.types";

import ItemImage from "../../../assets/imgs/item.png";
import { theme } from "../../../themes";

type TCartItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  size: string;
  color: string;
  price: number;
  shipping: string;
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
  shipping,
  subtotal,
  count,
}) => {
  // const dispatch = useAppDispatch();

  const onCLickPlus = () => {
    count++;
    // dispatch(addItem({ id, color, size } as CartItem));
  };

  const onClickMinus = () => {};

  const onCLickRemove = () => {};

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
          src={ItemImage}
          alt="product-image"
          width="105px"
          height="120px"
        />

        <Stack>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Kind of production {}
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
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={onCLickPlus}>
            <AddIcon />
          </IconButton>
        </Stack>

        <Typography variant="h6">{shipping}</Typography>

        <Typography variant="h6">${subtotal} </Typography>

        <IconButton color="primary">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
