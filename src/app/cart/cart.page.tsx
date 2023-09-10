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
import { CartItemDto } from "./types/cart-item-dto.type";
import { EmptyCart } from "./components/cart-empty.comp";
import { useTranslation } from "react-i18next";
import useDecodeToken from "../../utils/decode-token";

const SubtotalBox = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grayMain?.main,
  borderRadius: "0,75rem",
  padding: "2.8rem 1.75rem",
  display: "flex",
  alignItems: "flex-end",
}));

export const CartPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  const decodedToken = useDecodeToken();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    const loadCartItems = async () => {
      if (decodedToken)
        try {
          dispatch(getCartItems(decodedToken?.id));
        } catch (error) {
          console.error("An error occurred:", error);
        }
    };

    loadCartItems();
  }, [decodedToken?.id]);

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
                  {t("navigation.home")}
                </Link>
                <Typography variant="h6" color={"secondary.main"}>
                  {t("navigation.cart")}
                </Typography>
              </Breadcrumbs>
            </Box>

            <Stack>
              <Typography variant="label">{t("cart.fillTheFields")}</Typography>
              <Typography variant="label">
                {t("cart.alreadyRegistered")}
                <Link underline="hover">{t("cart.loginHere")}</Link>
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
                  {t("cart.productDetails")}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={16}>
                <Typography sx={{ color: "white.main" }}>
                  {t("cart.price")}
                </Typography>
                <Typography sx={{ color: "white.main" }}>
                  {t("cart.quantity")}
                </Typography>
                <Typography sx={{ color: "white.main" }}>
                  {t("cart.subtotal")}
                </Typography>
                <Typography sx={{ color: "white.main" }}>
                  {t("cart.delete")}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Box>
            {cartItems.map((cart: any) => (
              <CartItemBlock
                key={cart.product.id + cart.color + cart.size}
                id={cart.product.id}
                title={cart.product.name}
                imageUrl={cart.product.image}
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
                  <Typography> {t("payment.totalPrice")}</Typography>
                  <Typography> {calculateTotalPrice(cartItems)}</Typography>
                </Stack>
              </Stack>
              <Stack>
                <Button variant="shop-purple-filled" type="submit">
                  {t("cart.toCheckout")}
                </Button>
              </Stack>
            </SubtotalBox>
          </Box>
        </>
      )}
    </Box>
  );
};
