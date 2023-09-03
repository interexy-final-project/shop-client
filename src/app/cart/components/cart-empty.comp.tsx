import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import EmptyCartImg from "../../../assets/imgs/empty-cart.png";
import l from "../../../lang/l";
import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="center">
      <Stack alignItems="center">
        <img src={EmptyCartImg} alt="empty-cart" />
        <Stack alignItems="center" p="2rem 0">
          <Typography variant="h3">{l("emptyCart.sadCart")}</Typography>
          <Typography variant="p">{l("emptyCart.makeHappy")}</Typography>
        </Stack>
        <Button
          variant="shop-purple-filled"
          sx={{ margin: "1rem 0" }}
          onClick={() => navigate("/category")}
        >
          {l("emptyCart.continue")}
        </Button>
      </Stack>
    </Box>
  );
};
