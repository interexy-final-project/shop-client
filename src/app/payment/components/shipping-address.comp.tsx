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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { ShippingAddressDto } from "../types/address-dto.type";
const ShippingBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grayMain?.main,
  borderRadius: "0,75rem",
  padding: "2.8rem 1.75rem",
}));

interface ShippingAddressProps {
  isUseExisting: boolean;
  setIsUseExisting: (arg: boolean) => void;
  shippingAddress: ShippingAddressDto | null;
}

export const ShippingAddress: React.FC<ShippingAddressProps> = ({
  isUseExisting,
  setIsUseExisting,
  shippingAddress,
}: ShippingAddressProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleRadioChange = (event: any) => {
    setIsUseExisting(event.target.value);
  };

  useEffect(() => {
    if (shippingAddress?.id !== null) {
      setIsDisabled(!isDisabled);
    }
  }, [shippingAddress, isUseExisting]);
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
          <RadioGroup
            onChange={handleRadioChange}
            value={isUseExisting}
            defaultValue={true}
          >
            <Stack spacing={4} divider={<Divider />}>
              <Stack>
                <FormControlLabel
                  disabled={isDisabled && shippingAddress == null}
                  value={true}
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
                  value={false}
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
