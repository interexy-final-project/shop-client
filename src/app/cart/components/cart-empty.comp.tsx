import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import EmptyCartImg from "../../../assets/imgs/empty-cart.png";

export const EmptyCart = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Stack alignItems="center">
        <img src={EmptyCartImg} alt="empty-cart" />
        <Stack alignItems="center" p="2rem 0">
          <Typography variant="h3">Your cart is empty and sad :(</Typography>
          <Typography variant="p">Add something to make it happy!</Typography>
        </Stack>
        <Button variant="shop-purple-filled" sx={{ margin: "1rem 0" }}>
          Continue Shopping
        </Button>
      </Stack>
    </Box>
  );
};
