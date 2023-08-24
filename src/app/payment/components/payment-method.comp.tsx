import {
  Box,
  Button,
  Checkbox,
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
} from "@mui/material";
import React from "react";

import GooglePay from "../../../assets/imgs/google-pay.png";
import Visa from "../../../assets/imgs/visa.png";
import PayPal from "../../../assets/imgs/paypal.png";
import PayPass from "../../../assets/imgs/paypass.png";

export const PaymentMethod: React.FC = () => {
  return (
    <Box>
      <Stack>
        <Typography>Payment Method</Typography>
        <Typography>All transactions are secure and encrypted.</Typography>
      </Stack>

      <Box>
        <FormControl>
          <RadioGroup
            defaultValue="Credit Card"
            name="controlled-radio-buttons-group"
          >
            <Stack>
              <FormControlLabel
                value="Credit Card"
                control={<Radio />}
                label="Credit Card"
              />
              <Typography>We accept all major credit cards.</Typography>

              <ImageList cols={4}>
                <ImageListItem component="image">
                  <img src={GooglePay} />
                </ImageListItem>
                <ImageListItem component="image">
                  <img src={Visa} />
                </ImageListItem>
                <ImageListItem component="image">
                  <img src={PayPal} />
                </ImageListItem>
                <ImageListItem component="image">
                  <img src={PayPass} />
                </ImageListItem>
              </ImageList>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="card-number"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="card-name"
                    label="Name of card"
                    fullWidth
                    autoComplete="cc-name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="expDate"
                    label="Expiration date (MM/YY)"
                    fullWidth
                    autoComplete="cc-exp"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cvv"
                    label="Security Code"
                    helperText="Last three digits on signature strip"
                    fullWidth
                    autoComplete="cc-csc"
                    type="password"
                  />
                </Grid>
              </Grid>
            </Stack>

            <Stack>
              <FormControlLabel
                value="Cash on delivery"
                control={<Radio />}
                label="Cash on delivery"
              />
              <Typography>Pay with cash upon delivery.</Typography>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Box>
      <Button>Pay now</Button>
    </Box>
  );
};
