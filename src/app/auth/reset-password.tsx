import { Box, Typography, TextField, Button, Link, Stack } from "@mui/material";
import LoginHeader from "../components/login-header";
import img from "../../assets/resetpassword.jpg";
import { RoutesEnum } from "../../routes.enum";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "./store/auth.actions";
import { authSelector } from "./store/auth.selectors";
import { useTranslation } from "react-i18next";

const ResetPassword: React.FC = () => {
  const { t } = useTranslation();
  const { resetToken } = useSelector(authSelector);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const body = {
    email: watch("email"),
  };
  const onSubmit = () => {
    try {
      dispatch<any>(resetPassword(body));
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
        <Box padding={3} alignSelf={"center"}>
          <Typography component="h1" variant="h4">
            {t("resetPassword.title")}
          </Typography>
          <Typography align="left">
            {t("resetPassword.descriptionOne")}
          </Typography>
          <Typography align="left">
            {t("resetPassword.descriptionTwo")}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            marginTop={1}
            gap={3}
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
            {resetToken && (
              <Link href={`http://localhost:3000/auth/change-password/`}>
                Go to change
              </Link>
            )}
            <Box marginBottom={3} marginTop={3}>
              <Button type="submit" fullWidth variant="contained">
                {t("signin.signin")}
              </Button>
            </Box>
            <Link href={RoutesEnum.SIGNIN} variant="body2">
              <Typography>{t("resetPassword.login")}</Typography>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ResetPassword;
