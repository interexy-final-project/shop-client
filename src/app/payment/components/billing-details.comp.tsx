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
import React, { SyntheticEvent, useEffect, useState } from "react";
import { theme } from "../../../assets/themes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

import { ShippingAddressDto } from "../types/address-dto.type";
import { useTranslation } from "react-i18next";

interface BillingDetailsProps {
  isUseExisting: boolean;
  shippingAddress: ShippingAddressDto | null;
  street: string;
  setStreet: (arg: string) => void;
  city: string;
  setCity: (arg: string) => void;
  postalCode: string;
  setPostalCode: (arg: string) => void;
}

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

export const BillingDetails: React.FC<BillingDetailsProps> = ({
  isUseExisting,
  shippingAddress,
  street,
  setStreet,
  city,
  setCity,
  postalCode,
  setPostalCode,
}: BillingDetailsProps) => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const user = {
    id: "7a530b8e-2968-41ec-8b0f-8e83b6e453c8",
    firstName: "name",
    lastName: "family",
    phone: "128491274",
  };

  const handleStreetInput = (event: any) => {
    setStreet(event.target.value);
  };

  const handleCityInput = (event: any) => {
    setCity(event.target.value);
  };

  const handlePostalInput = (event: any) => {
    setPostalCode(event.target.value);
  };

  useEffect(() => {
    if (isUseExisting && shippingAddress?.id !== null) {
      setStreet(shippingAddress?.address ?? "");
      setCity(shippingAddress?.city ?? "");
      setPostalCode(shippingAddress?.postalCode ?? "");
      setIsDisabled(!isDisabled);
    }
  }, [shippingAddress, isUseExisting]);

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
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            fullWidth
            disabled={true}
            id="first-name"
            label="First Name"
            name="first-name"
            value={user ? user.firstName : ""}
            // onChange={handleTextFieldChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            fullWidth
            disabled={true}
            id="last-name"
            label="Last Name"
            name="last-name"
            value={user ? user.lastName : ""}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            disabled={true}
            fullWidth
            id="country"
            label="Country / Region"
            name="country"
            value="USA"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            fullWidth
            id="street"
            disabled={isDisabled}
            label="Street Address"
            name="street"
            onChange={handleStreetInput}
            value={street}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            fullWidth
            disabled={isDisabled}
            id="city"
            label="City"
            name="city"
            onChange={handleCityInput}
            value={city}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            fullWidth
            disabled={isDisabled}
            id="postal-code"
            label="Postal Code"
            name="postal-code"
            onChange={handlePostalInput}
            value={postalCode}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            fullWidth
            disabled={true}
            id="phone"
            label="Phone"
            name="phone"
            value={user.phone}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
