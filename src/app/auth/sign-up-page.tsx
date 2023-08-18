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
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Stack component="main" sx={{ height: "100vh" }}>
      <LoginHeader />
      <Stack
        spacing={3}
        direction={"row"}
        sx={{ overflow: "hidden" }}
        justifyContent={"center"}
      >
        <Box component={"img"} src={img} />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            {l("signup.signup")}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography>{l("signup.signup")}</Typography>
            </Button>
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
