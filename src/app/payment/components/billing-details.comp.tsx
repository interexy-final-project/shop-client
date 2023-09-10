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

import { ShippingAddressDto } from "../../../types/address-dto.type";
import { useTranslation } from "react-i18next";
import { userSelector } from "../../user/store/user.selectors";

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
  const user = useSelector(userSelector);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  console.log(user, "ser");
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

  useEffect(() => {
    if (user.user) {
      setFirstName(user?.user?.firstName);
      setLastName(user?.user?.lastName);
      setPhone(user?.user?.phone);
    }
  }, [user.user]);

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
            label={t("payment.firstName")}
            name="first-name"
            value={firstName}
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
            label={t("payment.lastName")}
            name="last-name"
            value={lastName}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BillingTextField
            margin="normal"
            required
            disabled={true}
            fullWidth
            id="country"
            label={t("payment.country")}
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
            label={t("payment.street")}
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
            label={t("payment.city")}
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
            label={t("payment.postalCode")}
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
            label={t("payment.phone")}
            name="phone"
            value={phone}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
