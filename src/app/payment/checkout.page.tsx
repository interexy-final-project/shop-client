import React from "react";
import { CheckoutNavigation } from "./components/checkout-navigation.comp";
import { BillingDetails } from "./components/billing-details.comp";
import { PaymentMethod } from "./components/payment-method.comp";
import { ShippingAddress } from "./components/shipping-address.comp";
import { Stack } from "@mui/material";

export const CheckoutPage: React.FC = () => {
  return (
    <Stack>
      <CheckoutNavigation />
      <BillingDetails />
      <ShippingAddress />
      <PaymentMethod />
    </Stack>
  );
};
