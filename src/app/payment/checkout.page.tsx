import React, { useEffect, useState } from "react";
import { CheckoutNavigation } from "./components/checkout-navigation.comp";
import { BillingDetails } from "./components/billing-details.comp";
import { PaymentMethod } from "./components/payment-method.comp";
import { ShippingAddress } from "./components/shipping-address.comp";
import { Alert, FormControl, Box, Stack } from "@mui/material";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getAddress } from "./store/checkout.actions";
import {
  addressSelector,
  orderErrorsSelector,
  pendingSelector,
} from "./store/checkout.selectors";
import { getCartItems } from "../cart/store/cart.actions";
import { PaymentMethods } from "../../enums/payment-methods.enum";
import { cartItemsSelector } from "../cart/store/cart.selectors";
import { resetCartItems } from "../cart/store/cart.slice";
import { CartItemDto } from "../cart/types/cart-item-dto.type";
import ActionAlert from "./components/action-alert.comp";
import { OrderSummary } from "./components/order-summary.comp";
import Footer from "../components/footer";
import CommonHeader from "../components/common-header";
import useDecodeToken from "../../utils/decode-token";
import { Token } from "../../types/token.type";
import { UserDto } from "../user/types/user-dto.type";
import { getUser } from "../user/store/user.actions";
import { userSelector } from "../user/store/user.selectors";

const CheckoutPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [isUseExisting, setIsUseExisting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>(
    PaymentMethods.CARD,
  );
  const [isAlertInvoked, setIsAlertInvoked] = useState<boolean>(false);
  const [alertMesssage, setAlertMessage] = useState<string>("");
  const [isWarning, setIsWarning] = useState<boolean>(false);

  const decodedToken = useDecodeToken();

  const shippingAddress = useSelector(addressSelector);
  const checkoutPending = useSelector(pendingSelector);
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const cartItems = useSelector(cartItemsSelector);
  const orderErrors = useSelector(orderErrorsSelector);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let invalidProduct = null;
    const address = { address: street, city, postalCode };
    if (cartItems.length === 0) {
      setAlertMessage("no items in the cart");
      setIsWarning(true);
      setIsAlertInvoked(true);
      return;
    }

    const isInvalid = (cartItem: CartItemDto) => {
      invalidProduct = cartItem.product.name;
      return cartItem.quantity > cartItem.product.amount;
    };

    if (cartItems.some(isInvalid)) {
      setAlertMessage(
        `The quantity of ${invalidProduct} is more than what is left in stock. Please return to your cart`,
      );
      setIsWarning(true);
      setIsAlertInvoked(true);
      return;
    }

    if (decodedToken) {
      await dispatch(
        createOrder({
          userId: decodedToken.id,
          total: cartItems.length,
          paymentMethod,
          address,
        }),
      );
    }
    setIsAlertInvoked(true);

    dispatch(resetCartItems());
  };

  useEffect(() => {
    if (isAlertInvoked && orderErrors) {
      setAlertMessage("An error occurred during the creation of the order");
    }
    if (isAlertInvoked && orderErrors === null && !isWarning) {
      setAlertMessage("order is created");
    }
  }, [isAlertInvoked, isWarning]);

  useEffect(() => {
    const loadShippingAddressAndCartItems = async () => {
      if (decodedToken?.id) {
        try {
          await dispatch(getAddress(decodedToken.id));
          await dispatch(getCartItems(decodedToken.id));
          console.log(cartItems, "token check");
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };
    loadShippingAddressAndCartItems();
  }, [decodedToken?.id]);

  useEffect(() => {
    checkoutPending.address === false && shippingAddress
      ? setIsUseExisting(true)
      : setIsUseExisting(false);
  }, [shippingAddress]);

  useEffect(() => {
    if (decodedToken?.id) {
      dispatch(getUser(decodedToken?.id));
    }
  }, [decodedToken?.id]);

  return (
    <>
      <CommonHeader />
      <Stack direction="column" m="3rem 5rem">
        <CheckoutNavigation />
        <Stack direction="row" spacing={6}>
          <Box display="flex" flexDirection="column">
            <FormControl component="form" onSubmit={handleSubmit}>
              <BillingDetails
                isUseExisting={isUseExisting}
                shippingAddress={shippingAddress}
                street={street}
                setStreet={setStreet}
                city={city}
                setCity={setCity}
                postalCode={postalCode}
                setPostalCode={setPostalCode}
              />
              <ShippingAddress
                isUseExisting={isUseExisting}
                setIsUseExisting={setIsUseExisting}
                shippingAddress={shippingAddress}
              />
              {isAlertInvoked && (
                <ActionAlert
                  isAlertInvoked={isAlertInvoked}
                  setIsAlertInvoked={setIsAlertInvoked}
                  orderErrors={orderErrors}
                  alertMessage={alertMesssage}
                  setAlertMessage={setAlertMessage}
                  isWarning={isWarning}
                  setIsWarning={setIsWarning}
                />
              )}
              <PaymentMethod
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </FormControl>
          </Box>

          <Box>
            <OrderSummary />
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default CheckoutPage;
