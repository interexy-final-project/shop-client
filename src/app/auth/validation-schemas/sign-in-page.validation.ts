import * as yup from "yup";
import l from "../../../lang/l";

export const schema = yup.object().shape({
  email: yup.string().email(l("errors.email")).required(l("errors.required")),
  password: yup.string().required(l("errors.required")),
});
