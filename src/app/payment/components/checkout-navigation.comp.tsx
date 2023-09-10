import React from "react";
import { Box, Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RoutesEnum } from "../../../routes.enum";

export const CheckoutNavigation: React.FC = () => {
  const { t } = useTranslation();

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
          onClick={() => navigate(RoutesEnum.MAIN)}
          underline="hover"
        >
          {t("navigation.home")}
        </Link>
        <Link
          underline="hover"
          variant="h6"
          color={"mainText.main"}
          onClick={() => navigate(RoutesEnum.USERPROFILE)}
        >
          {t("navigation.myAccount")}
        </Link>
        <Typography variant="h6" color={"secondary.main"}>
          {t("navigation.checkOut")}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
