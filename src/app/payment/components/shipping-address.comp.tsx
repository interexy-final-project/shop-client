import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const ShippingAddress: React.FC = () => {
  return (
    <Box>
      <Stack>
        <Typography>Shipping Address</Typography>
        <Typography>
          Select the address that matches your card or payment method.
        </Typography>
      </Stack>
      <Stack>
        <FormControl>
          <RadioGroup>
            <FormControlLabel
              value="Same as Billing address"
              control={<Radio />}
              label="Same as Billing address"
            />
            <FormControlLabel
              value="Use a different shipping address"
              control={<Radio />}
              label="Use a different shipping address"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
};
