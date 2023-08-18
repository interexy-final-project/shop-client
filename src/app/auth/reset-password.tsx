import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  Paper,
} from "@mui/material";
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
    <Stack component="main" sx={{ height: "100vh" }}>
      <LoginHeader />
      <Stack
        spacing={3}
        direction={"row"}
        sx={{ overflow: "hidden" }}
        justifyContent={"center"}
      >
        <Box component={"img"} src={img} />
        <Box padding={3} sx={{alignSelf: "center"}}>
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
            sx={{ mt: 1 }}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography>{l("signin.signin")}</Typography>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <Typography>{l("resetPassword.login")}</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ResetPassword;
