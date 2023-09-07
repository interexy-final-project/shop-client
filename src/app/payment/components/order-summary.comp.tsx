import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getCartItems } from "../../cart/store/cart.actions";
import { CartItemDto } from "../../cart/types/cart-item-dto.type";
import { useTranslation } from "react-i18next";

export const OrderSummary = () => {
  const userId = "7706ed94-76f4-40ee-90de-751b6bcc2741";

  const orderItems = useSelector((state: RootState) => state.cart.cartItems);

  console.log(orderItems);

  const dispatch: AppDispatch = useDispatch();

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

  function calculateTotalPrice(orderItems: CartItemDto[]) {
    return orderItems.reduce((accumulator: number, orderItem) => {
      return accumulator + orderItem.product.price * orderItem.quantity;
    }, 0);
  }

  const { t } = useTranslation();

  return (
    <Stack minWidth="21.5rem">
      <Paper>
        <Typography variant="h5" p="1rem">
          {t("payment.orderSUmmary")}
        </Typography>
        <Box>
          {orderItems.map((orderItem: any) => (
            <Box display="flex" alignItems="center" key={orderItem.product.id}>
              <Stack p="1rem">
                <Divider light />

                <Stack
                  direction="row"
                  spacing={3}
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={orderItem.product.images[0]}
                    alt="product-image"
                    width="105px"
                    height="120px"
                  />

                  <Stack>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {orderItem.product.name} x {orderItem.quantity}
                    </Typography>
                    <Typography variant="label">
                      {t("filter.color")}:{orderItem.color}
                    </Typography>
                  </Stack>

                  <Stack>
                    <Typography variant="h6">
                      $ {orderItem.product.price * orderItem.quantity}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>
        <Typography variant="h6" p="1rem">
          {t("payment.totalPrice")}
          {calculateTotalPrice(orderItems)}
        </Typography>
      </Paper>
    </Stack>
  );
};
