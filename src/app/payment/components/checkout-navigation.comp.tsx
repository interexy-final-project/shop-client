import React from "react";
import { Box, Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink, useNavigate } from "react-router-dom";
import l from "../../../lang/l";

export const CheckoutNavigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box padding={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          color={"mainText.main"}
          variant="h6"
          onClick={() => navigate("/")}
          underline="hover"
        >
          {l("navigation.home")}
        </Link>
        <Link
          underline="hover"
          variant="h6"
          color={"mainText.main"}
          onClick={() => navigate("/user/profile")}
        >
          {l("navigation.myAccount")}
        </Link>
        <Typography variant="h6" color={"secondary.main"}>
          {l("navigation.checkOut")}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
