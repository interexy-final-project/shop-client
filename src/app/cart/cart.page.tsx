import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getCartItems, getProducts } from "./store/cart.actions";
import { setProducts } from "./store/cart.slice";
import { CartItemDto } from "./types/cart-item-dto.type";
// import { selectCart } from "./store/cart.selectors";

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
          {cartItems.map((cart) => (
            <CartItemBlock
              key={cart.product.id + cart.color + cart.size}
              id={cart.product.id}
              title={cart.product.name}
              imageUrl={cart.product.images[0]}
              size={cart.size}
              color={cart.color}
              price={cart.product.price}
              shipping="free"
              subtotal={cart.product.price * cart.quantity}
              count={cart.quantity}
              cartItemId={cart.id}
            />
          ))}
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
              <Typography> Total: </Typography>
              <Typography>{calculateTotalPrice(cartItems)}$</Typography>
            </Stack>
            {/* <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Typography> Subtotal</Typography>
              <Typography> Subtotal</Typography>
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Typography> Subtotal</Typography>
              <Typography> Subtotal</Typography>
            </Stack> */}
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
