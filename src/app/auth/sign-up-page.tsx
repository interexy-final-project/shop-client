import React from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
} from "@mui/material";
import LoginHeader from "../components/login-header";
import l from "../../lang/l";
import img from "../../assets/signupimg.jpg";

const SignUp = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          {/* TODO Avatar styling */}
          <Avatar />
          <Typography component="h1" variant="h5">
            {l("signup.signup")}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            marginTop={1}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={l("signup.email")}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={l("signup.password")}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box marginBottom={3} marginTop={3}>
              <Button type="submit" fullWidth variant="contained">
                {l("signup.signup")}
              </Button>
            </Box>
            <Link href="#" variant="body2">
              <Typography>{l("signup.gotaccount")}</Typography>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SignUp;
