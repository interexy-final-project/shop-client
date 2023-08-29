import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

export const ShippingAddress: React.FC = () => {
  const ShippingBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grayMain?.main,
    borderRadius: "0,75rem",
    padding: "2.8rem 1.75rem",
  }));
  return (
    <Box>
      <Stack sx={{ padding: "2rem 0" }}>
        <Typography variant="h5" sx={{ padding: "0.125rem 0" }}>
          Shipping Address
        </Typography>
        <Typography variant="p" sx={{ padding: "0.125rem 0" }}>
          Select the address that matches your card or payment method.
        </Typography>
      </Stack>

      <ShippingBox>
        <FormControl>
          <RadioGroup>
            <Stack spacing={4} divider={<Divider />}>
              <Stack>
                <FormControlLabel
                  value="Same as Billing address"
                  control={<Radio />}
                  label={
                    <Typography variant="h6">
                      Same as Billing address
                    </Typography>
                  }
                />
              </Stack>
              <Stack>
                <FormControlLabel
                  value="Use a different shipping address"
                  control={<Radio />}
                  label={
                    <Typography variant="h6">
                      Use a different shipping address
                    </Typography>
                  }
                />
              </Stack>
            </Stack>
          </RadioGroup>
        </FormControl>
      </ShippingBox>
    </Box>
  );
};
