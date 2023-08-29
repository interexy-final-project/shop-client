import React from "react";
import { Box, Typography, TextField, Button, Link, Stack } from "@mui/material";
import LoginHeader from "../components/login-header";
import l from "../../lang/l";
import img from "../../assets/resetpassword.jpg";

const ResetPassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Stack component="main" height={"100vh"}>
      <LoginHeader />
      <Stack
        spacing={3}
        direction={"row"}
        overflow={"hidden"}
        justifyContent={"center"}
      >
        {/* TODO Change img for responsive */}
        <Box component={"img"} src={img} />
        <Box padding={3} alignSelf={"center"}>
          <Typography component="h1" variant="h4">
            {l("resetPassword.title")}
          </Typography>
          <Typography align="left">
            {l("resetPassword.descriptionOne")}
          </Typography>
          <Typography align="left">
            {l("resetPassword.descriptionTwo")}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            marginTop={1}
            gap={3}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={l("signin.email")}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Box marginBottom={3} marginTop={3}>
              <Button type="submit" fullWidth variant="contained">
                {l("signin.signin")}
              </Button>
            </Box>
            <Link href="#" variant="body2">
              <Typography>{l("resetPassword.login")}</Typography>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ResetPassword;
