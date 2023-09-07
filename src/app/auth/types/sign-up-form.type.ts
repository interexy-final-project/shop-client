import { SingInForm } from "./sign-in-form.type";

export interface SignUpForm extends SingInForm {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
}
