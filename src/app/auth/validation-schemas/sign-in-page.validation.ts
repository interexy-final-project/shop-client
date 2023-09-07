import { useTranslation } from "react-i18next";
import * as yup from "yup";

const { t } = useTranslation();

export const schema = yup.object().shape({
  email: yup.string().email("errors.email").required(t("errors.required")),
  password: yup.string().required(t("errors.required")),
});
