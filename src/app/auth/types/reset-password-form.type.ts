import { SingInForm } from "./sign-in-form.type";

export type ResetPasswordForm = Omit<SingInForm, "password">;
