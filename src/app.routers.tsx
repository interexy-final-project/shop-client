import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./app/auth/sign-in-page";
import SignUp from "./app/auth/sign-up-page";
import ResetPassword from "./app/auth/reset-password";
import UserProfile from "./app/user/user-profile";
import Category from "./app/category/category.page";
import ProductDetails from "./app/product/product-details.page";
import CartPage from "./app/cart/cart.page";
// import { MainPage } from "./main/main-page";
import CheckoutPage from "./app/payment/checkout.page";
import { NotFound } from "./components/not-found.page";
import { RoutesEnum } from "./routes.enum";
import ChangePassword from "./app/auth/change-password";
import jwtDecode from "jwt-decode";
import { Token } from "./types/token.type";
import { FC, PropsWithChildren, Suspense } from "react";
import React from "react";

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

const Suspended: FC<PropsWithChildren & { element: any }> = ({
  element: Element,
}) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};

// ======= pages ======= //
const MainPage = React.lazy(() => import("./main/main-page"));
const SignInPage = React.lazy(() => import("./app/auth/sign-in-page"));
const SignUpPage = React.lazy(() => import("./app/auth/sign-up-page"));
const ResetPage = React.lazy(() => import("./app/auth/reset-password"));
const ChangePassPage = React.lazy(() => import("./app/auth/change-password"));
const CategoryPage = React.lazy(() => import("./app/category/category.page"));
const ProductPage = React.lazy(
  () => import("./app/product/product-details.page"),
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Suspended element={MainPage} />} />
      <Route
        path={RoutesEnum.SIGNIN}
        element={<Suspended element={SignInPage} />}
      />
      <Route
        path={RoutesEnum.SIGNUP}
        element={<Suspended element={SignUpPage} />}
      />
      <Route
        path={RoutesEnum.RESET}
        element={<Suspended element={ResetPage} />}
      />
      <Route
        path={RoutesEnum.CHANGEPASS}
        element={<Suspended element={ChangePassPage} />}
      />
      <Route
        path={RoutesEnum.USERPROFILE}
        element={PrivateRoute(<UserProfile />)}
      />
      <Route
        path={RoutesEnum.CATEGORY}
        element={<Suspended element={CategoryPage} />}
      />
      <Route
        path={RoutesEnum.PRODUCT}
        element={<Suspended element={ProductPage} />}
      />
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
