import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./app/auth/sign-in-page";
import SignUp from "./app/auth/sign-up-page";
import ResetPassword from "./app/auth/reset-password";
import UserProfile from "./app/user/user-profile";
import Category from "./app/category/category.page";
import ProductDetails from "./app/product/product-details.page";
import { CartPage } from "./app/cart/cart.page";
import { MainPage } from "./components/main-page";
import { CheckoutPage } from "./app/payment/checkout.page";
import { NotFound } from "./components/not-found.page";
import { RoutesEnum } from "./routes.enum";
import ChangePassword from "./app/auth/change-password";
import jwtDecode from "jwt-decode";
import { Token } from "./types/token.type";
import { Suspense } from "react";

// ======= private route ======= //
const PrivateRoute = (element: JSX.Element) => {
  const accessToken = localStorage.getItem("accessToken");
  const permissions: string[] = [];
  if (accessToken) {
    const decodedToken: Token = jwtDecode(accessToken);
    decodedToken.permissions.forEach((item) => permissions.push(item));
  }
  return permissions.includes("client") ? (
    <Suspense fallback={<div />}>{element}</Suspense>
  ) : (
    <Navigate to={RoutesEnum.SIGNIN} />
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={ <MainPage />} />
      <Route path={RoutesEnum.SIGNIN} element={<SignIn />} />
      <Route path={RoutesEnum.SIGNUP} element={<SignUp />} />
      <Route path={RoutesEnum.RESET} element={<ResetPassword />} />
      <Route path={RoutesEnum.CHANGEPASS} element={<ChangePassword />} />
      <Route
        path={RoutesEnum.USERPROFILE}
        element={PrivateRoute(<UserProfile />)}
      />
      <Route path={RoutesEnum.CATEGORY} element={<Category />} />
      <Route path={RoutesEnum.PRODUCT} element={<ProductDetails />} />
      <Route path={RoutesEnum.CART} element={PrivateRoute(<CartPage />)} />
      <Route
        path={RoutesEnum.CHECKOUT}
        element={PrivateRoute(<CheckoutPage />)}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
