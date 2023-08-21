import { Routes, Route } from "react-router-dom";
import SignIn from "./app/auth/sign-in-page";
import SignUp from "./app/auth/sign-up-page";
import ResetPassword from "./app/auth/reset-password";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} />
      <Route path={"/auth/sign-in"} element={<SignIn />} />
      <Route path={"/auth/sign-up"} element={<SignUp />} />
      <Route path={"/auth/reset-password"} element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoutes;
