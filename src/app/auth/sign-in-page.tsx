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
import img from "../../assets/signinimg.jpg";
import { RoutesEnum } from "../../routes.enum";
import { useForm } from "react-hook-form";
import { logOut, signIn } from "./store/auth.actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(logOut);
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const body = {
    email: watch("email"),
    password: watch("password"),
  };
  const onSubmit = () => {
    try {
      dispatch<any>(signIn(body));
      navigate(RoutesEnum.MAIN);
    } catch {
      throw new Error();
    }
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
        <Box component={"img"} src={img} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <Avatar />
          <Typography component="h1" variant="h5">
            {t("signin.signin")}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            marginTop={1}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("signin.email")}
              autoFocus
              {...register("email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label={t("signin.password")}
              type="password"
              id="password"
              {...register("password")}
            />
            <Box marginBottom={3} marginTop={3}>
              <Button type="submit" fullWidth variant="contained">
                {t("signin.signin")}
              </Button>
            </Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Link href={RoutesEnum.RESET} variant="body2">
                <Typography>{t("signin.forgot")}</Typography>
              </Link>
              <Link href={RoutesEnum.SIGNUP} variant="body2">
                <Typography>{t("signin.noaccount")}</Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SignIn;
