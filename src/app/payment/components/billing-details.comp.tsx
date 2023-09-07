import {
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes";
import { useTranslation } from "react-i18next";

export const BillingDetails: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const BillingTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.grayMain?.main,
      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.grayMain?.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.grayMain?.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primaryButtonHoverAndFocused?.main,
      },
    },
    "& label.Mui-focused": {
      color: theme.palette.black?.main,
    },
  }));

  const verticalLineStyle = {
    position: "relative",
    paddingLeft: 3,
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: 6,
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      borderRadius: 10,
    },
  };

  return (
    <Box>
      <Stack sx={{ padding: "2rem 0" }}>
        <Typography variant="h4" p="0.25rem 0" sx={verticalLineStyle}>
          {t("navigation.checkOut")}
        </Typography>
        <Typography variant="h6" p="1.25rem 0">
          {t("payment.billingDetails")}
        </Typography>
      </Stack>
      <FormControl component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <BillingTextField
              margin="normal"
              required
              fullWidth
              id="first-name"
              label={t("payment.firstName")}
              name="first-name"
              autoComplete="name"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <BillingTextField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label={t("payment.lastName")}
              name="last-name"
              autoComplete="name"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <BillingTextField
              margin="normal"
              required
              fullWidth
              id="country"
              label={t("payment.country")}
              name="country"
              autoComplete="country-name"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <BillingTextField
              margin="normal"
              required
              fullWidth
              id="street"
              label={t("payment.street")}
              name="street"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <BillingTextField
              margin="normal"
              required
              fullWidth
              id="city"
              label={t("payment.city")}
              name="city"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <BillingTextField
              margin="normal"
              required
              fullWidth
              id="postal-code"
              label={t("payment.postalCode")}
              name="postal-code"
              autoComplete="country"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <BillingTextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label={t("payment.phone")}
              name="phone"
            />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
