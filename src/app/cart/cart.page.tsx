import React from "react";
import {
  Box,
  Breadcrumbs,
  Stack,
  Typography,
  Link,
  Button,
  Divider,
  styled,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CartItemBlock } from "./components/cart-item.comp";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "./store/cart.selectors";
import { EmptyCart } from "./components/cart-empty.comp";

export const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items
    .reduce((sum: number, item: any) => sum + item.count, 0)
    .toFixed(2);

  const SubtotalBox = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.grayMain?.main,
    borderRadius: "0,75rem",
    padding: "2.8rem 1.75rem",
    display: "flex",
    alignItems: "flex-end",
  }));

  return (
    <Box>
      {!totalPrice ? (
        <EmptyCart />
      ) : (
        <>
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
                Please fill in the fields below and click place order to
                complete your purchase!
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
                  <Typography sx={{ color: "white.main" }}>SUBTOTAL</Typography>
                  <Typography sx={{ color: "white.main" }}>DELETE</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Box>
              {items.map((item: any) => (
                <CartItemBlock key={item.id} {...item} />
              ))}
            </Box>
          </Box>

          <Box bgcolor="greyMain.main" sx={{ p: 6 }}>
            <SubtotalBox spacing={4} divider={<Divider />}>
              <Stack>
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography> Total price:</Typography>
                  <Typography> {totalPrice}</Typography>
                </Stack>
              </Stack>
              <Stack>
                <Button variant="shop-purple-filled" type="submit">
                  Proceed To Checkout
                </Button>
              </Stack>
            </SubtotalBox>
          </Box>
        </>
      )}
    </Box>
  );
};
