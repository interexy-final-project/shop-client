import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getCartItems, getProducts } from "./store/cart.actions";
import { setProducts } from "./store/cart.slice";
import { CartItemDto } from "./types/cart-item-dto.type";
import { EmptyCart } from "./components/cart-empty.comp";
// import { selectCart } from "./store/cart.selectors";

const SubtotalBox = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grayMain?.main,
  borderRadius: "0,75rem",
  padding: "2.8rem 1.75rem",
  display: "flex",
  alignItems: "flex-end",
}));

export const CartPage: React.FC = () => {
  const userId = "7a530b8e-2968-41ec-8b0f-8e83b6e453c8";
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  console.log(cartItems);
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        dispatch(getCartItems(userId));
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    loadCartItems();
  }, []);

  function calculateTotalPrice(cartItems: CartItemDto[]) {
    return cartItems.reduce((accumulator: number, cartItem) => {
      return accumulator + cartItem.product.price * cartItem.quantity;
    }, 0);
  }

  return (
    <Box>
      {cartItems.length === 0 ? (
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

          <Stack
            direction="row"
            sx={{
              bgcolor: "secondary.main",
              p: 5,
            }}
          >
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
              width="100%"
            >
              <Stack>
                <Typography sx={{ color: "white.main" }}>
                  PRODUCT DETAILS
                </Typography>
              </Stack>

              <Stack direction="row" spacing={16}>
                <Typography sx={{ color: "white.main" }}>PRICE</Typography>
                <Typography sx={{ color: "white.main" }}>QUANTITY</Typography>
                <Typography sx={{ color: "white.main" }}>SUBTOTAL</Typography>
                <Typography sx={{ color: "white.main" }}>DELETE</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Box>
            {cartItems.map((cart) => (
              <CartItemBlock
                key={cart.product.id + cart.color + cart.size}
                id={cart.product.id}
                title={cart.product.name}
                imageUrl={cart.product.images[0]}
                size={cart.size}
                color={cart.color}
                price={cart.product.price}
                subtotal={cart.product.price * cart.quantity}
                count={cart.quantity}
                cartItemId={cart.id}
              />
            ))}
          </Box>

          <Box bgcolor="greyMain.main" sx={{ p: 6 }}>
            <SubtotalBox spacing={4} divider={<Divider />}>
              <Stack>
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography> Total price:</Typography>
                  <Typography> {calculateTotalPrice(cartItems)}</Typography>
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
