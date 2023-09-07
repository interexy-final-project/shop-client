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

interface PaymentMethodProps {
  paymentMethod: PaymentMethods;
  setPaymentMethod: (arg: PaymentMethods) => void;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) => {
  const user = {
    id: "7a530b8e-2968-41ec-8b0f-8e83b6e453c8",
    firstName: "name",
    lastName: "family",
    phone: "212394852972",
  };

  const handleRadioChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };

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

  return (
    <Box>
      <Stack sx={{ padding: "2rem 0" }}>
        <Typography variant="h5" sx={{ padding: "0.125rem 0" }}>
          Payment Method
        </Typography>
        <Typography variant="p" sx={{ padding: "0.125rem 0" }}>
          All transactions are secure and encrypted.
        </Typography>
      </Stack>

      <PaymentBox>
        <FormControl>
          <RadioGroup
            defaultValue="Credit Card"
            name="controlled-radio-buttons-group"
            onChange={handleRadioChange}
            value={paymentMethod}
          >
            <Stack spacing={4} divider={<Divider />}>
              <Stack>
                <FormControlLabel
                  value="Card"
                  control={<Radio />}
                  label={<Typography variant="h6">Credit Card</Typography>}
                />
                <Typography>We accept all major credit cards.</Typography>

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

                {/* <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <BillingTextField
                      required
                      id="card-number"
                      label="Card number"
                      fullWidth
                      autoComplete="cc-number"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <BillingTextField
                      required
                      id="card-name"
                      label="Name of card"
                      fullWidth
                      autoComplete="cc-name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <BillingTextField
                      required
                      id="expDate"
                      label="Expiration date (MM/YY)"
                      fullWidth
                      autoComplete="cc-exp"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <BillingTextField
                      required
                      id="cvv"
                      label="Security Code"
                      helperText="Last three digits on signature strip"
                      fullWidth
                      autoComplete="cc-csc"
                      type="password"
                    />
                  </Grid>
                </Grid> */}
              </Stack>

              <Stack>
                <FormControlLabel
                  value="Cash"
                  control={<Radio />}
                  label={<Typography variant="h6">Cash on delivery</Typography>}
                />
                <Typography variant="p">
                  Pay with cash upon delivery.
                </Typography>
              </Stack>
            </Stack>
          </RadioGroup>
        </FormControl>
      </PaymentBox>
      <Button variant="shop-purple-filled" type="submit">
        Pay now
      </Button>
    </Box>
  );
};
