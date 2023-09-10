import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  ImageList,
  ImageListItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

import GooglePay from "../../../assets/imgs/google-pay.svg";
import Visa from "../../../assets/imgs/visa.svg";
import PayPass from "../../../assets/imgs/paypass.svg";
import PayPal from "../../../assets/imgs/paypal.svg";
import { theme } from "../../../assets/themes";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../cart/store/cart.selectors";
import { AppDispatch } from "../../../store";
import { createOrder } from "../store/checkout.actions";
import { PaymentMethods } from "../../../enums/payment-methods.enum";
import { resetCartItems } from "../../cart/store/cart.slice";
import { useTranslation } from "react-i18next";

const BillingTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.grayMain?.main,
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.black?.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.black?.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primaryButtonHoverAndFocused?.main,
    },
  },
  "& label.Mui-focused": {
    color: theme.palette.black?.main,
  },
}));

const PaymentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grayMain?.main,
  borderRadius: "0,75rem",
  padding: "2.8rem 1.75rem",
  marginBottom: "1.5rem",
}));

interface PaymentMethodProps {
  paymentMethod: PaymentMethods;
  setPaymentMethod: (arg: PaymentMethods) => void;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) => {
  const { t } = useTranslation();

  const handleRadioChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Box>
      <Stack sx={{ padding: "2rem 0" }}>
        <Typography variant="h5" sx={{ padding: "0.125rem 0" }}>
          {" "}
          {t("payment.paymentMethod")}
        </Typography>
        <Typography variant="p" sx={{ padding: "0.125rem 0" }}>
          {t("payment.secureTransactions")}
        </Typography>
      </Stack>

      <PaymentBox>
        <FormControl>
          <RadioGroup
            defaultValue="card"
            name="controlled-radio-buttons-group"
            onChange={handleRadioChange}
            value={paymentMethod}
          >
            <Stack spacing={4} divider={<Divider />}>
              <Stack>
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label={
                    <Typography variant="h6">
                      {t("payment.creditCard")}
                    </Typography>
                  }
                />
                <Typography>{t("payment.acceptedCards")}</Typography>

                <ImageList cols={4} sx={{ width: 500 }}>
                  <ImageListItem>
                    <img src={GooglePay} loading="lazy" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={Visa} loading="lazy" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={PayPal} loading="lazy" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={PayPass} loading="lazy" />
                  </ImageListItem>
                </ImageList>
              </Stack>

              <Stack>
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label={
                    <Typography variant="h6">
                      {t("payment.cashOnDelivery")}
                    </Typography>
                  }
                />
                <Typography variant="p">
                  {t("payment.cashUponDelivery")}
                </Typography>
              </Stack>
            </Stack>
          </RadioGroup>
        </FormControl>
      </PaymentBox>
      <Button variant="shop-purple-filled" type="submit">
        {t("payment.payNow")}
      </Button>
    </Box>
  );
};
