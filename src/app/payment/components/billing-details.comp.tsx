import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const BillingDetails: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <Stack>
      <Typography>Billing Details</Typography>
      <Grid container spacing={4} justifyContent="center">
        <FormControl component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first-name"
            label="First Name"
            name="first-name"
            autoComplete="name"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Last Name"
            name="last-name"
            autoComplete="name"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="country"
            label="Country / Region"
            name="country"
            autoComplete="country-name"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="street"
            label="Street Address"
            name="street"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="city"
            label="City"
            name="city"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="postal-code"
            label="Postal Code"
            name="postal-code"
            autoComplete="country"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
          />

          <Button type="submit">Continue to delivery</Button>
        </FormControl>
      </Grid>
    </Stack>
  );
};
