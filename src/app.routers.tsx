import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./app/auth/sign-in-page";
import SignUp from "./app/auth/sign-up-page";
import ResetPassword from "./app/auth/reset-password";
import UserProfile from "./app/user/user-profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} />
      <Route path={"/auth/sign-in"} element={<SignIn />} />
      <Route path={"/auth/sign-up"} element={<SignUp />} />
      <Route path={"/auth/reset-password"} element={<ResetPassword />} />
      <Route path={"/user/profile"} element={<UserProfile />} />
    </Routes>
  );
};

export default AppRoutes;
