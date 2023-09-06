import { SignUpForm } from "./sign-up-form.type";

export type ChangePasswordForm = Omit<SignUpForm, "email">;
