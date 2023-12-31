import React from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import LanguageSelect from "./languageSelect";
import { useTranslation } from "react-i18next";

const LoginHeader = (): React.ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box padding={1} component={Paper}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box component="img" alt="logo" src={Logo} width={90} height={45} />
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <LanguageSelect />
          <Button variant="contained" onClick={() => navigate("/auth/sign-in")}>
            {t("signin.login")}
          </Button>
          <Button variant="contained" onClick={() => navigate("/auth/sign-up")}>
            {t("signin.signup")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginHeader;
