import { SingInForm } from "./sign-in-form.type";

export interface SignUpForm extends SingInForm {
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  phone: string;
}
