import React from "react";
import { CheckoutNavigation } from "./components/breadcumbs.comp";
import { BillingDetails } from "./components/billing-details.comp";
import { PaymentMethod } from "./components/payment-method.comp";
import { ShippingAddress } from "./components/shipping-address.comp";

export const CheckoutPage: React.FC = () => {
  return (
    <>
      <CheckoutNavigation />
      <BillingDetails />
      <ShippingAddress />
      <PaymentMethod />
    </>
  );
};
