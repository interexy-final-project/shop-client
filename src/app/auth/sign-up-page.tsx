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
import img from "../../assets/signupimg.jpg";
import { useDispatch } from "react-redux";
import { signUp } from "./store/auth.actions";
import { useForm } from "react-hook-form";
import { RoutesEnum } from "../../routes.enum";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const body = {
    email: watch("email"),
    password: String(watch("password")),
    passwordConfirm: String(watch("confirmPassword")),
    firstName: watch("firstName"),
    lastName: watch("lastName"),
    phone: watch("phone"),
  };
  const onSubmit = () => {
    try {
      dispatch<any>(signUp(body));

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
            {t("signup.signup")}
          </Typography>
          <Box
            padding={3}
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            marginTop={1}
          >
            <Stack flexDirection={"row"} gap={3}>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t("signup.email")}
                  autoComplete="email"
                  autoFocus
                  {...register("email")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label={t("signup.password")}
                  type="password"
                  id="password"
                  {...register("password")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label={t("signup.passwordConfirmation")}
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
              </Box>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label={t("signup.firstName")}
                  type="name"
                  id="firstName"
                  {...register("firstName")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label={t("signup.lastName")}
                  type="name"
                  id="lastName"
                  {...register("lastName")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label={t("signup.phone")}
                  type="phone"
                  id="phone"
                  {...register("phone")}
                />
              </Box>
            </Stack>
            <Box marginBottom={3} marginTop={3}>
              <Button type="submit" fullWidth variant="contained">
                {t("signup.signup")}
              </Button>
            </Box>
            <Link href={RoutesEnum.SIGNIN} variant="body2">
              <Typography>{t("signup.gotaccount")}</Typography>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SignUp;
