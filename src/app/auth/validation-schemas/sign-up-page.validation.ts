import * as yup from "yup";
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

export const SignUpScheme = yup.object().shape({
  email: yup.string().email(t("errors.email")).required(t("errors.required")),
  password: yup.string().required(t("errors.required")),
});
