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
import { useTranslation } from "react-i18next";

export const ShippingAddress: React.FC = () => {
  const { t } = useTranslation();

  const ShippingBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grayMain?.main,
    borderRadius: "0,75rem",
    padding: "2.8rem 1.75rem",
  }));
  return (
    <Box>
      <Stack sx={{ padding: "2rem 0" }}>
        <Typography variant="h5" sx={{ padding: "0.125rem 0" }}>
          {t("payment.shippingAddress")}
        </Typography>
        <Typography variant="p" sx={{ padding: "0.125rem 0" }}>
          {t("payment.selectAddress")}
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
                      {t("payment.sameAddress")}
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
                      {t("payment.selectOtherAddress")}
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
