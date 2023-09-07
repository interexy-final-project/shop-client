import React from "react";
import {
  Grid,
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
import img from "../../assets/signinimg.jpg";

const SignIn = () => {
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
            {l("signin.signin")}
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
              label={l("signin.email")}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={l("signin.password")}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box marginBottom={3} marginTop={3}>
              <Button type="submit" fullWidth variant="contained">
                {l("signin.signin")}
              </Button>
            </Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Link href="#" variant="body2">
                <Typography>{l("signin.forgot")}</Typography>
              </Link>
              <Link href="#" variant="body2">
                <Typography>{l("signin.noaccount")}</Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SignIn;
