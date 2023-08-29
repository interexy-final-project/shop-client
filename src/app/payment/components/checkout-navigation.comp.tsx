import React from "react";
import { Box, Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const CheckoutNavigation: React.FC = () => {
  return (
    <Box padding={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link underline="hover" variant="h6" color={"mainText.main"}>
          Home
        </Link>
        <Link underline="hover" variant="h6" color={"mainText.main"}>
          My Account
        </Link>
        <Typography variant="h6" color={"secondary.main"}>
          Check Out
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
