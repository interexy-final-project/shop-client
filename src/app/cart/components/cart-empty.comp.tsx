import { Box, Button, Typography } from "@mui/material";
import EmptyCartImg from "../../../assets/imgs/empty-cart.png";
import l from "../../../lang/l";

export const EmptyCart = () => {
  return (
    <Box>
      <img src={EmptyCartImg} />
      <Typography>{l("emptyCart.sadCart")}</Typography>
      <Typography>{l("emptyCart.makeHappy")}</Typography>
      <Button>{l("emptyCart.continue")}</Button>
    </Box>
  );
};
