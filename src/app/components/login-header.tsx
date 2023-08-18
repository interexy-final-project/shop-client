import React from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import Logo from '../../assets/Logo.png'
import LanguageSelect from "./languageSelect";
import l from "../../lang/l";

const LoginHeader = (): React.ReactElement => {
  return (
    <Box padding={1} component={Paper}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Box component="img" alt="logo" src={Logo} width={90} height={45} />
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <LanguageSelect/>
            <Button variant="contained">{l('signin.login')}</Button>
            <Button  variant="contained">{l('signin.signup')}</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginHeader
