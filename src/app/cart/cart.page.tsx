import React from "react";
import {
  Box,
  Breadcrumbs,
  Stack,
  Typography,
  Link,
  Button,
  Divider,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CartItemBlock } from "./components/cart-item.comp";
import { useSelector } from "react-redux";
// import { selectCart } from "./store/cart.selectors";

export const CartPage: React.FC = () => {
  // const { totalPrice, items } = useSelector(selectCart);
  return (
    <Box>
      <Stack spacing={5} sx={{ p: 6 }}>
        <Box>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" variant="h6" color={"mainText.main"}>
              Home
            </Link>
            <Typography variant="h6" color={"secondary.main"}>
              Add To Cart
            </Typography>
          </Breadcrumbs>
        </Box>

        <Stack>
          <Typography variant="label">
            Please fill in the fields below and click place order to complete
            your purchase!
          </Typography>
          <Typography variant="label">
            Already registered?
            <Link underline="hover">Please login here</Link>
          </Typography>
        </Stack>
      </Stack>

      <Box>
        <Stack
          direction="row"
          sx={{
            bgcolor: "secondary.main",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 5,
          }}
        >
          <Stack direction="row" spacing={50}>
            <Typography sx={{ color: "white.main" }}>
              PRODUCT DETAILS
            </Typography>
            <Stack direction="row" spacing={28}>
              <Typography sx={{ color: "white.main" }}>PRICE</Typography>
              <Typography sx={{ color: "white.main" }}>QUANTITY</Typography>
              <Typography sx={{ color: "white.main" }}>SHIPPING</Typography>
              <Typography sx={{ color: "white.main" }}>SUBTOTAL</Typography>
              <Typography sx={{ color: "white.main" }}>DELETE</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Box>
          <CartItemBlock
            id=""
            title=""
            imageUrl=""
            size={"s"}
            color=""
            price={7}
            shipping="free"
            subtotal={5}
            count={5}
          />

          <CartItemBlock
            id=""
            title=""
            imageUrl=""
            size={"s"}
            color=""
            price={7}
            shipping="free"
            subtotal={5}
            count={5}
          />
        </Box>
      </Box>

      <Box bgcolor="greyMain.main" sx={{ p: 6 }}>
        <Stack
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
          // divider={
          //   <Box
          //     component="hr"
          //     sx={{
          //       border: (theme) => `5px solid ${theme.palette.primary?.main}`,
          //     }}
          //   />
          // }
        >
          <Stack>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Typography> Subtotal</Typography>
              <Typography> Subtotal</Typography>
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Typography> Subtotal</Typography>
              <Typography> Subtotal</Typography>
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Typography> Subtotal</Typography>
              <Typography> Subtotal</Typography>
            </Stack>
          </Stack>
          <Divider variant="middle" />
          <Box>
            <Button>Proceed To Checkout</Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
