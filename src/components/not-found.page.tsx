import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import NotFoundImage from "../assets/imgs/not-found.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      minHeight="100vh"
    >
      <Stack alignItems="center">
        <img src={NotFoundImage} alt="not-found" />
        <Stack alignItems="center" p="2rem 0">
          <Typography variant="h1" p="0.5rem 0">
            {t("notFoundPage.oops")}
          </Typography>
          <Typography variant="p" p="0.5rem 0">
            {t("notFoundPage.unavalible")}
          </Typography>
        </Stack>
        <Button
          variant="shop-purple-filled"
          sx={{ margin: "1rem 0" }}
          onClick={() => navigate("/")}
        >
          {t("notFoundPage.back")}
        </Button>
      </Stack>
    </Box>
  );
};
