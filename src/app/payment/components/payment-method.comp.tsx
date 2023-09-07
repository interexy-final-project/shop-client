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
import { useTranslation } from "react-i18next";

export const PaymentMethod: React.FC = () => {
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

  const { t } = useTranslation();

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
            defaultValue="Credit Card"
            name="controlled-radio-buttons-group"
          >
            <Stack spacing={4} divider={<Divider />}>
              <Stack>
                <FormControlLabel
                  value="Credit Card"
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
                  value="Cash on delivery"
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
