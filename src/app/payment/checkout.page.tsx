import React from "react";
import { CheckoutNavigation } from "./components/checkout-navigation.comp";
import { BillingDetails } from "./components/billing-details.comp";
import { PaymentMethod } from "./components/payment-method.comp";
import { ShippingAddress } from "./components/shipping-address.comp";
import { Box, Stack } from "@mui/material";
import { OrderSummary } from "./components/order-summary.comp";
import Footer from "../components/footer";
import CommonHeader from "../components/common-header";

export const CheckoutPage: React.FC = () => {
  return (
    <>
      <CommonHeader />
      <Stack direction="column" m="3rem 5rem">
        <CheckoutNavigation />
        <Stack direction="row" spacing={6}>
          <Box display="flex" flexDirection="column">
            <BillingDetails />
            <ShippingAddress />
            <PaymentMethod />
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
