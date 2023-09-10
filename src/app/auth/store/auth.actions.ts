import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpDto } from "../types/sign-up-dto.type";
import { SignUpForm } from "../types/sign-up-form.type";
import { SingInForm } from "../types/sign-in-form.type";
import repository from "../../../repository";
import { ChangePasswordForm } from "../types/change-password-form.type";
import { ResetPasswordForm } from "../types/reset-password-form.type";

export const signUp = createAsyncThunk<SignUpDto, SignUpForm>(
  "POST/sign-up",
  async (SingUpForm, { rejectWithValue }) => {
    try {
      const response = await repository.post("auth/sign-up", SingUpForm);
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const signIn = createAsyncThunk<SignUpDto, SingInForm>(
  "POST/sign-in",
  async (SignInForm, { rejectWithValue }) => {
    try {
      const response = await repository.post("auth/sign-in", SignInForm);
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const changePassword = createAsyncThunk<
  SignUpDto,
  { body: ChangePasswordForm; resetToken: string }
>("POST/changePassword", async ({ body, resetToken }, { rejectWithValue }) => {
  try {
    const response = await repository.post(
      `auth/change-password/${resetToken}`,
      body,
    );
    localStorage.setItem("accessToken", response.data.access_token);
    localStorage.setItem("refreshToken", response.data.refresh_token);

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk<SignUpDto>(
  "POST/log-out",
  async (_, { rejectWithValue }) => {
    try {
      const response = await repository.post("auth/log-out");

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const resetPassword = createAsyncThunk<string, ResetPasswordForm>(
  "POST/resetPassword",
  async (ResetPasswordForm, { rejectWithValue }) => {
    try {
      const response = await repository.post(
        "auth/reset-password",
        ResetPasswordForm,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
