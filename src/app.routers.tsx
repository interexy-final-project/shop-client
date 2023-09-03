import { Routes, Route } from "react-router-dom";
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} />
      <Route path={"/auth/sign-in"} element={<SignIn />} />
      <Route path={"/auth/sign-up"} element={<SignUp />} />
      <Route path={"/auth/reset-password"} element={<ResetPassword />} />
      <Route path={"/user/profile"} element={<UserProfile />} />
      <Route path={"/category"} element={<Category />} />
      <Route path={"/product-details"} element={<ProductDetails />} />
      <Route path={"/cart-page"} element={<CartPage />} />
      <Route path={"/checkout"} element={<CheckoutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
