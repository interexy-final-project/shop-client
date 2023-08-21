import { Box, Button, Typography } from "@mui/material";
import React from "react";
import EmptyCartImg from "../../../assets/imgs/empty-cart.png";

export const EmptyCart = () => {
  return (
    <Box>
      <img src={EmptyCartImg} />
      <Typography>Your cart is empty and sad :(</Typography>
      <Typography>Add something to make it happy!</Typography>
      <Button>Continue Shopping</Button>
    </Box>
  );
};
